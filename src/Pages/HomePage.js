import React from "react";
import styled, { keyframes } from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import Particle from "../Components/Particle";
import Earth from "../img/earth.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import astronaut from "../img/spaceman.png";
import LinearIndeterminate from "../Components/LoadingProgress";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Truong Giang (Dyno)</span>
        </h1>
        <p>I'm a Software Engineer</p>
        <div className="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100037360239411"
            className="icon i-facebook"
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/truonggiang2302/"
            className="icon i-github"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/giang-duong-2a5297229/"
            className="icon i-youtube"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Spaceman>
        <img src={astronaut} alt="spaceman" />
      </Spaceman>
      <EarthIcon>
        <img src={Earth} alt="earth" />
      </EarthIcon>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: hidden;
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;
const float = keyframes`
0% {transform:translateY(-10px)}
50% {transform:translateY(15px) translateX(15px)}
100% {transform:translateY(-10px)}

`;
const floatEar = keyframes`
0% {transform:translateY(-5px)}
50% {transform:translateY(10px) translateX(10px)}
100% {transform:translateY(-5px)}

`;
const Spaceman = styled.div`
  position: absolute;
  top: 50%;
  right: 15%;
  width: 10vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const EarthIcon = styled.div`
  position: absolute;
  top: 65%;
  left: 5%;
  width: 75vw;
  animation: ${floatEar} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

export default HomePage;
