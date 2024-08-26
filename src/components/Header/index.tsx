import { useContext } from "react";
import { ContextProductsCount } from "../../utils/context-products";

export default function Header() {

  const {contextProductsCount} = useContext(ContextProductsCount);

  return (
    <header className="h-18 bg-primary flex justify-center content-center">
      <div className="container lg:max-w-[960px] w- px-2 flex flex-row justify-between items-center h-full">
        <h2 className="font-bold text-xl text-tertiary">DSFilter</h2>
        <p className="font-bold text-xs text-tertiary">{contextProductsCount} produto(s)</p>
      </div>
    </header>
  );
}
