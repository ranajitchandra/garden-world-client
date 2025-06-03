
import photo1 from "../assets/1.webp";
import photo2 from "../assets/2.webp";
import photo3 from "../assets/3.webp";
import photo4 from "../assets/4.webp";
import photo5 from "../assets/5.webp";
import photo6 from "../assets/6.webp";
import photo7 from "../assets/7.webp";
import photo8 from "../assets/8.webp";
import photo9 from "../assets/9.webp";
import photo10 from "../assets/10.webp";
import photo11 from "../assets/11.webp";
import photo12 from "../assets/12.webp";


const categories = [
    { name: "Soil & Alternative", icon: photo1 },
    { name: "Seeds", icon: photo2 },
    { name: "Fertilizers", icon: photo3 },
    { name: "Tools", icon: photo4 },
    { name: "Accessories", icon: photo5 },
    { name: "Pots", icon: photo6 },
    { name: "Pesticides", icon: photo7 },
    { name: "Plants", icon: photo8 },
    { name: "Indoor Plants", icon: photo9 },
    { name: "Flower Plants", icon: photo10 },
    { name: "Cactus & Succulent", icon: photo11 },
    { name: "Bonsai", icon: photo12 },
];

export default function WorkWith() {
    return (
        <div className="p-6">
  <h2 className="text-2xl font-bold my-10 text-center text-primary">
    Work With
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {categories.map((category, index) => (
      <div data-aos="zoom-in"
        key={index}
        className="flex flex-col items-center text-center bg-white p-6 border border-transparent dark:border-gray-300 hover:border-gray-400 transition-colors cursor-pointer rounded-xl"
      >
        <div className="w-20 h-20 mb-2">
          <img
            src={category.icon}
            alt={category.name}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <span className="font-medium text-sm text-accent">{category.name}</span>
      </div>
    ))}
  </div>
</div>

    );
}
