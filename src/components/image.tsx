"use client";

import { ProductType } from "@/interfaces";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  product: ProductType;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group">
      <Image
        src={product.image}
        alt={product.title || "Product Image"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover transition-all duration-700 group-hover:scale-110 ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default CustomImage;
