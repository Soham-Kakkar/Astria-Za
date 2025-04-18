import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import NavbarMobile from '../components/Navbar/NavbarMobile';
import ThreeJSBackground from '../components/ThreeJSBackground/ThreeJSBackground';
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import DeveloperInfo from "@/components/DeveloperInfo";
import EasterEggMagic from "@/components/EasterEggMagic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://astriaza-iitjammu.vercel.app'),
  title: {
    default: "Astria-Za - IIT Jammu's Astronomy Club",
    template: '%s - Astria-Za'
  },
  description:
    "Astria-Za is the official Astronomy Club of IIT Jammu, fostering curiosity and engagement with the cosmos through hands-on activities, stargazing sessions, and scientific outreach.",
  openGraph: {
    title: "Astria-Za - IIT Jammu's Astronomy Club",
    description:
      "Fostering cosmic curiosity through stargazing, outreach, and scientific exploration at IIT Jammu.",
    url: "https://astriaza-iitjammu.vercel.app/",
    siteName: "Astria-Za",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/resources/astriaza.jpeg" }]
  },
};
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
      <noscript>Enable JavaScript to use all features.</noscript>
      <SessionProvider session={session}>
        <ThreeJSBackground />
        <Navbar />
        <NavbarMobile />
        <main>
          {children}
          <EasterEggMagic />
        </main>        
        <DeveloperInfo />
      </SessionProvider>
      </body>
    </html>
  );
}

/**
 * You came all the way to see the source code?
 * 🎉 Congratulations, Code Explorer! You've found an Easter Egg!🎉
 * Fun Fact: Neutron Stars are so dense that a sugar-cube-sized amount of neutron-star material would weigh about as much as all of humanity combined!
 * 
 * Keep exploring, and who knows what you might find!
 */
