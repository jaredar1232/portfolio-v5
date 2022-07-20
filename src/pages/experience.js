import React, { Component } from "react"
import styled from "styled-components"
import AJob from "../components/AJob"
import Modal from "../components/Modal"
import experienceDataArray from "../../static/experienceData.json"

export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      modalDetails: {},
    }
  }

  modalOnClick = modalData => {
    this.setState({
      modalDetails: modalData,
      showModal: true,
    })
    document.body.classList.add("no-scroll")
    const projectArray = document.getElementsByClassName("project")
    for (var i = 0; i < projectArray.length; i++) {
      projectArray[i].pause()
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
    document.body.classList.remove("no-scroll")
    const projectArray = document.getElementsByClassName("project")
    for (var i = 0; i < projectArray.length; i++) {
      projectArray[i].play()
    }
  }

  render() {
    return (
      <>
        <Modal
          modalDetails={this.state.modalDetails}
          closeModal={this.closeModal}
          showModal={this.state.showModal}
        />
        <ExperienceSection>
                <div className="u-center-text">
                <h2 className="heading-secondary" id="applications">
                    Experience
                </h2>
                </div>
                {experienceDataArray.map(aProject => (
                <AJob
                    aProject={aProject}
                    key={aProject.name}
                    modalOnClick={this.modalOnClick}
                    showModal={this.state.showModal}
                />
                ))}
        </ExperienceSection>
      </>
    )
  }
}

const ExperienceSection = styled.section`
    background-color: white;
    padding: 10rem 0 10rem 0;;

  .u-center-text {
    text-align: center;
  }

  .heading-secondary {
    font-size: 5.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 3rem;

    @media (max-width: 56.25em) {
      font-size: 4rem;
      color: black;
    }
  }
`