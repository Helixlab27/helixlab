"use client";

import React, { useState } from 'react';

const accordionItems = [
  {
    id: 1,
    title: 'Le prospect écrit',
    imageUrl: '/prospect-ecrit.jpg',
  },
  {
    id: 2,
    title: "Le système répond",
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Il convertit',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Vous êtes alerté',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
  },
];

const AccordionItem = ({ item, isActive, onMouseEnter }: {
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        md:transition-all md:duration-700 md:ease-in-out
        h-[180px] w-full
        md:h-[450px]
        ${isActive ? 'md:w-[400px]' : 'md:w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <span
        className={`
          absolute text-white text-base md:text-lg font-semibold whitespace-nowrap
          md:transition-all md:duration-300 md:ease-in-out
          bottom-4 left-1/2 -translate-x-1/2 rotate-0
          ${
            isActive
              ? 'md:bottom-6 md:rotate-0'
              : 'md:bottom-24 md:rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white font-sans">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
              Comment ça marche
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Un système qui travaille pour vous 24h/24.
            </p>
            <div className="mt-8">
              <a
                href="#demo"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                En savoir plus →
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
