import heroImg from "../images/hero-image.png"
import amazonImg from "../images/amazon.png"
import flipkartImg from "../images/flipkart.png"
const HeroSection=()=>{
    return (
      <main className="hero container">
        <div className="hero-content">
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-section">Categaory</button>
          </div>
          <div className="shopping">
            <p>Available On</p>

            <div className="brand-icons">
              <img src={amazonImg} alt="amazon-logo" />
              <img src={flipkartImg} alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="flipkart-logo" />
        </div>
      </main>
    );
}
export default HeroSection