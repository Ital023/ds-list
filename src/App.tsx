import FormFilterContainer from "./components/FormFilterContainer";
import Header from "./components/Header";
import ProductsResultContainer from "./components/ProductsResultContainer";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-4">
        <FormFilterContainer />
        <ProductsResultContainer />
      </main>
    </>
  );
}
