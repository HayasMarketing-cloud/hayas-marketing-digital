import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Hash, Users, Briefcase, Link2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ArticleUtilitySectionProps {
  title: string;
  url: string;
}

const ArticleUtilitySection: React.FC<ArticleUtilitySectionProps> = ({ title, url }) => {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'x':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=hayasmarketing`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "¡Enlace copiado!",
          description: "El enlace se ha copiado al portapapeles.",
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className="section-normal bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Compartir artículo */}
          <div className="bg-white rounded-lg shadow-sm border border-border p-6">
            <div className="text-center mb-6">
              <Share2 className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h4 className="text-xl font-semibold mb-2 text-foreground">
                Comparte este artículo
              </h4>
              <p className="text-muted-foreground">
                Ayuda a otros con este contenido
              </p>
            </div>
            
            <div className="flex justify-center gap-3 flex-wrap">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleShare('x')}
                className="group hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900"
              >
                <Hash className="w-4 h-4 mr-2 text-gray-900 group-hover:scale-110 transition-transform" />
                X
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleShare('facebook')}
                className="group hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700"
              >
                <Users className="w-4 h-4 mr-2 text-blue-600 group-hover:scale-110 transition-transform" />
                Facebook
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="group hover:bg-blue-50 hover:border-blue-700 hover:text-blue-800"
              >
                <Briefcase className="w-4 h-4 mr-2 text-blue-700 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleShare('copy')}
                className="group hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700"
              >
                <Link2 className="w-4 h-4 mr-2 text-gray-600 group-hover:scale-110 transition-transform" />
                Copiar enlace
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleUtilitySection;