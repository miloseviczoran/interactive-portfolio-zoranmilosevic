"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "https://www.linkedin.com/in/zoranmilosevic/" },
    { label: "Features", href: "https://www.linkedin.com/in/zoranmilosevic/" },
    {
        label: "Integrations",
        href: "https://www.linkedin.com/in/zoranmilosevic/",
    },
    { label: "FAQs", href: "https://www.linkedin.com/in/zoranmilosevic/" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 py-1 px-4 items-center">
                            <div>
                                <Image
                                    src={logoImage}
                                    alt="Layers logo"
                                    className="h-9 md:h-auto w-auto"
                                />
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <a href={link.href} key={link.label}>
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    width="24"
                                    height="24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen &&
                                                "rotate-45 -translate-y-1",
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            isOpen && "opacity-0",
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "transition",
                                            "origin-left transition",
                                            isOpen &&
                                                "-rotate-45 translate-y-1",
                                        )}
                                    ></line>
                                </svg>
                                <Button
                                    variant="secondary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="primary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                                className=""
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button variant="secondary">
                                            Log In
                                        </Button>
                                        <Button variant="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
