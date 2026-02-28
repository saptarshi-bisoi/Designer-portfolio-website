// ============================================================
//  PORTFOLIO PROJECTS DATA
//  To add a new project: just append an object to this array.
//  Place the image in /public/images/projects/<filename>
// ============================================================

export interface Project {
  id: number
  title: string
  category: string
  image: string
  pinterestUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TechTribe – Dark Logo",
    category: "Brand Identity",
    image: "/images/projects/TechTribe-DarkLOGO.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: true,
  },
  {
    id: 2,
    title: "TechTribe – Light Logo",
    category: "Brand Identity",
    image: "/images/projects/TechTribe-BrightLOGO.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 3,
    title: "ImpulseCV – Volunteer Poster",
    category: "Poster Design",
    image: "/images/projects/VOLUNTEER.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: true,
  },
  {
    id: 4,
    title: "ImpulseCV – Music Event Poster",
    category: "Poster Design",
    image: "/images/projects/impulse-music.jpg",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 5,
    title: "ImpulseCV – Sponsor Rate Card",
    category: "Social Media Design",
    image: "/images/projects/SponserRate.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 6,
    title: "I.C.V. Polytechnic – Circular Badge",
    category: "Brand Identity",
    image: "/images/projects/icv-badge.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 7,
    title: "Induction Program & Freshers Ceremony",
    category: "Poster Design",
    image: "/images/projects/induction-poster.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: true,
  },
  {
    id: 8,
    title: "Tech Tribe – Meet & Greet Flyer",
    category: "Social Media Design",
    image: "/images/projects/techtribe-meet-greet.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 9,
    title: "Ganesh Chaturthi Poster",
    category: "Poster Design",
    image: "/images/projects/ganesh-chaturthi.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 10,
    title: "Mahalaya Poster",
    category: "Poster Design",
    image: "/images/projects/mahalaya.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 11,
    title: "Rainy Edit",
    category: "Photo Editing",
    image: "/images/projects/rainy-edit.jpg",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 12,
    title: "Home is Calling",
    category: "Photo Editing",
    image: "/images/projects/home-calling.jpg",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 13,
    title: "Diwali Celebration Poster",
    category: "Poster Design",
    image: "/images/projects/Diwali-Poster.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: true,
  },
  {
    id: 14,
    title: "Core Team Poster",
    category: "Social Media Design",
    image: "/images/projects/CORE TEAM.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 15,
    title: "Delete Band – Promotional Flyer",
    category: "Poster Design",
    image: "/images/projects/DeleteBand.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 17,
    title: "Brochure – Front Design",
    category: "Print & Branding",
    image: "/images/projects/BrochureFrontFinal.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 18,
    title: "Landscape Event Invitation",
    category: "Print & Branding",
    image: "/images/projects/LandscapeInvitation.png",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 19,
    title: "Manish Aman – Portrait Edit",
    category: "Photo Editing",
    image: "/images/projects/ManishAmain.jpg",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },
  {
    id: 20,
    title: "TechTribe – Core Team",
    category: "Social Media Design",
    image: "/images/projects/TechTribeCore.jpg",
    pinterestUrl: "https://pin.it/3so5CxrFC",
    featured: false,
  },

]

export const categories = [
  "All",
  "Poster Design",
  "Brand Identity",
  "Social Media Design",
  "Photo Editing",
  "Print & Branding",
]
