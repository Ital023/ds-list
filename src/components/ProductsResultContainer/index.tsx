import { useEffect, useState } from "react";
import * as productService from "../../services/product-service";
import { ProductDTO } from "../../models/ProductDTO";
import ProductResult from "../ProductResult";

type Props = {
  minValue: number;
  maxValue: number;
};

export default function ProductsResultContainer({ minValue, maxValue }: Props) {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    const listProducts = productService.findByPrice(minValue, maxValue);
    setProducts(listProducts);
    setTotalProducts(listProducts.length);
  }, [minValue, maxValue]);

  return totalProducts > 0 ? (
    <div className="bg-tertiary rounded-md p-5 flex flex-col gap-3 md:max-w-[960px] md:mx-auto">
      {products.map((product) => (
        <ProductResult
          key={product.id}
          title={product.name}
          value={product.price}
        />
      ))}
    </div>
  ) : (
    <div className="bg-tertiary rounded-md p-5 flex flex-col gap-3 md:max-w-[960px] md:mx-auto">
      <h1 className="font-bold">Nada foi encontrado</h1>
    </div>
  );
}
