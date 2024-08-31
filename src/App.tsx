import React, {useRef} from 'react';
import Footer from "./components/Footer/Footer.tsx";
import {StickyNavbar} from "./components/Navbar/StickyNavbar.tsx";
import './App.css';

const App: React.FC = () => {

    const section_one = useRef<HTMLDivElement | null>(null);
    const section_two = useRef<HTMLDivElement | null>(null);
    const section_three = useRef<HTMLDivElement | null>(null);
    const hero_section = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="app-container">

            <StickyNavbar/>

            <section className="hero-section">
                <h1> Hello, I'm Rayhan! </h1>
                <p> This page is under construction... </p>
                <div className="buttons">
                    <button className="primary-btn" onClick={() => scrollToSection(section_one)}> A button</button>
                    <button className="secondary-btn" >This button does nothing</button>
                </div>
            </section>

            <main className="main-content section-one" ref={section_one}>
                <section className="testimonials-section">
                    <h1>About...</h1>
                    <div className="testimonials-container">
                        <div className="testimonial-card large-card">
                            <img
                                src="https://via.placeholder.com/250" /* Ganti URL ini dengan URL gambar yang sesuai */
                                alt="Large Card Image"
                                className="large-card-image"
                            />
                            <p>Rayhan Kimi Nabiel Athallah</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, autem distinctio
                                dolorem et magnam repudiandae rerum. Accusantium debitis dolorum, eos fugit perferendis
                                possimus quaerat, quas reprehenderit sint, tempore tenetur velit?</p>
                        </div>
                        <div className="small-cards">
                            <div className="testimonial-card small-card">
                                <p>Lorem Ipsum School</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dicta
                                    enim error et hic illum impedit inventore iure natus nemo nesciunt nihil, odit
                                    officiis quas quibusdam quisquam reiciendis tenetur?</p>
                            </div>
                            <div className="testimonial-card small-card">
                                <p>Lorem Ipsum University</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur, error
                                    facere magnam odio recusandae repellendus, repudiandae similique sint tempore veniam
                                    veritatis. At delectus dolor excepturi itaque iure quis quos.</p>
                            </div>
                            <div className="testimonial-card small-card">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aspernatur
                                    deleniti deserunt eligendi error eum exercitationem quam, repudiandae suscipit! Ad
                                    alias distinctio id nisi non pariatur totam voluptatem voluptates?</p>
                                <p>something</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <main className="main-content section-two" ref={section_two}>
                <section className="testimonials-section">
                    <h1 className="section-two-text">Competencies...</h1>
                    <div className="testimonials-container">
                        <div className="testimonial-card large-card">
                            <img
                                src="https://via.placeholder.com/250" /* Ganti URL ini dengan URL gambar yang sesuai */
                                alt="Large Card Image"
                                className="large-card-image"
                            />
                            <p>Rayhan Kimi Nabiel Athallah</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, autem distinctio
                                dolorem et magnam repudiandae rerum. Accusantium debitis dolorum, eos fugit perferendis
                                possimus quaerat, quas reprehenderit sint, tempore tenetur velit?</p>
                        </div>
                        <div className="small-cards">
                            <div className="testimonial-card small-card">
                                <p>Lorem Ipsum School</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dicta
                                    enim error et hic illum impedit inventore iure natus nemo nesciunt nihil, odit
                                    officiis quas quibusdam quisquam reiciendis tenetur?</p>
                            </div>
                            <div className="testimonial-card small-card">
                                <p>Lorem Ipsum University</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur, error
                                    facere magnam odio recusandae repellendus, repudiandae similique sint tempore veniam
                                    veritatis. At delectus dolor excepturi itaque iure quis quos.</p>
                            </div>
                            <div className="testimonial-card small-card">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aspernatur
                                    deleniti deserunt eligendi error eum exercitationem quam, repudiandae suscipit! Ad
                                    alias distinctio id nisi non pariatur totam voluptatem voluptates?</p>
                                <p>something</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <main className="main-content section-three" ref={section_three}>
                <section className="testimonials-section">
                    <h1>My Contacts</h1>
                    <div className="testimonials-container">
                        <div className="testimonial-card large-card">
                            <img
                                src="https://via.placeholder.com/250" /* Ganti URL ini dengan URL gambar yang sesuai */
                                alt="Large Card Image"
                                className="large-card-image"
                            />
                            <p>Rayhan Kimi Nabiel Athallah</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, autem distinctio
                                dolorem et magnam repudiandae rerum. Accusantium debitis dolorum, eos fugit perferendis
                                possimus quaerat, quas reprehenderit sint, tempore tenetur velit?</p>
                        </div>
                        <div className="small-cards">
                            <div className="testimonial-card small-card">
                                <p>Lorem Ipsum School</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dicta
                                    enim error et hic illum impedit inventore iure natus nemo nesciunt nihil, odit
                                    officiis quas quibusdam quisquam reiciendis tenetur?</p>
                            </div>
                            <div className="testimonial-card small-card">
                                <p>Lorem Ipsum University</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur, error
                                    facere magnam odio recusandae repellendus, repudiandae similique sint tempore veniam
                                    veritatis. At delectus dolor excepturi itaque iure quis quos.</p>
                            </div>
                            <div className="testimonial-card small-card">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aspernatur
                                    deleniti deserunt eligendi error eum exercitationem quam, repudiandae suscipit! Ad
                                    alias distinctio id nisi non pariatur totam voluptatem voluptates?</p>
                                <p>something</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default App;
