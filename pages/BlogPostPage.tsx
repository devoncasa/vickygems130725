
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, BACKGROUND_IMAGES } from '../constants';
import SectionDivider from '../components/SectionDivider';
import JsonLd from '../components/JsonLd';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/LanguageContext';

const GemstoneToolsArticleContent = () => {
    // This is now just a placeholder, as the real content will come from i18n
    return <p>Loading article content...</p>;
};


const BlogPostPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const { lang, t } = useLanguage();
    const post = BLOG_POSTS.find(p => p.id === postId);

    if (!post) {
        return (
            <div className="text-center py-20">
                <SEO 
                    titleKey="seo_blog_post_not_found_title" 
                    descriptionKey="seo_blog_post_not_found_desc"
                    keywordsKey="seo_blog_post_not_found_keywords"
                 />
                <h2 className="text-3xl font-semibold">{t('seo_blog_post_not_found_title')}</h2>
                <Link to={`/${lang}/blog`} className="mt-4 inline-block text-[var(--c-accent-primary)] hover:text-[var(--c-heading)]">{t('home_blog_cta')}</Link>
            </div>
        );
    }
    
    // Dynamic SEO values
    const seoTitle = `${post.title} | Vicky Amber & Gems`;
    const seoDesc = post.summary;
    const seoKeywords = post.title.split(' ').concat(post.category === 'Science' ? ['gemology', 'science'] : ['history', 'spiritual']).join(', ');

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
        },
        "headline": post.title,
        "image": post.featuredImage,
        "author": {
            "@type": "Person",
            "name": post.author,
             "url": window.location.origin
        },
        "publisher": {
            "@type": "Organization",
            "name": "Vicky Amber & Gems",
            "logo": {
                "@type": "ImageObject",
                "url": "https://i.postimg.cc/Qd8yW639/vkambergems-logo-small.png"
            }
        },
        "inLanguage": lang,
        "datePublished": new Date(post.date).toISOString(),
        "dateModified": new Date(post.date).toISOString(),
        "description": post.summary,
        "wordCount": "750",
        "keywords": seoKeywords
    };

    return (
        <div 
            className="page-container-with-bg py-16 md:py-24"
            style={{ backgroundImage: `url('${BACKGROUND_IMAGES[19]}')` }}
        >
            <SEO
                title={seoTitle}
                description={seoDesc}
                keywords={seoKeywords}
                imageUrl={post.featuredImage}
                type="article"
            />
            <JsonLd data={articleSchema} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <article className="max-w-4xl mx-auto">
                    <header className="text-center">
                        <Link to={`/${lang}/blog?filter=${post.category}`} className={`text-sm font-semibold uppercase tracking-wider ${post.category === 'Science' ? 'text-[var(--c-accent-secondary-hover)]' : 'text-[var(--c-accent-primary)]'}`}>
                           {post.category === 'Science' ? 'Guides & Science' : 'Stories & History'}
                        </Link>
                        <h1 className="text-4xl md:text-6xl mt-4 font-bold tracking-tight">{post.title}</h1>
                        <p className="mt-6 text-[var(--c-text-secondary)]">
                            By {post.author} on {post.date} &bull; {post.readingTime} min read
                        </p>
                    </header>

                    <div className="my-12">
                         <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden bg-[var(--c-surface-alt)] flex items-center justify-center">
                            <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover"/>
                        </div>
                    </div>

                    <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-[var(--c-text-primary)]/90">
                        <p className="lead">{post.summary}</p>
                        <SectionDivider/>
                        <p>This is placeholder content for a full article. The actual content would explore the topic in depth, offering insights, history, and scientific perspectives relevant to the post's title.</p>
                        <p>For a real article, this section might delve into the historical context, discussing how ancient cultures used the material, what it symbolized, and how its legacy continues today.</p>
                        <blockquote className="border-s-4 border-[var(--c-accent-primary)] ps-4 italic my-8">
                            "The journey of a thousand miles begins with a single step. The journey to inner peace begins with a single breath."
                        </blockquote>
                        <p>Another paragraph could focus on the scientific aspects, explaining the geological formation, chemical properties, and methods of identification, providing readers with a comprehensive understanding.</p>
                        <p>Finally, a concluding paragraph would summarize the key takeaways, connecting the historical, spiritual, and scientific threads to reinforce the value and meaning of the gemstone, encouraging readers to explore further.</p>
                    </div>

                </article>
            </div>
        </div>
    );
};

export default BlogPostPage;
