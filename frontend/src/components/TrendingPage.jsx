// import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Amritsar from "../assets/Amritsar.jpg";
import Manali from "../assets/Best-Time-to-Visit-Kullu-Manali.jpg";
import Kashmir from "../assets/Manali_City.jpg";
import TajMahal from "../assets/tajMAhal.jpg";
import Coorg from "../assets/coorg_karnataka.jpg";
import Ladakh from "../assets/wonders-of-ladakh-1-e1523597251360.jpg";
import Rishikesh from "../assets/Rishikesh.jpg";
import Udaipur from "../assets/Udaipur.jpeg";
import Goa from "../assets/Goa.jpeg";
import Jaipur from "../assets/jaipur-rajasthan.jpeg";
import Andaman from "../assets/Andman.jpeg";

const TrendingPage = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      image: Amritsar,
      title: "Amritsar",
      description:
        "Amritsar is home to the iconic Golden Temple, a serene and spiritual hub for Sikhs worldwide. It also houses the historic Jallianwala Bagh and offers vibrant Punjabi culture and food.",
    },
    {
      image: Manali,
      title: "Manali",
      description:
        "Manali, a beautiful hill station in Himachal Pradesh, is known for its snow-capped mountains, adventure sports like paragliding and skiing, and scenic landscapes.",
    },
    {
      image: Kashmir,
      title: "Kashmir",
      description:
        "Often called 'Paradise on Earth,' Kashmir features stunning valleys, Dal Lake's houseboats, lush gardens, and the majestic Himalayan backdrop.",
    },
    {
      image: TajMahal,
      title: "Taj Mahal",
      description:
        "The Taj Mahal in Agra, a UNESCO World Heritage Site, is a symbol of love and architectural brilliance, built by Emperor Shah Jahan for his wife Mumtaz Mahal.",
    },
    {
      image: Coorg,
      title: "Coorg",
      description:
        "Coorg, also known as the 'Scotland of India,' is a lush green hill station famous for coffee plantations, waterfalls, and rich biodiversity.",
    },
    {
      image: Ladakh,
      title: "Ladakh",
      description:
        "Ladakh, a cold desert region, is renowned for its breathtaking landscapes, high-altitude lakes like Pangong Tso, Buddhist monasteries, and adventurous treks.",
    },
    { image: Jaipur, title: "Jaipur", description: "Known as the 'Pink City,' Jaipur is famous for its stunning palaces, historic forts like Amber Fort, and vibrant bazaars showcasing traditional Rajasthani culture." },
    { image: Rishikesh, title: "Rishikesh", description: "Located on the banks of the Ganges River, Rishikesh is known for its yoga retreats, adventure sports like river rafting, and serene spiritual vibes." },

    { image: Goa, title: "Goa", description: "A paradise for beach lovers, Goa is known for its stunning coastline, vibrant nightlife, Portuguese heritage, and laid-back atmosphere." },
    { image: Udaipur, title: "Udaipur", description: "Dubbed the 'City of Lakes,' Udaipur offers picturesque palaces, serene lakes, and a rich cultural heritage reflecting Rajasthan's royal past." },

    { image: Andaman, title: "Andaman & Nicobar Islands", description: "A tropical paradise with pristine beaches, turquoise waters, and exotic marine life, perfect for snorkeling and diving enthusiasts." },




  ];
  return (
    <>
      <div className=" py-5 bg-gray-300">
        {/* Header Section with View More Button */}
        <div className="flex justify-between items-center px-5 mb-5">
          <h2 className="text-3xl font-bold">Trending Destinations</h2>
          <button
            onClick={() => navigate("/destinations")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 transition-all"
          >
             Explore More &gt;
          </button>
        </div>

            {/* Horizontal Scrolling List */}
        <div className="flex overflow-x-auto space-x-5 px-5 ">
        {destinations.map((dest, index) => (
           <div
           key={index}
           className="min-w-[250px] flex-shrink-0 shadow-lg rounded-lg overflow-hidden  transform transition-transform hover:scale-105"
         >
           <Card {...dest} />
         </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default TrendingPage;
