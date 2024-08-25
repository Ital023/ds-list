type Props = {
  name: string;
  value?: number;
  placeholder: string;
  type: string;
};

export default function InputPrimary({
  name,
  value,
  placeholder,
  type,
}: Props) {
  return (
    <input
      className="border w-50 rounded-md border-secondary px-3 py-2"
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
}
