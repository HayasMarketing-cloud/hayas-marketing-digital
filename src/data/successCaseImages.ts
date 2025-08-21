// Centralized mapping of success case images for Open Graph and social sharing
// All images are optimized for 1200x630px (Facebook/LinkedIn recommended size)

export const successCaseImages = {
  // Existing cases with current images
  aistercel: "/lovable-uploads/0f26012e-fbd2-4dcb-a1a8-3bdd380a0c10.png",
  alfixConsultores: "/lovable-uploads/ac02e71a-419d-4ad5-b089-5e8472a441c5.png",
  almaCruceros: "/lovable-uploads/9b7cad00-2cca-451d-a515-ac666898dbc9.png",
  asendia: "/lovable-uploads/871690e2-0d95-456b-86a1-c284ffaf7d5e.png",
  aspAsepsia: "/lovable-uploads/6cf96609-e73c-4a3b-8939-bdc4e1330033.png",
  bekaFinance: "/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png",
  belugaLinguistics: "/lovable-uploads/de93dd1b-7f99-4499-81a7-87a1ec7c9d5f.png",
  bufeteMaseras: "/lovable-uploads/f992e622-1775-438c-9118-04b7bb343f9c.png",
  buhobike: "/lovable-uploads/fefc6b22-9bf5-4307-8e2c-f3693015279f.png",
  calistheniaOnline: "/lovable-uploads/7020d8c9-edab-4298-9eed-8d2dd8d97487.png",
  carniceriaPicosDeEuropa: "/lovable-uploads/055f5f22-cdd1-4c89-b5a3-a530dab05581.png",
  centroRoraima: "/lovable-uploads/8590eeb0-6b06-40bb-9703-6b4b4747bc73.png",
  conversaConsultores: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop",
  corteAFilms: "/lovable-uploads/4f747803-3608-4e40-96a3-e5ffb9c63060.png",
  evaChampion: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  flap: "/lovable-uploads/68040c9d-5328-4150-b069-890a269bf640.png",
  formatoEducativo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  giveAndGo: "/lovable-uploads/df8f6237-aac2-47a2-b379-253f7c1e7dd5.png",
  hikvision: "/lovable-uploads/74e85587-2487-455d-a14a-f218a5ac37a1.png",
  hubSpotForStartups: "/lovable-uploads/69abb7c5-dcbb-4711-9201-5d724ed944f3.png",
  inboundStudents: "/lovable-uploads/a07d3b40-7f87-4665-a586-cc46889c713b.png",
  iVirgenExtra: "/lovable-uploads/b07a61c5-c2de-4de9-b7c0-ef3bb40498ed.png",
  jointsUp: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2070&auto=format&fit=crop",
  laBaneraKD: "/lovable-uploads/b18fc977-3bb3-4613-8232-8fac4fb4d9ee.png",
  laOrientalSinGluten: "/lovable-uploads/b382aaea-b6ea-4bda-87a6-69cce15e9e59.png",
  lualca: "/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png",
  modaIntimaVania: "/lovable-uploads/b4b8749f-0600-4376-8d4f-b15521fae5df.png",
  nexoVital: "/lovable-uploads/a07d3b40-7f87-4665-a586-cc46889c713b.png",
  novaPraxis: "/lovable-uploads/b6816c4b-e843-4d7b-b2b9-7f935a389f54.png",
  omr: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop",
  owoGame: "/lovable-uploads/bf24688d-75b9-4512-979e-8e9ace8f1643.png",
  pamdamedia: "/lovable-uploads/pamdamedia-laptop-mockup.png",
  peixosEmilio: "/lovable-uploads/ce1fa101-303c-4d7c-8fcf-c33db3e18dba.png",
  perisElectricidad: "/lovable-uploads/d5141b27-1db2-4f9b-8ff4-486fb23e0ae8.png",
  plazaEstacion: "/lovable-uploads/d597d918-bb87-477e-8fb1-7d8a7ba41138.png",
  quanticBI: "/lovable-uploads/da9fe9f5-5fa0-4e88-b211-cca674665b34.png",
  rivasCentro: "/lovable-uploads/db3b7311-53c8-4d88-9818-3377203174a3.png",
  suministrosXSKD: "/lovable-uploads/db7fa3bb-b3cd-437c-bdab-9aaa050b134e.png",
  translateWithStyle: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
  wooptix: "/lovable-uploads/e38029c3-0b86-40ab-9262-21d4d0516c2e.png"
} as const;

export type SuccessCaseImageKey = keyof typeof successCaseImages;

// Helper function to get absolute URL for social sharing
export const getAbsoluteImageUrl = (imageKey: SuccessCaseImageKey, baseUrl: string = window.location.origin): string => {
  const imagePath = successCaseImages[imageKey];
  return imagePath.startsWith('/') ? `${baseUrl}${imagePath}` : imagePath;
};
