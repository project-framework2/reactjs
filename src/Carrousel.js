import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import paris from './paris.jpg';
import athenes from './athenes.jpg';
import hk from './hong-kong.jpg';
import londres from './londres.jpg';
import tokyo from './tokyo.jpg';

export class Carrousel extends Component {
    render() {
        return (
            <Carousel className="height: 200px;">
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={paris}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Paris</h3>
                    <p>Une très belle photo</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hk}
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>Hong Kong</h3>
                    <p>Une autre photo magnifique</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={athenes}
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>Athènes</h3>
                    <p>Et une dernière :D</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
      }
}