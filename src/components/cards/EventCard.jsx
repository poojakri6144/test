import React from "react";
import EventDetails from "../EventDetails";
import FavoriteButton from "../button/FavoriteButton";
import BookNowButton from "../button/BookNowButton";
import BookmarkButton from "../button/BookMarkButton";

const EventCard = ({ event }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white relative">
      <BookmarkButton />
      <img src={event?.imageUrl} alt={event?.title} className="w-full" />

      <EventDetails event={event} />
    </div>
  );
};

export default EventCard;
