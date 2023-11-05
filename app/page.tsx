// "use client";
// import CommonHeader from "@/components/CommonHeader";
// import Footer from "@/components/Footer";
// import HeaderTop from "@/components/home-1/HeaderTophome1";
// import Authors from "@/components/home-1/Authors";
// import Benefit from "@/components/home-1/Benefit";
// import Calculate from "@/components/home-1/Calculate";
// import Category from "@/components/home-1/Category";
// import Faq from "@/components/home-1/Faq";
// import Hero from "@/components/home-1/Hero";
// import NewListing from "@/components/home-1/NewListing";
// import Property from "@/components/home-1/Property";
// import Services from "@/components/home-1/Services";
// import StartListing from "@/components/home-1/StartListing";
// import Testimonial from "@/components/home-1/Testimonial";
// import MobileMenu from "@/components/MobileMenu";

// export default function Home() {
//   return (
//     <main>
//       <HeaderTop />
//       <CommonHeader />
//       <MobileMenu />
//       <Hero />
//       <Category />
//       <Property />
//       <NewListing />
//       <Services />
//       <Calculate />
//       <Benefit />
//       <Authors />
//       <Testimonial />
//       <StartListing />
//       <Faq />
//       <Footer />
//     </main>
//   );
// }



"use client";
import MobileApp from "@/components/home-2/MobileApp";
import Testimonial from "@/components/home-2/Testimonial";
import Counter from "@/components/home-4/Counter";
import Cta from "@/components/home-4/Cta";
import Destinations from "@/components/home-4/Destinations";
import DiscountCard from "@/components/home-4/DiscountCard";
import Facilities from "@/components/home-4/Facilities";
import Featured from "@/components/home-4/Featured";
import Hero from "@/components/home-4/Hero";
import WhyChoose from "@/components/home-4/WhyChoose";
import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <CommonHeader />
      <Hero />
      <Facilities />
      <DiscountCard />
      <Featured />
      <WhyChoose />
      <Counter />
      <MobileApp />
      <Destinations />
      <Cta />
      <Testimonial />
      <Footer />
    </>
  );
};

export default page;
