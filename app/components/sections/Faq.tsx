"use client";
import React from "react";
import PageTitle from "../core/PageTitle";
import Accordion from "../core/Accordion";
import faqs from "../../data/faq.json";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-36 px-5 md:px-16 bg-gray-200">
      <PageTitle
        tagLabel="Frequently Asked Questions"
        title="Make a Better Decision"
        desc="See how we handled most of our clients concerns."
      />
      <div className="w-full mt-20 lg:px-16">
        <Accordion items={faqs} />
      </div>
    </div>
  );
};

export default Faq;
