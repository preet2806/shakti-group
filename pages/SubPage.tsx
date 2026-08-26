import React from 'react';
import { useParams } from 'react-router-dom';
import CompanySubPage, { COMPANY_SUBPAGES_DATA } from './company/CompanySubPage';
import ProductSubPage, { PRODUCT_SUBPAGES_DATA } from './products/ProductSubPage';
import SolutionSubPage, { SOLUTION_SUBPAGES_DATA } from './solutions/SolutionSubPage';
import IndustrySubPage, { INDUSTRY_SUBPAGES_DATA } from './industries/IndustrySubPage';

export interface SubPageDetails {
  category: 'Company' | 'Products' | 'Solutions' | 'Industries';
  slug: string;
  parentPath: string;
  parentLabel: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  highlights: string[];
  keySpecs: { label: string; value: string }[];
  featuresTitle?: string;
  features?: { title: string; desc: string }[];
  seoTitle: string;
  seoDesc: string;
  keywords: string;
}

// Helper to safely build subpage details without throwing runtime errors
function getCompanySubpage(key: string, categoryName: string): SubPageDetails {
  const d = COMPANY_SUBPAGES_DATA[key] || COMPANY_SUBPAGES_DATA['our-group'];
  return {
    category: 'Company',
    slug: d.slug,
    parentPath: '/company',
    parentLabel: 'Company Hub',
    title: d.title,
    subtitle: d.subtitle,
    heroImage: d.heroImage,
    overview: d.overviewText?.[0] || '',
    highlights: d.complianceList || [],
    keySpecs: d.stats?.map(s => ({ label: s.label, value: s.value })) || [],
    seoTitle: d.seoTitle,
    seoDesc: d.seoDesc,
    keywords: d.keywords
  };
}

function getProductSubpage(key: string): SubPageDetails {
  const d = PRODUCT_SUBPAGES_DATA[key] || PRODUCT_SUBPAGES_DATA['bulk-cryogenic'];
  return {
    category: 'Products',
    slug: d.slug,
    parentPath: '/products',
    parentLabel: 'Products Catalog',
    title: d.title,
    subtitle: d.subtitle,
    heroImage: d.heroImage,
    overview: d.overview || '',
    highlights: d.puritiesAvailable || [],
    keySpecs: [
      { label: 'Boiling Point', value: d.physicalProperties?.boilingPoint || 'N/A' },
      { label: 'Expansion Ratio', value: d.physicalProperties?.expansionRatio || 'N/A' }
    ],
    seoTitle: d.seoTitle,
    seoDesc: d.seoDesc,
    keywords: d.keywords
  };
}

function getSolutionSubpage(key: string): SubPageDetails {
  const d = SOLUTION_SUBPAGES_DATA[key] || SOLUTION_SUBPAGES_DATA['bulk-gas-supply'];
  return {
    category: 'Solutions',
    slug: d.slug,
    parentPath: '/services',
    parentLabel: 'Solutions Overview',
    title: d.title,
    subtitle: d.subtitle,
    heroImage: d.heroImage,
    overview: d.overviewText?.[0] || '',
    highlights: d.complianceRequirements || [],
    keySpecs: d.keySpecs || [],
    seoTitle: d.seoTitle,
    seoDesc: d.seoDesc,
    keywords: d.keywords
  };
}

function getIndustrySubpage(key: string): SubPageDetails {
  const d = INDUSTRY_SUBPAGES_DATA[key] || INDUSTRY_SUBPAGES_DATA['metals-manufacturing'];
  return {
    category: 'Industries',
    slug: d.slug,
    parentPath: '/industries',
    parentLabel: 'Industries Overview',
    title: d.title,
    subtitle: d.subtitle,
    heroImage: d.heroImage,
    overview: d.solutionOverview || '',
    highlights: d.regulatoryStandards || [],
    keySpecs: d.keyImpactStats || [],
    seoTitle: d.seoTitle,
    seoDesc: d.seoDesc,
    keywords: d.keywords
  };
}

// Map data from all categories for backwards compatibility and SEO exports
export const ALL_SUBPAGES: Record<string, SubPageDetails> = {
  // Company Subpages
  'company-our-group': getCompanySubpage('our-group', 'Company'),
  'company-manufacturing-network': getCompanySubpage('manufacturing-network', 'Company'),
  'company-infrastructure': getCompanySubpage('infrastructure', 'Company'),
  'company-quality-safety': getCompanySubpage('quality-safety', 'Company'),

  // Product Subpages
  'products-bulk-cryogenic': getProductSubpage('bulk-cryogenic'),
  'products-industrial-cylinder': getProductSubpage('industrial-cylinder'),
  'products-specialty-calibration': getProductSubpage('specialty-calibration'),
  'products-other': getProductSubpage('other'),

  // Solutions Subpages
  'solutions-bulk-gas-supply': getSolutionSubpage('bulk-gas-supply'),
  'solutions-cylinder-gas-supply': getSolutionSubpage('cylinder-gas-supply'),
  'solutions-cryogenic-engineering': getSolutionSubpage('cryogenic-engineering'),
  'solutions-cylinder-services': getSolutionSubpage('cylinder-services'),
  'solutions-export': getSolutionSubpage('export'),

  // Industry Subpages
  'industries-metals-manufacturing': getIndustrySubpage('metals-manufacturing'),
  'industries-glass-ceramics': getIndustrySubpage('glass-ceramics'),
  'industries-chemicals-process': getIndustrySubpage('chemicals-process'),
  'industries-life-sciences': getIndustrySubpage('life-sciences'),
  'industries-food-beverage': getIndustrySubpage('food-beverage'),
  'industries-energy-infrastructure': getIndustrySubpage('energy-infrastructure'),
  'industries-water-environment': getIndustrySubpage('water-environment'),
  'industries-electronics-semiconductor': getIndustrySubpage('electronics-semiconductor')
};

export const SubPage: React.FC = () => {
  const { category } = useParams<{ category: string; slug: string }>();
  const cat = category?.toLowerCase() || '';

  if (cat === 'company') {
    return <CompanySubPage />;
  }

  if (cat === 'products') {
    return <ProductSubPage />;
  }

  if (cat === 'solutions' || cat === 'services') {
    return <SolutionSubPage />;
  }

  if (cat === 'industries') {
    return <IndustrySubPage />;
  }

  // Fallback to CompanySubPage if unknown category
  return <CompanySubPage />;
};

export default SubPage;
