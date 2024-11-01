export default function Direccion() {
  return (
    <>
      <div className="w-max-content grid md:grid-cols-2 gap-6 text-wrap">
        <div className="flex flex-col gap-4 px-4 text-justify">
          <h2 className="text-3xl font-bold text-left pb-4">
            M. en C. Fabiola Cuamea Navarro
          </h2>
          <p>
            La investigación científica es y será fundamental para el desarrollo
            y el progreso de una sociedad. La generación de conocimiento es tan
            importante como su aplicación en la solución a problemas regionales
            y nacionales. Nuestra planta académica está conformada por
            profesores-investigadores principalmente con nivel de doctorado y
            que pertenecen al Sistema Nacional de Investigadoras e
            Investigadores (SNII).
          </p>
          <p>
            El Centro cuenta con laboratorios equipados con tecnología de última
            generación y con aulas y espacios de estudio para atender a nuestros
            profesionistas que forman parte de los programas de posgrado, así
            como a quienes realizan estancias de investigación. Será un honor
            que conozcas las diferentes actividades de investigación y que seas
            parte de ellas.
          </p>
          <p>
            El quehacer institucional del Citedi se centra en la investigación
            científica, la cual se realiza a través del desarrollo de proyectos
            de investigación en áreas estratégicas, como la ciencia de datos, la
            inteligencia artificial aplicada a la salud humana, el procesamiento
            optodigital de imágenes, la navegación de vehículos autónomos, los
            sistemas de inspiración cuática, la medicina matemática, los
            sistemas mecatrónicos complejos, las redes de telecomunicaciones de
            última generación e internet de las cosas y la innovación social.{" "}
          </p>
          <a
            href="#"
            className="font-bold text-primary hover:text-white hover:bg-primary self-center px-2"
          >
            Contáctame para más información sobre investigación
          </a>
        </div>
        <img
          src="/src/assets/profile.jpg"
          alt="Fabiola Cuamea"
          className="max-w-[90%] h-auto m-auto"
        />
      </div>
    </>
  );
}
