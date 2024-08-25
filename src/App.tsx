import FormFilterContainer from "./components/FormFilterContainer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-secondary p-4">
        <FormFilterContainer />
      </main>
    </>
  );
}
