'use client'
import { useState, useEffect } from 'react'
import Confetti from './components/Confetti'
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate,
} from 'motion/react'
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
    }, [count])

    return (
        <>
            <AnimatePresence>
                {!isCounted && (
                    <motion.h1
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        id="count--down"
                        className="text-white top-0 left-0 flex w-full justify-center z-[99] items-center text-[5rem] absolute min-h-[100svh]"
                    >
                        {rounded && rounded}
                    </motion.h1>
                )}
            </AnimatePresence>
            {isCounted && (
                <>
                    <div className="part--papers absolute flex-wrap flex gap-12">
                        <Confetti />
                    </div>
                    <Header />
                    <main>
                        <ChristmasSurprise isCounted={isCounted} />
                    </main>
                    <Footer />
                </>
            )}
        </>
    )
}
