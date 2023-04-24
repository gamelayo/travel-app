import React from "react";
import Hero from "../../component/hero/Hero";
import Destination from "../../component/destination/Destination";
import Search from "../../component/search/Search";
import Selects from "../../component/select/Selects";
import ImgCarousel from "../../component/carousel/ImgCarousel";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircle } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <BsArrowUpCircle size={25} />
      </ScrollToTop>
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <ImgCarousel />
    </>
  );
};

export default Home;
