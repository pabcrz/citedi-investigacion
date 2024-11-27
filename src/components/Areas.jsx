import { areas } from "../lib/data";

export default function Areas() {
  return (
    <>
      {areas.map((area, i) => (
        <a
          key={i}
          href="#"
          className="flex flex-col items-center w-[70%] md:max-w-[30%] px-8 hover:bg-black/5 rounded py-4"
        >
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
          <p className="pt-4">{area.title}</p>
        </a>
      ))}
    </>
  );
}
