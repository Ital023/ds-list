import ButtonPrimary from "../ButtonPrimary";
import InputPrimary from "../InputPrimary";

export default function FormFilterContainer() {
  return (
    <div className="md:max-w-[960px] md:mx-auto h-50 bg-tertiary flex justify-center content-center rounded-md p-5 md:justify-start">

      <form className="flex flex-col gap-3">

        <InputPrimary name="minPrice" type="text" placeholder="Preço mínimo"/>
        <InputPrimary name="maxPrice" type="text" placeholder="Preço máximo"/>

        <ButtonPrimary text="Filtrar"/>
      </form>
    </div>
  );
}
