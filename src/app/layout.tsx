import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import ThreeJSBackground from '../components/ThreeJSBackground/ThreeJSBackground';
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import EasterEggMagic from "@/components/EasterEggMagic"

export const metadata = {
  title: "Astria-Za - IIT Jammu",
  description: "Astria-Za - IIT Jammu's Physics and Astronomy Club",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
      <SessionProvider session={session}>
        <ThreeJSBackground />
        <Navbar />
        <main>{children}</main>        
        <EasterEggMagic />
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
