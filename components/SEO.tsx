import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, article }) => {
  const siteName = "Observatorio de Economía de Venezuela";
  const fullTitle = `${title} | ${siteName}`;
  const defaultImage = "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop";

  useEffect(() => {
    document.title = fullTitle;
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);

    // Open Graph
    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setOg('og:title', fullTitle);
    setOg('og:description', description);
    setOg('og:image', image || defaultImage);
    setOg('og:type', article ? 'article' : 'website');
    setOg('og:site_name', siteName);

    // Schema.org JSON-LD for Search Engines
    const schemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": article ? "NewsArticle" : "Organization",
      "name": siteName,
      "headline": title,
      "description": description,
      "image": image || defaultImage,
      "url": window.location.href,
      "logo": "https://oev.org.ve/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Caracas",
        "addressCountry": "VE"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaOrgJSONLD);
    script.id = 'json-ld-schema';
    
    // Limpiar esquemas anteriores
    const oldScript = document.getElementById('json-ld-schema');
    if (oldScript) oldScript.remove();
    
    document.head.appendChild(script);

  }, [title, description, image, article, fullTitle]);

  return null; // Este componente no renderiza nada visualmente
};

export default SEO;