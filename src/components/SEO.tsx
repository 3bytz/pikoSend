import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
}

const defaultSEO = {
  title: 'PikoSend - Send Money Anywhere, Anytime',
  description: 'Send and receive money with PikoSend. Fast, secure, and affordable money transfers with the best rates.',
  keywords: 'money transfer, secure payments, send money, receive money, cross-border payments, remittance, digital wallet',
  ogImage: '/faviconTr.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  twitterCard,
  canonical,
}) => {
  const location = useLocation();

  const seoTitle = title || defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoOgImage = ogImage || defaultSEO.ogImage;
  const seoOgType = ogType || defaultSEO.ogType;
  const seoTwitterCard = twitterCard || defaultSEO.twitterCard;
  const seoCanonical = canonical || `https://pikosend.com${location.pathname}`;

  useEffect(() => {
    document.title = seoTitle;

    const metaTags = [
      { name: 'description', content: seoDescription },
      { name: 'keywords', content: seoKeywords },
      { property: 'og:title', content: seoTitle },
      { property: 'og:description', content: seoDescription },
      { property: 'og:image', content: seoOgImage },
      { property: 'og:type', content: seoOgType },
      { property: 'og:url', content: seoCanonical },
      { name: 'twitter:card', content: seoTwitterCard },
      { name: 'twitter:title', content: seoTitle },
      { name: 'twitter:description', content: seoDescription },
      { name: 'twitter:image', content: seoOgImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }

      element.content = content;
    });

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = seoCanonical;
  }, [seoTitle, seoDescription, seoKeywords, seoOgImage, seoOgType, seoTwitterCard, seoCanonical]);

  return null;
};
