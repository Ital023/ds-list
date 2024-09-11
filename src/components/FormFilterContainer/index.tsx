import { useState } from "react";
import { FormDate } from "../../models/FormDate";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onFilter: Function
}

export default function FormFilterContainer({onFilter}: Props) {

  const[formDate, setFormDate] = useState<FormDate>({
    minValue: 0,
    maxValue: 0
  });


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setFormDate({...formDate, [name]: value});
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any) {
    event.preventDefault();
    onFilter(formDate.minValue, formDate.maxValue);
  }

  return (
    <div className="md:max-w-[960px] md:mx-auto h-50 bg-tertiary flex justify-center content-center rounded-md p-5 md:justify-start mb-5" onSubmit={handleSubmit}>

      <form className="flex flex-col gap-3">
      
        <input className="border w-50 rounded-md border-secondary px-3 py-2 outline-none" type="text" value={formDate.minValue || ""} name="minValue" onChange={handleInputChange} placeholder="Preço mínimo" />

        <input className="border w-50 rounded-md border-secondary px-3 py-2 outline-none" type="text"   
        value={formDate.maxValue || ""} name="maxValue" onChange={handleInputChange} placeholder="Preço máximo" />
      
        <button type="submit" className="w-50 cursor-pointer bg-primary rounded-md py-2 text-tertiary font-bold">Filtrar</button>
      </form>

    </div>
  );
}
