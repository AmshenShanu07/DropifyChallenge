import gsap from 'gsap';
import './Header.scss';
import { useEffect } from 'react';

const Header = () => {

  useEffect(() => {
    
    gsap.to(
      '.header_title',
      {
        delay:5,
        duration: 0.5,
        opacity:1,
        transform: `translateY(0px)`,
        stagger: {
          each: 0.05
        }
      }
    )
    
    gsap.to(
      '.header_content',
      {
        delay:5.2,
        duration: 0.5,
        opacity:1,
        transform: `translateY(0px)`,
        stagger: {
          amount: 0.5
        }
      }
    )
    gsap.to(
      '.header_end',
      {
        delay:6,
        duration: 0.5,
        opacity:1,
        transform: `translateY(0px)`
      }
    )

  },[])

  return (
    <div className='header_con' >
      <div className='header_title_holder' >
        {'Amshen Yesudas'.split('').map((d,i)=>{
          return (d==' '?
          <h1 className='header_title' key={i} >&nbsp;</h1>:
          <h1 className='header_title' key={i} >{d}</h1>)
        })}
      </div>
      <div className="header_center">
        <p className='header_content' >About us</p>
        <p className='header_content' >Features</p>
        <p className='header_content' >Pricing</p>
        <p className='header_content' >Contact us</p>
      </div>
      <div className='header_end' >
        <p>Login</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Header