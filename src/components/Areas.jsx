import { areas } from "../lib/data";

export default function Areas() {
  return (
    <>
      <div className="text-fluid-md w-max-content flex flex-wrap gap-2 text-center font-bold justify-center">
        {areas.map((area, i) => (
          <a
            key={i}
            href="#"
            className="flex flex-col items-center w-[70%] md:max-w-[30%] px-8 hover:shadow-lg rounded-md py-4"
          >
            <img src={area.img} alt={area.content} className="rounded-md" />
            <div className="rounded-full size-16 bg-primary flex items-center justify-center -mt-4">
              <img
                src={area.icon}
                alt={area.alt}
                role="img"
                aria-hidden="true"
                className="size-8"
              />
            </div>
            <p>{area.content}</p>
          </a>
        ))}
      </div>
    </>
  );
}
