import { Helmet } from 'react-helmet-async';

interface PageHeadProps {
  title: string;
  description?: string;
}

const PageHead: React.FC<PageHeadProps> = ({ title, description }) => (
  <Helmet>
    <title>PoopMarket - {title}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);

export default PageHead;