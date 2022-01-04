import React from 'react';
import CarouselItem from './CarouselItem';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    const { milestones } = this.props;
    return (
            <CarouselProvider
                className='carousel-provider'
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                visibleSlides={3}
                totalSlides={milestones.length}
            >
                <ButtonBack>Back</ButtonBack>
                <Slider className='slider'>
                    {milestones.map((milestone, idx) => {
                        return (
                            <Slide key= {milestone.id} index={idx} className= 'slide'>
                                <CarouselItem milestone= {milestone} />
                            </Slide>
                        )
                    })}
     
                    {/* <Slide className='slide' index={0}>I am the first Slide.</Slide>
                    <Slide className='slide' index={1}>I am the second Slide.</Slide>
                    <Slide className='slide' index={2}>I am the third Slide.</Slide>
                    <Slide className='slide' index={3}>I am the fourth Slide.</Slide> */}
                </Slider>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>

    );
  }
}