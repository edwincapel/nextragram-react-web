import React, { Component } from 'react'
import {
    Col
} from 'reactstrap';
import Image from 'react-graceful-image';


import gif from '../images/loader.gif'

export default class Loader extends Component {
  render() {
    const { width, height } = this.props

    return (
        <Col md="9" className="d-flex justify-content-center flex-wrap p-3">
            <Image
                src={gif}
                width={width}
                height={height}
                className="p-1">
            </Image>
        </Col>
    )
  }
}
