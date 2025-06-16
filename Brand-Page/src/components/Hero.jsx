const Hero = () =>{
    return (
        <main className="hero">
            <div className="container">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>
                    YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon" />
                        <img src="/images/flipkart.png" alt="flipkart"/>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/hero-image.png" alt="shoe"/>
            </div>
        </main>
    );
};

export default Hero;