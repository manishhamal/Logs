import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Loader2 } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import FadeIn from '../components/FadeIn';
import { Category, Article } from '../types';
import { articleService } from '../services/articleService';
import { useTranslation } from 'react-i18next';

const Articles: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || Category.All);
  const [searchQuery, setSearchQuery] = useState('');

  const isNepali = i18n.language === 'ne';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await articleService.getArticles();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Sync state with URL param if it changes externally
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory(Category.All);
    }
  }, [categoryParam]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = activeCategory === Category.All || article.category === activeCategory;
      
      const title = isNepali && article.titleNe ? article.titleNe : article.title;
      const excerpt = isNepali && article.excerptNe ? article.excerptNe : article.excerpt;
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = title.toLowerCase().includes(query) || 
                            excerpt.toLowerCase().includes(query);
      
      return matchesCategory && matchesSearch;
    });
  }, [articles, activeCategory, searchQuery, isNepali]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === Category.All) {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const getCategoryTranslationKey = (cat: string) => {
    switch (cat) {
      case Category.History: return 'category.history';
      case Category.Technology: return 'category.technology';
      case Category.Politics: return 'category.politics';
      default: return 'category.all';
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
                  {t(getCategoryTranslationKey(cat))}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-56">
              <input
                type="text"
                placeholder={isNepali ? "खोज्नुहोस्..." : "Search..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-1 pl-0 pr-6 text-sm focus:outline-none focus:border-slate-900 dark:focus:border-slate-100 placeholder:text-slate-300"
              />
              <Search size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </div>
      </FadeIn>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-slate-400" size={32} />
        </div>
      ) : filteredArticles.length > 0 ? (
        <div className="space-y-12">
          {filteredArticles.map((article, index) => (
            <FadeIn key={article.id} delay={index * 50}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-slate-500 font-sans text-sm">
          <p>{t('articles.noArticles')}</p>
          <button 
            onClick={() => {setSearchQuery(''); setActiveCategory(Category.All)}}
            className="mt-4 text-slate-900 dark:text-slate-100 hover:underline font-bold"
          >
            {isNepali ? "फिल्टरहरू हटाउनुहोस्" : "Clear filters"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Articles;