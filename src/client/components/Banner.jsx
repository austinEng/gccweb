import React, { Component } from 'react';
import classnames from 'classnames';
import Center from './Center';
import Jumbotron from './Jumbotron';
import BackgroundImage from './BackgroundImage';
import { SparkScroll } from '../modules/spark.js';


const styles = (typeof CSS !== 'undefined') && require ('./Banner.css');

class Banner extends Component {
  render() {
    return (
      <Jumbotron style={{ height: '100vh' }}>
        <BackgroundImage
          src={ this.props.src }
          backgroundSize="cover"
          backgroundPosition="top left"
          backgroundAttachment="fixed"/>
          <Center horizontal vertical>
            <SparkScroll.h1
              className="titleText"
              style={{ color: 'white' }}>
              { this.props.children }
            </SparkScroll.h1>
          </Center>
      </Jumbotron>
    );
  }
};

export default Banner;