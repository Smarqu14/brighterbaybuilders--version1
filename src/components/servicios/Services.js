import React, { Component } from "react";
import "./Services.css";
import ServiceItem from "./ServiceItem";
import Modal from "./Modal";

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          url:
            "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          class: "gallery__item--1",
          service: "Home Renovation",
        },
        {
          url:
            "https://images.unsplash.com/flagged/photo-1556438758-84625859c6b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
          class: "gallery__item--2",
          service: "Bathroom Renovation",
        },
        {
          url:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
          class: "gallery__item--3",
          service: "New Construction",
        },
        {
          url:
            "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          class: "gallery__item--4",
          service: "Kitchen Renovation",
        },
      ],
      imgData: [
        "https://images.unsplash.com/photo-1543525324-26e03b510586?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1543525324-9146d43c2a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1543525324-59e153f55a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1042&q=80",
        "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1435&q=80",
        "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1556156653-e5a7c69cc263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1574184420433-97596a59e79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
        "https://images.unsplash.com/photo-1509453721491-c3af5961df76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80",
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
      <div className="services__container" id="services">
        <div className="services__text">
          <h1>Services</h1>
          <p>
            We offer a wide range of full-scope architectural, interior design,
            and environmental planning services that can be customized to meet
            your needs. Our team works directly with your team to come to the
            best solution for your home, business, or commercial needs.
          </p>
        </div>
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
