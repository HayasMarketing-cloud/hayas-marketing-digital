import React from 'react';
import { Calendar, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ActionChip {
  label: string;
  href: string;
  icon: React.ElementType;
  isExternal: boolean;
}

interface ParsedMessage {
  cleanText: string;
  actions: ActionChip[];
}

// URL patterns to detect and convert to chips
const ACTION_PATTERNS: Record<string, { label: string; icon: React.ElementType }> = {
  '/es/agendar-reunion': { label: 'Agendar reunión', icon: Calendar },
  '/es/contacto': { label: 'Contactar', icon: Mail },
  '/en/schedule-meeting': { label: 'Schedule meeting', icon: Calendar },
  '/en/contact': { label: 'Contact', icon: Mail },
};

/**
 * Parse a message and extract markdown links, converting known URLs to action chips
 */
export function parseMessageWithActions(content: string): ParsedMessage {
  const actions: ActionChip[] = [];
  
  // Regex to match markdown links: [text](url)
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  
  let cleanText = content;
  let match;
  
  // Find all markdown links
  while ((match = markdownLinkRegex.exec(content)) !== null) {
    const [fullMatch, , url] = match;
    
    // Check if this URL matches any of our known action patterns
    let foundAction = false;
    for (const [pattern, actionConfig] of Object.entries(ACTION_PATTERNS)) {
      if (url.includes(pattern)) {
        actions.push({
          label: actionConfig.label,
          href: pattern,
          icon: actionConfig.icon,
          isExternal: false,
        });
        foundAction = true;
        break;
      }
    }
    
    // For unknown URLs, create a generic external link action
    if (!foundAction && url.startsWith('http')) {
      // Extract domain for label
      try {
        const urlObj = new URL(url);
        actions.push({
          label: urlObj.hostname.replace('www.', ''),
          href: url,
          icon: ExternalLink,
          isExternal: true,
        });
        foundAction = true;
      } catch {
        // Invalid URL, skip
      }
    }
    
    // Remove the markdown link from the text, keeping context words
    if (foundAction) {
      // Clean up the markdown link and any orphaned words like "aquí" or "here"
      cleanText = cleanText
        .replace(fullMatch, '')
        .replace(/\s+(aquí|here)\s*\./gi, '.')
        .replace(/\s+(aquí|here)\s*$/gi, '')
        .replace(/\s+\./g, '.')
        .replace(/\s{2,}/g, ' ')
        .trim();
    }
  }
  
  return { cleanText, actions };
}

interface MessageWithActionsProps {
  content: string;
  isAssistant: boolean;
}

const MessageWithActions: React.FC<MessageWithActionsProps> = ({ content, isAssistant }) => {
  // Only parse assistant messages for actions
  if (!isAssistant) {
    return <p className="text-sm whitespace-pre-wrap">{content}</p>;
  }
  
  const { cleanText, actions } = parseMessageWithActions(content);
  
  return (
    <div className="space-y-2">
      <p className="text-sm whitespace-pre-wrap">{cleanText}</p>
      
      {actions.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {actions.map((action, index) => {
            const Icon = action.icon;
            
            if (action.isExternal) {
              return (
                <a
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs bg-white/80 hover:bg-white text-gray-700 px-3 py-1.5 rounded-full transition-colors border border-gray-200 shadow-sm"
                >
                  <Icon className="w-3 h-3" />
                  {action.label}
                </a>
              );
            }
            
            return (
              <Link
                key={index}
                to={action.href}
                className="inline-flex items-center gap-1.5 text-xs bg-white/80 hover:bg-white text-gray-700 px-3 py-1.5 rounded-full transition-colors border border-gray-200 shadow-sm"
              >
                <Icon className="w-3 h-3" />
                {action.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MessageWithActions;
