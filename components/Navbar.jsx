'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
                <Link className="text-white font-bold" href={"./"}>nsk</Link>

                {pathname === '/' && (
                    <Link className="bg-white p-2" href={"/addTopic"}>Add Topic</Link>
                )}
            </nav>
        </>
    )
}