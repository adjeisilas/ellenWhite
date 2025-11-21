import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords = "Ellen White Educational Complex, school, education, Ghana, junior high school, academic excellence",
  canonical,
  ogImage = "/default-og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  const siteTitle = "Ellen White Educational Complex";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = "https://ellen-white.vercel.app"; // Replace with your actual domain

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical || `${siteUrl}${window.location.pathname}`} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || `${siteUrl}${window.location.pathname}`} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data for School */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Ellen White Educational Complex",
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ntensere",
            "addressLocality": "Accra",
            "addressCountry": "GH"
          },
          "telephone": "+233-54-113-6868",
          "email": "info@ellenwhitecomplex.edu",
          "foundingDate": "2005"
        })}
      </script>
    </Helmet>
  );
};

export default Seo;