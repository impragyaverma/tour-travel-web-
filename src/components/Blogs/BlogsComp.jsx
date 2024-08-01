import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top Places to Visit in India",
    description:
      "Discover the best travel destinations in India, from the majestic Taj Mahal to the serene backwaters of Kerala. This blog will guide you through the must-see spots and hidden gems across the country.",
    author: "Travel Enthusiast",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Top Places to Visit in the US",
    description:
      "Explore the diverse landscapes and cultural attractions of the United States. From the bustling streets of New York City to the natural wonders of Yellowstone, find your next adventure here.",
    author: "Globe Trotter",
    date: "May 10, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Top Places to Visit in Japan",
    description:
      "Immerse yourself in the rich history and vibrant culture of Japan. This blog covers the top destinations including Tokyo, Kyoto, and the scenic beauty of Mount Fuji.",
    author: "Wanderlust",
    date: "June 15, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key

