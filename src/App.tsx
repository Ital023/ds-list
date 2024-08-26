import { useState } from "react";
import Home from "./routes/Home";
import { ContextProductsCount } from "./utils/context-products";

export default function App() {
  const[contextProductsCount,setContextProductsCount] = useState<number>(0);

  return (
    <ContextProductsCount.Provider value={{contextProductsCount, setContextProductsCount}}>
    <Home />
    </ContextProductsCount.Provider>
  );
}
