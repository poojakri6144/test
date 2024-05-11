// // components/Slider.js
// "use client";
// import React, { useState, useEffect } from "react";
// import BannerCard from "./cards/BannerCard";
// import { v4 as uuidv4 } from "uuid";
// import NewCarousel from "./NewCarousel";

// let cards = [
//   {
//     key: uuidv4(),
//     content: (
//       <BannerCard
//         title="Yoga For"
//         subtitle="Your Parents"
//         desc="Sculpt your body Balance your weight Yoga for Pain relief"
//         date="12th Feb To 26th Feb"
//         imageUrl="https://www.athulyaliving.com/blogs/wp-content/uploads/2017/07/yoga-for-seniors.jpg"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <BannerCard
//         title="Music For"
//         subtitle="Your Parents"
//         desc="Sculpt your body Balance your weight Yoga for Pain relief"
//         date="12th Feb To 26th Feb"
//         imageUrl="https://www.athulyaliving.com/blogs/wp-content/uploads/2017/07/yoga-for-seniors.jpg"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <BannerCard
//         title="Dance For"
//         subtitle="Your Parents"
//         desc="Sculpt your body Balance your weight Yoga for Pain relief"
//         date="12th Feb To 26th Feb"
//         imageUrl="https://www.athulyaliving.com/blogs/wp-content/uploads/2017/07/yoga-for-seniors.jpg"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <BannerCard
//         title="Exercise For"
//         subtitle="Your Parents"
//         desc="Sculpt your body Balance your weight Yoga for Pain relief"
//         date="12th Feb To 26th Feb"
//         imageUrl="https://www.athulyaliving.com/blogs/wp-content/uploads/2017/07/yoga-for-seniors.jpg"
//       />
//     ),
//   },
//   {
//     key: uuidv4(),
//     content: (
//       <BannerCard
//         title="Exercise For"
//         subtitle="Your Parents"
//         desc="Sculpt your body Balance your weight Yoga for Pain relief"
//         date="12th Feb To 26th Feb"
//         imageUrl="https://www.athulyaliving.com/blogs/wp-content/uploads/2017/07/yoga-for-seniors.jpg"
//       />
//     ),
//   },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setCurrentSlide((prevSlide) =>
//   //       prevSlide === cardData?.length - 1 ? 0 : prevSlide + 1
//   //     );
//   //   }, 3000); // Change slide every 3 seconds

//   //   return () => clearTimeout(timer);
//   // }, [currentSlide]);

//   return (
//     <div className="-mt-5">
//       <NewCarousel
//         cards={cards}
//         height="500px"
//         width="100%"
//         margin="0 auto"
//         offset={2}
//         showArrows={false}
//       />
//       {/*  <div className="bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {cardData.map((_, idx) => (
//           <button
//             key={idx}
//             className={`h-2 w-2 rounded-full ${
//               idx === currentSlide ? "bg-blue-700" : "bg-white"
//             }`}
//             onClick={() => setCurrentSlide(idx)}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default Slider;
