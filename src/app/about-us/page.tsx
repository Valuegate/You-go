import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <NavBar showSearch={false} />

        <p className="sm:text-center sm:text-2xl text-4xl text-weirdBrown font-bold mt-20 mb-10 px-[10%]">
            About Us
        </p>

      <p className="mt-20 text-light-black-4 text-xl px-[10%]">
        Welcome to YouGo Crafts! We are an e-commerce website dedicated to
        connecting buyers and sellers in the world of crafts. Our mission is to
        provide a platform where artisans and craft enthusiasts can come
        together to sell and purchase unique handmade products.
      </p>
      <p className="mt-10 text-light-black-4 text-xl px-[10%]">
        At YouGo Crafts, we offer a wide range of crafts products, including
        jewellery, clothing, accessories, home decor, and more. Whether you&apos;re
        an interior designer looking for one-of-a-kind pieces or a
        fashion-forward individual with an eye for style and craftsmanship, our
        website caters to your needs.
      </p>
      <p className="mt-10 text-light-black-4 text-xl px-[10%]">
        What sets us apart is our commitment to providing a free and
        commission-free platform for both buyers and sellers. We believe in
        empowering artisans and giving them the opportunity to showcase their
        talent on an international scale. Sellers can create their own e-shops,
        promote their brand, and reach a global audience.
      </p>

      <p className="mt-10 text-light-black-4 text-xl px-[10%]">
        Our website is the outcome of the Erasmus+ project, YouGo. This project
        aims to empower rural young women by providing them with the means to
        sell their products and crafts online. Through YouGo Crafts, we aim to
        promote handmade products, support local artisans, and foster a sense of
        community.
      </p>

      <p className="mt-10 text-light-black-4 text-xl px-[10%]">
        We are passionate about crafts and dedicated to providing a seamless
        user experience. While we haven&apos;t received any specific awards or
        achievements yet, our focus remains on delivering exceptional service
        and promoting the art of handmade crafts.
      </p>

      <p className="mt-10 mb-20 text-light-black-4 text-xl px-[10%]">
        Thank you for choosing YouGo Crafts. We look forward to being your go-to
        destination for all things craft-related.
      </p>
      <Footer />
    </>
  );
};

export default AboutUsPage;
