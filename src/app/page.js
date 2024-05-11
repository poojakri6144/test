"use client";
import BannerSlider from "@/components/BannerSlider";
import ColorfulBar from "@/components/ColorBar";
import EventCategoriesTab from "@/components/EventCategoriesTab";
import SimpleThings from "@/components/SimpleThings";
// import TabFilters from "@/components/TabFilters";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/NavBar";
import React, { useState } from "react";
import eventsData from "../db/events.json";
import EventFilter from "@/components/TabFilters";
// import Slider from "@/components/BannerSlider";

function page() {
  const [filteredEvents, setFilteredEvents] = useState(eventsData.events);

  return (
    <>
      <Navbar />
      <ColorfulBar />
      <EventFilter
        filteredEvents={filteredEvents}
        setFilteredEvents={setFilteredEvents}
      />

      <SimpleThings />
      <Footer />
    </>
  );
}

export default page;
