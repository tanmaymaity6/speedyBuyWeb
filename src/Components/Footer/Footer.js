import React from "react";
import {
  AiOutlineCopyrightCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import "./Footer.css";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div>
          <span className="copyright">
            <AiOutlineCopyrightCircle />
          </span>
          <span className="year">{year} </span>
          <span className="footer-label">SpeedyBuy</span>
        </div>
        <ul className="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/tanmay-maity/"
              target="_blank"
              rel="noreferrer"
              className="social-item social-1"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://github.com/tanmaymaity6"
              target="_blank"
              rel="noreferrer"
              className="social-item social-2"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="social-item social-3"
            >
              <AiFillTwitterCircle />
            </a>
          </li>
        </ul>
      </div>
      <p className="developedBy">
        Developed By{" "}
        <a
          href="https://tanmaydev.netlify.app//"
          target="_blank"
          rel="noreferrer"
          className="developer_name"
        >
          Tanmay Maity 🧑🏻‍💻
        </a>
      </p>
    </footer>
  );
};
