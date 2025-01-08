"use client"
import Link from 'next/link';
import { useState } from 'react'; // Import useState
import './Navbar.css';
import { useSession } from 'next-auth/react';
import admins from '@/app/api/admins.json';
import SignInBtn from '../SignInBtn';
import titleImg from '../../../public/resources/astriaza-nobg.png';
import Image from 'next/image';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const { data: session } = useSession();
  const isAdmin = session?.user?.email && admins.admins.some(adminEmail => adminEmail.toLowerCase() === session?.user?.email?.toLowerCase());//admins.admins.includes(session?.user?.email);
  return (
    <nav className="navbar navbar-mobile">
      <Link href='/'>
        <Image
          width={90}
          height={90}
          src={titleImg}
          alt={"Main Title"}
          priority
          className='logo'
          style={{position: 'absolute', top: '0.2rem'}} />
      </Link>
      <div className="hamburger" onClick={toggleMenu}>☰</div> {/* Button to toggle menu */}
      <div className={`nav ${isOpen ? 'open' : ''}`}> {/* Add 'open' class based on state */}
        <ul className="nav-links" onClick={toggleMenu}>
          <Link  href="/" className="home"><li>Home</li></Link>
          <Link href="/about"className="about"><li>About</li></Link>
          <Link href="/team" className="team"><li>Team</li></Link>
          <Link href="/events" className="events"><li>Events</li></Link>
          {isAdmin && <li><Link href="/editor" className="formbuilder">FormBuilder</Link></li>}
        </ul>
        <div className="sign-in">
          <SignInBtn />
        </div>
      </div>
    </nav>
  );
}