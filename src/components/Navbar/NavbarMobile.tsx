"use client"
import Link from 'next/link';
import { useState } from 'react'; // Import useState
import './Navbar.css';
import { useSession } from 'next-auth/react';
import admins from '@/app/api/admins.json';
import SignInBtn from '../SignInBtn';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const { data: session } = useSession();
  const isAdmin = session?.user?.email && admins.admins.includes(session?.user?.email);
  return (
    <nav className="navbar navbar-mobile" role='navbar'>
      <Link href='/'><div className="logo">ASTRIA-ZA</div></Link>
      <div className="hamburger" onClick={toggleMenu}>☰</div> {/* Button to toggle menu */}
      <div className={`nav ${isOpen ? 'open' : ''}`}> {/* Add 'open' class based on state */}
        <ul className="nav-links">
          <li><Link  href="/" className="home">Home</Link></li>
          <li><Link href="/about"className="about">About</Link></li>
          <li><Link href="/team" className="team">Team</Link></li>
          <li><Link href="/events" className="events">Events</Link></li>
          {isAdmin && <li><Link href="/editor" className="formbuilder">FormBuilder</Link></li>}
        </ul>
        <div className="sign-in">
          <SignInBtn />
        </div>
      </div>
    </nav>
  );
}