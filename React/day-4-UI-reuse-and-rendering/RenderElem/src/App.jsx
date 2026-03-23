import React from "react";
import ProductCard from "./components/ProductCard";

const App = () => {

  let productArr = [
    {
      id: 1,
      name: "Camera",
      description: "Capture stunning photos with high clarity and precision.",
      price: 2500,
      image: "https://pro-ducts-showcase.netlify.app/assets/cam2.jpg"
    },
    {
      id: 2,
      name: "Vintage Camera",
      description: "Classic design with modern performance for timeless shots.",
      price: 5200,
      image: "https://pro-ducts-showcase.netlify.app/assets/camera.jpg"
    },
    {
      id: 3,
      name: "Desk Watch",
      description: "Minimal desk clock to keep your workspace organized.",
      price: 1800,
      image: "https://pro-ducts-showcase.netlify.app/assets/desk%20watch.jpg"
    },
    {
      id: 4,
      name: "Headphones",
      description: "Enjoy immersive sound with comfortable all-day wear.",
      price: 2200,
      image: "https://pro-ducts-showcase.netlify.app/assets/headphones.jpg"
    },
    {
      id: 5,
      name: "Cool Headphones",
      description: "Stylish headphones with powerful bass and noise isolation.",
      price: 3500,
      image: "https://pro-ducts-showcase.netlify.app/assets/head2.jpg"
    },
    {
      id: 6,
      name: "Keyboard",
      description: "Compact mechanical keyboard with smooth typing experience.",
      price: 1500,
      image: "https://pro-ducts-showcase.netlify.app/assets/key.jpg"
    },
    {
      id: 7,
      name: "Perfume",
      description: "Long-lasting fragrance that keeps you fresh all day.",
      price: 2700,
      image: "https://pro-ducts-showcase.netlify.app/assets/perfume.jpg"
    },
    {
      id: 8,
      name: "Music Player",
      description: "Portable music player with crisp sound quality.",
      price: 4200,
      image: "https://pro-ducts-showcase.netlify.app/assets/r1.jpg"
    },
    {
      id: 9,
      name: "Speaker",
      description: "Powerful speaker delivering deep bass and clear audio.",
      price: 3800,
      image: "https://pro-ducts-showcase.netlify.app/assets/speaker.jpg"
    },
    {
      id: 10,
      name: "Smart Watch",
      description: "Track fitness, notifications, and time in style.",
      price: 6000,
      image: "https://pro-ducts-showcase.netlify.app/assets/watch.jpg"
    }
  ];

  return (
    <div className="h-screen flex flex-col items-center ">
      <div className="flex flex-col items-center bg-black text-white w-screen p-3 tracking-[0.5px] leading-none">
        <h1 className="text-[30px] font-[650] ">Product Showcase</h1>
        <p>Explore our amazing products!</p>
      </div>

      <div className="flex-1 w-full p-4 grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-5 
                    gap-4"
      >
        {
          productArr.map((elem) => {
            return <ProductCard product={elem} />
          })
        }
      </div>

      <div className="bg-black w-screen text-white p-2">
        <p className="flex justify-center text-[15px] ">
          @2026 All Rights Reserved | ( made with ❤️ by Atish )
        </p>
      </div>

    </div>
  )
}

export default App