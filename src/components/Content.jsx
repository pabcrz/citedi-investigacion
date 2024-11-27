import About from "./About";
import Areas from "./Areas";
import Card from "./Card";
import Direccion from "./Direccion";

export default function Content() {
  return (
    <>
      <section className="w-full py-14 flex justify-center">
        <p className="text-fluid-md w-max-content px-8">
          La investigación científica que se desarrolla en CITEDI se agrupa en
          líneas de generación y aplicación del conocimiento (LGAC) que permite
          concentrar nuestros esfuerzos de investigación y de formación de
          capital humano de nivel posgrado para obtener resultados con mayor
          impacto científico, tecnológico y social.
        </p>
      </section>
      <section className="w-full py-14 flex justify-center px-8 bg-[#01876B]">
        <div className="w-max-content flex flex-wrap gap-4 justify-center">
          <Card />
        </div>
      </section>
      <section className="w-full bg-primary py-14 flex justify-center text-white px-8">
        <p className="text-fluid-md w-max-content px-8">
          <span className="text-3xl">
            Líneas de generación y aplicación del conocimiento (LGAC)
          </span>
          <br />
          Desarrollamos investigación en temas científicos de frontera gracias a
          la participación activa de investigadores y alumnos en la generación
          de nuevo conocimiento a favor de la sociedad.
        </p>
      </section>
      <section className="w-full flex justify-center py-14">
        <div className="text-fluid-md w-max-content flex flex-wrap gap-2 text-center font-bold justify-center">
          <Areas />
        </div>
      </section>
      <section className="w-full flex justify-center py-14 bg-[#323232]">
        <About />
      </section>
      <section className="w-full px-8 py-14 bg-tertiary flex justify-center">
        <Direccion />
      </section>
    </>
  );
}
