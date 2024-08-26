import FormFilterContainer from "../../components/FormFilterContainer";
import Header from "../../components/Header";
import ProductsResultContainer from "../../components/ProductsResultContainer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4">
        <FormFilterContainer />
        <ProductsResultContainer minValue={0} maxValue={0}/>
      </main>
    </>
  );
}
