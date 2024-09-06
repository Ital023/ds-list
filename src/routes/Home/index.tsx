import { useState } from "react";
import FormFilterContainer from "../../components/FormFilterContainer";
import Header from "../../components/Header";
import ProductsResultContainer from "../../components/ProductsResultContainer";
import { FormDate } from "../../models/FormDate";

export default function Home() {

  const[formDate, setFormDate] = useState<FormDate>({});

  function handleFilter(minValue: number, maxValue: number) {
    setFormDate({minValue: minValue, maxValue: maxValue});
  }

  return (
    <>
      <Header />
      <main className="p-4">
        <FormFilterContainer onFilter={handleFilter} />
        <ProductsResultContainer product={formDate}/>
      </main>
    </>
  );
}
