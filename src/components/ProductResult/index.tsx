type Props = {
  title: string,
  value: number
}

export default function ProductResult({title, value}: Props) {
  return (
    <div className="border border-primary p-2 rounded-md">
      <h3 className="text-quartenary text-xs">{title}</h3>
      <p className="text-primary text-base font-bold">R$ {value}</p>
    </div>
  );
}
