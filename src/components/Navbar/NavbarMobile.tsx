"use client"
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react'; // Import useState and useEffect
import './Navbar.css';
import { useSession } from 'next-auth/react';
import admins from '@/app/api/admins.json'; // Corrected import path
import SignInBtn from '../SignInBtn';
import titleImg from '../../../public/resources/astriaza-nobg.png';
import Image from 'next/image';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const navbarRef = useRef<HTMLDivElement | null>(null); // Create a ref for the navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { data: session } = useSession();
  const isAdmin = session?.user?.email && admins.admins.some(adminEmail => adminEmail.toLowerCase() === session?.user?.email?.toLowerCase());

  return (
    <nav className="navbar navbar-mobile" ref={navbarRef}> {/* Attach ref to the navbar */}
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
          <Link href="/" className="home"><li>Home</li></Link>
          <Link href="/about" className="about"><li>About</li></Link>
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