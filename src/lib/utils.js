import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const budgetOptions = [
  {
    id:1,
    title:"Low",
    desc:"Stay concious of cost"
  },
  {
    id:2,
    title:"Medium",
    desc:"Keep cost on the average side"
  },
  {
    id:1,
    title:"High",
    desc:"Don't worry about the cost"
  }
]

export const travellerOptions =[
  {
    id:1,
    title:"Solo trip",
    desc: "Just me"
  },
  {
    id:2,
    title:"Couple",
    desc: "Two travellers in tandom"
  },
  {
    id:3,
    title:"Friends",
    desc: "A  bunch of thrill seekers"
  },
  {
    id:4,
    title:"Family",
    desc: "a group of fun loving people"
  }
]
