'use client'
import { Suspense } from 'react'
import Image from 'next/image'
import imcImg from '../assets/company-picture.jpeg'
import { motion } from 'motion/react'

function PartyPaper({ x, y }: { color: string; x: number; y: number }) {
    return (
        <motion.span
            className={`bg-[#ED5564] min-w-8 h-2`}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{ x, y, opacity: 1, scale: 1 }}
            transition={{ duration: 5 }}
        ></motion.span>
    )
}

export default function ChristmasSurprise({
    isCounted,
}: {
    isCounted: boolean
}) {
    return (
        <motion.div className="">
            {isCounted && (
                <motion.div id="the--surprise" className="">
                    <div className="pleasant--surprise">
                        <PartyPaper color="#ED5564" x={0} y={0} />
                    </div>
                    <motion.div
                        id="seasons--greetings"
                        className="p-4 flex flex-col gap-4"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 5, type: 'spring' }}
                    >
                        <h1 className="text-[2.75rem] max-md:text-[2rem]">
                            Season’s Greetings from Irowa Medical Center! 🎄
                        </h1>
                        <Suspense fallback={<h1>Loading</h1>}>
                            <Image
                                priority={true}
                                className="rounded-lg mx-auto w-full max-w-[800px]"
                                src={imcImg}
                                alt="Irowa Medical Center"
                            />
                        </Suspense>
                        <p className="text-[1.25rem] max-md:text-[1rem]">
                            As we celebrate this festive season, we want to
                            express our heartfelt gratitude for your support
                            throughout the year. Your trust means the world to
                            us, and we’re honored to have been part of your
                            journey. <br />
                            <br />
                            Wishing you a joyful Christmas filled with love and
                            laughter, and a New Year that brings you endless
                            opportunities, success, and happiness. Let’s make
                            2025 extraordinary together! <br />
                            <br />✨ Warm wishes from all of us at Irowa Medical
                            Center!
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    )
}
