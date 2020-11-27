import React, { Component } from 'react';
import './Services.css';
import ServiceItem from './ServiceItem';
import Modal from './Modal';
import Fade from 'react-reveal/Fade';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          url:
            'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          class: 'gallery__item--1',
          service: 'Home Renovation',
        },
        {
          url:
            'https://images.unsplash.com/flagged/photo-1556438758-84625859c6b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          class: 'gallery__item--2',
          service: 'Bathroom Renovation',
        },
        {
          url:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
          class: 'gallery__item--3',
          service: 'New Construction',
        },
        {
          url:
            'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          class: 'gallery__item--4',
          service: 'Kitchen Renovation',
        },
      ],
      imgData: [
        'https://bbb-construction.s3-us-west-1.amazonaws.com/1.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/2.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/3.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/4.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/5.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/6.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/7.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/8.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/9.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/10.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/11.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/12.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/13.jpeg',
        'https://bbb-construction.s3-us-west-1.amazonaws.com/14.jpeg',
      ],

      isOpen: false,
      currentImgIndx: 0,
    };
    this.handlePrevImg = this.handlePrevImg.bind(this);
    this.handleNextImg = this.handleNextImg.bind(this);
    this.handleToggleScreen = this.handleToggleScreen.bind(this);
  }

  handleToggleScreen() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
  handlePrevImg() {
    const { imgData, currentImgIndx } = this.state;
    const lastIndx = imgData.length - 1;
    const shouldReset = currentImgIndx === 0;
    const index = shouldReset ? lastIndx : currentImgIndx - 1;

    this.setState({ currentImgIndx: index });
  }

  handleNextImg() {
    const { imgData, currentImgIndx } = this.state;
    const lastIndx = imgData.length - 1;
    const shouldReset = currentImgIndx === lastIndx;
    const index = shouldReset ? 0 : currentImgIndx + 1;

    this.setState({ currentImgIndx: index });
  }

  render() {
    return (
      <div className='services__container' id='services'>
        <Fade top>
          <div className='services__text'>
            <h1>Services</h1>
            <p>
              We offer a wide range of full-scope architectural, interior
              design, and environmental planning services that can be customized
              to meet your needs. Our team works directly with your team to come
              to the best solution for your home, business, or commercial needs.
            </p>
          </div>
        </Fade>
        <Modal
          handleToggleScreen={this.handleToggleScreen}
          isOpen={this.state.isOpen}
          imgData={this.state.imgData}
          handleNextImg={this.handleNextImg}
          handlePrevImg={this.handlePrevImg}
          currentImgIndx={this.state.currentImgIndx}
        />
        <ServiceItem
          data={this.state.data}
          handleToggleScreen={this.handleToggleScreen}
        />
      </div>
    );
  }
}
