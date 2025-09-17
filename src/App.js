import "./App.css";
import logo from "./assets/efitnesslogo.png";
import homeWorkoutImage from "./assets/homeWorkout.png";
import pro from "./assets/pro.png";
import planner from "./assets/planner.png";


function App() {
  return (
    <div className="App">
      {/* 🔹 Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Efitness Logo" />
          <span className="logo-text">Efitness</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="sign-in">Sign In</button>
      </nav>

      {/* 🔹 Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <h1 className="mainTitle">Efitness.</h1>
          <p className="sloganText">“Making the World Healthier”</p>
          <p className="tagline">From beginners to pros</p>
          <p className="tagline">Train anywhere — home or gym</p>
          <p className="tagline">Personalized routines starting at just 15 minutes</p>
          <div className="cta-buttons">
            <button className="btn-primary">Free Trial</button>
            <button className="btn-secondary">See More</button>
          </div>
        </div>
        <div className="hero-art">
        <img className="logoImage" src={logo} alt="Efitness Logo" />
        </div>
      </header>

            {/* 🔹 Features Section */}
            <section className="features">
        <h2 className="section-title">Why Choose Efitness?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={pro} alt="Beginners to Pros" />
            <h3>From Beginners to Pros</h3>
            <p>Whether you’re just starting out or training like an athlete, Efitness adapts to your level.</p>
          </div>

          <div className="feature-card">
            <img src={homeWorkoutImage} alt="Train Anywhere" />
            <h3>Train Anywhere</h3>
            <p>Workout at home, outdoors, or at the gym — Efitness goes wherever you do.</p>
          </div>

          <div className="feature-card">
            <img src={planner} alt="Personalized Routines" />
            <h3>Personalized Routines</h3>
            <p>Stay consistent with custom routines that fit into your busy schedule, starting at just 15 minutes.</p>
          </div>
        </div>
      </section>


      {/* 🔹 Download Buttons (fixed bottom-right) */}
      <div className="download-buttons">
        <a href="#ios" className="download-btn ios">Download for iOS</a>
        <a href="#android" className="download-btn android">Download for Android</a>
      </div>
    </div>
  );
}

export default App;
