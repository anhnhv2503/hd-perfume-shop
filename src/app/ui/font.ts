import { Be_Vietnam_Pro, Newsreader } from "next/font/google";

// Serif — headings
export const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

// Sans-serif — body copy (supports Vietnamese)
export const bodyFont = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
});
