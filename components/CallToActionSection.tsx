
import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImageUrl: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImageUrl,
}) => {
  return (
    <div className="relative bg-[var(--c-heading)]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: `url('${backgroundImageUrl}')`}}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-heading)] via-[var(--c-heading)]/70 to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold font-serif" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
          {subtitle}
        </p>
        <div className="mt-8">
          <Link to={buttonLink} className="inline-block btn-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;