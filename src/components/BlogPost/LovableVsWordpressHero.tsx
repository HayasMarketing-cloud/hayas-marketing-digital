import React from 'react';

const LovableVsWordpressHero: React.FC = () => {
  return (
    <div className="w-full mb-12 rounded-xl overflow-hidden shadow-lg" style={{ aspectRatio: '1200/630' }}>
      <div className="relative w-full h-full flex">
        {/* Left side - Lovable / Modern */}
        <div className="flex-1 relative flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[hsl(145,100%,10%)] via-[hsl(145,60%,18%)] to-[hsl(160,50%,12%)] p-6 md:p-10">
          {/* Subtle code pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06] font-mono text-[10px] leading-tight text-white overflow-hidden p-4 select-none pointer-events-none" aria-hidden="true">
            {'<Component />\nconst App = () => {\n  return <Main />\n}\nexport default App\nimport React from "react"\ntype Props = { }\nconst [state, setState]\nuseEffect(() => {})\n<div className="...">\nreturn (\n  <Router>\n    <Route />\n  </Router>\n)'.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
          <img
            src="/images/blog/logo-lovable.svg"
            alt="Logo Lovable"
            className="relative z-10 h-12 md:h-16 w-auto drop-shadow-lg"
            loading="eager"
          />
          <div className="relative z-10 text-center">
            <p className="text-white/90 text-xs md:text-sm font-medium tracking-wide">Código moderno</p>
            <p className="text-white/60 text-[10px] md:text-xs mt-1">React · TypeScript · Vite</p>
          </div>
        </div>

        {/* Center VS divider */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-xl">
            <span className="text-foreground font-bold text-lg md:text-xl tracking-tighter">VS</span>
          </div>
        </div>

        {/* Right side - WordPress / Classic */}
        <div className="flex-1 relative flex flex-col items-center justify-center gap-4 bg-gradient-to-bl from-[hsl(210,80%,12%)] via-[hsl(210,60%,18%)] to-[hsl(220,50%,14%)] p-6 md:p-10">
          {/* Subtle plugin pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06] font-mono text-[10px] leading-tight text-white overflow-hidden p-4 select-none pointer-events-none" aria-hidden="true">
            {'<?php\nadd_action("init")\nfunction my_theme() {\n  wp_enqueue_style()\n}\nadd_filter("the_content")\nregister_post_type()\ndo_action("wp_head")\napply_filters("query")\nwp_register_block()\nglobal $wpdb;\n$wpdb->get_results()'.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
          <img
            src="/images/blog/logo-wordpress.png"
            alt="Logo WordPress"
            className="relative z-10 h-12 md:h-16 w-auto drop-shadow-lg"
            loading="eager"
          />
          <div className="relative z-10 text-center">
            <p className="text-white/90 text-xs md:text-sm font-medium tracking-wide">Ecosistema de plugins</p>
            <p className="text-white/60 text-[10px] md:text-xs mt-1">PHP · MySQL · Themes</p>
          </div>
        </div>

        {/* Bottom tagline bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/90 backdrop-blur-sm border-t border-border py-2.5 md:py-3 px-4">
          <p className="text-center text-muted-foreground text-xs md:text-sm font-medium tracking-wide">
            Dos filosofías. Una decisión estratégica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LovableVsWordpressHero;
