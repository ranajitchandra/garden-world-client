const images = [
    "https://i.ibb.co.com/TMN28nk1/carousal-1.jpg",
    "https://i.ibb.co.com/7tqxPfdR/carousal-2.jpg",
    "https://i.ibb.co.com/3m3jSd5x/carousal-3.jpg",
];

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
    {
        image: "https://i.ibb.co/T3hnLGF/s1.jpg",
        title: "Transform Your Garden with Ease",
        description: "Discover smart gardening tips, tools, and ideas to make your outdoor space bloom beautifully.",
    },
    {
        image: "https://i.ibb.co/TzByp2f/photo-1464297162577-f5295c892194-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-1.jpg",
        title: "Your Dream Garden Starts Here",
        description: "Plan, plant, and nurture a thriving garden with expert advice and seasonal guides tailored to your space.",
    },
    {
        image: "https://i.ibb.co/67DKFGLK/photo-1598368457390-95a84ecb87c4-q-80-w-1472-auto-format-fit-crop-ixlib-rb-4-1.jpg",
        title: "Smart Gardening at Your Fingertips",
        description: "Get personalized care reminders, track plant growth, and enjoy a greener lifestyle effortlessly.",
    }

];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const total = slides.length;

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative overflow-hidden  shadow-lg mt-10">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0 object-cover lg:h-[450px]"
                    />
                ))}
            </div>

            <div className="absolute left-15 top-1/2 transform -translate-y-1/2 text-white drop-shadow-2xl p-4 rounded-xl max-w-sm">
                <h2 className="text-2xl font-bold mb-2 text-shadow-lg">{slides[current].title}</h2>
                <p className="text-sm text-shadow-lg">{slides[current].description}</p>
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
