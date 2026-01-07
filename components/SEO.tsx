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
  const logoUrl = "https://lh3.googleusercontent.com/d/1xmD_TZzJLzviRzNEnKTA7_n8EADxpHPx";
  const defaultImage = logoUrl;
  const canonicalUrl = window.location.href;

  useEffect(() => {
    document.title = fullTitle;
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Open Graph / Facebook
    const setMeta = (property: string, content: string, isProperty = true) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('og:title', fullTitle);
    setMeta('og:description', description);
    setMeta('og:image', image || defaultImage);
    setMeta('og:type', article ? 'article' : 'website');
    setMeta('og:site_name', siteName);
    setMeta('og:url', canonicalUrl);

    // Twitter
    setMeta('twitter:card', 'summary_large_image', false);
    setMeta('twitter:title', fullTitle, false);
    setMeta('twitter:description', description, false);
    setMeta('twitter:image', image || defaultImage, false);

    // Schema.org JSON-LD (Doble esquema: Organización y Sitio Web)
    const organizationSchema = {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": siteName,
      "alternateName": "OEV",
      "url": "https://oev.org.ve/",
      "logo": logoUrl,
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contacto@oev.org.ve",
        "contactType": "customer support"
      },
      "sameAs": [
        "https://twitter.com/oev_ve",
        "https://www.instagram.com/oev_ve"
      ]
    };

    const websiteSchema = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": siteName,
      "url": "https://oev.org.ve/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://oev.org.ve/#/estadisticas?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify([organizationSchema, websiteSchema]);
    script.id = 'json-ld-schema';
    
    const oldScript = document.getElementById('json-ld-schema');
    if (oldScript) oldScript.remove();
    document.head.appendChild(script);

  }, [title, description, image, article, fullTitle, canonicalUrl]);

  return null;
};

export default SEO;