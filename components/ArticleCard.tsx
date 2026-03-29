import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  variant?: 'standard' | 'featured' | 'minimal';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'standard' }) => {
  
  // Date formatting options
  const dateOptions: Intl.DateTimeFormatOptions = { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  };

  return (
    <Link to={`/articles/${article.id}`} className="group block w-full space-y-2">
      <div className="flex items-baseline gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors"></span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4 transition-all">
          {article.title}
        </h3>
      </div>
      <p className="pl-4 text-slate-500 dark:text-slate-400 text-base leading-relaxed">
        {article.excerpt}
      </p>
    </Link>
  );
};

export default ArticleCard;