import { projectsData } from "@/data/projects";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VS Group of Companies",
    "alternateName": "VS Group",
    "url": "https://vsgroupofcompanies.com",
    "logo": "https://vsgroupofcompanies.com/images/logo/VS%20Group%20logo.png",
    "foundingDate": "2015",
    "founders": [
      {
        "@type": "Person",
        "name": "Vasudev Achmeti"
      },
      {
        "@type": "Person",
        "name": "Suresh Achmeti"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7499035904",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "mr"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "VS Group of Companies",
    "image": "https://vsgroupofcompanies.com/images/logo/VS%20Group%20logo.png",
    "@id": "https://vsgroupofcompanies.com/#localbusiness",
    "url": "https://vsgroupofcompanies.com",
    "telephone": "+91-7499035904",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Krupa Heights, Ground Floor, Office No 1, Beltika Nagar, Wakad",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411057",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.590925,
      "longitude": 73.753382
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // Convert projects to Schema format
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projectsData.map((project, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://vsgroupofcompanies.com/projects/${project.slug}`,
      "name": project.name
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
    </>
  );
}
