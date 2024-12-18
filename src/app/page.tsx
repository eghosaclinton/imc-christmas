'use client'
import ChristmasSurprise from "./components/ChristmasSurprise"
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <ChristmasSurprise />
            </main>
            <Footer />       
        </>
       
    );
}
