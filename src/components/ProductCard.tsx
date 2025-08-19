import React from "react";

interface ProductCardProps {
  image: string;
  colors: string[];
  title: string;
  subtitle: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  colors,
  title,
  subtitle,
  price,
}) => {
  return (
    <div className="">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover rounded-md"
      />

      {/* Color Dots */}
      <div className="flex space-x-2 justify-start pt-5">
        {colors.map((color, i) => (
          <span
            key={i}
            className={`w-4 h-4 rounded-full border border-gray-300 cursor-pointer`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Title */}
      <p className="text-sm font-semibold truncate  text-left p-1" title={title}>
        {title}
      </p>

      {/* Subtitle */}
      <p className="text-xs text-gray-600 p-1 text-left">{subtitle}</p>

      {/* Price and label */}
      <div className="flex justify-start items-center space-x-3">
        <span className="px-2 py-0.5 text-xs border border-yellow-300 rounded-md text-yellow-700 font-semibold">
          Warehouse Code (6 characters)
        </span>
        <span className="text-lg font-bold">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
