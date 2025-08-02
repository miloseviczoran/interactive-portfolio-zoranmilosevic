"use client";
import { useScroll, useTransform } from "framer-motion";

import Tag from "@/components/Tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Master of Computer Science and Informatics, Programming and Software Engineering.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    // useMotionValueEvent(scrollYProgress, "change", (latest) =>
    //     console.log("latest", latest),
    // );

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Education</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>
                            Faculty of Information Technologies. Pan-European
                            University Apeiron.
                        </span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white",
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            Zoran Milosevic.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
