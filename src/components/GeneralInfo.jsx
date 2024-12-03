import mision from "../../public/assets/mision.svg";
import investigacion from "../../public/assets/investigacion.svg";
import productos from "../../public/assets/productos.svg";
import { investigadores } from "../lib/data";

export default function GeneralInfo() {
  return (
    // Mision y Vision del Citedi
    <>
      <div className="w-[90%] md:w-max-content">
        <div className=" md:px-8 flex flex-col gap-4">
          <img src={mision} alt="mision" className="size-16" />
          <h3 className="text-fluid-md">Nuestra Misión</h3>
          <p>
            Somos un Centro de investigación científica y desarrollo tecnológico
            del IPN que, a través de programas pertinentes, genera, difunde y
            divulga conocimiento en sistemas digitales; forma profesionales a
            nivel posgrado y científicos de excelencia; y contribuye al
            desarrollo científico, tecnológico y económico de la sociedad a
            nivel regional, nacional y global.
          </p>
          <h3 className="text-fluid-md">Nuestra visión </h3>
          <p>
            En el 2030, el Citedi será un centro líder, altamente competitivo en
            ciencia y tecnología con prestigio internacional y posgrados de
            calidad; actor determinante en el desarrollo científico, tecnológico
            y económico sustentable, con compromiso y responsabilidad sociales.
          </p>
        </div>
        <div className=" md:px-8 flex flex-col gap-4">
          <img src={investigacion} alt="mision" className="size-16" />
          <h3 className="text-fluid-md">Investigadores</h3>
          <p>
            La planta académica está conformada por 21 docentes y, además, un
            Investigador por México está comisionado a Citedi desde 2015. El 73%
            cuenta con el grado de doctor, el 23% con maestría en ciencias y una
            persona es especialista en sistemas digitales. <br /> <br />
            El 45% de la planta académica pertenece al Sistema Nacional de
            Investigadoras e Investigadores (SNII), de los cuales, 2 son nivel
            III, 5 están en el nivel II, 2 docentes son nivel I y 1 es
            candidato.
          </p>

          <div className="flex flex-wrap max-w-[90%] justify-center gap-4">
            {investigadores.map((investigador, i) => (
              <div key={i} className="p-2 border bg-white/20 w-60">
                <h3 className="font-bold">{investigador.name}</h3>
                <p>email: {investigador.email}</p>
                {investigador.level && <p>nivel: {investigador.level}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className=" md:px-8 flex flex-col gap-4">
          <img src={productos} alt="mision" className="size-16" />
          <h3 className="text-fluid-md">Productos Académicos</h3>
          <p>
            La planta académica está conformada por 21 docentes y, además, un
            Investigador por México está comisionado a Citedi desde 2015. El 73%
            cuenta con el grado de doctor, el 23% con maestría en ciencias y una
            persona es especialista en sistemas digitales. <br /> <br />
            El 45% de la planta académica pertenece al Sistema Nacional de
            Investigadoras e Investigadores (SNII), de los cuales, 2 son nivel
            III, 5 están en el nivel II, 2 docentes son nivel I y 1 es
            candidato.
          </p>
        </div>
      </div>
    </>
  );
}
