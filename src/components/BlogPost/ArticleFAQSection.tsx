import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface ArticleFAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

const ArticleFAQSection: React.FC<ArticleFAQSectionProps> = ({ 
  faqs,
  title = "Preguntas frecuentes",
  subtitle = "Resolvemos las dudas más comunes sobre este tema"
}) => {
  return (
    <section className="my-12">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            {title}
          </h3>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200/50 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-gray-900">
                  <span className="font-semibold pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ArticleFAQSection;