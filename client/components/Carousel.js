import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    return (
            <CarouselProvider
                className='carousel-provider'
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                visibleSlides={3}
                totalSlides={4}
            >
                <ButtonBack>Back</ButtonBack>
                <Slider className='slider'>
                    <Slide className='slide' index={0}>I am the first Slide.</Slide>
                    <Slide className='slide' index={1}>I am the second Slide.</Slide>
                    <Slide className='slide' index={2}>I am the third Slide.</Slide>
                    <Slide className='slide' index={3}>I am the fourth Slide.</Slide>
                </Slider>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>

    );
  }
}