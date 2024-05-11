// components/BannerCard.js

import BookNowButton from "../button/BookNowButton";
const BannerCard = ({ title, subtitle, desc, date, imageUrl }) => {
  return (
    <div className="flex flex-row bg-purple-800 text-white p-5 rounded-lg shadow-lg max-w-3xl flex-shrink-0 mx-3">
      <div className="flex flex-col ml-4">
        <h1 className="text-4xl font-bold mb-1">{title}</h1>
        <h3 className="text-3xl font-normal mb-3">{subtitle}</h3>
        <p className="mb-4 text-sm font-light text-pretty">{desc}</p>
        <p className="text-white mb-4 text-base rounded-full">{date}</p>
        <BookNowButton />
      </div>
      <div className="right-5">
        <img
          src={imageUrl}
          alt="Elderly Man Doing Yoga"
          width={220}
          height={200}
          className="w-80 h-72 rounded-full"
        />
      </div>
    </div>
  );
};

export default BannerCard;
