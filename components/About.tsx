import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 thumb">
            <Image
              src="/images/who-we-are.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>

          <div className="col-md-7">
            <h4>ACERCA DE LAS KAIROS TECHNOLOGIES</h4>
            <h1>
              Somos una empresa especializada en prestaciones de
              soluciones, Inspecciones y servicios de mantenimientos
              en el sector energético apostando por las energías
              renovables.
            </h1>

            <p>
              KT dispone de los recursos, experiencia, garantía de
              calidad y capacidad geográfica en centro América y el
              caribe dedicado a soluciones y servicio del
              mantenimiento.
            </p>

            <p>
              Su objetivo principal es reducir costos a las empresas
              ofreciéndoles subcontrataciones de servicios para que
              sus clientes se centren exclusivamente en su Core
              Business, optimizando sus políticas de recurso humano
              enfocado en la salud y seguridad.
            </p>

            <p>
              La gama de servicios de Kairos Technologies está
              destinada a completar sus programas de Mantenimiento,
              inspección, operación y gestión de suministros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
