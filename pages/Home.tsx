import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { AUTHOR } from '../constants';
import { articleService } from '../services/articleService';
import { Article } from '../types';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentArticles = async () => {
      try {
        const data = await articleService.getArticles();
        setArticles(data.slice(0, 5)); // Show only 5 recent articles on home
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentArticles();
  }, []);

  const isNepali = i18n.language === 'ne';

  return (
    <div className="max-w-4xl mx-auto pb-24">
      
      <FadeIn>
        <div className="text-left space-y-4 mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {AUTHOR.name}
          </h1>
          
          <div className="text-left space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-4xl">
            <p className="whitespace-pre-line">
              {t('about.bio')}
            </p>
            
            <p className="text-slate-500 dark:text-slate-400">
              {t('about.whyIWrite.intro')}
            </p>

            <ol className="space-y-4 pt-4">
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">1.</span>
                <span>{t('about.whyIWrite.reason1')}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">2.</span>
                <span>{t('about.whyIWrite.reason2')}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">3.</span>
                <span>{t('about.whyIWrite.reason3')}</span>
              </li>
            </ol>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            {t('home.featuredTitle')}
          </h2>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="animate-spin text-slate-400" size={32} />
            </div>
          ) : (
            <ul className="space-y-8">
              {articles.map((article) => (
                <li key={article.id} className="group">
                  <Link to={`/articles/${article.id}`} className="block space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors"></span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4 transition-all leading-tight">
                        {isNepali && article.titleNe ? article.titleNe : article.title}
                      </h3>
                    </div>
                    <p className="pl-4 text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                      {isNepali && article.excerptNe ? article.excerptNe : article.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
              {articles.length === 0 && (
                <p className="text-slate-500 py-4 italic">{t('articles.noArticles')}</p>
              )}
            </ul>
          )}
        </section>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-800 text-left">
          <Link 
            to="/articles" 
            className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            {t('home.viewAll')}
          </Link>
        </div>
      </FadeIn>

    </div>
  );
};

export default Home;