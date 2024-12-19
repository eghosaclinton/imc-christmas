'use client'
import { useEffect, useState} from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react"

export default function ChristmasSurprise() {
  const [isCounted, setIsCounted] = useState(true)
  const count = useMotionValue(3);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 0, {
         duration: 8,
         type: "spring",
         onUpdate: (latest)=>{
            switch (Math.round(latest)) {
                case 3:
                    document.getElementById('count--down')!.style.backgroundColor = '#ED5564'
                    break;
                case 2:
                    document.getElementById('count--down')!.style.backgroundColor = '#FFCE54'
                    break;
                case 1:
                    document.getElementById('count--down')!.style.backgroundColor = '#A0D468'
                    break;  
                case 0:
                    setIsCounted(false)
                    break;  
                default:
                    
                    break;
            }
         }
        });

    return animation.stop;
  }, []);


  return (
    <motion.div className="">
        {isCounted && 
        <motion.h1 
        id="count--down"
        className = "bg-[#ED5564] text-white top-0 flex w-full justify-center z-[99] items-center text-[5rem] absolute min-h-[100svh]"
        >
            {rounded && rounded}
        </motion.h1>}
    </motion.div>
    )
}