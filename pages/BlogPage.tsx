
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BLOG_POSTS, BACKGROUND_IMAGES } from '../constants';
import SEO from '../components/SEO';

type FilterType = 'All' | 'Soul' | 'Science';

const BlogPage: React.FC = () => {
  const location = useLocation();
  const [filter, setFilter] = useState<FilterType>('All');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get('filter');
    if (filterParam === 'Soul' || filterParam === 'Science') {
      setFilter(filterParam);
    } else {
        setFilter('All');
    }
  }, [location.search]);

  const filteredArticles = BLOG_POSTS.filter(article => {
    if (filter === 'All') return true;
    return article.category === filter;
  });

  const FilterButton: React.FC<{ type: FilterType; label: string }> = ({ type, label }) => (
    <button
      onClick={() => setFilter(type)}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
        filter === type
          ? 'bg-[var(--c-heading)] text-white'
          : 'bg-[var(--c-surface)] text-[var(--c-text-secondary)] hover:bg-[var(--c-surface-alt)]'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div 
      className="page-container-with-bg py-16 md:py-24"
      style={{ backgroundImage: `url('${BACKGROUND_IMAGES[18]}')` }}
    >
      <SEO 
        titleKey="seo_blog_title" 
        descriptionKey="seo_blog_desc"
        keywordsKey="seo_blog_keywords"
        imageUrl="https://i.postimg.cc/j5m97dYs/Vicky-Amber-Gems-background-0027.jpg"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight">Our Blog</h1>
          <p className="mt-4 text-xl text-[var(--c-text-secondary)]">A journal of history, science, and timeless wisdom.</p>
          <div className="mt-8 flex justify-center items-center gap-2">
            <FilterButton type="All" label="All Articles" />
            <FilterButton type="Soul" label="Stories & History" />
            <FilterButton type="Science" label="Guides & Science" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="group block bg-[var(--c-surface)] rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[var(--c-border)]"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-[var(--c-surface-alt)] flex items-center justify-center">
                <img src={post.featuredImage} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                 <span className={`text-sm font-bold uppercase tracking-widest ${post.category === 'Science' ? 'text-[var(--c-accent-secondary-hover)]' : 'text-[var(--c-accent-primary)]'}`}>{post.category}</span>
                <h2 className="text-2xl mt-2 leading-tight group-hover:text-[var(--c-accent-primary)] transition-colors">{post.title}</h2>
                <p className="mt-3 text-[var(--c-text-primary)] opacity-90 text-base line-clamp-3">{post.summary}</p>
                <p className="mt-4 font-semibold text-sm text-[var(--c-accent-primary)] group-hover:text-[var(--c-heading)]">
                  Read More &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
