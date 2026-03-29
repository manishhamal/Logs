import React from 'react';
import { AUTHOR } from '../constants';
import { Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isNepali = i18n.language === 'ne';

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-24">
      {/* Intro */}
      <FadeIn>
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start text-left max-w-4xl justify-between">
          <div className="space-y-4 w-full max-w-lg text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t('about.greeting', { name: AUTHOR.name })}
            </h1>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 whitespace-pre-line">
              {t('about.bio')}
            </p>
            <div className="flex gap-6">
                 <a href={AUTHOR.socials.twitter} className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Twitter</a>
                 <a href={AUTHOR.socials.github} className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
                 <a href={AUTHOR.socials.linkedin} className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
            <div className="w-40 h-40 md:w-44 md:h-44 aspect-square flex-shrink-0 rounded-lg overflow-hidden">
              <img 
                src={AUTHOR.avatar} 
                alt={AUTHOR.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-125"
              />
            </div>
          </div>
        </FadeIn>

      {/* Manifesto / History & Truth */}
      <FadeIn delay={200}>
        <div className="max-w-4xl space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            {t('about.historyAndTruth.title')}
          </h2>
          <div className="space-y-6 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>{t('about.historyAndTruth.p1')}</p>
            <p>{t('about.historyAndTruth.p2')}</p>
            <p>{t('about.historyAndTruth.p3')}</p>
          </div>
        </div>
      </FadeIn>

      {/* Why We Write */}
      <FadeIn delay={300}>
        <div className="max-w-4xl space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            {t('about.whyIWrite.title')}
          </h2>
          <div className="space-y-6 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            <p className="whitespace-pre-line">{t('about.whyIWrite.intro')}</p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>{t('about.whyIWrite.reason1')}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>{t('about.whyIWrite.reason2')}</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span>{t('about.whyIWrite.reason3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>

      {/* Contact */}
      <FadeIn delay={400}>
        <div className="max-w-4xl space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            {isNepali ? "सम्पर्क" : "Contact"}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {isNepali ? "म सधैं चाखलाग्दा कुराकानी वा बहसका लागि उपलब्ध छु। मलाई सम्पर्क गर्ने सबैभन्दा राम्रो तरिका इमेल हो:" : "I am always open to interesting conversations, consulting opportunities, or debate. The best way to reach me is via email:"}
          </p>
          <div className="flex items-center gap-4">
            <Mail size={20} className="text-slate-400" />
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400 underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4 tracking-tight">manish@hamal.dev</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;