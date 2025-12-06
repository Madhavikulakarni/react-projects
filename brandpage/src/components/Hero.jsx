import heroImg from "../images/hero-image.png"
import flipkart from "../images/flipkart.png"
import amazon from "../images/amazon.png"

const Hero=()=>{
  return (
    <div className="heroContainer">
      <div className="content-hero">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className="msg-section">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="heroContent-btns">
          <button className=" ">Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="hero-logo-container">
          <small>Also Available On</small>
          <div className="hero-logos">
            <img src={flipkart} alt="flipkart" />
            <img src={amazon} alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="hero-Img" />
      </div>
    </div>
  );
}
export default Hero;