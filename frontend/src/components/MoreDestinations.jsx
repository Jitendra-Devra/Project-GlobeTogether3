// MoreDestinations.jsx
import React from "react";
import Card from "./Card";
import Amritsar from "../assets/Amritsar.jpg";
import Manali from "../assets/Best-Time-to-Visit-Kullu-Manali.jpg";
import Kashmir from "../assets/Manali_City.jpg";
import TajMahal from "../assets/tajMAhal.jpg";
import Coorg from "../assets/coorg_karnataka.jpg";
import Ladakh from "../assets/wonders-of-ladakh-1-e1523597251360.jpg";
import Jaipur from "../assets/jaipur-rajasthan.jpeg";

const MoreDestinations = () => {
  const allDestinations = [
    { image: Jaipur, title: "Jaipur", description: "Known as the 'Pink City,' Jaipur is famous for its stunning palaces, historic forts like Amber Fort, and vibrant bazaars showcasing traditional Rajasthani culture." },
    { image: Amritsar, title: "Amritsar", description: "Amritsar is home to the iconic Golden Temple, a serene and spiritual hub for Sikhs worldwide. It also houses the historic Jallianwala Bagh and offers vibrant Punjabi culture and food." },
    { image: Manali, title: "Manali", description: "Manali, a beautiful hill station in Himachal Pradesh, is known for its snow-capped mountains, adventure sports like paragliding and skiing, and scenic landscapes." },
    { image: Kashmir, title: "Kashmir", description: "Often called 'Paradise on Earth,' Kashmir features stunning valleys, Dal Lake's houseboats, lush gardens, and the majestic Himalayan backdrop." },
    { image: TajMahal, title: "Taj Mahal", description: "The Taj Mahal in Agra, a UNESCO World Heritage Site, is a symbol of love and architectural brilliance, built by Emperor Shah Jahan for his wife Mumtaz Mahal." },
    { image: Coorg, title: "Coorg", description: "Coorg, also known as the 'Scotland of India,' is a lush green hill station famous for coffee plantations, waterfalls, and rich biodiversity." },
    { image: Ladakh, title: "Ladakh", description: "Ladakh, a cold desert region, is renowned for its breathtaking landscapes, high-altitude lakes like Pangong Tso, Buddhist monasteries, and adventurous treks." }
  ];

  return (
    <div className="py-5 bg-gray-300">
      <h2 className="text-3xl font-semibold text-center mb-8">Explore More Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {allDestinations.map((dest, index) => (
          <Card key={index} {...dest} />
        ))}
      </div>
    </div>
  );
};

export default MoreDestinations;
