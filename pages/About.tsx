import React from 'react';
import { AUTHOR } from '../constants';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-24">
      {/* Intro */}
      <FadeIn>
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start text-left max-w-4xl justify-between">
          <div className="space-y-4 w-full max-w-lg text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              About {AUTHOR.name}
            </h1>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {AUTHOR.bio}
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
                className="w-full h-full object-cover scale-150 origin-bottom grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </FadeIn>

      {/* Manifesto */}
      <FadeIn delay={200}>
        <div className="max-w-4xl space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            Why Logs?
          </h2>
          <div className="space-y-6 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              In a world of hot takes and algorithmic rage bait, I wanted to create a space for slow thinking. 'Logs' denotes record, research, and clarity. That is the standard I strive for.
            </p>
            <p>
              My writing focuses on three pillars:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span><span className="font-bold text-slate-900 dark:text-white">History:</span> Because the past is the only reliable data set we have.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span><span className="font-bold text-slate-900 dark:text-white">Technology:</span> Because it is the lever moving the world today.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-slate-900 dark:text-white">•</span>
                <span><span className="font-bold text-slate-900 dark:text-white">Politics:</span> Because it is the mechanism by which we decide how to use that lever.</span>
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="max-w-4xl space-y-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            Contact
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I am always open to interesting conversations, consulting opportunities, or debate. The best way to reach me is via email:
          </p>
          <div className="flex items-center gap-4">
            <Mail size={20} className="text-slate-400" />
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400 underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4">manish@logs.dev</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;