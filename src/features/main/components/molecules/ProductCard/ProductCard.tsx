import type { Product } from "@/shared/types/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="text-left">
      <img src={product.image} alt={product.name} className="w-full mb-4" />
      <div className="flex items-center mb-2">
        {product.colors.map((color: string, index: number) => (
          <span
            key={index}
            className="w-4 h-4 rounded-full mr-1 border border-gray-300"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
      <p className="text-xs text-gray-500 mb-1">{product.label}</p>
      <h3 className="font-semibold text-base mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.subtext}</p>
      <div className="flex items-center mb-3">
        {product.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full mr-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="font-bold text-lg">{product.price}</p>
    </div>
  );
};

export default ProductCard;
