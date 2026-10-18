// Real business facts for MAK Luxury Salon (researched 2026-10-18).
// Flagged items (hours closing time, prices, testimonials) must be confirmed
// with the owner before this demo is pitched.
export const BUSINESS = {
  name: "MAK Luxury Salon",
  tagline: "Rohini's luxury unisex salon — hair, nails, skin & makeup",
  phone: "+91 98718 22365",
  phoneHref: "tel:+919871822365",
  whatsapp: "https://wa.me/919871822365",
  address: "Shop No. 310, 3rd Floor, City Centre Mall, Near Rohini West Metro Station, Rohini Sector 10, Delhi – 110085",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=MAK+Luxury+Salon+City+Centre+Mall+Rohini+Sector+10+Delhi",
  hours: "Mon – Sun · 10:30 AM – 9:00 PM", // closing time unconfirmed for Rohini outlet
  established: 2012,
  rating: "4.7",
  reviews: "1,590+",
};

export const SERVICES = [
  {
    title: "Hair",
    image: "images/service-hair-color.webp",
    items: ["Haircuts & styling", "Hair straightening", "Hair smoothening", "Balayage hair colour", "Hair spa & keratin"],
  },
  {
    title: "Nails",
    image: "images/service-nails.webp",
    items: ["Artificial nail extensions", "Gel polish & nail art", "Manicure & pedicure", "Nail refilling"],
  },
  {
    title: "Skin",
    image: "images/hero-salon.webp",
    items: ["Signature facials", "Clean-ups & de-tan", "Skin polishing", "Waxing & threading"],
  },
  {
    title: "Makeup",
    image: "images/service-bridal.webp",
    items: ["Party makeup", "Light / nude makeup", "High-fashion photographic makeup", "Bridal & groom makeup"],
  },
];

// Indicative Rohini-market pricing — REPLACE with the salon's real rate card before pitching.
export const PACKAGES = [
  {
    name: "Essential",
    price: "₹499",
    unit: "starting",
    blurb: "Everyday grooming, done right.",
    features: ["Haircut & styling", "Classic manicure / pedicure", "Threading & waxing", "Head massage (15 min)"],
    featured: false,
  },
  {
    name: "Signature",
    price: "₹2,499",
    unit: "starting",
    blurb: "Our most-loved transformations.",
    features: ["Balayage / global colour", "Hair spa + keratin gloss", "Gel nail extensions", "Party makeup trial"],
    featured: true,
  },
  {
    name: "Bridal",
    price: "₹14,999",
    unit: "starting",
    blurb: "The full wedding-day ritual.",
    features: ["Pre-bridal skin plan", "Bridal + groom makeup", "Hair & nail styling", "Saree draping on the day"],
    featured: false,
  },
];

// Illustrative testimonials in the spirit of real reviews — replace with real ones before pitching.
export const TESTIMONIALS = [
  { name: "Priya S.", text: "Got balayage done here and the colour is exactly what I showed them. Staff actually listens instead of rushing you.", service: "Balayage hair colour" },
  { name: "Rahul M.", text: "Best haircut I've had in Rohini. Clean place, proper consultation before they pick up the scissors.", service: "Haircut & styling" },
  { name: "Simran K.", text: "Nail extensions lasted a full month without a single lift. The nail artist is genuinely talented.", service: "Nail extensions" },
  { name: "Anjali V.", text: "Booked party makeup for my sister's engagement — it photographed beautifully and stayed all evening.", service: "Party makeup" },
  { name: "Karan J.", text: "Took the hair spa + smoothening package. My frizz is gone and the whole experience felt premium.", service: "Hair smoothening" },
  { name: "Neha R.", text: "Came for a facial before a wedding. Skin was glowing for days. Booking on call was easy.", service: "Signature facial" },
];

export const FAQS = [
  { q: "Do I need an appointment, or can I walk in?", a: "Walk-ins are welcome, but weekends fill fast — we recommend booking a day ahead on call or WhatsApp so your stylist is reserved." },
  { q: "Do you offer services for men as well?", a: "Yes, we're a fully unisex salon — haircuts, colour, grooming and spa services for men, plus dedicated groom makeup packages." },
  { q: "Where exactly are you located?", a: "Shop 310, 3rd Floor, City Centre Mall, right next to Rohini West Metro Station in Sector 10 — easy to reach from anywhere in Rohini." },
  { q: "Do you do bridal bookings?", a: "Yes — bridal and pre-bridal packages include a skin plan, trial makeup session, and on-the-day hair, makeup and draping. Book 2–3 weeks ahead in wedding season." },
  { q: "What are your timings?", a: "We're open every day, 10:30 AM to 9:00 PM." },
];
