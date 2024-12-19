import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const montserratRegular = localFont({
    src: './fonts/Montserrat-Full-Version/Web Fonts/Montserrat/Montserrat-Regular.woff',
    variable: '--font-montserrat-regular',
})

const montserratExtraBold = localFont({
    src: './fonts/Montserrat-Full-Version/Web Fonts/Montserrat/Montserrat-ExtraBold.woff',
    variable: '--font-montserrat-extrabold',
})

const montserratBold = localFont({
    src: './fonts/Montserrat-Full-Version/Web Fonts/Montserrat/Montserrat-Bold.woff',
    variable: '--font-montserrat-bold',
})

export const metadata: Metadata = {
    title: 'Seasons Greetings from IMC',
    description:
        'From the Staff and Management Of Irowa Medical Center, Wishing our Customers a Merry Christmas and a Happy New Year',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <meta property="og:title" content="Season’s Greetings from Irowa Medical Center! 🎄" />
                <meta
                    property="From the Staff and Management Of Irowa Medical Center, Wishing our Customers a Merry Christmas and a Happy New Year"
                />
                <meta
                    property="og:image"
                    content="https://imc-christmas.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcompany-picture.f3607e38.jpeg&w=3840&q=75"
                />
                <meta property="og:url" content="https://imc-christmas.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
            </head>
            <body
                className={`text-center ${montserratRegular.variable}  ${montserratExtraBold.variable} ${montserratBold.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
