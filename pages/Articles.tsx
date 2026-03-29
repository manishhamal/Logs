import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import FadeIn from '../components/FadeIn';
import { ARTICLES } from '../constants';
import { Category } from '../types';

const Articles: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || Category.All);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state with URL param if it changes externally
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory(Category.All);
    }
  }, [categoryParam]);

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === Category.All || article.category === activeCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === Category.All) {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-24">
      <FadeIn>
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {[Category.All, Category.History, Category.Technology, Category.Politics].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`font-bold uppercase tracking-widest transition-colors ${
                    activeCategory === cat
                      ? 'text-slate-900 dark:text-white underline underline-offset-8 decoration-2'
                      : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-56">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-1 pl-0 pr-6 text-sm focus:outline-none focus:border-slate-900 dark:focus:border-slate-100 placeholder:text-slate-300"
              />
              <Search size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </div>
      </FadeIn>

      {filteredArticles.length > 0 ? (
        <div className="space-y-12">
          {filteredArticles.map((article, index) => (
            <FadeIn key={article.id} delay={index * 50}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-slate-500 font-mono text-sm">
          <p>No entries found.</p>
          <button 
            onClick={() => {setSearchQuery(''); setActiveCategory(Category.All)}}
            className="mt-4 text-slate-900 dark:text-slate-100 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles;