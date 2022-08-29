import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/avatar.jpg";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
        <div className="name">Duong Truong Giang</div>
        <div className="position">Software Engineer (Website Developer)</div>
      </div>
      <ul className="nav-items">
        <li
          className="nav-item"
          onClick={() => {
            document.title = `Giang's Portfolio - ${"Home"}`;
          }}
        >
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            document.title = `Giang's Portfolio - ${"About"}`;
          }}
        >
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            document.title = `Giang's Portfolio - ${"Resume"}`;
          }}
        >
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            document.title = `Giang's Portfolio - ${"Portfolios"}`;
          }}
        >
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            Portfolios
          </NavLink>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            document.title = `Giang's Portfolio - ${"Blogs"}`;
          }}
        >
          <NavLink to="/blogs" activeClassName="active-class" exact>
            Blogs
          </NavLink>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            document.title = `Giang's Portfolio - ${"Contact"}`;
          }}
        >
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          @2022 <b>Copyright by Dyno Duong</b>
        </p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    img {
      width: 100%;
      text-align: center;
      align-items: center;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
    .name {
      font-size: 16px;
      font-weight: 600;
    }
    .position {
      font-size: 11px;
      font-weight: 500;
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 0.8rem;
      display: block;
      text-align: center;
      b {
        font-size: 0.8rem;
      }
    }
  }
`;
export default Navigation;
