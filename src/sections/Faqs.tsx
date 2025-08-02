"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Who am I, really?",
        answer: "I'm Zoran Milosevic - a full-stack software engineer with a master's degree in IT. I specialize in Python, FastAPI, React, Next.js, and scalable backend architectures. I build things that work, scale, and occasionally surprise even me. When I'm not coding, I'm learning, debugging someone's 'simple bug,' or tweaking animations until they're buttery smooth.",
    },
    {
        question: "What kind of projects do I build?",
        answer: "From RESTful APIs and microservices to full-fledged web apps and AI automations—I've built it. My current stack includes FastAPI, PostgreSQL, React, Firebase, and TailwindCSS. I've also dabbled in mobile with Kivy and am comfortable with cloud tools like Docker, Kubernetes, and GCP. My projects aim to solve real problems—clean, maintainable, and production-ready.",
    },
    {
        question: "What's my philosophy as a developer?",
        answer: "Build like you're the one maintaining it six months from now. I believe in the 80/20 principle: focus on the few things that bring the most impact. Good architecture > quick hacks. And I document things—because future me deserves mercy.",
    },
    {
        question: "What am I learning right now?",
        answer: "I'm continuously leveling up in AI, Frontend and Backend, and systems design. Recently, I've been working on agentic AI, improving animation fluency with GSAP, and exploring embedded software for automotive simulations using Unity + FastAPI + React. Yes, I love a good tech challenge.",
    },
    {
        question: "Why should someone work with me?👇",
        answer: "I bring technical depth, clean code, and initiative. I don't just finish tasks—I improve them. Whether it's fixing a flaky test, shipping a PWA, or optimizing render performance, I'm that developer who cares. Plus, I can explain complex ideas in a way both devs and non-devs understand. That's rare. And useful.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? I've got{" "}
                    <span className="text-lime-400">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                        >
                            <div
                                className="flex justify-between items-center"
                                onClick={() => setSelectedIndex(faqIndex)}
                            >
                                <h3 className="font-medium">{faq.question}</h3>
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
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45",
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className={twMerge("overflow-hidden")}
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
