# English Translation Roadmap - Hayas Marketing Website

## Overview
This document outlines the strategy and progress for translating the Spanish website to English.

## Current Status

### ✅ Completed Infrastructure
- i18n system with `useTranslation` hook
- Language context provider (`LanguageContext`)
- English routes defined in `App.tsx`
- Coming Soon page for untranslated English content
- Core UI translations (nav, footer, buttons, forms)

### ✅ Translated Sections (i18n)
- Navigation (`nav.*`)
- Footer (`footer.*`)
- Forms (`forms.*`)
- Buttons (`buttons.*`)
- Common terms (`common.*`)
- Services section (`servicesSection.*`, `serviceItems.*`)
- Marketing changed section (`marketingChanged.*`)
- Chatbot promo (`chatbot.*`)
- Reviews section (`reviews.*`)
- FAQ home (`faq.home.*`)
- Mega menu (`megaMenu.*`)
- Hero section (`hero.*`)

### ✅ Completed - Solution Pages
All 3 solution pages are now fully bilingual with useTranslation hook:
- `boostYourBrand` - Impulsa tu marca ✅
- `connectWithCustomers` - Conecta con tus clientes ✅
- `activateSales` - Activa tus ventas ✅

### 📋 Phase 1: Core Pages (Priority High)

#### Solution Pages (3 pages) - COMPLETED ✅
| Spanish Path | English Path | Status |
|-------------|-------------|--------|
| `/es/soluciones/impulsa-tu-marca` | `/en/solutions/boost-your-brand` | ✅ Done |
| `/es/soluciones/conecta-con-tus-clientes` | `/en/solutions/connect-with-customers` | ✅ Done |
| `/es/soluciones/activa-tus-ventas` | `/en/solutions/activate-sales` | ✅ Done |

#### Main Services (10 pages - Top Priority)
| Spanish Path | English Path | Status |
|-------------|-------------|--------|
| `/es/servicios/creacion-marca` | `/en/services/brand-creation` | ✅ Done |
| `/es/servicios/diseno-web` | `/en/services/web-design` | ✅ Done |
| `/es/servicios/seo-posicionamiento` | `/en/services/seo-positioning` | ✅ Done |
| `/es/servicios/implantacion-crm` | `/en/services/crm-implementation` | ✅ Done |
| `/es/servicios/email-marketing-automatizaciones` | `/en/services/email-marketing-automation` | ✅ Done |
| `/es/servicios/gestion-redes-sociales` | `/en/services/social-media-management` | ✅ Done |
| `/es/servicios/publicidad-google-ads` | `/en/services/google-ads-advertising` | ✅ Done |
| `/es/servicios/estrategia-contenidos` | `/en/services/content-strategy` | ✅ Done |
| `/es/servicios/consultoria-estrategica-analitica` | `/en/services/strategic-consulting-analytics` | ✅ Done |
| `/es/servicios/integraciones-ia-procesos` | `/en/services/ai-process-integration` | ✅ Done |

### 📋 Phase 2: Case Studies (Top 10)
| Spanish Path | English Path | Status |
|-------------|-------------|--------|
| `/es/casos-exito/asendia` | `/en/case-studies/asendia` | ⏳ Pending |
| `/es/casos-exito/nexo-vital` | `/en/case-studies/nexo-vital` | ⏳ Pending |
| `/es/casos-exito/dr-parron` | `/en/case-studies/dr-parron` | ⏳ Pending |
| `/es/casos-exito/joints-up` | `/en/case-studies/joints-up` | ⏳ Pending |
| `/es/casos-exito/formato-educativo` | `/en/case-studies/formato-educativo` | ⏳ Pending |
| `/es/casos-exito/inbound-students` | `/en/case-studies/inbound-students` | ⏳ Pending |
| `/es/casos-exito/translate-with-style` | `/en/case-studies/translate-with-style` | ⏳ Pending |
| `/es/casos-exito/calistenia-online` | `/en/case-studies/calisthenics-online` | ⏳ Pending |
| `/es/casos-exito/centro-roraima` | `/en/case-studies/centro-roraima` | ⏳ Pending |
| `/es/casos-exito/i-virgen-extra` | `/en/case-studies/i-virgen-extra` | ⏳ Pending |

### 📋 Phase 3: Strategic Blog Posts
| Spanish Path | English Path | Status |
|-------------|-------------|--------|
| `/es/blog/decision-marketing` | `/en/blog/decision-marketing` | ⏳ Pending |
| `/es/blog/gobernanza-ia-empresas` | `/en/blog/ai-governance-business` | ⏳ Pending |
| `/es/blog/ia-seo-herramientas` | `/en/blog/ai-seo-tools` | ⏳ Pending |
| `/es/blog/chatbots-para-paginas-web` | `/en/blog/chatbots-for-websites` | ✅ Done |
| `/es/blog/crm-que-es-beneficios` | `/en/blog/crm-what-is-benefits` | ⏳ Pending |

### 📋 Phase 4: Support Pages
| Spanish Path | English Path | Status |
|-------------|-------------|--------|
| `/es/nosotros` | `/en/about-us` | 🔄 Translations added |
| `/es/contacto` | `/en/contact` | 🔄 Translations added |
| `/es/agendar-reunion` | `/en/schedule-meeting` | ⏳ Pending |
| `/es/solicitar-consulta` | `/en/request-consultation` | ⏳ Pending |

---

## Implementation Strategy

### Approach 1: Dynamic Translation (Recommended for content pages)
Components detect language via `useTranslation()` and render content accordingly.

```tsx
const { t, language } = useTranslation();
const isEnglish = language === 'en';

// Use translation keys
<h1>{t('solutionPages.boostYourBrand.heroTitle')}</h1>
```

### Approach 2: Separate Components (For complex pages)
Create EN-specific components when content differs significantly.

```
src/pages/ImpulsaTuMarca.tsx → Spanish version
src/pages/en/BoostYourBrand.tsx → English version
```

### Approach 3: Hybrid (Current)
- Use existing components with language detection
- Route both languages to same component
- Component uses translations based on detected language

---

## Translation Keys Structure

```
translations.en.solutionPages.boostYourBrand.*
translations.en.solutionPages.connectWithCustomers.*
translations.en.solutionPages.activateSales.*
translations.en.caseStudies.*
translations.en.blog.*
translations.en.aboutUs.*
translations.en.contactPage.*
```

---

## Next Steps

1. ✅ Add core solution page translations to i18n
2. ⏳ Update ImpulsaTuMarca component to use translations
3. ⏳ Update ConectaConTusClientes component
4. ⏳ Update ActivaTusVentas component
5. ⏳ Add service page translations
6. ⏳ Add case study page translations
7. ⏳ Add blog post translations

---

Last updated: 2026-01-21
