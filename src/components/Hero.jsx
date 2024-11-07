import logoIPN from "/assets/logo_ipn.webp";

export default function Hero() {
  return (
    <section className="w-full bg-hero-pattern bg-center bg-cover h-[40dvh] flex items-center justify-center">
      <div className="w-max-content grid gap-6 px-8">
        <img
          src={logoIPN}
          alt="Logo IPN, la tecnica al servicio de la patria."
          className="h-24 w-auto object-contain hidden md:block"
        />
        <div className="bg-black/50 text-white p-8">
          <h1 className="font-black text-fluid-lg">
            La Investigación en Citedi
          </h1>
          <h2 className="font-extrabold text-fluid-md">
            Centro de Investigación y Desarrollo de Tecnología Digital
          </h2>
        </div>
      </div>
    </section>
  );
}
