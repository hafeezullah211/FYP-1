import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link , Redirect} from "react-router-dom";
import { useEffect } from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

   this.state = {

      login: false
      
    }
    
    this.logout = this.logout.bind(this);
  
  }
componentDidMount() {
    if (localStorage.getItem('login')) {
      
       this.setState({login:false})
     
      }
      else{
        this.setState({login:true})
      }
  }

logout(){
    localStorage.setItem("login",'');
    localStorage.clear();
    localStorage.setItem('login', JSON.stringify({
      login:false,
      store:null
   
  }))
    this.setState({login: true});
  }



 



  render() {
    console.warn(this.state.login);
    return (
      <div>
        <header className="header-section">
          <div className="container">
            <ul className="main-menu-left site-menu-style">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wishlist"><strong>My Wishlist</strong> </Link>
              </li>
              <li>
                <Link to="category"><strong>Events</strong></Link>
              </li>
            </ul>
            <Link to="/">
              {" "}
              <a className="site-logo">
                <img style = {{width:'80px'}} src="img/logo.png" alt="" />
              </a>{" "}
            </Link>
            <ul className="main-menu-right site-menu-style">
              <li>
                <Link to="/wardrobe"><strong>Wardrobe</strong></Link>
              </li>
              <li>
                <Link to="/image-search"><strong>Search by Image</strong></Link>
              </li>
              <li>
                <Link to="/preloved"><strong>Pre-love Goods</strong></Link>
              </li>
            
               {/* { this.state.login?
              
              <li>
              <Link  to="/login" className='log-in'><strong>Login</strong></Link>
              </li> 
              :
              <li>
                {console.log("the local store was set to #####////////////////////",localStorage.getItem('logHome'))}
              <Link onClick={this.logout} to="/login">{localStorage.getItem('logHome')==='true'?"LOGOUT":"LOGIN"}</Link>
              </li>
           
            } */}
            <li>
              
             {console.log("the local store was set to #####////////////////////",localStorage.getItem('logHome'))}
              <Link onClick={this.logout} to="/login">{localStorage.getItem('logHome')==='true'?"LOGOUT":"LOGIN"}</Link>
              
           
            
            </li>
          
            </ul>
          </div>
        
        </header>
      </div>
    );
  }
 
}
export default Header;
