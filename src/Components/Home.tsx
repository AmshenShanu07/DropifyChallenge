import "./Home.scss";

import Header from "./Header";
import { useEffect } from "react";
import gsap from "gsap";
import Cards from './Cards';

const Home = () => {
  useEffect(() => {
    gsap.to(
      '.title_anim',
      { 
        delay:5.5,
        duration:0.5,
        opacity:1,
        transform: "translateX(0px)",
        stagger: {
          each: 0.03
        }
      }
    )

    gsap.to(".home_content", {
      delay: 5.7,
      duration: 1,
      opacity: 1,
      transform: "translateX(0px)",
    });

    gsap.to(".btn_grp", {
      delay: 6,
      duration: 1,
      opacity: 1,
      transform: "translateX(0px)",
    });


  }, []);

  return (
    <main>
      <Header />
      <div className="content_body">
        <div className="title_holder">
          {'Fast, reliable and'.split('').map((d,i)=>{
            return (
              d===' '?
              <h1 className='title_anim' key={i} >&nbsp;</h1>:
              <h1 className='title_anim' key={i} >{d}</h1>
            )
          })}
        </div>
        <div className="title_holder">
          {'convenient delivery.'.split('').map((d,i)=>{
            return (
              d===' '?
              <h1 className='title_anim' key={i} >&nbsp;</h1>:
              <h1 className='title_anim' key={i} >{d}</h1>
            )
          })}
        </div>
        {/* <h1 className="title_animate">
          Fast, reliable and
          <br /> convenient delivery.
        </h1> */}
        <p className="home_content">
          Enjoy your free time while we deliver everthing you need.
        </p>
        <div className="btn_grp">
          <button className="btn_delivery">Order Delivery</button>
          <button className="btn_features">See all our features</button>
        </div>
      </div>
      <Cards/>
    </main>
  );
};

export default Home;
