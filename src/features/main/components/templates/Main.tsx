import B2BBanner from '../../../../components/BannerLast'
import ChatSupportButton from '../../../../components/ChatSupport'
import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import Hero from '../../../../components/Hero'
import ProductSection from '../../../../components/ProductSection'
import SeasonSlider from '../../../../components/SeasonSlider'

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