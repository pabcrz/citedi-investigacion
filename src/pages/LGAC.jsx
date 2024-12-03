import GeneralInfo from "../components/GeneralInfo";
import { areas } from "../lib/data";

export default function LGAC() {
  return (
    <>
      <section className="w-full bg-primary py-14 flex justify-center text-white md:px-8">
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

      <section className="w-full py-14 flex justify-center px-8">
        <div className="flex flex-col w-max-content md:py-14 justify-center md:px-8 text-fluid-md gap-8 md:gap-4 text-center font-bold ">
          {areas.map((area, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 items-center md:px-8 rounded"
            >
              <h2 className="">{area.title}</h2>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-justify">
                <div className="flex flex-col justify-center items-center">
                  <img src={area.img} alt={area.title} className="shadow-lg" />
                  <div className="rounded-full size-16 bg-primary/90 flex items-center justify-center -mt-4">
                    <img
                      src={area.icon}
                      alt={area.alt}
                      role="img"
                      aria-hidden="true"
                      className="size-8"
                    />
                  </div>
                </div>
                <p className="text-lg font-normal md:max-w-[70%]">
                  {area.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-green py-14 flex flex-col gap-10 items-center text-white md:px-8">
        <GeneralInfo />
      </section>
    </>
  );
}
