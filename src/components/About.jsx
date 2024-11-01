import { about } from "../lib/data";

export default function About() {
  return (
    <>
      <div className="w-max-content grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 text-white">
        {about.map((card, i) => (
          <div key={i} className="flex items-center flex-col text-center">
            <div className="border-4 rounded-full p-4 size-20 bg-[#01876B] flex flex-wrap">
              <img src={card.icon} aria-hidden="true" />
            </div>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
