import { useState, useEffect } from "react";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81",
        text: "Performance-Ready Apparel for Work & Beyond",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5",
        text: "Elevate Your Style with Confidence",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
        text: "Designed for Comfort. Built to Perform.",
    },
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 2000); // Auto-slide every 2s
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-end">
                        <h2 className="text-white text-3xl md:text-5xl font-bold float-right px-4 max-w-2xl">
                            {slide.text}
                        </h2>
                    </div>
                </div>
            ))}

            {/* Dots Navigation */}
            <div className="absolute bottom-5 w-full flex justify-center items-center space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-1.5 rounded-full transition-all duration-300 ${index === current ? "bg-yellow-400 w-6" : "bg-gray-400 w-6"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
