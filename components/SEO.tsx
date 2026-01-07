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
  
  // URL directa optimizada
  const logoUrl = "https://lh3.googleusercontent.com/d/1xmD_TZzJLzviRzNEnKTA7_n8EADxpHPx";
  const defaultImage = logoUrl;

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

    // Schema.org JSON-LD para que aparezca el logo en Google Search
    const schemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": article ? "NewsArticle" : "Organization",
      "name": siteName,
      "headline": title,
      "description": description,
      "image": image || defaultImage,
      "url": window.location.href,
      "logo": logoUrl,
      "brand": {
        "@type": "Brand",
        "logo": logoUrl
      },
      "sameAs": [
          "https://twitter.com/oev_ve",
          "https://www.instagram.com/oev_ve"
      ],
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

  return null;
};

export default SEO;