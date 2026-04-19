import BartlettTennisStringing from "./BartlettTennisStringing";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "String Theory NYC",
  description:
    "Professional tennis racket stringing service in Manhattan, NYC. Serving the Upper East Side.",
  url: "https://stringtheorynyc.com",
  telephone: "+12038645462",
  address: {
    "@type": "PostalAddress",
    streetAddress: "347 E 76th St",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10021",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7726,
    longitude: -73.9554,
  },
  sameAs: ["https://www.instagram.com/StringTheoryNYC"],
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "New York",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BartlettTennisStringing />
    </>
  );
}
