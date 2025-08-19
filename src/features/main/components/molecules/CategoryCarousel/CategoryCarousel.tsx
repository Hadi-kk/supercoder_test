import { useState } from "react";

const categories = [
  {
    id: "cat-1",
    image: "/images/carousel1.png",
    title: "계절에 구애받지 않고 편하게 입을 수 있는 아노락",
    subtitle: "카테고리명 카테고리명 카테고리명",
  },
  {
    id: "cat-2",
    image: "/images/carousel2.png",
    title: "가볍고 뛰어난 보온성을 자랑하는 방한조끼",
    subtitle: "카테고리명 카테고리명 카테고리명",
  },
  {
    id: "cat-3",
    image: "/images/carousel3.png",
    title: "포근한 따뜻함이 필요할 때 플리스",
    subtitle: "카테고리명 카테고리명 카테고리명",
  },
  {
    id: "cat-4",
    image: "/images/carousel4.png",
    title: "쌀쌀한 바람이 부는 가을에 입기 좋은 자켓",
    subtitle: "카테고리명 카테고리명 카테고리명",
  },
];

// A larger hero image used on the right side. This could be derived from the selected category as well.
// const heroImages = [
//   {
//     image: "/images/carousel4.png",
//     caption: "쌀쌀한 바람이 부는 가을에 입기 좋은 자켓",
//   },
//   {
//     image: "/images/herosection.png",
//     caption: "Performance Ready Apparel For Work & Beyond",
//   },
//   { image: "/images/product.png", caption: "Featured Product" },
// ];

const CategoryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(categories.length - 1);

  // auto-advance removed: selection is user-driven via clicks

  // progress percentage for the small indicator bar (0-100)
  const progress = Math.round(((activeIndex + 1) / categories.length) * 100);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-base font-bold text-neutral-800">
          스타일과 실용성을 모두 담은 시즌 셀렉션
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
        {categories.map((cat, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(idx)}
              className={`bg-white rounded-md shadow-md overflow-hidden text-left transition-all duration-300 focus:outline-none`}
              style={{ transform: isActive ? "scale(1.03)" : undefined }}
            >
              <div
                className={`${
                  isActive ? "h-80 sm:h-96" : "h-64 sm:h-73"
                } w-full relative transition-all duration-300`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={`w-full h-full object-cover ${
                    isActive ? "rounded-br-3xl" : ""
                  }`}
                />

                {/* title overlay on top-left of image for better visual parity */}
                <div className="absolute top-3 left-3">
                  <h3 className="text-sm font-semibold text-neutral-900 max-w-40">
                    {cat.title}
                  </h3>
                </div>

                {/* subtitle overlay at bottom of image (no background) */}
                <div className="absolute left-3 right-3 bottom-3">
                  <p className="text-xs text-neutral-900">{cat.subtitle}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* centered progress indicator under all images */}
      <div className="mt-6 flex justify-center">
        <div className="w-72 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
