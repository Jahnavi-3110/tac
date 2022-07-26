import React from "react";
import "./home2.css";
import Business from "./Images/business-icon.png";
import Data from "./Images/data-icon.png";
import Digital from "./Images/digital-icon.png";
import Graphics from "./Images/graphics-icon.png";
import Lifestyle from "./Images/lifestyle-icon.png";
import Music from "./Images/music-icon.png";
import Program from "./Images/program-icon.png";
import Video from "./Images/video-icon.png";
import Write from "./Images/write-icon.png";

export default function Home2() {
  return (
    <div>
      <div className="container-1 text-align-center">
        <h2 className="heading">Explore the marketplace</h2>
        <div class="align-items-stretch flex-main-1">
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Graphics} alt="home2Img1" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Art & Graphics</b>
              </p>
            </a>
          </div>
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Digital} alt="home2Img2" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Digital & TV</b>
              </p>
            </a>
          </div>
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Write} alt="home2Img3" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Blog & Writing</b>
              </p>
            </a>
          </div>
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Video} alt="home2Img4" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Video & Youtube</b>
              </p>
            </a>
          </div>
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Music} alt="home2Img5" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Podcast</b>
              </p>
            </a>
          </div>
        </div>
        <div class="align-items-stretch flex-main-1">
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Program} alt="home2Img6" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Technology</b>
              </p>
            </a>
          </div>
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Business} alt="home2Img7" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Business</b>
              </p>
            </a>
          </div>
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Lifestyle} alt="home2Img8" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Lifestyle</b>
              </p>
            </a>
          </div>
          <div className="f-hover-e">
            <a href="/" className="content-a">
              <div className="div-underline">
                <img src={Data} alt="home2Img9" className="icon-img" />
              </div>
              <p className="img-p">
                <b>Big Data</b>
              </p>
            </a>
          </div>
          <div className="no-need">
            <a href="/" className="content-a">
              <div>
                <img src={Data} alt="home2Img10" className="icon-img" />
              </div>
              <p>Big Data</p>
            </a>
          </div>
        </div>
      </div>
      <div className="simpld">
        <p className="simplh">
          <b>Get inspired by projects made on TAC</b>
        </p>
      </div>
    </div>
  );
}
