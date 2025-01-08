"use client"
import Link from 'next/link';
import { useSession } from "next-auth/react";
import admins from '@/app/api/admins.json';

export default function AdminMenuItem() {

    const { data: session } = useSession();
    const isAdmin = session?.user?.email && admins.admins.some(adminEmail => adminEmail.toLowerCase() === session?.user?.email?.toLowerCase());//admins.admins.includes(session?.user?.email);

    if (isAdmin) {
        return (
            <>
                <li><Link href="/editor" className="adminMenuItem">FormBuilder</Link></li>
                <style>{`
@media (max-width: 1090px) {
    .hamburger {
        display: block; /* Show hamburger icon on mobile */
    }

    .nav {
        display: none; /* Hide links by default on mobile */
        background-color: rgba(0, 0, 0, 0.6);
        height: 100vh;
    }
    
    .nav .sign-in {
        margin: 0 auto;
    }

    .nav.open {
        display: flex;
        position: absolute;
        right: 0;
        top: 4rem;
        flex-direction: column;
    }

    .nav.open .nav-links {
        flex-direction: column;
        align-items: start;
        margin-top: 1rem;
    }

    .nav-links a::before {
        margin-inline-end: 0.5rem;
    }

    .nav-links .home::before {
        content: '⌂ ';
    }
    .nav-links .about::before {
        content: 'ℹ ';
    }
    .nav-links .team::before {
        content: '⚑';
    }
    .nav-links .events::before {
        content: '★';
    }
    .nav-links .formbuilder::before {
        content: '{} ';
    }
    nav.navbar-mobile {
        display: flex;
    }
    nav.navbar-pc {
      display: none;
    }
}
        `}</style>
            </>
        )
    };
    return null;
}