import ProductResult from "../ProductResult";

export default function ProductsResultContainer() {
  return (
    <div className="bg-tertiary rounded-md p-5 flex flex-col gap-3 md:max-w-[960px] md:mx-auto">
        <ProductResult />
        <ProductResult />
        <ProductResult />
        <ProductResult />
        <ProductResult />
        <ProductResult />
    </div>
  );
}
