import Slider from "react-slick";
import { Link } from "react-router-dom";
import testimoniData from "../../data/landingpage/Testimoni";

import "./../../styles/index.css";

const Testimoni = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="items-center justify-between relative w-full max-md:px-5">
      <div className="mx-auto w-5/6">
        <div className="self-center text-2xl font-sans font-bold tracking-wider leading-9 text-center text-white">What They Said About Us</div>
        <div className="mt-16 max-md:max-w-full">
          <Slider {...settings}>
            {testimoniData.map((testimonial, index) => (
              <div key={index} className="flex flex-col p-2 px-4 w-full h-[350px] rounded-2xl max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow rounded-2xl border border-custom-gold-rod customShadow h-full">
                  <div className="flex flex-col px-4 pt-6 pb-12 rounded-2xl w-full grow">
                    <div className="flex gap-2 self-start">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg key={starIndex} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-custom-gold-rod">
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="mt-4 text-sm tracking-wide leading-6 font-sans font-normal text-justify text-white">{testimonial.text}</div>
                  </div>
                  <div className="flex gap-5 p-4 text-justify border-t border-dashed border-custom-gold-rod border-opacity-50 rounded-b-2xl text-white max-md:pr-5">
                    {testimonial.img && (
                      <img
                        loading="lazy"
                        srcSet={`${testimonial.img} 100w, ${testimonial.img} 200w, ${testimonial.img} 400w, ${testimonial.img} 800w, ${testimonial.img} 1200w, ${testimonial.img} 1600w, ${testimonial.img} 2000w`}
                        className="shrink-0 my-auto w-10 aspect-square rounded-[100px]"
                      />
                    )}
                    <div className="flex flex-col font-sans items-center justify-center">
                      <div className="text-sm font-bold tracking-wide leading-5">
                        <Link to={testimonial.url} target="_blank">
                          {testimonial.name}
                        </Link>
                      </div>
                      {/* <div className="mt-1 text-xs font-normal tracking-wide leading-5">{testimonial.platform}</div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
