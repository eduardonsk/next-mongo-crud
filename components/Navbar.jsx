'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            <nav className="bg-[#24282F] flex px-8 py-3 justify-between items-center">
                <Link className="text-[#eaeaea] font-medium px-5 py-2.5 text-center inline-flex items-center" href={"./"}>nsk</Link>

                {pathname === '/' && (
                    <Link className="text-white bg-[#24292F] hover:bg-[#eaeaea]/10 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"  href={"/addTopic"}><ClipboardDocumentListIcon className="size-6 mr-2 text-[#eaeaea]" />New Topic</Link>
                )}
            </nav>
        </>
    )
}