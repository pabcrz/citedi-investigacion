import { areas } from "../lib/data";

export default function LGAC() {
  return (
    <>
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

      <section className="w-full py-14 flex justify-center px-8">
        <div className="flex flex-col w-max-content py-14 justify-center px-8 text-fluid-md gap-2 text-center font-bold ">
          {areas.map((area, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 items-center px-8 rounded py-4"
            >
              <h3 className="">{area.title}</h3>
              <div className="flex gap-4 text-justify">
                <div className="flex flex-col justify-center">
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
                <p className="text-lg font-normal max-w-[70%]">
                  {area.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
