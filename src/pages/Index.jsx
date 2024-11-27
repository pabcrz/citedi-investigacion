import Content from "../components/Content";
import Hero from "../components/Hero";

export default function Index() {
  return (
    <>
      <Hero />
      <main className="w-full">
        <Content />
      </main>
    </>
  );
}
