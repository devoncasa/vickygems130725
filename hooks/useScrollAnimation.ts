import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (options?: IntersectionObserverInit) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing after it becomes visible to prevent re-triggering
                    if (elementRef.current) {
                      observer.unobserve(elementRef.current);
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
                ...options,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return { ref: elementRef, isVisible };
};

export default useScrollAnimation;