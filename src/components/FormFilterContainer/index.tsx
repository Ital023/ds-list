export default function FormFilterContainer() {
  return (
    <div className="h-48 bg-tertiary flex justify-center content-center rounded-md p-5">
      <form className="flex flex-col gap-3">
        <input className="border w-50 rounded-md border-secondary px-3 py-2" type="text" placeholder="Preço mínimo"/>
        <input className="border w-50 rounded-md border-secondary px-3 py-2" type="text" placeholder="Preço máximo"/>
        <button className="w-50 cursor-pointer bg-primary rounded-md py-2 text-tertiary font-bold">Filtrar</button>
      </form>
    </div>
  );
}
