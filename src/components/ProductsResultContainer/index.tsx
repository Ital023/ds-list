import { useContext, useEffect, useState } from "react";
import * as productService from "../../services/product-service";
import { ProductDTO } from "../../models/ProductDTO";
import ProductResult from "../ProductResult";
import { ContextProductsCount } from "../../utils/context-products";

type Props = {
  minValue?: number;
  maxValue?: number;
};

export default function ProductsResultContainer({ minValue, maxValue }: Props) {
  console.log(minValue);
  console.log(maxValue);
  
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const {setContextProductsCount} = useContext(ContextProductsCount);


  useEffect(() => {
    const listProducts = productService.findByPrice(minValue, maxValue);
    setProducts(listProducts);
    setContextProductsCount(products.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minValue, maxValue]);

  return products.length > 0 ? (
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
