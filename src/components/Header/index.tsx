export default function Header() {
  return (
    <header className="h-18 bg-primary flex justify-center content-center">
      <div className="container lg:max-w-[960px] w- px-2 flex flex-row justify-between items-center h-full">
        <h2 className="font-bold text-xl text-tertiary">DSFilter</h2>
        <p className="font-bold text-xs text-tertiary">6 produto(s)</p>
      </div>
    </header>
  );
}
