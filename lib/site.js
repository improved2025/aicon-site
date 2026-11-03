// Single source of truth for clinic facts. Anything marked pending: true
// is shown on the site with a "pending" tag until the clinic confirms it.

export const clinic = {
  name: "Aicon Family Clinic",
  legalName: "Aicon Family Clinic, LLC",
  street: "16261 FM 529 Road, Suite A",
  city: "Houston, TX 77095",
  phone: "(281) 550-5388",
  phoneHref: "tel:+12815505388",
  fax: "(281) 550-5325",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=16261+FM+529+Road+Suite+A+Houston+TX+77095",
  hours: [
    { day: "Monday to Friday", time: "8:30 AM to 5:30 PM" },
    { day: "Saturday", time: "9:00 AM to 1:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const provider = {
  name: "Kindness Chukwukere",
  displayName: "Dr. Kindness Chukwukere",
  credentials: "DNP, APRN, FNP",
};

// Booking link from the Setmore Health account. Leave null until the
// clinic confirms the account was opened as Setmore Health (with a BAA).
export const BOOKING_URL = null;

export const telehealthHours = [
  { day: "Monday to Friday", time: "8:00 AM to 8:00 PM" },
  { day: "Saturday", time: "8:00 AM to 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export const states = [
  { name: "Texas" },
  { name: "Georgia" },
  { name: "Florida" },
  { name: "California" },
  { name: "Arkansas" },
  { name: "Maryland" },
  { name: "Colorado" },
  { name: "New York", pending: true },
];

export const visits = [
  {
    name: "General sick visit",
    price: 65,
    note: "Colds, sinus trouble, rashes, urinary symptoms and other everyday illness. Open to new and returning patients.",
  },
  {
    name: "New patient consultation",
    price: 99,
    note: "Your first visit for ongoing care. We review your history, medications and goals.",
  },
  {
    name: "Established patient follow-up",
    price: 60,
    note: "A check in on something we are already treating.",
  },
  {
    name: "Chronic disease management, initial",
    price: 89,
    note: "Diabetes, high blood pressure, asthma, reflux and similar long term conditions.",
  },
  {
    name: "Chronic disease follow-up",
    price: 75,
    note: "Ongoing visits for a condition we are already managing.",
  },
  {
    name: "Weight loss consultation",
    price: 119,
    note: "A full evaluation and a plan built for you. Medication is prescribed only when it is medically appropriate.",
  },
  {
    name: "Weight loss follow-up",
    price: 79,
    note: "Progress check and plan adjustments.",
  },
  {
    name: "Women's or men's health consultation",
    price: 99,
    note: "Concerns that can be discussed and evaluated by video. Exams such as Pap smears are done at the clinic.",
  },
  {
    name: "Medication refill consultation",
    price: 55,
    note: "Refills of non-controlled medications after a review with the provider.",
  },
  {
    name: "Lab results consultation",
    price: 50,
    note: "We walk you through your results and the next step.",
  },
];
