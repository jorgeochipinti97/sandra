import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { Pagination } from 'swiper/modules';

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2   mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    "
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">

              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Comodidad y Conectividad
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Disfruta de un alojamiento con desayuno incluido, WiFi, y baño privado. Además, ofrecemos servicios adicionales para tu comodidad.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Conexión WiFi</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Baños privados</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Habitaciones con aire, ventilador, calefacción</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Opciones de almuerzo, cena, y servicio de hotelería.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Pagination]}
pagination={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="mySwiper "
            >
              <SwiperSlide>
                <div className="flex justify-center pb-5">

                  <img src="/foto2.jpeg" className="rounded-xl md:h-[60vh]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">

                  <img src="/foto3.jpeg" className="rounded-xl md:h-[60vh]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">

                  <img src="/foto4.jpeg" className="rounded-xl md:h-[60vh]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">

                  <img src="/foto5.jpeg" className="rounded-xl md:h-[60vh]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">

                  <img src="/foto6.jpeg" className="rounded-xl md:h-[60vh]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">

                  <img src="/foto7.jpeg" className="rounded-xl md:h-[60vh]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">

                  <img src="/foto8.jpeg" className="rounded-xl md:h-[60vh]" />
                </div>
              </SwiperSlide>

              ...
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
