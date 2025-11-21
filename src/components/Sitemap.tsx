import { Helmet } from 'react-helmet-async';

const Sitemap = () => {
  const sitemapUrl = "https://ellenwhitecomplex.edu/sitemap.xml";
  
  return (
    <Helmet>
      <link rel="sitemap" type="application/xml" href={sitemapUrl} />
    </Helmet>
  );
};

export default Sitemap;