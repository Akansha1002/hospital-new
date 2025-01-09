"use client"
import React from 'react'
import Navbar from "@/components/Navbar";
import { useState } from "react";
import MenuOverlay from "@/components/MobileMenu";



export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div>
            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </div>
    );
}
