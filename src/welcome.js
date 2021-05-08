import React from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Im on vacation, every single day, cause I love my occupation!

function Welcome() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <Link class="navbar-brand company" to="/"><h1>Portfolio</h1></Link> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active navbar-brand link" href="/">Home</a>
                        <a class="nav-item nav-link navbar-brand link" href="#about">About</a>
                        <a class="nav-item nav-link navbar-brand link" href="#portfolio">Projects</a>
                        <a class="nav-item nav-link navbar-brand link" href="#resume">Resume</a>
                        <a class="nav-item nav-link navbar-brand link" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" class="d-flex flex-column align-items-center justify-content-center Title">
                <div className="main">Hi, I'm Sai Mallika!</div>
                <hr />
                <div className="sub">A Full Stack Developer</div>
                <div className="row calltoaction">
                    <div className="col col-lg-6"><button className="btn btn-light text-white bg-transparent mainbuttons m-3">View Resume</button></div>
                    <div className="col col-lg-6"><button className="btn btn-light text-dark mainbuttons m-3">Go to Portfolio</button></div>
                </div>
                <a href="#about" class="btn-get-started scrollto"><i class="fas fa-angle-down"></i></a>
            </section>

            {/* <!-- End Hero --> */}
            <main id="main">

                {/* <!-- ======= About Section ======= --> */}
                <section id="about" class="about">
                    <div class="container">

                        <div class="row">
                            <div className="col col-lg-4"><img className="mypicture center" src={process.env.PUBLIC_URL + "./Illustration.jpg"} /></div>
                            <div className="col col-lg-8">
                                <div class="d-flex align-items-stretch">
                                    <div class="content d-flex flex-column justify-content-center">
                                        <h1>Me.</h1>
                                        <p class="myintro">I describe myself definitely as the creative one, looking for an opportunity to learn, improve and deliver best results for the organization, by being a quick learner, committed, innovative and flexible.</p>
                                        <span class="myintro">"I can't imagine anything worthwhile than doing what I love the most!"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="row">
                                <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card-header">Creative</div>
                                        <div className="card-body">
                                            <p>I love being creative, hence the result, all my of designs are unique and creative.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card-header">Sketching</div>
                                        <div className="card-body">
                                            <p>I Sketch and illustrate.<br></br>Has a page on instagram, @malli._.arts, check it out!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card-header">Writing</div>
                                        <div className="card-body">
                                            <p>I love writing my thoughts down, also have many a followers for my writing on facebook.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card-header">Creative</div>
                                        <div className="card-body">
                                            <p>I love being creative, hence the result, all my of designs are unique and creative.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="col-md-3 d-md-flex align-items-md-stretch">
                                    <div class="count-box">
                                        <span data-toggle="counter-up">Creative</span>
                                        <p>I love being creative, hence the result, all my of designs are unique and creative.</p>
                                    </div>
                                </div>
                                <div class="col-md-3 d-md-flex align-items-md-stretch">
                                    <div class="count-box">
                                        <span data-toggle="counter-up">Sketching</span>
                                        <p>I Sketch and illustrate.<br></br>Has a page on instagram, @malli._.arts, check it out!</p>
                                    </div>
                                </div>

                                <div class="col-md-3 d-md-flex align-items-md-stretch">
                                    <div class="count-box">
                                        <span data-toggle="counter-up">Writing</span>
                                        <p>I love writing my thoughts down, also have many a followers for my writing on facebook.</p>
                                    </div>
                                </div>

                                <div class="col-md-3 d-md-flex align-items-md-stretch">
                                    <div class="count-box">
                                        <span data-toggle="counter-up">Designing</span>
                                        <p>I love designing interfaces and logos.</p>
                                    </div>
                                </div>*/}
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End About Section --> */}

                {/* <!-- ======= Skills Section ======= --> */}
                <section id="services" class="services section-bg">
                    <div class="container">
                        <div class="section-title">
                            <h2>Skills</h2>
                            <p>Picked the most important skills according to the industry requirement standards, and started practising them, then aimed at improving, here are those technologies that I have experience with.</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div class="icon-box">
                                    <h4 class="title"><a href="">Languages</a></h4>
                                    <p class="description">Followed my passion towards frontend.</p>
                                    <p class="description">HTML5</p>
                                    <p class="description">CSS3</p>
                                    <p class="description">Bootstrap</p>
                                    <p class="description">Javascript</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div class="icon-box">
                                    <h4 class="title"><a href="">Frameworks</a></h4>
                                    <p class="description">Expertised in the industry relevant frameworks.</p>
                                    <p class="description">React</p>
                                    <p class="description">Node</p>
                                    <p class="description">Express</p>

                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div class="icon-box">
                                    <h4 class="title"><a href="">Databases</a></h4>
                                    <p class="description">Gained the knowlwdge of technologies</p>
                                    <p class="description">MongoDB</p>
                                    <p class="description">SQL</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div class="icon-box">
                                    <h4 class="title"><a href="">Tools</a></h4>
                                    <p class="description">Practised the industry's most required tools.</p>
                                    <p class="description">Git & Github</p>
                                    <p class="description">VSCode</p>
                                    <p class="description">Adobe XD, Illustrator</p>
                                    <p class="description">Figma</p>

                                </div>
                            </div>


                        </div>
                    </div>

                </section>
                {/* <!-- End Skills Section --> */}

                {/* <!-- ======= Resume Section ======= --> */}
                <section id="resume" class="resume section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Resume</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div class="row">
                            <div className="center"><button className="btn resumebtn bg-transparent m-3">View Resume<i className="fas fa-arrow-right blueicon fa-lg"></i></button></div>
                        </div>

                        {/* <div><img className="resume" src={process.env.PUBLIC_URL + "./Resume.png"} /></div> */}

                        {/* <div class="row">
                            <div class="col-lg-6">
                                <h3 class="resume-title">Summary</h3>
                                <div class="resume-item pb-0">
                                    <p><em>My Journey towards Web Development</em></p>
                                    <p>Soon after my study, I started searching high and low in the field of design and development. Learnt, that I get to create many a happy customers, by developing interfaces, as regarding enhanced design and interaction, luckily just by doing what I love, which is what every employer needed ever!</p>
                                </div>

                                <h3 class="resume-title">Education</h3>
                                <div class="resume-item">
                                    <h4>Bachelor of Engineering</h4>
                                    <h5>2016 - 2020</h5>
                                    <p><em>Stanley College of Engg and Tech for Women</em></p>
                                    <b>CGPA - 8.16 / 10</b>
                                    <p>Though graduated in the field of Electronic and Communication Engineering, however developed interest towards design and development.</p>
                                </div>
                                <div class="resume-item">
                                    <h4>Board of Intermediate</h4>
                                    <h5>2014 - 2016</h5>
                                    <p><em>Narayana Junior College</em></p>
                                    <b>Percentage- 95.7%</b>
                                </div>
                                <div class="resume-item">
                                    <h4>Class 10</h4>
                                    <h5>2012 - 2014</h5>
                                    <p><em>MNR School of Excellence</em></p>
                                    <b>CGPA - 9.8 / 10</b>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <h3 class="resume-title">Experience</h3>
                                <div class="resume-item">
                                    <h4>Full Stack Web Development Trainee</h4>
                                    <h4>At Guvi Geek Networks</h4>
                                    <h5>2021 - Present</h5>
                                    <p><em>Chennai - TamilNadu, India</em></p>
                                    <p>
                                        <ul>
                                            <li>Gathered the required skillset as per the industry requirements.</li>
                                            <li>That includes MongoDB, Express.js, React.js, Node.js.</li>
                                            <li>Developed various full stack projects using MERN.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div class="resume-item">
                                    <h4>Design Skills</h4>
                                    <h5>October 2020</h5>
                                    <p><em>Skillshare and Udemy</em></p>
                                    <p>My passion towards design made me explore deeper into the field of interface and experience design aswell.
                                    </p>
                                </div>
                                <h3 class="resume-title">Languages</h3>
                                <div class="resume-item">
                                    <ul>
                                        <li>English (Fluent)</li>
                                        <li>Telugu (Native)</li>
                                        <li>Hindi</li>
                                        <li>Pinch of Tamil</li>
                                    </ul>
                                </div>
                            </div>

                        </div> */}

                    </div>

                </section>
                {/* <!-- End Resume Section --> */}



                {/* <!-- ======= Portfolio Section ======= --> */}
                <section id="portfolio" class="portfolio section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Portfolio</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div class="row">
                            <div className="center"><button className="btn resumebtn bg-transparent m-3">Go to Portfolio<i className="fas fa-arrow-right blueicon fa-lg"></i></button></div>
                        </div>

                        <div class="row portfolio-container">

                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./spotifyyy.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>SPOTIFY CLONE</h4>
                                        <p>Extracted my playlist from the Spotify app using Api following the guidelines provided and designed the Interface.</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                                        {/* <a href="portfolio-details.html" title="More Details"><i class="fas fa-lightbulb"></i></a> */}
                                        <a href="google.com"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./ecommerce.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>E-COMMERCE SITE</h4>
                                        <p>Developed and designed an e-commerce site from scratch, that sells all of my art pieces from different categories.</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./shorturl.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>URL SHORTENER</h4>
                                        <p>An application that converts the long URL porvided by the user into a working shortened link.</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./pizzaaa.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>PIZZA DELIVERY</h4>
                                        <p>An app, that makes possible of buying a variety of pizzas from admin defined to all way to user's customized choice!</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                                        {/* <a href="portfolio-details.html" title="More Details"><i class="fas fa-lightbulb"></i></a> */}
                                        <a href="google.com"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./chat.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>CHAT APPLICATION</h4>
                                        <p>A Chatting app, that allows you to send messages to the persons available in the chat.</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                                        {/* <a href="portfolio-details.html" title="More Details"><i class="fas fa-lightbulb"></i></a> */}
                                        <a href="google.com"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./cart.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>SHOPPING CART</h4>
                                        <p>A frontend application, that allows you to add different products into the cart along with billing information.</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                                        {/* <a href="portfolio-details.html" title="More Details"><i class="fas fa-lightbulb"></i></a> */}
                                        <a href="google.com"></a>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img src="https://getwallpapers.com/wallpaper/full/2/2/e/233505.jpg" class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div class="portfolio-wrap">
                                    <img src="https://getwallpapers.com/wallpaper/full/2/2/e/233505.jpg" class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div class="portfolio-wrap">
                                    <img src="https://getwallpapers.com/wallpaper/full/2/2/e/233505.jpg" class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" class="venobox" title="Card 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                    </div>
                                    <div class="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </div>
                </section>
                {/* <!-- End Portfolio Section --> */}

                {/* <!-- ======= Testimonials Section ======= --> */}
                {/* <section id="testimonials" class="testimonials section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Testimonials</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div class="owl-carousel testimonials-carousel">

                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>

                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="" />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                            </div>

                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                            </div>

                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="" />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                            </div>

                            <div class="testimonial-item">
                                <p>
                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="" />
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                            </div>

                        </div>

                    </div>
                </section> */}
                {/* <!-- End Testimonials Section --> */}

                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" class="contact section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Contact</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div class="row">

                            <div class="col-lg-8 col-md-8">
                                <div class="contact-about">
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-facebook"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4">
                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">

                                    <h6>Email - sai.mallika14@gmail.com</h6>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Contact Section --> */}

            </main>

            {/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">
                <div class="container">
                    <div class="credits">
                        <h5>Designed by Mallika with &hearts;</h5>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Welcome;