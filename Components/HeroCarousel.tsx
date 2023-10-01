'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const HeroCarousel = () => {

    const heroImage = [
        { imgUrl: '/assets/images/hero-1.svg', alt: 'Smart-Watch' },
        { imgUrl: '/assets/images/hero-2.svg', alt: 'Bag' },
        { imgUrl: '/assets/images/hero-3.svg', alt: 'Lamp' },
        { imgUrl: '/assets/images/hero-4.svg', alt: 'Air Fryer' },
        { imgUrl: '/assets/images/hero-5.svg', alt: 'Chain' },
    ]

    return (
        <div className='hero-carousel'>
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false}>
                {heroImage.map((hero) => (
                    <Image src={hero.imgUrl} alt={hero.alt} width={484} height={484} className='object-contain' key={hero.alt} />
                ))}
            </Carousel>
            <Image src='/assets/icons/hand-drawn-arrow.svg' alt='' width={175} height={175} className='max-xl:hidden absolute -left-[15%] bottom-0 z-0' />
        </div>
    )
}

export default HeroCarousel