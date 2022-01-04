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
                </Slider>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>

    );
  }
}