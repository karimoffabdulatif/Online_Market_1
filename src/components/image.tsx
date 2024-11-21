"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { ProductType } from "@/interfaces";

interface Props {
  product: ProductType;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product }) => {
  const [isLoading, setLoading] = useState(true);

  // Rasm URL mavjudligini tekshiramiz
  if (!product?.image) {
    console.error("Image URL is missing:", product);
    return <div>No Image Available</div>;
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group">
      <Image
        src={product.image}  // Rasm manbasi
        alt={product.title || "Product Image"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition-all duration-700 group-hover:scale-110 ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoad={() => setLoading(false)}  // Rasm yuklangandan so'ng loading holatini yangilash
        onError={() => {
          console.error('Image loading error');
          setLoading(false);  // Xatolik bo'lsa, loading holatini yangilash
        }}
      />
    </div>
  );
};

export default CustomImage;
