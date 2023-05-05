import { motion } from 'framer-motion';
import { useState } from 'react';

import { InvitationModal } from './InvitationModal';
import featuresdiagonal from '../assets/images/featuresdiagonal.png';
import Whatsapp from '../assets/icons/Whatsapp';
export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1">
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              ¡No te preocupes por nada!
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Nosotros nos encargamos
            </h2>
            <p className="mb-2 text-customGrayText leading-loose">
              No tiene que preocuparse por todo lo que pasa por detrás de la
              creación del sitio web, incluyendo alojamiento web, registro de
              dominio y seguridad del sitio. ¿Esto que significa para usted?
              Significa que puede estar seguro de que su sitio está en buenas
              manos y no pensar en ningún detalle técnico. Confía en nosotros
              para que puedas centrarte en lo que realmente importa: su negocio.
            </p>
            <a
              href="#FAQ"
              className="mb-16 text-indigo-50 font-bold hover:text-indigo-400 leading-loose transition"
            >
            {/* element with flex */}
            
              Conoce mas sobre el proceso de creacion
            </a>
            <div
              className="w-[210px] h-12 custom-button-colored mr-10 "
              onClick={() => setIsModalOpen(true)}
            >
              <Whatsapp className="mr-3" />
              Contactanos
            </div>
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={featuresdiagonal}
              alt="f1"
              className="rounded-xl  custom-border-gray"
            />
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
