// Centralized mapping of success case images for Open Graph and social sharing
// All images are optimized for 1200x630px (Facebook/LinkedIn recommended size)

export const successCaseImages = {
  // Images matching exactly with cards in SuccessCasesSection
  drParron: "/lovable-uploads/dr-parron.png",
  aistercel: "/lovable-uploads/8590eeb0-6b06-40bb-9703-6b4b4747bc73.png",
  alfixConsultores: "/lovable-uploads/ac02e71a-419d-4ad5-b089-5e8472a441c5.png",
  almaCruceros: "/lovable-uploads/9b7cad00-2cca-451d-a515-ac666898dbc9.png",
  asendia: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  aspAsepsia: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
  bekaFinance: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2069&auto=format&fit=crop",
  belugaLinguistics: "/lovable-uploads/871690e2-0d95-456b-86a1-c284ffaf7d5e.png",
  bufeteMaseras: "/lovable-uploads/6cf96609-e73c-4a3b-8939-bdc4e1330033.png",
  buhobike: "/lovable-uploads/fefc6b22-9bf5-4307-8e2c-f3693015279f.png",
  cabreraCervantes: "/lovable-uploads/cabrera-cervantes-asesoria-legal-optimized.png",
  calistheniaOnline: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
  carniceriaPicosDeEuropa: "/lovable-uploads/4f747803-3608-4e40-96a3-e5ffb9c63060.png",
  centroRoraima: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
  conversaConsultores: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  corteAFilms: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2069&auto=format&fit=crop",
  evaChampion: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
  flap: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2069&auto=format&fit=crop",
  formatoEducativo: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
  giveAndGo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2069&auto=format&fit=crop",
  hikvision: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2069&auto=format&fit=crop",
  hubSpotForStartups: "/lovable-uploads/68040c9d-5328-4150-b069-890a269bf640.png",
  inboundStudents: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  iVirgenExtra: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2069&auto=format&fit=crop",
  jointsUp: "/lovable-uploads/00117a14-e9f2-49f7-87ad-ce32c0897eb7.png",
  laBaneraKD: "/lovable-uploads/30665cd3-50a6-4406-a490-bb3a841e31c7.png",
  laOrientalSinGluten: "/lovable-uploads/f992e622-1775-438c-9118-04b7bb343f9c.png",
  lualca: "/lovable-uploads/df8f6237-aac2-47a2-b379-253f7c1e7dd5.png",
  modaIntimaVania: "https://intimavania.com/img/cms/lookbook/25H/1603_1.jpg",
  nexoVital: "/lovable-uploads/a07d3b40-7f87-4665-a586-cc46889c713b.png",
  novaPraxis: "/lovable-uploads/055f5f22-cdd1-4c89-b5a3-a530dab05581.png",
  omr: "/lovable-uploads/db7fa3bb-b3cd-437c-bdab-9aaa050b134e.png",
  owoGame: "/lovable-uploads/7020d8c9-edab-4298-9eed-8d2dd8d97487.png",
  pamdamedia: "/lovable-uploads/74e85587-2487-455d-a14a-f218a5ac37a1.png",
  peixosEmilio: "/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png",
  perisElectricidad: "/lovable-uploads/0f26012e-fbd2-4dcb-a1a8-3bdd380a0c10.png",
  plazaEstacion: "/lovable-uploads/69abb7c5-dcbb-4711-9201-5d724ed944f3.png",
  quanticBI: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2069&auto=format&fit=crop",
  rivasCentro: "/lovable-uploads/de93dd1b-7f99-4499-81a7-87a1ec7c9d5f.png",
  suministrosXSKD: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
  translateWithStyle: "/lovable-uploads/093269a5-534e-41b3-9cca-a656adc014ca.png",
  wideum: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  wooptix: "/lovable-uploads/e38029c3-0b86-40ab-9262-21d4d0516c2e.png"
} as const;

export type SuccessCaseImageKey = keyof typeof successCaseImages;

// Helper function to get absolute URL for social sharing
export const getAbsoluteImageUrl = (imageKey: SuccessCaseImageKey, baseUrl: string = window.location.origin): string => {
  const imagePath = successCaseImages[imageKey];
  return imagePath.startsWith('/') ? `${baseUrl}${imagePath}` : imagePath;
};
