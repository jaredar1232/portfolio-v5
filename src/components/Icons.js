import React, { Component } from "react"
import styled from "styled-components"

const IconsWrapper = styled.div`
  display: inline-block;
  margin: 1.6rem 1.6rem;
  text-align: center;

  .icon-container {
    width: 5rem;
    height: 5rem;
    border-radius: 5px;
    margin: 0 auto;
  }

  .icon-image {
    height: 100%;
    width: 100%;
  }

  .icon-label {
    font-weight: 400;
    font-size: 1.6rem;
    color: black;
  }
`

export default class Icons extends Component {
  render() {
    return (
      <IconsWrapper>
        <div className="icon-container">
          <img className="icon-image" src={`/${this.props.anIcon}.png`}></img>
        </div>
        <div className="icon-label">{this.props.anIcon}</div>
      </IconsWrapper>
    )
  }
}
