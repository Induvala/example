import React, { useEffect, useRef, useState } from "react";

const items = [
  {
    id: 1,
    image: "https://picsum.photos/400/300?random=1",
    title: "Comfortable hoodie for all seasons",
    subtitle: "Category | Category | Category",
  },
  {
    id: 2,
    image: "https://picsum.photos/400/300?random=2",
    title: "Lightweight vest with excellent warmth",
    subtitle: "Category | Category | Category",
  },
  {
    id: 3,
    image: "https://picsum.photos/400/300?random=3",
    title: "Warm fleece for cold days",
    subtitle: "Category | Category | Category",
  },
  {
    id: 4,
    image: "https://picsum.photos/400/300?random=4",
    title: "Perfect jacket for windy fall weather",
    subtitle: "Category | Category | Category",
  },
  {
    id: 5,
    image: "https://picsum.photos/400/300?random=5",
    title: "All-season windbreaker for city and mountain",
    subtitle: "Category | Category | Category",
  },
];

const SeasonSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideToNext = () => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const cardWidth = container.offsetWidth / getVisibleCards();
    const nextIndex = (currentIndex + 1) % items.length;

    container.scrollTo({
      left: nextIndex * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(nextIndex);
  };

  const getVisibleCards = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-lg font-semibold border-l-4 border-yellow-400 pl-3 mb-6">
          A season selection that combines style and functionality
        </h2>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth scrollbar-hide"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[80%] sm:w-[48%] lg:w-[32%] bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <p className="text-sm font-medium mb-1">{item.title}</p>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center space-x-2 mt-4">
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-yellow-400 w-6" : "bg-gray-400 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonSlider;
