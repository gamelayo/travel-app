import React from "react";
import Hero from "../../component/hero/Hero";
import Destination from "../../component/destination/Destination";
import Search from "../../component/search/Search";
import Selects from "../../component/select/Selects";
import ImgCarousel from "../../component/carousel/ImgCarousel";

const Home = () => {
  return (
    <>
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <ImgCarousel />
    </>
  );
};

export default Home;
