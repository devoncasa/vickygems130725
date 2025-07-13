
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { CloseIcon, PaperAirplaneIcon, ChatBubbleIcon } from './IconComponents';

interface Message {
    role: 'user' | 'model';
    text: string;
}

export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const chatRef = useRef<Chat | null>(null);
    const chatBodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initialize the chat model
    useEffect(() => {
        if (!chatRef.current) {
            try {
                // IMPORTANT: This assumes process.env.API_KEY is available.
                // As per instructions, no UI should be generated for API key input.
                if (!process.env.API_KEY) {
                    console.error("API_KEY environment variable not set.");
                    setError("Chat service is currently unavailable. Administrator: API key is not configured.");
                    return;
                }
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                
                const systemInstruction = `You are 'Amber Assistant', a friendly and knowledgeable AI guide for 'Vicky Amber & Gems', a luxury brand specializing in authentic, high-quality Burmese Amber and other precious gems. 
                Your goal is to help users by answering their questions about our products (like amber beads, gemstones, amulets), the history of Burmese Amber, our policies (shipping, warranty, etc.), how to customize orders, and the different types and qualities of amber we offer.
                Maintain a professional, luxurious, and helpful tone. Keep your answers concise and easy to understand.
                If you are asked a question you cannot answer based on the context of a high-end gem store, politely state that you are specialized in gems and amber and suggest they contact support for other inquiries.
                You can refer to product types like 'Complete Set', materials like 'Amber', 'Ruby', 'Spinel', and colors like 'Mila Amber', 'Cherry Red Amber', etc. You can also talk about bead sizes, quantities (27, 54, 99, 108 beads), and certifications (GIA, GIT).
                Do not make up policies or product details. If asked for a price, explain that prices vary based on many factors like size, grade, and color, and direct them to the product pages or the 'Build Your Own' feature.`;
                
                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: systemInstruction,
                        thinkingConfig: { thinkingBudget: 0 } // Low latency for better chat experience
                    },
                    history: []
                });

                setMessages([{ role: 'model', text: 'Hello! I am your Amber Assistant. How can I help you discover the perfect piece today?' }]);

            } catch (e: any) {
                console.error("Failed to initialize Gemini AI:", e);
                setError("Chat service failed to initialize.");
            }
        }
    }, []);

    // Scroll to bottom of chat on new message
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatRef.current) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response: GenerateContentResponse = await chatRef.current.sendMessage({ message: userMessage.text });
            const modelMessage: Message = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (e: any) {
            console.error("Gemini API error:", e);
            const errorMessage = "I'm sorry, I'm having trouble connecting at the moment. Please try again later.";
            setError(errorMessage);
            setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    const ChatWindow = () => (
        <div className={`fixed bottom-24 right-4 sm:right-8 w-[calc(100%-2rem)] max-w-sm h-[60vh] max-h-[600px] bg-[var(--c-surface)] rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-out origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`} role="dialog" aria-modal="true" aria-labelledby="chat-heading">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--c-border)] bg-[var(--c-accent-primary)]/10 rounded-t-2xl">
                <h3 id="chat-heading" className="font-serif text-xl font-semibold text-[var(--c-heading)]">Amber Assistant</h3>
                <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-[var(--c-text-secondary)] hover:text-[var(--c-text-primary)] p-1 rounded-full hover:bg-[var(--c-heading)]/10">
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Body */}
            <div ref={chatBodyRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-cover bg-center flex-shrink-0" style={{backgroundImage: "url('https://i.postimg.cc/Qd8yW639/vkambergems-logo-small.png')"}} aria-label="Amber Assistant avatar"></div>}
                        <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user' ? 'bg-[var(--c-accent-primary)] text-white rounded-br-none' : 'bg-[var(--c-accent-secondary)]/20 text-[var(--c-text-primary)] rounded-bl-none'}`}>
                            {/* Using dangerouslySetInnerHTML to render line breaks. For full markdown support, a library like 'marked' is safer. */}
                            <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                         <div className="w-8 h-8 rounded-full bg-cover bg-center flex-shrink-0" style={{backgroundImage: "url('https://i.postimg.cc/Qd8yW639/vkambergems-logo-small.png')"}} aria-label="Amber Assistant avatar"></div>
                        <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-[var(--c-accent-secondary)]/20 text-[var(--c-text-primary)] rounded-bl-none">
                            <div className="flex items-center gap-1 p-2">
                                <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse [animation-delay:0s]"></span>
                                <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse [animation-delay:0.15s]"></span>
                                <span className="w-2 h-2 bg-stone-400 rounded-full animate-pulse [animation-delay:0.3s]"></span>
                            </div>
                        </div>
                    </div>
                )}
                 {error && !isLoading && (
                    <div role="alert" className="text-center text-xs text-red-500 bg-red-100 p-2 rounded-md border border-red-200">{error}</div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[var(--c-border)]">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a question..."
                        disabled={isLoading || !!error}
                        className="w-full px-4 py-2 bg-[var(--c-surface-alt)] border border-[var(--c-border)] rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--c-accent-primary)] focus:border-[var(--c-accent-primary)] transition-shadow disabled:opacity-50"
                        aria-label="Your message"
                    />
                    <button type="submit" disabled={isLoading || !input.trim() || !!error} className="p-3 rounded-full btn-primary text-white disabled:bg-stone-400 disabled:shadow-none disabled:cursor-not-allowed transition-all" aria-label="Send message">
                        <PaperAirplaneIcon className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );

    return (
        <>
            <ChatWindow />
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 sm:right-8 w-16 h-16 rounded-full btn-primary text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-100 transition-transform duration-200 z-50"
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatBubbleIcon className="w-8 h-8" />}
            </button>
        </>
    );
};