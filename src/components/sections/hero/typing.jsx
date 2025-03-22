"use client";

import { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 100, delay = 1500 }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                if (charIndex < currentText.length) {
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }

            setDisplayText(currentText.substring(0, charIndex));
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout); // Cleanup timeout
    }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

    return <h1 className="typing-text">{displayText}<span className="cursor">|</span></h1>;
};

export function Typing() {
    return <Typewriter texts={["Website", "Digital Marketing", "e-Commerce", "Mobile Apps"]} speed={150} delay={1500} />;
}