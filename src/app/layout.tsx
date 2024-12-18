import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from './components/Header'
import Footer from './components/Footer'
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
            <body
                className={`${montserratRegular.variable}  ${montserratExtraBold.variable} ${montserratBold.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
