import Link from 'next/link';
import FormBuilderMenuItem from "../Navbar/AdminMenuItem"
import './Navbar.css';
import SignInBtn from '../SignInBtn';

export default function Navbar() {

  return (
    <nav className="navbar navbar-pc" role='navbar'>
      <Link href='/'><div className="logo">ASTRIA-ZA</div></Link>
      <div className="nav">
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/events">Events</Link></li>
          <FormBuilderMenuItem />
        </ul>
      </div>
      <div className="sign-in">
        <SignInBtn />
      </div>
    </nav>
  );
}