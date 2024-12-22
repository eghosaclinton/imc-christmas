'use client'
import { useState, useEffect } from 'react'
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate,
} from 'motion/react'
import PartyPaper from './svg/PartyPaper'
import ChristmasSurprise from './components/ChristmasSurprise'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
    const [isCounted, setIsCounted] = useState(false)
    const count = useMotionValue(3)
    const rounded = useTransform(count, Math.round)
    const colorArr = ['#ED5564', '#FFCE54', '#A0D468']
    let partyPapers = []

    for (let i = 0; i < 30; i++) {
        partyPapers.push(i + 1)
    }

    partyPapers = partyPapers.map((ele, i) => {
        const colorIndex = Math.floor(Math.random() * 3)
        const transform = Math.floor(Math.random() * 180)
        const y = Math.floor(Math.random() * 50)

        return (
            <PartyPaper
                key={i}
                transform={`rotate(${transform}deg)`}
                y={-y}
                color={colorArr[colorIndex]}
            />
        )
    })

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
                        {partyPapers}
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
