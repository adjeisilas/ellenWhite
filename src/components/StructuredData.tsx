import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ellen White Educational Complex",
    "description": "Premier junior high school in Ghana committed to academic excellence and character development",
    "url": "https://ellen-white.vercel.app",
    "logo": "https://ellen-white.vercel.app/school-logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ntensere",
      "addressLocality": "Accra",
      "addressCountry": "GH"
    },
    "telephone": "+233-54-113-6868",
    "email": "info@ellenwhitecomplex.edu",
    "foundingDate": "2005",
    "sameAs": [
      "https://facebook.com/ellenwhitecomplex",
      "https://twitter.com/ellenwhitecomplex"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;