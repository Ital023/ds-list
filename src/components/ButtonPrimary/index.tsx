type Props = {
  text: string
}


export default function ButtonPrimary({text}: Props) {
  return (
    <button className="w-50 cursor-pointer bg-primary rounded-md py-2 text-tertiary font-bold">
      {text}
    </button>
  );
}
