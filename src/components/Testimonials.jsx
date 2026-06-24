import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

export default function Testimonials() {
    const data = [
        {
            text: "Fast speeds and even faster customer support absolutely love it!",
            name: "Chris Gayle",
            img: "assets/profile.png",
        },
        {
            text: "I only joined for the content ended up loving the mobile service too.",
            name: "Mike Judo",
            img: "assets/profile.png",
        },
        {
            text: "Didn’t expect a phone plan to come with her. Absolute 10/10.",
            name: "Jerome Bell",
            img: "assets/profile.png",
        },
        {
            text: "Super smooth service and amazing network coverage everywhere.",
            name: "Alex Carter",
            img: "assets/profile.png",
        },
        {
            text: "Best mobile experience I’ve ever had, highly recommended!",
            name: "David Smith",
            img: "assets/profile.png",
        },
    ];

    return (
        <div className="">
            <div className="max-w-6xl mx-auto py-12 px-4 lg:px-20">

                <h2 className="font-semibold text-3xl md:text-5xl text-center text-(--primary-color) leading-tight mb-4">
                    Testimonials
                </h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    spaceBetween={25}
                    speed={800}
                    className="mySwiper mt-10"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {data.map((item, i) => (
                        <SwiperSlide
                            key={i}
                            className="p-8 bg-white rounded-2xl border border-gray-300 shadow-md hover:shadow-xl transition duration-300"
                        >
                            <Star className="text-amber-400" size={18} />

                            <p className="text-[#494949] text-[14px] mt-6 leading-relaxed">
                                {item.text}
                            </p>

                            <div className="flex gap-4 mt-6 items-center">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <p className="font-semibold text-[#333]">
                                    {item.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}