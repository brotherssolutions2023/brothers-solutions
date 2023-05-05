import { useState } from 'react';
import { motion } from 'framer-motion';

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Tienes alguna pregunta?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <FAQBox
                title="Como es el proceso?"
                content={[
                  'En nuestro proceso de creación, lo primero que necesitamos es conocer sus ideas y requerimientos. Para ello, puede contactarnos por WhatsApp y proporcionarnos los detalles necesarios.',
                  'Después de discutir sus ideas, generaremos un boceto de su sitio web. Este boceto será una representación visual de su sitio web, que incluirá el diseño de la página de inicio y la estructura general del sitio. Le pediremos que revise el boceto y que nos brinde sus comentarios y sugerencias.',
                  'Luego de revisar el boceto, realizaremos los cambios necesarios hasta que esté satisfecho con el diseño y la estructura del sitio. Una vez que esté completamente satisfecho, procederemos a subir su sitio web al servidor y configurar todo para que esté completamente funcional.',
                  'Finalmente, realizaremos el cobro acordado por nuestros servicios. Estaremos encantados de ayudarlo a crear la página web de sus sueños y asegurarnos de que esté completamente conforme con nuestro trabajo.',
                ]}
                defaultOpen
              />
            </div>
            {/* <div className="w-full p-1">
              <FAQBox
                title="How to claim your 25% discount offer?"
                content={[
                  'Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus. Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.',
                ]}
              />
            </div>
            <div className="w-full p-1">
              <FAQBox
                title="What&rsquo;s your refund policy?"
                content={[
                  'Lorem ipsum dolor sit amet, to the consectr adipiscing elit Volutpat tempor to the condi mentum vitae vel purus.',
                ]}
              />
            </div>
            <div className="w-full p-1">
              <FAQBox
                title="How to get support for the product?"
                content={['']}
              />
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {content.map((p) => (
            <p key={p.length} className="mb-2">
              {p}
            </p>
          ))}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? 'rotate-[180deg]' : 'rotate-[270deg]'
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
