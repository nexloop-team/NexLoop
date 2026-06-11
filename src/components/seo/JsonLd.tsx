/**
 * JsonLd – Server component.
 * Injects structured data scripts into <head> via Next.js Script or inline.
 * Three schemas: Organization, WebSite, and ProfessionalService (LocalBusiness).
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nexloop.in/#organization",
    name: "NexLoop",
    url: "https://nexloop.in",
    logo: "https://nexloop.in/favicon/icon0.svg",
    email: "team.nexloop@gmail.com",
    description:
      "NexLoop is a product-focused digital agency that builds websites, mobile applications, AI automation systems, AI chatbots, AI voice agents, and WhatsApp automation solutions for businesses.",
    founder: [
      {
        "@type": "Person",
        name: "Nikhil Wagh",
      },
      {
        "@type": "Person",
        name: "Atharva",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/nexloop-solutions",
      "https://www.instagram.com/nexloop.io/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "team.nexloop@gmail.com",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nexloop.in/#website",
    url: "https://nexloop.in",
    name: "NexLoop",
    description:
      "AI Automation, Websites, Mobile Apps & Digital Solutions for growing businesses.",
    publisher: {
      "@id": "https://nexloop.in/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://nexloop.in/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://nexloop.in/#local-business",
    name: "NexLoop",
    url: "https://nexloop.in",
    email: "team.nexloop@gmail.com",
    logo: "https://nexloop.in/favicon/icon0.svg",
    image: "https://nexloop.in/images/og-image.png",
    description:
      "NexLoop builds websites, mobile apps, AI automation systems, AI chatbots, AI voice agents, and WhatsApp automation for growing businesses.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NexLoop Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description:
              "Custom business websites and landing pages built with Next.js for performance and conversion.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Cross-platform mobile applications for iOS and Android.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation",
            description:
              "Business process automation using AI agents and workflows to reduce manual work and increase efficiency.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Chatbots",
            description:
              "Intelligent chatbots that handle customer queries, lead capture, and support 24/7.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Voice Agents",
            description:
              "AI-powered voice agents for inbound and outbound call automation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WhatsApp Automation",
            description:
              "Automated WhatsApp workflows for lead nurturing, customer engagement, and business communication.",
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/company/nexloop-solutions",
      "https://www.instagram.com/nexloop.io/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
    </>
  );
}
