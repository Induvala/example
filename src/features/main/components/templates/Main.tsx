import React from 'react'
import Header from '../../../../components/Header'
import Hero from '../../../../components/Hero'
import Footer from '../../../../components/Footer'
import SeasonSlider from '../../../../components/SeasonSlider'
import ProductSection from '../../../../components/ProductSection'
import ChatSupportButton from '../../../../components/ChatSupport'
import B2BBanner from '../../../../components/BannerLast'

function Main() {
    return (
        <>
            <Header />
            <Hero />
            <div className="font-sans max-w-6xl mx-auto px-6 py-10">
                <SeasonSlider />
                <ProductSection />
                <ProductSection />
                <B2BBanner />
                <ChatSupportButton />
            </div>
            <Footer />
        </>
    )
}

export default Main