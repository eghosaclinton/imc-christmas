'use client'
// import { motion } from 'motion/react'

export default function PartyPaper({color, transform}: {color: string, transform: string}) {
    return (
        <div>
            <svg
                className='absolute'
                style={{
                    transform
                }}
                height="20px"
                width="20px"
                fill={color}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 20.969 20.969"
                xmlSpace="preserve"
            >
                <g>
                    <g id="c112_-">
                        <rect x="0" y="6.504" width="20.969" height="7.961" />
                    </g>
                    <g id="Capa_1_45_"></g>
                </g>
            </svg>
        </div>
    )
}