"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "react-tooltip";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from "next/link";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { CheckIcon, StarIcon } from "@heroicons/react/20/solid";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowsRightLeftIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  HandThumbUpIcon,
  HeartIcon,
  MapPinIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import HotelDetailsFeaturedRoom from "@/components/HotelDetailsFeaturedRoom";
import CheckboxCustom from "@/components/Checkbox";
import ManageNews from "@/components/ManageNews";
const featuredHotelData = [
  {
    id: 1,
    img: "/img/featured-hotel-7.jpg",
    title: "Luxury Room",
    price: 256,
    favourite: false,
  },
  {
    id: 3,
    img: "/img/featured-hotel-9.jpg",
    title: "Luxury Room",
    price: 256,
    favourite: false,
  },
];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const Page = () => {
  const [data, setData] = useState(featuredHotelData);
  const tooltipStyle = {
    backgroundColor: "#3539E9",
    color: "#fff",
    borderRadius: "10px",
  };
  return (
    <main>
      {/* ABOVE BODY */}
      <div className="bg-[var(--bg-2)]">
        <div className="container-fluid p-0">
          <div>
            <div className="col-span-12">
              <Swiper
                loop={true}
                slidesPerView="auto"
                spaceBetween={16}
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation={{
                  nextEl: ".btn-next",
                  prevEl: ".btn-prev",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2.25,
                  },
                  768: {
                    slidesPerView: 0.5,
                  },
                  1200: {
                    slidesPerView: 3.25,
                  },
                }}
                modules={[Navigation]}
                className="swiper property-gallery-slider"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-1.jpg"
                      className="link block property-gallery"
                    >
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-1.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-2.jpg"
                      className="link block property-gallery"
                    >
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-2.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-3.jpg"
                      className="link block property-gallery"
                    >
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-3.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-3.jpg"
                      className="link block property-gallery"
                    >
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-3.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-1.jpg"
                      className="link block property-gallery"
                    >
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-1.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-2.jpg"
                      className="link block property-gallery"
                    >
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-2.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-3.jpg"
                      className="link block property-gallery"
                    >
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-3.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                </div>
                <button className="btn-prev absolute top-[45%] left-4 z-[1] bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white duration-300">
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button className="btn-next absolute top-[45%] right-4 z-[1] bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white duration-300">
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* BELOW BODY */}
      <div className="bg-[var(--bg-2)] py-[30px] lg:py-[70px] px-3">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 2xl:col-span-8">
              <div className="section-space--sm">
                <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-2xl mb-10">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
                    <h2 className="mt-4 h2 mb-0"> Burj Al Arab </h2>
                    <ul className="flex gap-3 items-center">
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white"
                        >
                          <HeartIcon className="h-5 w-5" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white"
                        >
                          <ArrowsRightLeftIcon className="w-5 h-5" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white"
                        >
                          <ShareIcon className="w-5 h-5" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="flex flex-wrap items-center justify-between gap-4 gap-md-0">
                    <li>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-5 h-5 text-[var(--secondary-500)]" />
                        <p className="mb-0"> 3890 Poplar Dr. </p>
                      </div>
                    </li>
                    <li className="text-primary text-lg">•</li>
                    <li>
                      <p className="mb-0">
                        ID: <span className="text-primary">12546</span>
                      </p>
                    </li>
                    <li className="text-primary text-lg">•</li>
                    <li>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                        <p className="mb-0"> 4.5(66) </p>
                      </div>
                    </li>
                    <li className="text-primary text-lg">•</li>
                    <li>
                      <p className="mb-0">
                        <span className="clr-neutral-500">Published:</span> Feb
                        9, 23
                      </p>
                    </li>
                  </ul>
                  <div className="border border-dashed my-8"></div>
                  <ul className="flex items-center flex-wrap gap-3">
                    <li>
                      <span className="block text-lg font-medium">
                        Facilities -
                      </span>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="parking"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary"
                      >
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-car-parking.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="restaurent"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary"
                      >
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-breakfast.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="room"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary"
                      >
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-room-service.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="fitness"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary"
                      >
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-fitness.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="swimming"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary"
                      >
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-swimming-pool.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="laundry"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary"
                      >
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-laundry.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="free"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary"
                      >
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-glob.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                  </ul>
                  <Tooltip
                    id="parking"
                    style={tooltipStyle}
                    offset={7}
                    content="Parking"
                  />
                  <Tooltip
                    id="restaurent"
                    style={tooltipStyle}
                    offset={7}
                    content="Restaurent"
                  />
                  <Tooltip
                    id="room"
                    style={tooltipStyle}
                    offset={7}
                    content="Room Service"
                  />
                  <Tooltip
                    id="fitness"
                    style={tooltipStyle}
                    offset={7}
                    content="Fitness"
                  />
                  <Tooltip
                    id="swimming"
                    style={tooltipStyle}
                    offset={7}
                    content="Swimming"
                  />
                  <Tooltip
                    id="laundry"
                    style={tooltipStyle}
                    offset={7}
                    content="Laundry"
                  />
                  <Tooltip
                    id="free"
                    style={tooltipStyle}
                    offset={7}
                    content="Free Internet"
                  />
                </div>

                {/* !!! MANAGE NEWS !!! */}
                <div className="p-3 sm:p-4 xl:p-6 bg-white rounded-2xl mb-10 ">
                  <h4 className="mb-5 text-2xl font-semibold">
                    {" "}
                    List of News{" "}
                  </h4>
                  <ul className="flex flex-col gap-8">
                    {data.map((item) => (
                      <ManageNews key={item.id} item={item} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
