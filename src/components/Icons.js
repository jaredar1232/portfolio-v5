import styled from "styled-components"

export default function Icons({ anIcon }) {
  return (
    <IconsWrapper>
      <div className="icon-container">
        <img
          className="icon-image"
          src={`/${anIcon}.png`}
          alt={`${anIcon} logo`}
        />
      </div>
      <div className="icon-label">{anIcon}</div>
    </IconsWrapper>
  )
}

const IconsWrapper = styled.div`
  margin: 1.6rem;
  text-align: center;

  .icon-container {
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    margin: 0 auto;
  }

  .icon-image {
    height: 100%;
    width: 100%;
  }

  .icon-label {
    font-size: 1.6rem;
    color: black;
  }
`
