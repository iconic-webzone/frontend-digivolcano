import React from 'react'
import Link from 'next/link'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"


const Navbar = () => {
    return (
        <div>
            <Menubar>
                <MenubarMenu>
                    <Link href="/" className='hover:cursor-pointer'>
                        <MenubarTrigger className='bg-orange-50'>Home</MenubarTrigger>
                    </Link>
                    <Link href="/download">
                        <MenubarTrigger>downloadFiles</MenubarTrigger>
                    </Link>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}

export default Navbar