"use client";

import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";
import casa from '../../assets/CFLZ.JPG';
import boda from '../../assets/boda.png';
import mesa from '../../assets/mesa.png';

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-8 sm:py-12 lg:py-20">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h1 className="font-Montserrat-semi-bold text-3xl sm:text-4xl lg:text-5xl text-center px-4 mb-4" style={{ color: '#4a7c59' }}>
                    Proyectos
                </h1>
                <div className="w-24 h-1 bg-[#4a7c59] mx-auto rounded-full"></div>
                <p className="text-[#4a7c59] text-sm sm:text-base lg:text-lg mt-6 px-4 max-w-2xl mx-auto opacity-80">
                    Descubre nuestra galería de proyectos arquitectónicos que reflejan excelencia, innovación y distinción
                </p>
            </div>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(2).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 sm:p-6 md:p-8 lg:p-12 rounded-3xl mb-6">
                        <p
                            className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg lg:text-xl font-sans max-w-4xl mx-auto leading-relaxed">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                Excelencia arquitectónica en cada detalle.
                            </span>{" "}
                            Nuestros proyectos representan la perfecta fusión entre diseño innovador, 
                            construcción de precisión y acabados de lujo. Cada espacio es concebido 
                            con una visión única que trasciende las tendencias, creando obras atemporales 
                            que reflejan la personalidad y aspiraciones de nuestros clientes.
                        </p>
                        <div className="mt-6 sm:mt-8">
                            <img
                                src={`https://images.unsplash.com/photo-${index === 0 ? '1600596542815' : '1600607687939'}-ffad4c1539a9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3`}
                                alt={`Proyecto arquitectónico ${index + 1}`}
                                className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 h-auto mx-auto object-cover rounded-2xl shadow-lg" />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Espacio Confortable",
        title: "Elegancia, amplitud y calidez en un entorno diseñado para disfrutar cada momento.",
        src: casa,
        content: <DummyContent />,
    },
    {
        category: "Asesoría Integral de Eventos",
        title: "Cuidamos cada detalle para que tu celebración sea perfecta y sin preocupaciones.",
        src: boda,
        content: <DummyContent />,
    },
    {
        category: "Gastronomía Gourmet",
        title: "Sabores exclusivos y presentaciones impecables que conquistan todos los sentidos.",
        src: mesa,
        content: <DummyContent />,
    },
    
];
