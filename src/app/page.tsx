'use client'
import { useState, useEffect } from 'react'
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate,
} from 'motion/react'
import Image from 'next/image'
import christmasTreeImg from './assets/christmas-decoration-pine-svgrepo-com.svg'
import ChristmasSurprise from './components/ChristmasSurprise'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
    const [isCounted, setIsCounted] = useState(false)
    const count = useMotionValue(3)
    const rounded = useTransform(count, Math.round)

    useEffect(() => {
        const animation = animate(count, 0, {
            duration: 8,
            type: 'spring',
            onUpdate: (latest) => {
                switch (Math.round(latest)) {
                    case 3:
                        document.getElementById(
                            'count--down'
                        )!.style.backgroundColor = '#ED5564'
                        break
                    case 2:
                        document.getElementById(
                            'count--down'
                        )!.style.backgroundColor = '#FFCE54'
                        break
                    case 1:
                        document.getElementById(
                            'count--down'
                        )!.style.backgroundColor = '#A0D468'
                        break
                    case 0:
                        setIsCounted(true)
                        break
                    default:
                        break
                }
            },
        })

        return animation.stop
    }, [])

    return (
        <>
            <AnimatePresence>
                {!isCounted && (
                    <motion.h1
                        id="count--down"
                        className="text-white top-0 left-0 flex w-full justify-center z-[99] items-center text-[5rem] absolute min-h-[100svh]"
                    >
                        {rounded && rounded}
                    </motion.h1>
                )}
            </AnimatePresence>
            {isCounted && (
                <>
                    <Header />
                    <main>
                        <ChristmasSurprise isCounted={isCounted} />
                        {/* <motion.button
                            className="fixed rounded-full p-4 flex justify-center items-center w-28 bottom-12 right-12 max-md:right-0 max-md:bottom-20"
                            // whileHover={{scale: 1.1}}
                            whileTap={{ scale: 0.75 }}
                            transition={{ duration: 2, type: 'spring' }}
                        >
                            <Image
                                className="w-full"
                                src={christmasTreeImg}
                                alt="chrismas tree image"
                            />
                        </motion.button> */}
                    </main>
                    <Footer />
                </>
            )}
        </>
    )
}
