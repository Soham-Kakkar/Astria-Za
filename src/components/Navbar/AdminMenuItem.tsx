"use client"
import Link from 'next/link';
import { useSession } from "next-auth/react";
import admins from '@/app/api/admins.json';
import "@/components/Navbar/adminnav.css"

export default function AdminMenuItem() {

    const { data: session } = useSession();
    const isAdmin = session?.user?.email && admins.admins.some(adminEmail => adminEmail.toLowerCase() === session?.user?.email?.toLowerCase());//admins.admins.includes(session?.user?.email);

    if (isAdmin) {
        return (
            <>
                <li><Link href="/editor" className="adminMenuItem">FormBuilder</Link></li>
            </>
        )
    };
    return null;
}