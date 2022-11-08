import React from "react"
// import zzuri from "../../assets"
import zuri from "../../assets/img/zuri.png"
import I4G from "../../assets/img/I4G.png"
import "./Footer.css"

class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className='footer'>
            <div>
              <img src={zuri} alt='' />
            </div>
            <div className='text-center'>
              <p className='mt-10'>HNG Intenship 9 Frontend Task</p>
            </div>
            <div>
              <img src={I4G} alt='' />
            </div>
          </div>
        </footer>
    )
  }
}


export default Footer;