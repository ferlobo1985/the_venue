import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
       <header>
        <nav>
            <div class="nav">
                <!--  <img src="images/logo.png" alt="logo" width="40px"> -->
                <a href="#">Home</a>
                <a href="#" class="nav-item">About</a>
                <a href="#" class="nav-item">Track Order</a>
            </div>

            <div class="search-area">
                <input type="text" class="search-bar" placeholder="Enter Your Delivery Location =">
                <div>
                    <button><i class="gg-search"></i></button>
                </div>
            </div>
            <div class="nav">
                <a href="#" class="nav-item">Log In</a>
                <a href="#" class="nav-item">Sign Up</a>
            </div>
        </nav>
    </header>
    <div class="starting-point">
        <div>
            Get Your Food On Foodie
            <br><br>
        </div>
    </div>

    <div class="Food-area">
        <div Class="Collection">
            <h2>Available Food At Your Near Location</h2>
        </div>
        <div class="food-menu">
            <div class="food">
                <img src="Food-Menu/fast-food.jpg" alt="">
                <p>Fast Food</p>
            </div>
            <div class="food">
                <img src="Food-menu/indian-food.jpg" alt="">
                <p>Indian Food</p>
            </div>
            <div class="food">
                <img src="Food-menu/Sushi.jpg" alt="">
                <p>Sushi</p>
            </div>
            <div class="food">
                <img src="food-menu/chinese-food.jpg" alt="">
                <p>Chinese Food</p>
            </div>
        </div>

    </div>
    <div class="Collection">
        <h2>Trending Food</h2>
    </div>
    <div class="Trending-food">
        <div class="Tfood">
            <img src="Trending Food/Dominos.jpg" alt="">
            <div>
                <h3> Domionos' Pizza</h3>
                <button><i class="gg-add-r"></i></button>
            </div>
        </div>
        <div class="Tfood">
            <img src="Trending Food/HighOn.jpg" alt="">
            <div>
                <h3> High On Desserts</h3>
                <button><i class="gg-add-r"></i></button>
            </div>
        </div>
        <div class="Tfood">
            <img src="Trending Food/Momos.jpg" alt="">
            <div>
                <h3> Momo's</h3>
                <button><i class="gg-add-r"></i></button>
            </div>
        </div>
        <div class="Tfood">
            <img src="Trending Food/Wrap.jpg" alt="">
            <div>
                <h3> Wrap & Roll</h3>
                <button><i class="gg-add-r"></i></button>
            </div>
        </div>
    </div>
    <h2 class="Collection">Cities We Deliver To</h2>
    <div class="Cities">
        <div class="City-name"><a href="#">Mumbai</a></div>
        <div class="City-name"><a href="#">Dehli</a></div>
        <div class="City-name"><a href="#">Kolkata</a></div>
        <div class="City-name"><a href="#">Jaipur</a></div>
        <div class="City-name"><a href="#">Agra</a></div>
        <div class="City-name"><a href="#">Bhopal</a></div>
        <div class="City-name"><a href="#">Patna</a></div>
        <div class="City-name"><a href="#">Patna</a></div>
        <div class="City-name"><a href="#">Indore</a></div>
        <div class="City-name"><a href="#">Pune</a></div>
    </div>
    <Footer>
        <div class="footer">
            <div class="left-side">
                <div>
                    <a href="#">Privacy</a>
                </div>
                <div>
                    <a href="#">Policy</a>
                </div>
                <a href="#">Feedback</a>
            </div>
            <div>
                <div class="Social-media">
                    <div>
                        <h3>Follow Us</h3>
                    </div>
                    <div class="Social-btn">
                        <i class="gg-facebook"></i>
                    </div>
                    <div class="Social-btn">
                        <i class="gg-instagram"></i>
                    </div>
                    <div class="Social-btn">
                        <i class="gg-google"></i>
                    </div>
                </div>
            </div>
            <div>
                <h3>Copyright@2020 </h3>
            </div>
    );
  }
}

export default App;
