import React, { Component, Fragment } from "react"
import styled from "styled-components"
import AProject from "../components/AProject"
import Modal from "../components/Modal"
import { SEO } from "../components/seo"
import projectDataArray from "../../static/projectData.json"

export default class Projects extends Component {
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
      <Fragment>
        <Modal
          modalDetails={this.state.modalDetails}
          closeModal={this.closeModal}
          showModal={this.state.showModal}
        />
        <ProjectsSection>
          <div className="u-center-text">
            <h2 className="heading" id="applications">
              Projects
            </h2>
          </div>
          {projectDataArray.map(aProject => (
            <AProject
              aProject={aProject}
              key={aProject.name}
              modalOnClick={this.modalOnClick}
              showModal={this.state.showModal}
            />
          ))}
        </ProjectsSection>
      </Fragment>
    )
  }
}

export const Head = () => (
  <SEO title="Jared Rothenberg | Projects" />
)

const ProjectsSection = styled.section`
    background-color: white;
    padding: 10rem 0;

    @media (max-width: 56.25em) {
      padding: 10rem 0 5rem 0;
    }

  .u-center-text {
    text-align: center;
  }

  .heading {
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
    }
  }
`