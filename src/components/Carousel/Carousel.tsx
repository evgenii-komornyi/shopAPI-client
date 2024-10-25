import { FC, useEffect, useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { CarouselContainer, Controls, NextButton, PrevButton, Slide, Text } from './styles/Carousel';

export interface Slide {
    image: string;
    text: string;
}

interface CarouselProps {
    slides: Slide[];
}

let intervalId: NodeJS.Timeout;

export const Carousel: FC<CarouselProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalId);
    }, [slides.length]);

    const startAutoSlide = () => {
        intervalId = setInterval(() => {
            handleNext();
        }, 5000);
    };

    const stopAutoSlide = () => clearInterval(intervalId);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    };

    return (
        <CarouselContainer onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
            {slides.map((slide, index) => (
                <Slide
                    key={index}
                    $image={slide.image}
                    $isActive={currentIndex === index}
                >
                    <Text>{slide.text}</Text>
                </Slide>
            ))}
            <Controls>
                <PrevButton onClick={handlePrev}><ArrowBack /></PrevButton>
                <NextButton onClick={handleNext}><ArrowForward /></NextButton>
            </Controls>
        </CarouselContainer>
    );
};