"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  Star,
} from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  const testimonials = [
    {
      id: 1,
      name: "crimsonbison",
      company: "Analytics Depot",
      role: "Analytics Depot Project",
      avatar: "/clients/crimsonbison.webp",
      rating: 5,
      country: "🇺🇸",
      countryName: "United States",
      text: "Mohamed is truly a remarkable software developer! He not only EXCEEDED our expectations with his detailed and well-documented work, but his proactive communication and quick responsiveness made collaborating a breeze. Highly recommend! 👏",
      fiverr_link: "https://www.fiverr.com/mohamedouterbah?public_mode=true",
    },
    {
      id: 2,
      name: "hamididz",
      company: "ArtisBay",
      role: "ArtisBay Project",
      avatar: "/clients/hamididz.webp",
      rating: 5,
      country: "🇯🇵",
      countryName: "Japan",
      text: "We assigned him the task of enhancing font responsiveness, which he executed flawlessly. Beyond that, he proactively suggested valuable improvements that further optimized the design. His communication was clear and professional, and his skills were truly outstanding. Highly recommended!",
      fiverr_link: "https://www.fiverr.com/mohamedouterbah?public_mode=true",
    },
    {
      id: 3,
      name: "mustafa nawaz",
      company: "Cribbix",
      role: "Cribbix Project",
      avatar: null,
      rating: 5,
      country: "🇬🇧",
      countryName: "United Kingdom",
      text: "Mohamed is a great developer with a deep understanding of building a product end to end. Amazing communication - highly recommended.",
      fiverr_link: "https://www.fiverr.com/mohamedouterbah?public_mode=true",
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
            What My Clients Say
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I've had the privilege of working with amazing clients who have
            shared their experiences working with me. Here's what they have to
            say.
          </p>
          <div className="flex items-center justify-center mt-6 gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="font-semibold text-lg text-foreground">
              4.9 on Fiverr
            </span>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={500}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="testimonials-swiper !overflow-visible"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="px-4 h-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden h-full flex flex-col">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden border-2 border-white/30">
                            {testimonial.avatar ? (
                              <div className="relative w-full h-full">
                                <Image
                                  src={testimonial.avatar}
                                  alt={`${testimonial.name} profile picture`}
                                  fill
                                  sizes="64px"
                                  className="object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white">
                                {testimonial.name.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                          <div className="absolute -bottom-1 -right-1 text-2xl">
                            {testimonial.country}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-100 font-medium">
                            {testimonial.company}
                          </p>
                          <p className="text-blue-200 text-sm">
                            {testimonial.countryName}
                          </p>
                        </div>
                      </div>
                      <a
                        href={testimonial.fiverr_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-full"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-300 fill-yellow-300"
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-lg">
                        {testimonial.rating}.0
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="relative flex-grow">
                      <Quote className="h-12 w-12 text-blue-200 dark:text-blue-800 absolute -top-6 -left-2 opacity-50" />
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 pl-8 font-medium">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                        ✓ Verified Client
                      </div>
                      <a
                        href={testimonial.fiverr_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm flex items-center gap-1 transition-colors"
                      >
                        Verify on Fiverr
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-slide {
          height: auto;
          display: flex;
        }

        .testimonials-swiper .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </section>
  );
}
