import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import FadeIn from '../components/FadeIn';
import { ARTICLES, AUTHOR } from '../constants';

const Home: React.FC = () => {
  const featuredArticle = ARTICLES[0];
  const recentArticles = ARTICLES.slice(1);

  return (
    <div className="max-w-4xl mx-auto pb-24">
      
      <FadeIn>
        <div className="text-left space-y-4 mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {AUTHOR.name}
          </h1>
          
          <div className="text-left space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-4xl">
            <p>
              {AUTHOR.bio}
            </p>
            
            <p className="text-slate-500 dark:text-slate-400">
              I'm very fortunate to share my thoughts with amazing people. To maximize the value of your time here, I've structured my recent insights and projects below:
            </p>

            <ol className="space-y-4 pt-4">
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">1.</span>
                <span><span className="font-bold text-slate-900 dark:text-white">Deep Dives:</span> Explore long-form articles on technology, philosophy, and the future.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">2.</span>
                <span><span className="font-bold text-slate-900 dark:text-white">Quick Insights:</span> Shorter reflections on daily observations and learning.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">3.</span>
                <span><span className="font-bold text-slate-900 dark:text-white">Open Dialogue:</span> I value feedback and discussion on all topics covered here.</span>
              </li>
            </ol>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            Recent Writings (strongly preferred)
          </h2>
          
          <ul className="space-y-8">
            {ARTICLES.map((article) => (
              <li key={article.id} className="group">
                <Link to={`/articles/${article.id}`} className="block space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors"></span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4 transition-all">
                      {article.title}
                    </h3>
                  </div>
                  <p className="pl-4 text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-800 text-left">
          <Link 
            to="/articles" 
            className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            View Full Archive
          </Link>
        </div>
      </FadeIn>

    </div>
  );
};

export default Home;