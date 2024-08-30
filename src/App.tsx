import React from 'react';
import Footer from "./components/Footer/Footer.tsx";
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            {/*< OffcanvasNavbar/>*/}
            <section className="hero-section">
                <h1> Hello, I'm Rayhan! </h1>
                <p> This page is under construction... </p>
                <div className="buttons">
                    <button className="primary-btn">A button</button>
                    <button className="secondary-btn">Another button</button>
                </div>
            </section>
            <main className="main-content section-one">
                <section className="testimonials-section">
                    <h2> Some section will be in here ...</h2>
                    <div className="testimonials">
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something </p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                    </div>
                </section>
            </main>
            <main className="main-content section-two">
                <section className="testimonials-section">
                    <h2> Some section will be in here ...</h2>
                    <div className="testimonials">
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something </p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                    </div>
                </section>
            </main>
            <main className="main-content section-three">
                <section className="testimonials-section">
                    <h2> Some section will be in here ...</h2>
                    <div className="testimonials">
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something </p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                        <div className="testimonial-card">
                            <p>"lorem ipsum sit dolor amet."</p>
                            <p> something</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
