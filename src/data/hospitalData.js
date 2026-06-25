export const HOSPITAL_NAME = "Arova Health Care";
export const HOSPITAL_TAGLINE = "Excellence in Every Heartbeat";
export const HELPLINE = "+91 40 4567 8900";

export const specialities = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "❤️",
    description: "Advanced heart care with cath labs, angioplasty, and cardiac surgery.",
    treatments: ["Angioplasty", "Bypass Surgery", "Heart Failure Management"],
    benefits: [
      "24/7 cardiac emergency support",
      "Digital cath lab and advanced imaging",
      "Experienced interventional cardiologists",
    ],
  },
  {
    id: "neuroscience",
    name: "Neuroscience",
    icon: "🧠",
    description: "Comprehensive brain and spine care with minimally invasive neurosurgery.",
    treatments: ["Stroke Care", "Epilepsy", "Spine Surgery"],
    benefits: [
      "Dedicated stroke unit",
      "Minimally invasive neurosurgery",
      "Advanced neurology diagnostics",
    ],
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: "🎗️",
    description: "Multidisciplinary cancer care with radiation and medical oncology.",
    treatments: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology"],
    benefits: [
      "Linear accelerator radiation therapy",
      "Multidisciplinary tumor board",
      "Personalized cancer treatment plans",
    ],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "🦴",
    description: "Joint replacement, sports medicine, and trauma care.",
    treatments: ["Knee Replacement", "Arthroscopy", "Fracture Care"],
    benefits: [
      "Robotic-assisted joint replacement",
      "Sports injury rehabilitation",
      "Trauma and fracture specialists",
    ],
  },
  {
    id: "nephrology",
    name: "Nephrology",
    icon: "💧",
    description: "Kidney care including dialysis and transplant programs.",
    treatments: ["Dialysis", "Kidney Transplant", "Hypertension Care"],
    benefits: [
      "Advanced dialysis units",
      "Kidney transplant program",
      "Chronic kidney disease management",
    ],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "👶",
    description: "Dedicated child health services from neonatal to adolescent care.",
    treatments: ["NICU", "Vaccination", "Child Development"],
    benefits: [
      "Neonatal and pediatric ICU",
      "Child-friendly care environment",
      "Vaccination and wellness programs",
    ],
  },
];

export const technologies = [
  {
    id: "robotic-surgery",
    name: "Robotic Surgery",
    icon: "🤖",
    description: "Da Vinci robotic systems for precision minimally invasive procedures.",
    details:
      "Our Da Vinci robotic surgery platform enables surgeons to perform complex procedures through tiny incisions with enhanced precision, 3D visualization, and improved recovery times.",
    benefits: ["Smaller incisions", "Faster recovery", "Reduced blood loss", "Higher surgical precision"],
    usedFor: ["Orthopedic joint replacement", "Oncology procedures", "Urology and general surgery"],
  },
  {
    id: "mri-pet-ct",
    name: "3T MRI & PET-CT",
    icon: "🔬",
    description: "Advanced diagnostic imaging for accurate early detection.",
    details:
      "High-field 3T MRI combined with PET-CT scanning delivers exceptional image clarity for early diagnosis of neurological, cardiac, and oncological conditions.",
    benefits: ["Early disease detection", "High-resolution imaging", "Combined functional and anatomical scans"],
    usedFor: ["Brain and spine imaging", "Cancer staging", "Cardiac assessment"],
  },
  {
    id: "digital-cath-lab",
    name: "Digital Cath Lab",
    icon: "📡",
    description: "State-of-the-art cardiac catheterization for interventional cardiology.",
    details:
      "Our digital catheterization laboratory supports angioplasty, stent placement, and advanced cardiac interventions with real-time imaging and minimal radiation exposure.",
    benefits: ["Real-time cardiac imaging", "Minimally invasive heart procedures", "24/7 emergency cardiac care"],
    usedFor: ["Angioplasty", "Stent placement", "Cardiac diagnostics"],
  },
  {
    id: "linear-accelerator",
    name: "Linear Accelerator",
    icon: "⚡",
    description: "Precision radiation therapy for oncology patients.",
    details:
      "The linear accelerator delivers targeted radiation therapy that destroys cancer cells while sparing surrounding healthy tissue, with customized treatment plans for each patient.",
    benefits: ["Targeted radiation delivery", "Shorter treatment sessions", "Personalized oncology plans"],
    usedFor: ["Radiation therapy", "Tumor treatment", "Palliative cancer care"],
  },
  {
    id: "modular-ot",
    name: "Modular OT",
    icon: "🏥",
    description: "HEPA-filtered operation theatres with laminar airflow.",
    details:
      "Modular operation theatres with HEPA filtration and laminar airflow maintain sterile surgical environments for complex and high-risk procedures.",
    benefits: ["Infection control", "Sterile surgical environment", "Advanced surgical infrastructure"],
    usedFor: ["Cardiac surgery", "Neurosurgery", "Major orthopedic procedures"],
  },
  {
    id: "tele-icu",
    name: "Tele-ICU",
    icon: "📱",
    description: "24/7 remote critical care monitoring and specialist support.",
    details:
      "Tele-ICU connects critical care specialists to bedside teams around the clock, enabling faster decisions and continuous monitoring for ICU patients.",
    benefits: ["24/7 specialist oversight", "Faster critical care response", "Remote patient monitoring"],
    usedFor: ["ICU monitoring", "Emergency critical care", "Post-operative recovery"],
  },
];

export const surgeons = [
  {
    id: "dr-sneha-reddy",
    name: "Dr. Sneha Reddy",
    speciality: "Cardiology",
    experience: "18 Years",
    qualification: "DM Cardiology, AIIMS",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    available: "Mon–Fri, 10 AM – 4 PM",
  },
  {
    id: "dr-arun-kumar",
    name: "Dr. Arun Kumar",
    speciality: "Neuroscience",
    experience: "22 Years",
    qualification: "MCh Neurosurgery",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    available: "Mon–Sat, 9 AM – 2 PM",
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    speciality: "Oncology",
    experience: "15 Years",
    qualification: "DM Medical Oncology",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    available: "Tue–Sat, 11 AM – 5 PM",
  },
  {
    id: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    speciality: "Orthopedics",
    experience: "20 Years",
    qualification: "MS Orthopedics, FRCS",
    image: "https://images.unsplash.com/photo-1622253692010-333fbd2762f0?w=400&h=400&fit=crop",
    available: "Mon–Fri, 3 PM – 8 PM",
  },
  {
    id: "dr-anita-rao",
    name: "Dr. Anita Rao",
    speciality: "Pediatrics",
    experience: "12 Years",
    qualification: "MD Pediatrics",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&invalid=1",
    available: "Mon–Sat, 9 AM – 1 PM",
  },
  {
    id: "dr-kiran-das",
    name: "Dr. Kiran Das",
    speciality: "Nephrology",
    experience: "16 Years",
    qualification: "DM Nephrology",
    image: "https://invalid-url.example/doctor.jpg",
    available: "Mon–Fri, 2 PM – 6 PM",
  },
];

export const emergencyDoctors = [
  {
    id: "dr-ravi-menon",
    name: "Dr. Ravi Menon",
    speciality: "Emergency Medicine",
    available: "Available Now — 24/7",
    contact: "+91 40 4567 8901",
  },
  {
    id: "dr-meera-iyer",
    name: "Dr. Meera Iyer",
    speciality: "Trauma & Emergency",
    available: "Available Now — 24/7",
    contact: "+91 40 4567 8902",
  },
  {
    id: "dr-sandeep-nair",
    name: "Dr. Sandeep Nair",
    speciality: "Critical Care",
    available: "On Duty — Until 8 PM",
    contact: "+91 40 4567 8903",
  },
];

export const branches = [
  {
    id: "somajiguda",
    name: "Main Branch",
    area: "Somajiguda",
    address: "Somajiguda, Hyderabad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Somajiguda+Hyderabad+hospital",
  },
  {
    id: "gachibowli",
    name: "Gachibowli",
    area: "Gachibowli",
    address: "Near Financial District, Hyderabad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gachibowli+Hyderabad+hospital",
  },
  {
    id: "madhapur",
    name: "Madhapur",
    area: "Madhapur",
    address: "Near HITEC City, Hyderabad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Madhapur+Hyderabad+hospital",
  },
  {
    id: "kukatpally",
    name: "Kukatpally",
    area: "Kukatpally",
    address: "Near KPHB Metro, Hyderabad",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kukatpally+Hyderabad+hospital",
  },
];

export const stats = [
  { value: "2,500+", label: "Hospital Beds" },
  { value: "350+", label: "Expert Doctors" },
  { value: "30+", label: "Years of Trust" },
  { value: "24/7", label: "Emergency Care" },
];

export function getDoctorsBySpeciality(specialityName) {
  return surgeons.filter((d) => d.speciality === specialityName);
}

export function openBranchMaps(branch) {
  window.open(branch.mapsUrl, "_blank", "noopener,noreferrer");
}
