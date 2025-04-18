// src/app/page.tsx
import './HomePage.css';
import Image from 'next/image'
import titleImg from '../../public/resources/astronomy.jpg';
import { Metadata } from 'next';
import FutureEvents from '@/components/FutureEvents';

export const metadata: Metadata = {
    title: "Astria-Za - IIT Jammu's Astronomy Club",
    description:
      "Astria-Za is the official Astronomy Club of IIT Jammu, fostering curiosity and engagement with the cosmos through hands-on activities, stargazing sessions, and scientific outreach.",
    openGraph: {
      description:
        "Fostering cosmic curiosity through stargazing, outreach, and scientific exploration at IIT Jammu.",
      url: "https://astriaza-iitjammu.vercel.app/",
    },
};
  

export default function HomePage() {
    return (
        <div className="home-page">
            <div className="home-content">
                <Image
                    width={800}
                    height={500}
                    src={titleImg}
                    alt={"Main Title"}
                    priority
                    className='main-title-image' />
                <h1>ASTRIA-ZA</h1>
                <p className="subtitle">Astronomy Club - IIT Jammu</p>
            </div>
            <FutureEvents />
        </div>
    );
}