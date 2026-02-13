import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatTagName } from '@/data/successCasesTags';
import { ALL_SUCCESS_CASES, SuccessCase } from '@/data/successCases';
import { useLanguage } from '@/contexts/LanguageContext';

interface SuccessCasesSectionProps {
  title?: string;
  subtitle?: string;
  filterTags?: string[]; // Tags to filter cases by
  specificCases?: string[]; // Specific case names to show (takes precedence over filterTags)
  showAllLink?: boolean;
  maxCases?: number;
  className?: string;
  id?: string; // For anchor links
}

const SuccessCasesSection: React.FC<SuccessCasesSectionProps> = ({
  title,
  subtitle,
  filterTags = [],
  specificCases = [],
  showAllLink = true,
  maxCases,
  className = "",
  id
}) => {
  const { isEnglish } = useLanguage();
  
  const resolvedTitle = title ?? (isEnglish ? "Success Stories" : "Casos de éxito");
  const resolvedSubtitle = subtitle ?? (isEnglish ? "Recent projects that have transformed businesses." : "Últimos proyectos que han transformado negocios.");
  // Helper function to normalize image URLs
  const normalizeImageUrl = (url: string): string => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    if (!url.startsWith('/')) {
      return `/${url}`;
    }
    return url;
  };
  // Filter cases based on specific names (takes precedence) or tags
  const filteredCases = specificCases.length > 0 
    ? ALL_SUCCESS_CASES.filter(case_ => specificCases.includes(case_.name))
    : filterTags.length > 0 
      ? ALL_SUCCESS_CASES.filter(case_ => 
          filterTags.some(tag => 
            case_.tags.services.includes(tag) ||
            case_.tags.industries.includes(tag) ||
            (case_.tags.tools && case_.tags.tools.includes(tag))
          )
        )
      : ALL_SUCCESS_CASES;

  // Limit number of cases if specified
  const displayCases = maxCases 
    ? filteredCases.slice(0, maxCases)
    : filteredCases;

  if (displayCases.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`py-12 md:py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-dm-sans mb-6">
            {resolvedTitle.split(' ').map((word, index) => 
              (word.toLowerCase() === 'éxito' || word.toLowerCase() === 'stories') ? (
                <span key={index} className="text-gradient-primary">{word} </span>
              ) : (
                word + ' '
              )
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {resolvedSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayCases.map((project, index) => (
            <Link key={index} to={project.link}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer h-full">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={normalizeImageUrl(project.image)} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3`;
                      target.onerror = null;
                      console.warn(`Failed to load image for ${project.name}: ${project.image}`);
                    }}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold font-dm-sans mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.industry}</p>
                  <p className="text-sm text-gray-600 mb-3">{project.service}</p>
                  
                  {/* Display relevant tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.services.slice(0, 2).map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {formatTagName(tag)}
                      </Badge>
                    ))}
                    {project.tags.industries.slice(0, 1).map((tag, tagIndex) => (
                      <Badge 
                        key={`ind-${tagIndex}`} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {formatTagName(tag)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {showAllLink && (filterTags.length > 0 || specificCases.length > 0) && (
          <div className="text-center">
            <Link 
              to={`/${isEnglish ? 'en/success-stories' : 'es/casos-exito'}${filterTags.length === 1 ? `?filter=${filterTags[0]}` : ''}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              {isEnglish 
                ? `View all success stories ${filterTags.length === 1 ? `for ${formatTagName(filterTags[0])}` : ''}` 
                : `Ver todos los casos de éxito ${filterTags.length === 1 ? `de ${formatTagName(filterTags[0])}` : ''}`} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessCasesSection;
