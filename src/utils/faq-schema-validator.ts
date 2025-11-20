/**
 * FAQ Schema Validator
 * Validates FAQ structured data for Google Rich Results compliance
 */

export interface FAQValidationIssue {
  type: 'error' | 'warning' | 'info';
  field: string;
  message: string;
  recommendation?: string;
}

export interface FAQValidationResult {
  isValid: boolean;
  score: number; // 0-100
  issues: FAQValidationIssue[];
  passedChecks: number;
  totalChecks: number;
  recommendations: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Validates FAQ Schema against Google Rich Results requirements
 */
export const validateFAQSchema = (faqs: FAQItem[]): FAQValidationResult => {
  const issues: FAQValidationIssue[] = [];
  const recommendations: string[] = [];
  let passedChecks = 0;
  const totalChecks = 15;

  // Check 1: Minimum FAQ count
  if (faqs.length < 3) {
    issues.push({
      type: 'warning',
      field: 'faqCount',
      message: `Solo ${faqs.length} FAQs encontradas. Se recomiendan al menos 3-5 para Featured Snippets.`,
      recommendation: 'Añade más preguntas frecuentes relevantes para aumentar visibilidad.'
    });
  } else {
    passedChecks++;
  }

  // Check 2: Maximum FAQ count (too many can dilute relevance)
  if (faqs.length > 15) {
    issues.push({
      type: 'info',
      field: 'faqCount',
      message: `${faqs.length} FAQs pueden ser demasiadas. Considera agrupar por temas.`,
      recommendation: 'Divide FAQs extensas en subcategorías temáticas.'
    });
  } else {
    passedChecks++;
  }

  faqs.forEach((faq, index) => {
    const faqId = `faq-${index + 1}`;

    // Check 3: Question length (optimal for Featured Snippets)
    if (faq.question.length < 10) {
      issues.push({
        type: 'error',
        field: `${faqId}.question`,
        message: 'Pregunta demasiado corta (< 10 caracteres).',
        recommendation: 'Las preguntas deben ser claras y completas.'
      });
    } else if (faq.question.length > 150) {
      issues.push({
        type: 'warning',
        field: `${faqId}.question`,
        message: 'Pregunta demasiado larga (> 150 caracteres).',
        recommendation: 'Las preguntas más concisas tienen mejor rendimiento en Featured Snippets.'
      });
    } else {
      passedChecks++;
    }

    // Check 4: Question starts with interrogative
    const interrogatives = ['¿', 'qué', 'cómo', 'cuándo', 'dónde', 'por qué', 'cuál', 'quién'];
    const startsWithInterrogative = interrogatives.some(word => 
      faq.question.toLowerCase().startsWith(word)
    );
    
    if (!startsWithInterrogative) {
      issues.push({
        type: 'warning',
        field: `${faqId}.question`,
        message: 'La pregunta no comienza con un interrogativo natural.',
        recommendation: 'Usa: ¿Qué, ¿Cómo, ¿Cuándo, ¿Por qué, etc.'
      });
    } else {
      passedChecks++;
    }

    // Check 5: Answer length (optimal 100-250 words for Featured Snippets)
    const wordCount = faq.answer.split(/\s+/).length;
    if (wordCount < 20) {
      issues.push({
        type: 'error',
        field: `${faqId}.answer`,
        message: `Respuesta muy corta (${wordCount} palabras). Mínimo 20 palabras.`,
        recommendation: 'Proporciona respuestas completas y útiles de 100-250 palabras.'
      });
    } else if (wordCount > 300) {
      issues.push({
        type: 'warning',
        field: `${faqId}.answer`,
        message: `Respuesta muy larga (${wordCount} palabras). Óptimo: 100-250 palabras.`,
        recommendation: 'Las respuestas concisas tienen mejor CTR en Featured Snippets.'
      });
    } else {
      passedChecks++;
    }

    // Check 6: Answer starts with direct response
    const directStarters = [
      'sí', 'no', 'es', 'son', 'el ', 'la ', 'los ', 'las ',
      'un ', 'una ', 'consiste', 'se trata', 'significa'
    ];
    const startsDirectly = directStarters.some(starter => 
      faq.answer.toLowerCase().startsWith(starter)
    );
    
    if (!startsDirectly) {
      issues.push({
        type: 'info',
        field: `${faqId}.answer`,
        message: 'La respuesta no comienza con una declaración directa.',
        recommendation: 'Comienza las respuestas de forma directa para mejor Featured Snippet.'
      });
    } else {
      passedChecks++;
    }

    // Check 7: Question uniqueness
    const duplicates = faqs.filter(f => f.question === faq.question);
    if (duplicates.length > 1) {
      issues.push({
        type: 'error',
        field: `${faqId}.question`,
        message: 'Pregunta duplicada detectada.',
        recommendation: 'Cada pregunta debe ser única.'
      });
    } else {
      passedChecks++;
    }

    // Check 8: Answer contains structured content hints
    const hasStructuredHints = /\n-|\n\d+\.|•/.test(faq.answer);
    if (hasStructuredHints) {
      passedChecks++;
      recommendations.push('Excelente: Algunas respuestas usan listas estructuradas.');
    }
  });

  // Check 9: Overall content quality indicators
  const avgQuestionLength = faqs.reduce((sum, faq) => sum + faq.question.length, 0) / faqs.length;
  if (avgQuestionLength > 40 && avgQuestionLength < 100) {
    passedChecks++;
  }

  const avgAnswerWords = faqs.reduce((sum, faq) => 
    sum + faq.answer.split(/\s+/).length, 0
  ) / faqs.length;
  
  if (avgAnswerWords >= 50 && avgAnswerWords <= 250) {
    passedChecks++;
    recommendations.push('Longitud promedio de respuestas es óptima para Featured Snippets.');
  }

  // Calculate validation score
  const score = Math.round((passedChecks / totalChecks) * 100);
  const isValid = issues.filter(i => i.type === 'error').length === 0;

  // Add general recommendations based on score
  if (score >= 80) {
    recommendations.push('Schema FAQ bien optimizado para Featured Snippets.');
  } else if (score >= 60) {
    recommendations.push('Schema FAQ funcional pero mejorable. Revisa las advertencias.');
  } else {
    recommendations.push('Schema FAQ necesita mejoras importantes. Prioriza errores críticos.');
  }

  return {
    isValid,
    score,
    issues,
    passedChecks,
    totalChecks,
    recommendations: [...new Set(recommendations)] // Remove duplicates
  };
};

/**
 * Generates Google Rich Results Test URL for a given page
 */
export const getGoogleRichResultsTestUrl = (pageUrl: string): string => {
  const encodedUrl = encodeURIComponent(pageUrl);
  return `https://search.google.com/test/rich-results?url=${encodedUrl}`;
};

/**
 * Validates multiple FAQ pages at once
 */
export const validateMultipleFAQPages = (
  pages: Array<{ id: string; faqs: FAQItem[] }>
): Record<string, FAQValidationResult> => {
  const results: Record<string, FAQValidationResult> = {};
  
  pages.forEach(page => {
    results[page.id] = validateFAQSchema(page.faqs);
  });
  
  return results;
};

/**
 * Get summary statistics for FAQ validation results
 */
export const getValidationSummary = (results: Record<string, FAQValidationResult>) => {
  const totalPages = Object.keys(results).length;
  const validPages = Object.values(results).filter(r => r.isValid).length;
  const avgScore = Object.values(results).reduce((sum, r) => sum + r.score, 0) / totalPages;
  const totalIssues = Object.values(results).reduce((sum, r) => sum + r.issues.length, 0);
  const criticalIssues = Object.values(results).reduce(
    (sum, r) => sum + r.issues.filter(i => i.type === 'error').length, 
    0
  );

  return {
    totalPages,
    validPages,
    invalidPages: totalPages - validPages,
    avgScore: Math.round(avgScore),
    totalIssues,
    criticalIssues,
    healthStatus: avgScore >= 80 ? 'excellent' : avgScore >= 60 ? 'good' : avgScore >= 40 ? 'fair' : 'poor'
  };
};
