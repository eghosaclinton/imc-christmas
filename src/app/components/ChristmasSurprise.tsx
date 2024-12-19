'use client'
import { Suspense } from 'react'
import Image from 'next/image'
import imcImg from '../assets/company-picture.jpeg'
import { motion } from 'motion/react'

export default function ChristmasSurprise({
    isCounted,
}: {
    isCounted: boolean
}) {
    return (
        <motion.div className="">
            {isCounted && (
                <motion.div id="the--surprise" className="">
                    <motion.p
                        id="seasons--greetings"
                        className="p-4 flex flex-col gap-4"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 5, type: 'spring' }}
                    >
                        <h1 className="text-[3rem] max-md:text-[2rem]">
                            Season’s Greetings from Irowa Medical Center! 🎄
                        </h1>
                        <Suspense fallback={<h1>Loading</h1>}>
                            <Image
                                className="rounded-lg"
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
                    </motion.p>
                </motion.div>
            )}
        </motion.div>
    )
}
