import ProductCard from "@/features/main/components/molecules/ProductCard/ProductCard";
import type { Product } from "@/shared/types/types";

const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Hooded Jacket",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "Comfortable and stylish",
    tags: ["SALE", "NEW"],
    price: "₩59,000",
  },
  {
    id: "2",
    name: "Hooded Jacket",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "Comfortable and stylish",
    tags: ["SALE", "NEW"],
    price: "₩59,000",
  },
  {
    id: "3",
    name: "Hooded Jacket",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "Comfortable and stylish",
    tags: ["SALE", "NEW"],
    price: "₩59,000",
  },
  {
    id: "4",
    name: "Hooded Jacket",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "Comfortable and stylish",
    tags: ["SALE", "NEW"],
    price: "₩59,000",
  },
  {
    id: "5",
    name: "Hooded Jacket",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "Comfortable and stylish",
    tags: ["SALE", "NEW"],
    price: "₩59,000",
  },
  {
    id: "6",
    name: "Hooded Jacket",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "Comfortable and stylish",
    tags: ["SALE", "NEW"],
    price: "₩59,000",
  },
  {
    id: "7",
    name: "Hooded Jacket",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "Comfortable and stylish",
    tags: ["SALE", "NEW"],
    price: "₩59,000",
  },
  {
    id: "8",
    name: "Hooded Jacket",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "Comfortable and stylish",
    tags: ["SALE", "NEW"],
    price: "₩59,000",
  },
];

const ProductsSection = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
