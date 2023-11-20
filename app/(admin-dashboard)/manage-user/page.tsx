"use client";
import {
  ArrowRightIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  ArrowRightCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { StarIcon } from "@heroicons/react/20/solid";
import { adminRecentListings } from "../../../public/data/adminrecentlisting";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";
import HeadlessList from "@/components/ListBox";
import CounterElement from "@/components/CounterElement";

const Page = () => {
  // var options: ApexOptions = {
  //   chart: {
  //     type: "area",
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   colors: ["#363AED", "#37D279"],
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     curve: "smooth",
  //   },
  // };
  // var series = [
  //   {
  //     name: "Check In",
  //     data: [31, 40, 28, 51, 42, 109, 100],
  //   },
  //   {
  //     name: "Check Out",
  //     data: [11, 32, 45, 32, 34, 52, 41],
  //   },
  // ];
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Manage users</h2>
        <Link href="/manage-post" className="btn-primary">
          <ArrowRightCircleIcon className="w-5 h-5" /> Manage post
        </Link>
      </div>

      {/* Recent bookings */}
      <section className="bg-[var(--bg-2)] px-3 lg:px-6 pb-4 lg:pb-6 mt-4 lg:mt-6">
        <div className="p-3 sm:p-4 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl bg-white">
          <div className="flex flex-wrap gap-2 justify-between mb-7">
            <h3 className="h3">Users</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left bg-[var(--bg-1)] border-b border-dashed">
                  <th className="py-3 lg:py-4 px-2 xl:px-4">Hotel Name</th>
                  <th className="py-3 lg:py-4 px-2">Location</th>
                  <th className="py-3 lg:py-4 px-2">Agents</th>
                  <th className="py-3 lg:py-4 px-2">Date</th>
                  <th className="py-3 lg:py-4 px-2">Status</th>
                  <th className="py-3 lg:py-4 px-2">Review</th>
                  <th className="py-3 lg:py-4 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {adminRecentListings.map(
                  ({ id, agent, date, location, name, review, status }) => (
                    <tr
                      key={id}
                      className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                      <td className="py-3 lg:py-4 px-2 xl:px-4">{name}</td>
                      <td className="py-3 lg:py-4 px-2 text-primary">
                        {location}
                      </td>
                      <td className="py-3 lg:py-4 px-2">{agent}</td>
                      <td className="py-3 lg:py-4 px-2">{date}</td>

                      <td className={`py-3 lg:py-4 px-2`}>
                        <div className={`w-32`}>
                          <HeadlessList initialValue={status} />
                        </div>
                      </td>
                      <td className="py-3 lg:py-4 px-2">
                        <span className="flex gap-1 items-center">
                          <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                          {review}
                        </span>
                      </td>
                      <td className="py-3 lg:py-4 px-2">
                        <button className="text-primary px-2"> 
                          <PencilSquareIcon className="w-5 h-5" />
                        </button>
                        <button className="text-[var(--secondary-500)] px-2">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </section>

      {/* <section className="grid grid-cols-12 gap-4 lg:gap-6 px-4 lg:px-6 pb-4 lg:pb-6">
        <div className="col-span-12 lg:col-span-6 p-3 sm:p-4 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl bg-white">
          <div className="flex justify-between flex-wrap gap-3 items-center mb-6">
            <h3 className="h3">Room Notifications</h3>
            <div className="flex items-center flex-wrap gap-3">
              <span>Sort By:</span>
              <div className="p-3 border rounded-full ml-2">
                <select className="focus:outline-none">
                  <option value="1">Hotel</option>
                  <option value="2">Car</option>
                  <option value="3">Resort</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left bg-[var(--bg-1)] border-b border-dashed">
                  <th className="py-3 lg:py-4 px-2">Hotel Name</th>
                  <th className="py-3 lg:py-4 px-2">Date</th>
                  <th className="py-3 lg:py-4 px-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {adminRecentListings.map(({ id, date, name, status }) => (
                  <tr
                    key={id}
                    className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                    <td
                      className="py-3 lg:py-4 px-2 lg:px-4">
                      {name}
                    </td>
                    <td className="py-3 lg:py-4 px-2">{date} - 24/07/2023</td>
                    <td className={`py-3 lg:py-4 px-2`}>
                      <div className={`w-32`}>
                        <HeadlessList initialValue={status} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 py-6 lg:py-8 px-8 lg:px-10 border rounded-2xl bg-white">
          <div className="flex justify-between flex-wrap gap-3 items-center mb-6">
            <h3 className="h3">Upcoming Arrivals</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <span>Sort By:</span>
              <div className="p-3 border rounded-full ml-2">
                <select className="focus:outline-none">
                  <option value="1">Newest</option>
                  <option value="2">Price</option>
                  <option value="3">Oldest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left bg-[var(--bg-1)] border-b border-dashed">
                  <th className="py-3 lg:py-4 px-2">Invoice ID</th>
                  <th className="py-3 lg:py-4 px-2">Name</th>
                  <th className="py-3 lg:py-4 px-2">Room</th>
                  <th className="py-3 lg:py-4 px-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {adminRecentListings.map(({ id, date, agent, status }) => (
                  <tr
                    key={id}
                    className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                    <td className="py-3 lg:py-4 px-2">#1033{id}</td>
                    <td className="py-3 lg:py-4 px-2">{agent}</td>
                    <td className={`py-3 lg:py-4 px-2`}>Room 24A</td>
                    <td className="py-3 lg:py-4 px-2">{date} - 24/07/2023</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </section> */}
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
