import {
  ALL_PRODUCTS_SUBPAGES_DATA,
  CATEGORY_SUBPAGES_DATA,
  INDIVIDUAL_PRODUCTS_DATA,
  PRODUCT_SLUG_ALIASES,
  ProductPageData
} from '../pages/products/productData';
import {
  SOLUTION_SUBPAGES_DATA,
  SolutionPageData
} from '../pages/solutions/SolutionSubPage';
import {
  INDUSTRY_SUBPAGES_DATA,
  IndustryPageData
} from '../pages/industries/IndustrySubPage';
import {
  COMPANY_SUBPAGES_DATA,
  CompanyPageData
} from '../pages/company/CompanySubPage';
import {
  PRODUCTS,
  STATS,
  GROUP_COMPANIES,
  SERVICES,
  INDUSTRIES
} from '../constants';

export interface RouteSEOData {
  isFound: boolean;
  status: 200 | 301 | 404;
  redirectTo?: string;
  canonicalPath: string;
  canonicalUrl: string;
  title: string;
  description: string;
  keywords: string;
  ogType: string;
  ogImage: string;
  schemaJson: object;
  h1: string;
  subtitle: string;
  breadcrumbs: { label: string; path: string }[];
  contentSections: { heading: string; body: string; items?: string[] }[];
}

export const BASE_URL = 'https://www.shaktigases.com';
const DEFAULT_IMAGE = 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png';

/**
 * Permanent (301) redirects for removed, legacy, and alias URLs
 */
export const URL_REDIRECTS: Record<string, string> = {
  // Product aliases & removed legacy URLs
  '/products/dry-ice': '/products/other',
  '/products/lox': '/products/liquid-oxygen',
  '/products/liquid-oxygen-lox': '/products/liquid-oxygen',
  '/products/lin': '/products/liquid-nitrogen',
  '/products/liquid-nitrogen-lin': '/products/liquid-nitrogen',
  '/products/lar': '/products/liquid-argon',
  '/products/liquid-argon-lar': '/products/liquid-argon',
  '/products/lco2': '/products/liquid-carbon-dioxide',
  '/products/liquid-carbon-dioxide-lco2': '/products/liquid-carbon-dioxide',
  '/products/hydrogen': '/products/hydrogen-gas',
  '/products/h2': '/products/hydrogen-gas',
  '/products/da': '/products/dissolved-acetylene',
  '/products/acetylene': '/products/dissolved-acetylene',
  '/products/dissolved-acetylene-da': '/products/dissolved-acetylene',
  '/products/co2-gas': '/products/carbon-dioxide-gas',
  '/products/gaseous-co2': '/products/carbon-dioxide-gas',
  '/products/helium': '/products/helium-gas',
  '/products/he': '/products/helium-gas',
  '/products/uhp-oxygen': '/products/high-purity-oxygen',
  '/products/medical-oxygen': '/products/liquid-oxygen',

  // Corporate & solutions aliases
  '/company/about': '/about',
  '/solutions': '/services',
  '/industries/chemicals-pharmaceuticals': '/industries/chemicals-process'
};

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Normalizes URL path (strips query parameters, trailing slashes, lowercases)
 */
export function normalizePath(rawUrl: string): string {
  const urlOnly = rawUrl.split('?')[0].split('#')[0];
  let clean = urlOnly.trim().toLowerCase();
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  return clean;
}

/**
 * Resolves SEO metadata and semantic crawlable content for any route.
 */
export function resolveRouteSEO(rawUrl: string): RouteSEOData {
  const path = normalizePath(rawUrl);

  // 1. Homepage
  if (path === '' || path === '/') {
    return {
      isFound: true,
      status: 200,
      canonicalPath: '/',
      canonicalUrl: `${BASE_URL}/`,
      title: 'Shakti Group | Industrial Gas Manufacturer, Gujarat',
      description: 'Leading industrial & cryogenic gas manufacturer in Vadodara, Gujarat. Supplying LOX, LIN, LAR, and LCO₂ with 24x7 tanker logistics. Request an instant quote today.',
      keywords: 'Industrial Gas Manufacturer Gujarat, Liquid Nitrogen Vadodara, Liquid Oxygen Tanker India, Liquid Argon Supplier, Bulk LCO2 Tankers, Karjan ASU',
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      h1: '25+ Years of Industrial Gas Engineering in Gujarat',
      subtitle: 'Manufacturing, bulk cryogenic storage, and automated road tanker distribution of Liquid Oxygen (LOX), Liquid Nitrogen (LIN), Liquid Argon (LAR), and Liquid CO₂ across India.',
      breadcrumbs: [{ label: 'Home', path: '/' }],
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'IndustrialBusiness',
        name: 'Shakti Group',
        alternateName: 'Indore Carbonic & Shaktishree Air',
        url: BASE_URL,
        logo: `${BASE_URL}/logo.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '45, Maruti Complex, Ranoli GIDC',
          addressLocality: 'Vadodara',
          addressRegion: 'Gujarat',
          postalCode: '391350',
          addressCountry: 'IN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9727783440',
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi', 'gu']
        }
      },
      contentSections: [
        {
          heading: 'PESO Approved Gas Manufacturing & Logistics',
          body: 'Operating a 178 TPD cryogenic Air Separation Unit in Karjan, 270 TPD Liquid CO₂ plants, and a fleet of 65+ vacuum-insulated cryogenic road tankers operating 24x7 with IoT telemetry.'
        },
        {
          heading: 'Bulk Cryogenic Liquids & Cylinder Gas Portfolio',
          body: 'Comprehensive production and distribution of Liquid Oxygen (LOX), Medical Oxygen (LMO), Liquid Nitrogen (LIN), Liquid Argon (LAR), Carbon Dioxide (LCO₂), Hydrogen, Dissolved Acetylene, and Specialty Calibration Mixtures.'
        },
        {
          heading: 'Turnkey On-Site Storage & Engineering Services',
          body: 'Installation of stationary vacuum-insulated cryogenic vessels (3 KL to 60 KL) on an opex/rental model, manifold changeovers, and certified hydrostatic cylinder testing.'
        }
      ]
    };
  }

  // 2. About Us (/about and /company/about)
  if (path === '/about' || path === '/company/about') {
    return {
      isFound: true,
      status: 200,
      canonicalPath: '/about',
      canonicalUrl: `${BASE_URL}/about`,
      title: 'About Shakti Group | Industrial Gas Infrastructure Since 1998',
      description: 'Learn about Shakti Group, Gujarat\'s premier industrial and cryogenic gas manufacturer. 448 TPD capacity, 65+ road tankers, and 25+ years of operational excellence.',
      keywords: 'About Shakti Group, Industrial Gas Legacy Gujarat, Cryogenic ASU Plant Karjan, Shakti Gases Vadodara',
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      h1: 'Engineering Reliability in Industrial & Cryogenic Gases',
      subtitle: 'From a regional carbon dioxide distributor founded in 1998 to an integrated manufacturing group with 448+ TPD capacity and 65+ dedicated cryogenic road tankers.',
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' }
      ],
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Shakti Group',
        url: `${BASE_URL}/about`,
        description: 'Profile of Shakti Group\'s 25+ years of industrial gas manufacturing, cryogenic engineering, and distribution infrastructure.'
      },
      contentSections: [
        {
          heading: '25+ Years Legacy of Industrial Gas Manufacturing',
          body: 'Established in 1998, Shakti Group operates 9 specialized manufacturing and refilling facilities across Western and Central India under PESO, ISO 9001:2015, and FDA accreditations.'
        },
        {
          heading: 'Manufacturing Infrastructure & Scale',
          body: 'Flagship 178 TPD Karjan Air Separation Unit (Shaktishree Air) alongside 4 regional CO₂ purification complexes producing high-purity commercial, medical, and food-grade gases.'
        }
      ]
    };
  }

  // 3. Products Catalog Hub (/products)
  if (path === '/products') {
    return {
      isFound: true,
      status: 200,
      canonicalPath: '/products',
      canonicalUrl: `${BASE_URL}/products`,
      title: 'Industrial & Cryogenic Gases Catalog | Shakti Group Gujarat',
      description: 'Explore Shakti Group\'s comprehensive catalog of bulk cryogenic liquids, compressed cylinder gases, high-purity gases, and dry ice in Gujarat & India.',
      keywords: 'Industrial Gases Catalog, Bulk Cryogenic Liquids, Cylinder Gases Gujarat, Liquid Oxygen, Liquid Nitrogen, Argon, CO2, Specialty Gas Mixtures',
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      h1: 'Comprehensive Industrial & Specialty Gases Portfolio',
      subtitle: 'Supplying bulk cryogenic liquids, high-pressure cylinder gases, ultra-high-purity analytical blends, and dry ice with statutory PESO certification and batch Certificates of Analysis (COA).',
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' }
      ],
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Shakti Group Industrial Gases Catalog',
        url: `${BASE_URL}/products`,
        description: 'Complete commercial catalog of bulk cryogenic liquids, compressed gases, and specialty mixtures.'
      },
      contentSections: [
        {
          heading: 'Bulk Cryogenic Liquids (LOX, LIN, LAR, LCO₂)',
          body: 'Liquid Nitrogen (-196°C), Liquid Oxygen (-183°C), Liquid Argon (-186°C), and Liquid Carbon Dioxide delivered in 10-35 KL vacuum-insulated road tankers.'
        },
        {
          heading: 'Industrial Compressed Gases & Cylinder Quads (MCP)',
          body: 'Compressed Oxygen, Nitrogen, Argon, CO₂, Hydrogen, and Dissolved Acetylene in 47L/50L cylinders and 16-cylinder manifolded quads.'
        },
        {
          heading: 'Specialty, Chemical & Calibration Gas Mixtures',
          body: 'NIST traceable calibration standards, Sulphur Dioxide (SO₂) tonners, Hydrogen Chloride (HCl), Chlorine, SF₆, and laser mixtures.'
        }
      ]
    };
  }

  // 4. Services / Solutions Hub (/services and /solutions)
  if (path === '/services' || path === '/solutions') {
    return {
      isFound: true,
      status: 200,
      canonicalPath: '/services',
      canonicalUrl: `${BASE_URL}/services`,
      title: 'Turnkey Cryogenic & Gas Engineering Services | Shakti Group',
      description: 'Comprehensive industrial gas engineering: bulk tank installation on lease/opex, cylinder hydrostatic testing, vacuum insulated piping, and telemetry in Gujarat.',
      keywords: 'Cryogenic Tank Rental Gujarat, Cylinder Hydrostatic Testing Vadodara, Vacuum Insulated Piping, Bulk Gas Logistics, Shakti Group Services',
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      h1: 'Turnkey Cryogenic & Industrial Gas Engineering Solutions',
      subtitle: 'End-to-end engineering from on-site stationary tank installations and automatic changeover manifolds to PESO cylinder hydrostatic testing and global ISO tank exports.',
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' }
      ],
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Cryogenic & Gas Engineering Solutions',
        provider: { '@type': 'Organization', name: 'Shakti Group', url: BASE_URL },
        areaServed: 'India'
      },
      contentSections: [
        {
          heading: 'Bulk Storage Tank Installation (OPEX Model)',
          body: 'Turnkey installation of stationary vacuum-insulated cryogenic storage vessels (3 KL to 60 KL) with ambient vaporizers at zero capital expenditure.'
        },
        {
          heading: 'PESO Certified Cylinder Hydrostatic Testing & Refurbishment',
          body: 'Automated water-jacket stretch testing up to 450 bar, internal degreasing, ultrasonic thickness gauging, and recertification.'
        },
        {
          heading: 'Vacuum Insulated Piping (VIP) & Cryogenic Headers',
          body: 'Custom-engineered 316L stainless steel multi-layer high-vacuum lines to virtually eliminate boil-off losses in cryogenic liquid transfer.'
        }
      ]
    };
  }

  // 5. Industries Hub (/industries)
  if (path === '/industries') {
    return {
      isFound: true,
      status: 200,
      canonicalPath: '/industries',
      canonicalUrl: `${BASE_URL}/industries`,
      title: 'Industrial Gas Solutions by Sector | Shakti Group Gujarat',
      description: 'Tailored gas solutions for steelmaking, chemical processing, pharmaceuticals, food freezing, electronics, and environmental water treatment in Gujarat.',
      keywords: 'Industrial Gases for Steel Manufacturing, Pharma Inerting Nitrogen, Food Freezing Cryogenics, Water Treatment Oxygen, Gujarat Industrial Sectors',
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      h1: 'Engineered Gas Solutions for Critical Industrial Verticals',
      subtitle: 'Process-critical gas supply and custom purity management powering metals, chemicals, pharmaceuticals, food cold-chains, and advanced manufacturing.',
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Industries', path: '/industries' }
      ],
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Shakti Group Industry Solutions',
        url: `${BASE_URL}/industries`
      },
      contentSections: [
        {
          heading: 'Metals, Fabrication & Laser Cutting',
          body: 'High-pressure nitrogen laser assist gas, oxy-fuel cutting oxygen, and argon shielding for flawless weld metallurgy and structural fabrication.'
        },
        {
          heading: 'Chemicals, Refining & Pharmaceuticals',
          body: 'Ultra-high-purity nitrogen for reactor inerting, volatile blanketing, cryogenic reaction cooling, and FDA medical oxygen (IP) hospital supply.'
        },
        {
          heading: 'Food Processing, Beverage & Water Treatment',
          body: 'ISBT compliant liquid CO₂ carbonation, liquid nitrogen tunnel flash freezing (IQF), and biological wastewater aeration systems.'
        }
      ]
    };
  }

  // 6. Company Hub (/company)
  if (path === '/company') {
    return {
      isFound: true,
      status: 200,
      canonicalPath: '/company',
      canonicalUrl: `${BASE_URL}/company`,
      title: 'Shakti Group Corporate Hub | Manufacturing Plants & Divisions',
      description: 'Explore Shakti Group entities, regional manufacturing plants, ISO 9001:2015 certifications, and executive leadership across Gujarat, MP, and India.',
      keywords: 'Shakti Group Corporate, Shaktishree Air, Indore Carbonic, Bhavani Enterprise, Shakti Sales Agency, Industrial Gas Plants Gujarat',
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      h1: 'Shakti Group Operational Infrastructure & Group Companies',
      subtitle: 'A coordinated network of manufacturing entities, air separation plants, and logistics depots serving industrial clusters across India.',
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Company', path: '/company' }
      ],
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Shakti Group',
        url: `${BASE_URL}/company`,
        logo: `${BASE_URL}/logo.png`
      },
      contentSections: [
        {
          heading: 'Operating Group Entities & Facilities',
          body: 'Shaktishree Air Private Limited (Karjan ASU), Indore Carbonic (Ahmedabad & Indore CO₂ plants), Shakti Industrial Gases, Bhavani Enterprise, and Shakti Sales Agency.'
        },
        {
          heading: 'Statutory Accreditations & Quality Assurance',
          body: '100% PESO compliant fleet and vessels, ISO 9001:2015 certified processes, FDA Medical IP licenses, and FSSAI food-grade certification.'
        }
      ]
    };
  }

  // 7. Contact Us (/contact)
  if (path === '/contact') {
    return {
      isFound: true,
      status: 200,
      canonicalPath: '/contact',
      canonicalUrl: `${BASE_URL}/contact`,
      title: 'Contact Shakti Group | Industrial Gas Supplier in Gujarat & West India',
      description: 'Contact Shakti Group in Vadodara, Gujarat for bulk liquid CO2, oxygen, nitrogen, argon supply, tanker dispatch, and technical support. Request a quote today.',
      keywords: 'Contact Shakti Gases, Industrial Gas Supplier Gujarat, Gas Supplier Vadodara, Liquid CO2 Supplier India, Oxygen Nitrogen Argon Gujarat, RFQ Industrial Gases',
      ogType: 'website',
      ogImage: DEFAULT_IMAGE,
      h1: 'Contact Shakti Group Industrial Gas Sales & Logistics Desk',
      subtitle: 'Reach our central sales desk, cryogenic logistics coordination hotline, and engineering consultants for supply contracts and RFQ quotes.',
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/contact' }
      ],
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Shakti Group',
        url: `${BASE_URL}/contact`,
        mainEntity: {
          '@type': 'LocalBusiness',
          name: 'Shakti Group',
          telephone: '+91-9727783440',
          email: 'info@shaktigases.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '45, Maruti Complex, Ranoli GIDC',
            addressLocality: 'Vadodara',
            addressRegion: 'Gujarat',
            postalCode: '391350',
            addressCountry: 'IN'
          }
        }
      },
      contentSections: [
        {
          heading: 'Central Sales & Operations Office (Vadodara, Gujarat)',
          body: '45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350, India. Phone: +91 9727783440 | Email: info@shaktigases.com / sales@shaktigases.com.'
        },
        {
          heading: '24x7 Cryogenic Logistics & Tanker Dispatch',
          body: 'Dedicated operations desk coordinating continuous deliveries across Dahej, Ankleshwar, Hazira, Surat, Ahmedabad, Sanand, Halol, Savli, and nationwide corridors.'
        }
      ]
    };
  }

  // 8. Individual Products & Category Subpages (/products/:slug)
  if (path.startsWith('/products/')) {
    const rawSlug = path.replace('/products/', '');
    const resolvedSlug = PRODUCT_SLUG_ALIASES[rawSlug] || rawSlug;
    const item: ProductPageData | undefined =
      ALL_PRODUCTS_SUBPAGES_DATA[resolvedSlug] ||
      CATEGORY_SUBPAGES_DATA[resolvedSlug] ||
      INDIVIDUAL_PRODUCTS_DATA[resolvedSlug];

    if (item) {
      const canonicalPath = `/products/${rawSlug}`;
      const formulaStr = item.chemicalFormula && !item.title.includes(item.chemicalFormula) ? ` (${item.chemicalFormula})` : '';
      const title = item.seoTitle || `${item.title}${formulaStr} Supplier & Manufacturer Gujarat | Shakti Group`;
      const description = item.seoDesc || `${item.title} manufactured and supplied by Shakti Group in bulk cryogenic tankers and cylinders across Gujarat & India. Purity up to ${item.puritiesAvailable?.[0] || 'high purity'}.`;
      const keywords = item.keywords || `${item.title}, ${item.title} Supplier Gujarat, ${item.chemicalFormula} Gas India, Shakti Group ${item.title}`;

      return {
        isFound: true,
        status: 200,
        canonicalPath,
        canonicalUrl: `${BASE_URL}${canonicalPath}`,
        title,
        description,
        keywords,
        ogType: 'product',
        ogImage: item.heroImage || DEFAULT_IMAGE,
        h1: `${item.title}${formulaStr} Bulk Supply & Specifications`,
        subtitle: item.subtitle || item.overview || `Commercial supply specifications, purity grades, and delivery formats for ${item.title}.`,
        breadcrumbs: [
          { label: 'Home', path: '/' },
          { label: 'Products', path: '/products' },
          { label: item.title, path: canonicalPath }
        ],
        schemaJson: {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: item.title,
          description,
          image: item.heroImage || DEFAULT_IMAGE,
          brand: { '@type': 'Brand', name: 'Shakti Group' },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: 'Shakti Group', url: BASE_URL }
          }
        },
        contentSections: [
          {
            heading: 'Commercial Overview & Purity Grades',
            body: item.overview || `Shakti Group manufactures and distributes ${item.title} under stringent quality and statutory standards.`,
            items: item.puritiesAvailable
          },
          {
            heading: 'Packaging & Supply Formats',
            body: item.availableSupplyFormats ? `Available in ${item.availableSupplyFormats.join(', ')}.` : 'Supplied in dedicated high-pressure cylinders, quads, and cryogenic road tankers.',
            items: item.supplyModes?.map(s => `${s.title}: ${s.description} (Ideal for: ${s.idealFor})`)
          },
          {
            heading: 'Industrial Applications & Use Cases',
            body: `Key manufacturing and process applications of ${item.title} across industrial sectors:`,
            items: item.applications?.map(a => `${a.industry}: ${a.useCase} [Recommended: ${a.recommendedPurity}]`)
          }
        ]
      };
    }
  }

  // 9. Solutions Subpages (/solutions/:slug)
  if (path.startsWith('/solutions/')) {
    const slug = path.replace('/solutions/', '');
    const sol: SolutionPageData | undefined = SOLUTION_SUBPAGES_DATA[slug];

    if (sol) {
      const canonicalPath = `/solutions/${sol.slug}`;
      const title = `${sol.title} | Turnkey Cryogenic Gas Solutions | Shakti Group`;
      const description = sol.subtitle || `Explore Shakti Group's turnkey solution for ${sol.title} in Gujarat and India.`;

      return {
        isFound: true,
        status: 200,
        canonicalPath,
        canonicalUrl: `${BASE_URL}${canonicalPath}`,
        title,
        description,
        keywords: `${sol.title}, Turnkey Cryogenic Solutions, Industrial Gas Engineering, Shakti Group`,
        ogType: 'service',
        ogImage: sol.heroImage || DEFAULT_IMAGE,
        h1: `${sol.title} Engineering & Deployment`,
        subtitle: sol.subtitle,
        breadcrumbs: [
          { label: 'Home', path: '/' },
          { label: 'Solutions', path: '/services' },
          { label: sol.title, path: canonicalPath }
        ],
        schemaJson: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: sol.title,
          description,
          provider: { '@type': 'Organization', name: 'Shakti Group', url: BASE_URL }
        },
        contentSections: [
          {
            heading: sol.overviewHeading || 'Solution Overview',
            body: sol.overviewText?.join(' ') || sol.subtitle
          },
          {
            heading: 'Key Engineering Specifications',
            body: 'Technical metrics and capabilities:',
            items: sol.keySpecs?.map(k => `${k.label}: ${k.value}`)
          }
        ]
      };
    }
  }

  // 10. Industry Subpages (/industries/:slug)
  if (path.startsWith('/industries/')) {
    const slug = path.replace('/industries/', '');
    const ind: IndustryPageData | undefined = INDUSTRY_SUBPAGES_DATA[slug];

    if (ind) {
      const canonicalPath = `/industries/${ind.slug}`;
      const title = ind.seoTitle || `${ind.title} Gas Supply Solutions | Shakti Group`;
      const description = ind.seoDesc || ind.subtitle;

      return {
        isFound: true,
        status: 200,
        canonicalPath,
        canonicalUrl: `${BASE_URL}${canonicalPath}`,
        title,
        description,
        keywords: ind.keywords || `${ind.title} Gases, Industrial Gases Gujarat`,
        ogType: 'article',
        ogImage: ind.heroImage || DEFAULT_IMAGE,
        h1: `${ind.title} Industrial Gas Solutions`,
        subtitle: ind.subtitle,
        breadcrumbs: [
          { label: 'Home', path: '/' },
          { label: 'Industries', path: '/industries' },
          { label: ind.title, path: canonicalPath }
        ],
        schemaJson: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          image: ind.heroImage || DEFAULT_IMAGE,
          publisher: { '@type': 'Organization', name: 'Shakti Group', url: BASE_URL }
        },
        contentSections: [
          {
            heading: ind.challengeTitle || 'Industry Challenge & Technical Solution',
            body: `${ind.challengeText || ''} ${ind.solutionOverview || ''}`.trim()
          },
          {
            heading: 'Primary Process Applications',
            body: `Core gas applications for ${ind.title}:`,
            items: ind.applications?.map(a => `${a.title} (${a.gasUsed}, ${a.purity}): ${a.description}`)
          }
        ]
      };
    }
  }

  // 11. Company Subpages (/company/:slug)
  if (path.startsWith('/company/')) {
    const slug = path.replace('/company/', '');

    if (slug === 'manufacturing-infrastructure') {
      return {
        isFound: true,
        status: 200,
        canonicalPath: '/company/manufacturing-infrastructure',
        canonicalUrl: `${BASE_URL}/company/manufacturing-infrastructure`,
        title: 'Manufacturing Infrastructure & Plant Scale | Shakti Group Gujarat',
        description: 'Explore Shakti Group\'s 448 TPD cryogenic manufacturing infrastructure, including the 178 TPD Karjan ASU and 4 regional CO₂ recovery facilities in India.',
        keywords: 'ASU Plant Karjan, Cryogenic Manufacturing Gujarat, Liquid CO2 Plants Ahmedabad Indore, Shakti Infrastructure',
        ogType: 'article',
        ogImage: DEFAULT_IMAGE,
        h1: 'Air Separation Units & CO₂ Manufacturing Infrastructure',
        subtitle: 'Large-scale air separation plants, cryogenic buffer storage, and automated cylinder filling stations powering Western India.',
        breadcrumbs: [
          { label: 'Home', path: '/' },
          { label: 'Company', path: '/company' },
          { label: 'Manufacturing Infrastructure', path: '/company/manufacturing-infrastructure' }
        ],
        schemaJson: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Shakti Group Manufacturing Infrastructure',
          url: `${BASE_URL}/company/manufacturing-infrastructure`
        },
        contentSections: [
          {
            heading: 'Key Production Complexes',
            body: 'Operating a 178 TPD cryogenic ASU in Karjan, 270 TPD liquid CO₂ plants across 4 regional sites, and specialized acetylene & hydrogen facilities.',
            items: ['178 TPD Karjan Air Separation Unit (LOX, LIN, LAR)', '270 TPD Liquid CO₂ Plants (Ahmedabad, Indore, Hyderabad)', 'Savli Dissolved Acetylene Manufacturing Hub', 'Ranoli High-Purity Hydrogen Compression Terminal']
          },
          {
            heading: 'Buffer Storage & Loading Bays',
            body: 'Over 1,285 KL dedicated cryogenic buffer storage capacity ensuring uninterrupted dispatch even during peak power plant maintenance.'
          }
        ]
      };
    }

    if (slug === 'supply-chain-logistics') {
      return {
        isFound: true,
        status: 200,
        canonicalPath: '/company/supply-chain-logistics',
        canonicalUrl: `${BASE_URL}/company/supply-chain-logistics`,
        title: 'Cryogenic Supply Chain & Tanker Logistics | Shakti Group Gujarat',
        description: 'Shakti Group\'s dedicated cryogenic road tanker fleet (10-35 KL) with 24x7 IoT telemetry ensuring 2-4 hour delivery turnaround across Gujarat industrial belts.',
        keywords: 'Cryogenic Road Tankers Gujarat, Liquid Gas Transport India, GPS Tanker Telemetry, Emergency Gas Dispatch Vadodara',
        ogType: 'article',
        ogImage: DEFAULT_IMAGE,
        h1: '65+ Vacuum-Insulated Cryogenic Road Tanker Fleet',
        subtitle: 'Round-the-clock temperature-controlled cryogenic distribution backed by real-time GPS fleet tracking and automated IoT tank telemetry.',
        breadcrumbs: [
          { label: 'Home', path: '/' },
          { label: 'Company', path: '/company' },
          { label: 'Supply Chain & Logistics', path: '/company/supply-chain-logistics' }
        ],
        schemaJson: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Shakti Group Logistics',
          url: `${BASE_URL}/company/supply-chain-logistics`
        },
        contentSections: [
          {
            heading: 'Logistical Scale & Fleet Capabilities',
            body: 'Fleet of 65+ specialized cryogenic road tankers with payload capacities from 10 KL to 35 KL (11 to 40 Metric Tonnes) equipped with GPS and live telemetry.',
            items: ['Turnaround time: 2 to 4 hours in Dahej, Ankleshwar, Hazira, and Ahmedabad', 'Hazardous transport certified driver crews', 'IoT remote digital telemetry for customer storage tanks']
          },
          {
            heading: 'Cylinder Route Logistics',
            body: 'Scheduled route delivery trucks transporting high-pressure cylinders and 16-cylinder MCP bundles to fabrication and engineering workshops.'
          }
        ]
      };
    }

    if (slug === 'careers') {
      return {
        isFound: true,
        status: 200,
        canonicalPath: '/company/careers',
        canonicalUrl: `${BASE_URL}/company/careers`,
        title: 'Careers & Opportunities at Shakti Group | Industrial Gas Plants',
        description: 'Build your career in cryogenic engineering, ASU plant operations, and industrial gas logistics at Shakti Group. View current openings in Gujarat.',
        keywords: 'Careers Shakti Gases, Cryogenic Engineering Jobs Gujarat, Plant Operations Vacancies Vadodara, Industrial Gas Jobs',
        ogType: 'article',
        ogImage: DEFAULT_IMAGE,
        h1: 'Careers at Shakti Group Industrial Gas Plants',
        subtitle: 'Join our team of plant engineers, cryogenic technicians, hazardous transport captains, and sales consultants across Gujarat and Central India.',
        breadcrumbs: [
          { label: 'Home', path: '/' },
          { label: 'Company', path: '/company' },
          { label: 'Careers', path: '/company/careers' }
        ],
        schemaJson: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Shakti Group Careers',
          url: `${BASE_URL}/company/careers`
        },
        contentSections: [
          {
            heading: 'Why Work at Shakti Group?',
            body: 'With 25+ years of operational growth and continuous infrastructure expansion, Shakti Group offers careers in advanced cryogenic distillation, automation, and industrial safety.',
            items: ['Hands-on training with cutting-edge ASU distillation equipment', 'PESO statutory safety compliance culture', 'Competitive benefits and continuous professional development']
          },
          {
            heading: 'Current Openings & Application Desk',
            body: 'Send your resume directly to careers@shaktigases.com or info@shaktigases.com specifying your domain (Plant Operations, Logistics, QC Chemistry, or Industrial Sales).'
          }
        ]
      };
    }

    if (slug === 'sustainability') {
      return {
        isFound: true,
        status: 200,
        canonicalPath: '/company/sustainability',
        canonicalUrl: `${BASE_URL}/company/sustainability`,
        title: 'Environmental Sustainability & ESG Standards | Shakti Group',
        description: 'Learn about Shakti Group\'s commitment to industrial gas sustainability, carbon capture and CO₂ recycling, and energy-efficient cryogenic ASU distillation.',
        keywords: 'Industrial Gas Sustainability, CO2 Capture Gujarat, Green Cryogenics, Energy Efficient ASU Karjan',
        ogType: 'article',
        ogImage: DEFAULT_IMAGE,
        h1: 'Industrial Gas Sustainability & Carbon Capture Policy',
        subtitle: 'Pioneering industrial CO₂ recovery, zero-liquid-discharge plant cooling, and low-carbon cryogenic logistics across India.',
        breadcrumbs: [
          { label: 'Home', path: '/' },
          { label: 'Company', path: '/company' },
          { label: 'Sustainability', path: '/company/sustainability' }
        ],
        schemaJson: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Shakti Group Sustainability',
          url: `${BASE_URL}/company/sustainability`
        },
        contentSections: [
          {
            heading: 'Circular Carbon Economy & By-Product Recovery',
            body: 'Our CO₂ manufacturing units capture industrial by-product streams, purifying them into beverage and pharmaceutical grade liquid CO₂, preventing atmospheric venting.',
            items: ['270 TPD by-product CO₂ recovered daily', 'High-efficiency ASU expanders minimizing specific electrical consumption', 'Zero Liquid Discharge (ZLD) closed-loop water cooling circuits']
          },
          {
            heading: 'Responsible Industrial Stewardship',
            body: 'Certified under ISO 14001:2015 (Environmental Management) and ISO 45001:2018 (Occupational Health & Safety).'
          }
        ]
      };
    }

    const comp: CompanyPageData | undefined = COMPANY_SUBPAGES_DATA[slug];

    if (comp) {
      const canonicalPath = `/company/${slug}`;
      const title = comp.seoTitle || `${comp.title} | Shakti Group Corporate`;
      const description = comp.seoDesc || comp.subtitle;

      return {
        isFound: true,
        status: 200,
        canonicalPath,
        canonicalUrl: `${BASE_URL}${canonicalPath}`,
        title,
        description,
        keywords: comp.keywords || `${comp.title}, Shakti Group Operations`,
        ogType: 'article',
        ogImage: comp.heroImage || DEFAULT_IMAGE,
        h1: comp.title,
        subtitle: comp.subtitle,
        breadcrumbs: [
          { label: 'Home', path: '/' },
          { label: 'Company', path: '/company' },
          { label: comp.title, path: canonicalPath }
        ],
        schemaJson: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: comp.title,
          description,
          url: `${BASE_URL}${canonicalPath}`
        },
        contentSections: [
          {
            heading: comp.overviewHeading || 'Division Profile & Infrastructure',
            body: comp.overviewText?.join(' ') || comp.subtitle
          },
          {
            heading: 'Operational Accreditations & Standards',
            body: 'Compliance standards and statutory licenses:',
            items: comp.complianceList
          }
        ]
      };
    }
  }

  // 12. Non-existent URLs (Soft 404 Prevention -> Hard 404)
  return {
    isFound: false,
    status: 404,
    canonicalPath: '/404',
    canonicalUrl: `${BASE_URL}/404`,
    title: '404 - Page Not Found | Shakti Group',
    description: 'The requested page or gas specification could not be found on Shakti Group\'s industrial gas portal. Browse our gas catalog or contact our sales desk.',
    keywords: '404 Not Found, Shakti Group, Industrial Gases',
    ogType: 'website',
    ogImage: DEFAULT_IMAGE,
    h1: '404 - Page or Gas Specification Not Found',
    subtitle: 'The resource you requested may have been renamed, relocated, or does not exist on this server.',
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: '404 Not Found', path: '/404' }
    ],
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '404 - Page Not Found',
      description: 'The requested page could not be found.'
    },
    contentSections: [
      {
        heading: 'Looking for Industrial Gases or Cryogenic Logistics?',
        body: 'Please explore our comprehensive industrial gas catalog, turnkey engineering solutions, or contact our sales and logistics desk directly for assistance.'
      },
      {
        heading: 'Quick Navigation Links',
        body: 'You may find what you are looking for in these sections:',
        items: [
          'Bulk Cryogenic Liquids & Cylinders: /products',
          'Turnkey Tank Leasing & Engineering: /services',
          'Industry Vertical Solutions: /industries',
          'Contact Sales Desk (+91 9727783440): /contact'
        ]
      }
    ]
  };
}

/**
 * Generates semantic crawlable HTML for search engines and non-JS clients.
 */
export function buildSemanticHTML(seo: RouteSEOData): string {
  const breadcrumbHtml = seo.breadcrumbs
    .map((b, i) => {
      const isLast = i === seo.breadcrumbs.length - 1;
      return isLast
        ? `<span class="text-slate-500 font-medium">${escapeHtml(b.label)}</span>`
        : `<a href="${escapeHtml(b.path)}" class="text-sky-700 hover:underline">${escapeHtml(b.label)}</a> <span class="text-slate-400">/</span>`;
    })
    .join(' ');

  const sectionsHtml = seo.contentSections
    .map(sec => {
      const listHtml = sec.items && sec.items.length > 0
        ? `<ul style="margin-top:12px;list-style-type:disc;padding-left:24px;color:#334155;line-height:1.75;">
            ${sec.items.map(it => `<li>${escapeHtml(it)}</li>`).join('')}
          </ul>`
        : '';
      return `
        <section style="margin-top:32px;">
          <h2 style="font-size:22px;font-weight:700;color:#0f172a;margin-bottom:12px;letter-spacing:-0.01em;">${escapeHtml(sec.heading)}</h2>
          <p style="font-size:15px;color:#334155;line-height:1.75;margin:0;">${escapeHtml(sec.body)}</p>
          ${listHtml}
        </section>
      `;
    })
    .join('');

  return `
    <header style="background:#0b1329;color:#ffffff;padding:16px 24px;border-bottom:1px solid #1e293b;">
      <div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:#ffffff;">
            <img src="/ShaktiLogo.svg" alt="Shakti Group" width="48" height="34" style="height:34px;width:auto;" />
            <div>
              <span style="font-size:16px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;display:block;">SHAKTI GROUP</span>
              <span style="font-size:10px;color:#38bdf8;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">INDUSTRIAL GASES & CRYOGENICS</span>
            </div>
          </a>
        </div>
        <nav style="display:flex;align-items:center;gap:20px;font-size:13px;font-weight:600;">
          <a href="/products" style="color:#e2e8f0;text-decoration:none;">Products</a>
          <a href="/services" style="color:#e2e8f0;text-decoration:none;">Solutions</a>
          <a href="/industries" style="color:#e2e8f0;text-decoration:none;">Industries</a>
          <a href="/about" style="color:#e2e8f0;text-decoration:none;">About</a>
          <a href="/contact" style="background:#0284c7;color:#ffffff;padding:8px 16px;border-radius:6px;text-decoration:none;">Contact & RFQ</a>
        </nav>
      </div>
    </header>

    <main style="max-width:1200px;margin:0 auto;padding:32px 24px 64px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size:13px;margin-bottom:20px;">
        ${breadcrumbHtml}
      </nav>

      <article>
        <header style="border-bottom:1px solid #e2e8f0;padding-bottom:24px;margin-bottom:28px;">
          <h1 style="font-size:32px;font-weight:800;color:#0f172a;line-height:1.2;margin:0 0 12px;letter-spacing:-0.02em;">
            ${escapeHtml(seo.h1)}
          </h1>
          <p style="font-size:17px;color:#475569;line-height:1.6;margin:0;max-width:850px;">
            ${escapeHtml(seo.subtitle)}
          </p>
        </header>

        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:20px 24px;margin-bottom:32px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
          <div>
            <div style="font-weight:700;font-size:14px;color:#0f172a;">Direct Commercial Inquiries & Logistics Dispatch:</div>
            <div style="font-size:13px;color:#475569;margin-top:2px;">Ranoli GIDC, Vadodara, Gujarat | 24x7 Hotline: <strong>+91 9727783440</strong> | Email: <strong>info@shaktigases.com</strong></div>
          </div>
          <div>
            <a href="/contact" style="display:inline-block;background:#0284c7;color:#ffffff;font-size:13px;font-weight:700;padding:10px 18px;border-radius:6px;text-decoration:none;">Request Formal RFQ</a>
          </div>
        </div>

        ${sectionsHtml}
      </article>
    </main>

    <footer style="background:#0f172a;color:#94a3b8;font-size:13px;padding:40px 24px;border-top:1px solid #1e293b;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <div style="max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;flex-wrap:wrap;gap:24px;">
        <div>
          <div style="font-weight:800;font-size:15px;color:#ffffff;margin-bottom:6px;">SHAKTI GROUP</div>
          <p style="margin:0;max-width:360px;line-height:1.6;">Premier manufacturer of industrial, cryogenic, and specialty gases in Western and Central India since 1998.</p>
        </div>
        <div>
          <div style="font-weight:700;color:#ffffff;margin-bottom:8px;">Manufacturing Footprint</div>
          <p style="margin:0;line-height:1.6;">178 TPD Karjan Air Separation Unit (Vadodara) | 270 TPD CO₂ Plants (Indore, Ahmedabad, Hyderabad) | 65+ Cryogenic Road Tankers</p>
        </div>
      </div>
      <div style="max-width:1200px;margin:24px auto 0;padding-top:20px;border-top:1px solid #1e293b;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:12px;">
        <div>&copy; 1998-2026 Shakti Industrial Gases. All rights reserved. Registered under PESO, ISO 9001:2015, FDA & FSSAI.</div>
        <div><a href="/contact" style="color:#38bdf8;text-decoration:none;">Contact Sales & Engineering</a></div>
      </div>
    </footer>
  `;
}

/**
 * Injects route-specific SEO metadata and pre-rendered semantic HTML into the HTML template.
 */
export function renderRouteHtml(
  rawUrl: string,
  templateHtml: string
): { status: 200 | 404; html: string; seo: RouteSEOData } {
  const seo = resolveRouteSEO(rawUrl);
  const semanticHtml = buildSemanticHTML(seo);

  let html = templateHtml;

  // 1. Replace Title
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);

  // 2. Replace or Inject Meta Description
  if (html.includes('<meta name="description"')) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(seo.description)}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${escapeHtml(seo.description)}" />\n</head>`);
  }

  // 3. Replace or Inject Canonical URL (Self-referencing per route)
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${seo.canonicalUrl}" />`
    );
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${seo.canonicalUrl}" />\n</head>`);
  }

  // 4. OpenGraph Tags
  if (html.includes('<meta property="og:title"')) {
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(seo.title)}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta property="og:title" content="${escapeHtml(seo.title)}" />\n</head>`);
  }

  if (html.includes('<meta property="og:description"')) {
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(seo.description)}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta property="og:description" content="${escapeHtml(seo.description)}" />\n</head>`);
  }

  if (html.includes('<meta property="og:url"')) {
    html = html.replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${seo.canonicalUrl}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta property="og:url" content="${seo.canonicalUrl}" />\n</head>`);
  }

  if (html.includes('<meta property="og:type"')) {
    html = html.replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:type" content="${escapeHtml(seo.ogType)}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta property="og:type" content="${escapeHtml(seo.ogType)}" />\n</head>`);
  }

  if (html.includes('<meta property="og:image"')) {
    html = html.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${escapeHtml(seo.ogImage)}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta property="og:image" content="${escapeHtml(seo.ogImage)}" />\n</head>`);
  }

  // 5. Twitter Card Tags
  if (html.includes('<meta name="twitter:title"')) {
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta name="twitter:title" content="${escapeHtml(seo.title)}" />\n</head>`);
  }

  if (html.includes('<meta name="twitter:description"')) {
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta name="twitter:description" content="${escapeHtml(seo.description)}" />\n</head>`);
  }

  if (html.includes('<meta name="twitter:image"')) {
    html = html.replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:image" content="${escapeHtml(seo.ogImage)}" />`
    );
  } else {
    html = html.replace('</head>', `  <meta name="twitter:image" content="${escapeHtml(seo.ogImage)}" />\n</head>`);
  }

  if (!seo.isFound && !html.includes('robots')) {
    html = html.replace('</head>', `  <meta name="robots" content="noindex, follow" />\n</head>`);
  }

  // Remove placeholder google-site-verification if present
  html = html.replace(/<meta\s+name="google-site-verification"\s+content="YOUR_CODE_HERE"\s*\/?>/gi, '');

  // 6. Invalidate / replace old Schema.org with route JSON-LD
  const schemaScript = `<script type="application/ld+json" id="route-schema">\n${JSON.stringify(seo.schemaJson, null, 2)}\n  </script>`;
  if (html.includes('application/ld+json')) {
    html = html.replace(
      /<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/i,
      schemaScript
    );
  } else {
    html = html.replace('</head>', `  ${schemaScript}\n</head>`);
  }

  // 7. Pre-rendered HTML inside <div id="root">
  if (html.includes('<!--ssr-content-start-->') && html.includes('<!--ssr-content-end-->')) {
    html = html.replace(
      /<!--ssr-content-start-->[\s\S]*?<!--ssr-content-end-->/,
      `<!--ssr-content-start-->\n${semanticHtml}\n<!--ssr-content-end-->`
    );
  } else if (html.includes('<!--ssr-content-->')) {
    html = html.replace('<!--ssr-content-->', semanticHtml);
  } else {
    // Robust regex fallback replacing inside root div
    const rootOpen = '<div id="root">';
    const rootPos = html.indexOf(rootOpen);
    if (rootPos !== -1) {
      const scriptPos = html.indexOf('<script', rootPos);
      if (scriptPos !== -1) {
        const lastDivPos = html.lastIndexOf('</div>', scriptPos);
        if (lastDivPos > rootPos) {
          html = html.slice(0, rootPos + rootOpen.length) + '\n' + semanticHtml + '\n' + html.slice(lastDivPos);
        }
      }
    }
  }

  return {
    status: seo.status,
    html,
    seo
  };
}
