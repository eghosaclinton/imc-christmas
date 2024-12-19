'use client'
import Image from 'next/image'
import companyLogo from '@/app/assets/IMC Redesigned logo.png'
import ChristmasLights from '../svg/ChristmasLights'

export default function Header() {
    let christmasLights = []

    for (let i = 0; i < 10; i++) {
        christmasLights.push(i + 1)
    }

    christmasLights = christmasLights.map((e) => {
        return <ChristmasLights key={e} />
    })

    return (
        <header className="flex-col flex">
            <a
                target="_blank"
                href="https://www.irowamedicalcentre.com/"
                className="logo flex items-center gap-2"
            >
                <Image className='w-full max-w-[55px]' src={companyLogo} alt="Irowa Medical Center's Logo" />
                <div className="company--name self-end">
                    <h2 className="flex flex-col leading-8">
                        <span className="icon--top-text text-green-700 text-[2.75rem] font-extrabold ">
                            Irowa
                        </span>
                        <span className="icon--bottom-text font-bold text-[1.125rem] tracking-normal">
                            Medical Centre
                        </span>
                    </h2>
                </div>
            </a>

            <div className="christmas--lights overflow-hidden">
                <div className="lights flex ">{christmasLights}</div>
            </div>
        </header>
    )
}
