import React from "react";
import avatar from '../../assets/img/avatar.jpg';
import shareWeb from "../../assets/img/shareWeb.svg";
import moreWeb from "../../assets/img/moreMobile.svg"
import "./Header.css"

class Header extends React.Component{
  render(){
    return(
      <section id='profile-section'>
        <div className='profile'>
          <a href="#" title='Share'><img src={shareWeb} alt='shareBtn' className='share' /></a>
          <a href="#" title='More'><img src={moreWeb} alt='moreBtn' className='more'/></a>
          <div className='container'>
            <img src={avatar} alt="avatar" id='profile__image' className="profile-avatar" />
            <div className='overlay'>
              {/* <a href='#' className='icon' title='User Profile'> </a> */}
            </div>
          </div>
          <h1 id='twitter'>ImhandegbeloG</h1>
          <h1 id='slack'>Georgex</h1>
        </div>
      </section>
    )
  }
}

export default Header