import type { Product } from "@/shared/types/types";

type ProductCardProps = {
  product: Product;
};

const formatPrice = (priceStr: string) => {
  // keep only digits, preserve leading zeros, and insert commas every three digits
  const digits = String(priceStr).replace(/[^0-9]/g, "");
  if (!digits) return String(priceStr);
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductCard = ({ product }: ProductCardProps) => {
  const formatted = formatPrice(product.price);

  return (
    <div className="text-left">
      <img src={product.image} alt={product.name} className="w-full mb-4" />

      {/* color swatches (no extra text underneath) */}
      <div className="flex items-center mb-3" aria-hidden>
        {product.colors.map((color: string, index: number) => (
          <span
            key={index}
            className="w-4 h-4 rounded-full mr-2 border border-gray-200 shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <h3 className="font-semibold text-base mb-1 truncate">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-3">{product.subtext}</p>

      {/* single tag inline with price */}
      <div className="flex items-center mb-2 gap-3">
        {product.tags && product.tags[0] && (
          <span className="inline-flex items-center text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            {product.tags[0]}
          </span>
        )}

        <div className="font-bold text-lg">
          <span className="text-xl mr-1">{formatted}</span>
          <span className="text-sm align-baseline">원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
