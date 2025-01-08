import Link from 'next/link';
import FormBuilderMenuItem from "../Navbar/AdminMenuItem"
import titleImg from '../../../public/resources/astriaza-nobg.png';
import './Navbar.css';
import SignInBtn from '../SignInBtn';
import Image from 'next/image';

export default function Navbar() {

  return (
    <nav className="navbar navbar-pc">
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