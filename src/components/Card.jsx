import DOMPurify from "dompurify";

import { cards } from "../lib/data";

export default function Card() {
  return (
    <>
      <div className="w-max-content flex flex-wrap gap-8 justify-center">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`p-4 w-80 h-80 rounded-sm`}
            style={{
              borderColor: card.color, // Asignar el color al borde
              backgroundColor: card.color, // Asignar el color como fondo
            }}
          >
            <div className="flex flex-col justify-evenly h-full text-white">
              {card.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-4 items-center"
                >
                  <p
                    className={`rounded-full min-w-20 size-20 border-2 flex items-center justify-center text-white text-wrap text-4xl font-bold`}
                    style={{
                      backgroundColor: card.color, // Asignar el color como fondo
                    }}
                  >
                    {item.numbers}
                  </p>
                  <p
                    className="w-auto text-sm"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
