import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import CV from "../img/DuongTruongGiang_CV+(1).pdf";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>a Software Engineer</span>
        </h4>
        <p className="paragraph">
          I’m a web developer studying at Saigon Technology University.
          Experience with web development in design, testing, and writing
          modular at Exnodes Company. Learning new languages and technologies
          are what I am passionate about. Looking for a front-end or full-stack
          at level fresher or junior job to expand knowledge, teamwork skills
          and work experience
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Duong Truong Giang (Dyno)</p>
            <p>: 22</p>
            <p>: VietNam </p>
            <p>: English </p>
            <p>: Sài Gòn</p>
            <p>: Software Engineer</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"}></PrimaryButton>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      border-radius: 8px;
      border: 1px solid transparent;
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
