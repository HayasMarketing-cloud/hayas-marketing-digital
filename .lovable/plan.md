

## Revisión editorial de meta titles y descriptions — Blog EN

### Estado actual (8 posts en `/en/blog/*`)

| Path | Title actual | Problema |
|------|-------------|----------|
| `/en/blog/ai-governance-business` | AI Governance: Strategic Responsibility \| Hayas Marketing | Correcto, buen formato |
| `/en/blog/ai-seo-tools` | AI SEO Tools: The Guide to Optimize Your Web \| Hayas | Branding inconsistente ("Hayas" vs "Hayas Marketing") |
| `/en/blog/artificial-intelligence-marketing-applications` | AI in Marketing: A Practical Guide \| Hayas Marketing | Correcto |
| `/en/blog/chatbots-for-websites` | Chatbots for Websites: How They Improve Customer Experience \| Hayas Marketing | Demasiado largo (72 chars, límite 60) |
| `/en/blog/crm-what-is-benefits` | What is a CRM and What Are Its Benefits for Your Business \| Hayas Marketing | Demasiado largo (73 chars) |
| `/en/blog/decision-marketing` | Decision Marketing: When Marketing Stops Provoking and Starts Building Trust \| Hayas Marketing | Muy largo (93 chars) |
| `/en/blog/new-seo-paradigm-aeo-geo` | The New SEO Paradigm: AEO & GEO in the AI Era \| Hayas Marketing | Correcto (62 chars, aceptable) |
| `/en/blog/seo-on-page-guide-complete` | Complete Guide to On-Page SEO - Hayas Marketing Blog | Formato inconsistente ("-" en vez de "\|", dice "Blog") |

---

### Propuestas de corrección

#### Titles (corregir 4):

| Path | Title propuesto |
|------|----------------|
| `ai-seo-tools` | AI SEO Tools: The Complete Guide \| Hayas Marketing |
| `chatbots-for-websites` | Chatbots for Websites: Benefits & Guide \| Hayas |
| `crm-what-is-benefits` | What Is a CRM? Benefits for Your Business \| Hayas |
| `decision-marketing` | Decision Marketing: Building Trust, Not Noise \| Hayas |
| `seo-on-page-guide-complete` | On-Page SEO: The Complete Guide \| Hayas Marketing |

#### Descriptions (corregir 3):

| Path | Description actual | Problema | Propuesta |
|------|-------------------|----------|-----------|
| `ai-seo-tools` | "Discover the best AI SEO tools to optimize your website. Practical guide with recommendations for content, keywords, and technical analysis." | Genérica | "Compare the best AI-powered SEO tools for keyword research, content optimization, and technical audits. Actionable guide with real recommendations." |
| `seo-on-page-guide-complete` | "Explore our complete guide to on-page SEO, digital marketing tips, CRM, and AI. Boost your strategy with Hayas Marketing." | Mezcla temas inconexos (CRM, AI) | "Master on-page SEO with this step-by-step guide: title tags, meta descriptions, headings, internal linking, and Core Web Vitals optimization." |
| `decision-marketing` | "Decision Marketing is a new marketing approach based on clarity, respect for time, and honest information. Discover how to build trust without manipulation." | Aceptable pero débil en CTA | "Decision Marketing replaces persuasion with clarity and respect. Learn how transparent, ethical marketing builds lasting customer trust." |

---

### Implementación

Ejecutar 5 UPDATEs en la tabla `seo_pages` para corregir los titles y 3 UPDATEs para descriptions, aplicando los mismos criterios editoriales que se usaron en español:
- Branding consistente con `| Hayas` o `| Hayas Marketing`
- Titles ≤60 chars
- Descriptions ≤160 chars, con keyword y CTA implícito
- Sin formato slug, capitalización correcta de acrónimos

