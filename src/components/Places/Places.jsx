import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "Experience the tranquility of gliding through serene waters on a traditional boat, surrounded by breathtaking landscapes and vibrant wildlife.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description: "Dive into the mysterious underwater world, where vibrant coral reefs and exotic marine life create an unforgettable adventure beneath the waves.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "Australia",
    description: "Discover the vibrant city of Sydney, home to the iconic Opera House and Harbour Bridge, and explore its stunning beaches and cultural landmarks.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United States",
    description: "Uncover the glitz and glamour of Los Angeles, where Hollywood dreams come to life amidst iconic landmarks, world-class dining, and sunny beaches.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "Nevada, USA",
    description: "Experience the excitement of Las Vegas, a city that never sleeps, with its dazzling lights, vibrant nightlife, and endless entertainment options.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;

