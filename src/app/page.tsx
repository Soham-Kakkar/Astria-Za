// src/app/page.tsx
import './HomePage.css';
import Image from 'next/image'
import titleImg from '../../public/resources/astriaza-nobg.png'
import Link from 'next/link'

export default function HomePage() {
    return (
        <div className="home-page">
            <Image
                width={500}
                height={500}
                src={titleImg}
                alt={"Main Title"}
                priority
                className='main-title-image'/>
            <p className="subtitle">Physics And Astronomy Club - IIT Jammu</p>
            
            {/* New Quick Links Section for Mobile */}
            <div className="quick-links">
                <Link href="/events" className="quick-link">
                    <span className="link-icon">🚀</span>
                    <span className="link-text">Upcoming Events</span>
                </Link>
                <Link href="/team" className="quick-link">
                    <span className="link-icon">👥</span>
                    <span className="link-text">Our Team</span>
                </Link>
                <Link href="/about" className="quick-link">
                    <span className="link-icon">ℹ️</span>
                    <span className="link-text">About Us</span>
                </Link>
            </div>
        </div>
    );
}