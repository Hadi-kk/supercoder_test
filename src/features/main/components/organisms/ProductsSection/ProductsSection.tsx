import ProductCard from "@/features/main/components/molecules/ProductCard/ProductCard";
import type { Product } from "@/shared/types/types";

const dummyProducts: Product[] = [
  {
    id: "1",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니다.",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "",
    subtext: "(브랜드명) 그룹코드-색상명",
    tags: ["창고명 6자"],
    price: "000000",
  },
  {
    id: "2",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니다.",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "(브랜드명) 그룹코드-색상명",
    tags: ["창고명 6자"],
    price: "000000",
  },
  {
    id: "3",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니다.",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "(브랜드명) 그룹코드-색상명",
    tags: ["창고명 6자"],
    price: "000000",
  },
  {
    id: "4",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니다.",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "(브랜드명) 그룹코드-색상명",
    tags: ["창고명 6자"],
    price: "000000",
  },
  {
    id: "5",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니다.",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "(브랜드명) 그룹코드-색상명",
    tags: ["창고명 6자"],
    price: "000000",
  },
  {
    id: "6",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니다.",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "(브랜드명) 그룹코드-색상명",
    tags: ["창고명 6자"],
    price: "000000",
  },
  {
    id: "7",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니다.",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "New",
    subtext: "(브랜드명) 그룹코드-색상명",
    tags: ["창고명 6자"],
    price: "000000",
  },
  {
    id: "8",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니다.",
    image: "/images/product.png",
    colors: ["#000000", "#FFFFFF", "#808080"],
    label: "",
    subtext: "(브랜드명) 그룹코드-색상명",
    tags: ["창고명 6자"],
    price: "000000",
  },
];

const chunk = (arr: Product[], size: number) => {
  const res: Product[][] = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
};

const ProductsSection = () => {
  // heading text to show once per row
  const rowTitle = "상품진열이 타이틀이 들어갑니다.";
  const rowSubtitle = "부타이틀이 필요할 경우 텍스트가 들어갑니다.";

  // chunk into groups of 4 to represent rows (matches desktop layout from design)
  const rows = chunk(dummyProducts, 4);

  return (
    <div className="container mx-auto py-12 px-4">
      {rows.map((rowProducts, rowIndex) => (
        <section key={rowIndex} className="mb-10">
          <div className="text-center mt-12 mb-12">
            <h2 className="text-lg font-semibold">{rowTitle}</h2>
            <p className="text-sm text-gray-500 mt-2">{rowSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {rowProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductsSection;
