"use client";
import Accordion from "@/components/Accordion";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { propertyAmenities } from "@/public/data/addpropertyAmenities";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[83.33%] xxl:w-[66.66%] mx-auto">
          {/* Item 1 (Thumbnail) from line 19 to line 121 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Add Thumbnail </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}
            >
              <div className="pt-4">
                <div className="border-t pt-4">
                  {/* Hotel type from line 35 to line 88*/}
                  {/* <p className="mb-4 text-xl font-medium">
                    Select Hotel Type :
                  </p>
                  <ul className="flex gap-6 flex-wrap">
                    <li>
                      <div className="flex items-center gap-2">
                        <input
                          className="accent-[var(--primary)] scale-125"
                          type="radio"
                          name="property-type"
                          id="general-settings"
                        />
                        <label
                          className="inline-block text-lg font-medium cursor-pointer"
                          htmlFor="general-settings"
                        >
                          Hotel
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <input
                          className="accent-[var(--primary)] scale-125"
                          type="radio"
                          name="property-type"
                          id="featured-settings"
                        />
                        <label
                          className="inline-block text-lg font-medium cursor-pointer"
                          htmlFor="featured-settings"
                        >
                          Villa
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <input
                          className="accent-[var(--primary)] scale-125"
                          type="radio"
                          name="property-type"
                          id="featured-settings"
                        />
                        <label
                          className="inline-block text-lg font-medium cursor-pointer"
                          htmlFor="featured-settings"
                        >
                          Apartments
                        </label>
                      </div>
                    </li>
                  </ul> */}
                  <p className="mt-2 mb-4 text-xl font-medium">Hotel Name:</p>
                  <input
                    type="text"
                    className="w-full border p-2 focus:outline-none rounded-md text-base text-slate-50"
                    placeholder="This field will automatically input data"
                  />
                  <p className="mt-6 mb-4 text-xl font-medium">Sale Price:</p>
                  <CustomRangeSlider />
                  <p className="mt-6 mb-4 text-xl font-medium ">
                    Description :
                  </p>
                  <textarea
                    rows={5}
                    className="w-full border p-2 focus:outline-none rounded-md text-slate-50"
                    placeholder="Description.."
                  ></textarea>
                </div>
              </div>
            </Accordion>
          </div>
          {/* Item 2 (Attach files & set map) from line 123 to line 195 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Images with Map </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}
            >
              <div className="pt-6">
                <div className="flex items-center justify-center border-dashed rounded-2xl w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full cursor-pointer bg-[var(--bg-2)] rounded-2xl border border-dashed"
                  >
                    <span className="flex flex-col items-center justify-center py-12">
                      <CloudArrowUpIcon className="w-[60px] h-[60px]" />
                      <span className="h3 clr-neutral-500 text-center mt-4 mb-3">
                        Drag & Drop
                      </span>
                      <span className="block text-center mb-6 clr-neutral-500">
                        OR
                      </span>
                      <span className="inline-block py-3 px-6 rounded-full bg-[#354764] text-white mb-10 hover:bg-gray-950">
                        Select Files
                      </span>
                      <span className="flex items-center justify-center flex-wrap gap-5">
                        <span className="flex items-center gap-2">
                          <InformationCircleIcon className="w-5 h-5" />
                          <span className="block mb-0 clr-neutral-500">
                            Maximum allowed file size is 9.00 MB
                          </span>
                        </span>
                        <span className="flex items-center gap-2">
                          <InformationCircleIcon className="w-5 h-5" />
                          <span className="block mb-0 clr-neutral-500">
                            Maximum 5 files are allowed
                          </span>
                        </span>
                      </span>
                    </span>
                    <input type="file" id="dropzone-file" className="hidden" />
                  </label>
                </div>
                <div className="mt-6">
                  <div className="h-[400px]">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2233.5934788396344!2d89.78232001463437!3d23.836268639364576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1688381345276!5m2!1sen!2sbd"
                    ></iframe>
                  </div>
                </div>
                <p className="mt-6 mb-4 text-xl font-medium">Address :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-slate-50"
                  placeholder="Enter Address"
                />
              </div>
            </Accordion>
          </div>

          {/* Item 3 (Hotel Details) from line 197 to line 266 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Hotel Details </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}
            >
              <div className="pt-6">
                <p className="mb-4 text-xl font-medium"> Beds : </p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-slate-50"
                  placeholder="This field will automatically input data"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Bathrooms :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-slate-50"
                  placeholder="This field will automatically input data"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Person :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-slate-50"
                  placeholder="This field will automatically input data"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Year Build :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-slate-50"
                  placeholder="2023"
                />
              </div>
            </Accordion>
          </div>
          {/* Item 4 (Amenities) from line 268 to line 292 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Amenities</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}
            >
              <div className="pt-6">
                <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                  {propertyAmenities.map((item) => (
                    <li key={item} className="py-2">
                      <CheckboxCustom label={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion>
          </div>
          {/* Item 5 (Contact Info) from line ... to line ...*/}
          <div className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Contact Information </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}
            >
              <div className="pt-6">
                <p className="mb-4 text-xl font-medium">Zip/Post Code :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-white"
                  placeholder="4"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Phone :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-white"
                  placeholder="Enter Number"
                />
                <p className="mt-6 mb-4 text-xl font-medium"> Fax : </p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-white"
                  placeholder="Enter Fax number"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Email :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-white"
                  placeholder="Enter Email"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Website :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base text-white"
                  placeholder="Enter website"
                />
              </div>
            </Accordion>
          </div>

          <div className="py-6 md:py-10">
            <ul className="flex flex-col gap-4">
              <li>
                <CheckboxCustom label=" I agree to the privacy & policy" />
              </li>
              <li>
                <CheckboxCustom label="I agree with all terms & conditions" />
              </li>
            </ul>
          </div>

          <Link href="#" className="btn-primary font-semibold">
            <span className="inline-block"> Add News </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
