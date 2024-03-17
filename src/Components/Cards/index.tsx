import { useEffect } from "react";
import "./Cards.scss";
import gsap from "gsap";

const Cards = () => {
  useEffect(() => {
    gsap.to(".card_body", {
      delay: 6,
      duration: 1,
      opacity: 1,
      transform: "translateX(0px)",
    });

    gsap.to(".card_head", {
      delay: 6.8,
      duration: 0.5,
      opacity: 1,
      transform: "translateX(0px)",
    });

    gsap.to(".card_content", {
      delay: 6.8,
      duration: 0.5,
      opacity: 1,
      transform: "translateX(0px)",
    });

    gsap.to(".card_action", {
      delay: 6.8,
      duration: 0.5,
      opacity: 1,
      transform: "translateX(0px)",
    });
  }, []);

  return (
    <div className="cards_con">
      <div className="card_body">
        <div className="card_head">
          <h3 className="poppins-semibold">It All Started With A Meme</h3>
        </div>
        <p className="card_content">
          Scrolling through Twitter, a meme caught my eye:{" "}
          <span>Designer vs Developer.</span> Inspired, I decided to put my new
          Three.js skills to the test by recreating a similar website with{" "}
          <span>React Three Fiber</span>. It's a work in progress – I know its
          not perfect I'm still learning Blender and Three.js, but I'm excited
          to share what I've built so far!
        </p>
        <div className="card_action">
          <a
            target="_blank"
            href="https://x.com/AmshenShanu/status/1749448825541148926?s=20"
          >
            See The Post
          </a>
        </div>
      </div>

      <div className="card_body">
        <div className="card_head">
          <h3 className="poppins-semibold">About Me</h3>
        </div>
        <p className="card_content">
          I am <span>Amshen Yesudas</span>, a young software developer from India (Kerala). I'm
          self-taught and interested in learning the latest technologies and
          solving real-world problems. Currently, I am working as a MERN Stack
          Developer and exploring the world of WebGl using ThreeJs. In my free
          time, I enjoy doing challenging projects and staying updated
          with emerging trends in the tech industry.
        </p>
      </div>
      <div className="card_body">
        <div className="card_head">
          <h3 className="poppins-semibold">Find Me At</h3>
        </div>
        <div className="card_content findme_body">
          <a
            href="https://x.com/AmshenShanu/status/1749448825541148926?s=20"
            target="_blank"
            className="links_con"
          >
            <img src="x.svg" alt="" />
            <p>AmshenShanu</p>
          </a>
          <a
            href="https://github.com/AmshenShanu07"
            target="_blank"
            className="links_con"
          >
            <img src="github.svg" alt="" />
            <p>AmshenShanu07</p>
          </a>
          <a
            href="https://www.instagram.com/amshen.tech/"
            target="_blank"
            className="links_con"
          >
            <img src="instagram.svg" alt="" />
            <p>amshen.tech</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
