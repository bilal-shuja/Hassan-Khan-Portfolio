import React from 'react';
import ContactForm from './ContactForm';

function Home() {
    return (
        <div>
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div className="container">
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll active" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#service">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#work">Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <div id="home" className="intro route bg-image" style={{backgroundImage: "url(assets/img/background-3.jpeg)"}}>
    <div className="overlay-itro"></div>
    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          <h1 className="intro-title mb-4">Muhammad Hassan Khan</h1>
          <p className="intro-subtitle"><span className="text-slider-items">CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer</span><strong className="text-slider"></strong></p>
        </div>
      </div>
    </div>
  </div>

  <main id="main">

   
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="assets/img/profileImg-2.jpeg" className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Muhammad Hassan Khan</span></p>
                        <p><span className="title-s">Profile: </span> <span>Real Estate Investment Consultant</span></p>
                        <p><span className="title-s">Email: </span> <span>hassanlohany789@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>0320-4051215</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="skill-mf">
                      <h3 style={{marginBottom:"30px"}} >
                      Manager at <a href="http://imlaak.com/" style={{color:"blue"}}>"Imlaak"</a>
                      </h3>
                      <p><b>Reviews from IMLAAK</b></p>
                      <div className="about-img">
                        <img src="assets/img/StarItem.png" className="Rating" alt="" />
                      </div>
                      <p><b>Reviews from Sterling Gate</b></p>
                      <div className="about-img">
                        <img src="assets/img/StarItem.png" className="Rating" alt="" />
                      </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skills</p>
                    <span>Communication</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>languages <b>(English,Urdu,Punjabi)</b> </span> <span className="pull-right">95%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width:"95%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>Marketing</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>Client Satisfaction</span> <span className="pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>Investment Predictions</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      {/* <b>Co-founder and CEO of US-Softs</b> */}
                      Running Team and Selling Residential and Commercial Projects of DHA And Also In Gullberg Handling Overseas Clients, Managing there Investment And Giving them Assets Management Services.Also Deal In Speculation Of Plots For My Clients And Giving there investments A raise By Giving Them best time to Enter And Exit From an investment.<br/>

                      <b>Dealing</b> in Rental income Properties and suggesting my Clients to Invest in Rental generating Projects so we can make More money than Speculation and can easily Achieve Our Expected amount of profit.<br/>

                         <b> Manager At Sterling Gate</b> Managing team And Giving Rise To Company By Picking up the Best Projects in town, planning strategies That How we can give more Relaxation to our Clients In terms Of services Specially the overseas Once by Maintaining there portfolios. <br/>

                          <b>"Clients"</b> are always the <b>First Priority</b> for me so I stand by the Clients side and negotiate with the developers as much as I can on the behalf of my clients.

                          Always Think Positive and keep going you will Achieve what you want One Day.

                          All praises For the ALLAH.
                    </p>
                    {/* <p className="lead">
                    Specializing in Mobile App Development for Cross-Platforms using React-Native, Website Developer, Animation Designer(3D) using Blender and Different Adobe Tools and Business Management Expert.
                    Adobe Illustrator Expert and Web/Mob App Designer.
                    </p>
                    <p className="lead">
                     Freelancing on Upwork/Fiver and other online resources.I have worked with many "High-Profile Clients" , local and International
                     including the following to illustrate them.<br/>
                     <br/>
                     <span>&#8226;  <b>KBR</b>(100 Million Estimated Revenue per year)</span><br/>
                     <span>&#8226;  <b>M World</b> (Introduces the new digital world, revenue still rising)</span><br/>
                     <span>&#8226;  <b>Pascaline Softs</b>(12 Million Estimated Revenue per year)</span> <br/>
                     and others...<br/>
                     Currently known as Co-Founder and CEO of US-Softs IT Company working as Developer for more than 3 years, Working as Animation Designer more than 2 years(Alhamdulillah) assuring 95% client satisfaction.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    <section id="service" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Services
              </h3>
              <p className="subtitle-a">
                The serivces that our company provide.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="ion-monitor"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="ion-code-working"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Development</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><img src="assets/img/blender.png" className="blender" alt="" /></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Character Designing</h2>
                <p className="s-description text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                  provident vitae! Magni
                  tempora perferendis eum non provident.
                </p>
              </div>
            </div>
          </div>
           */}
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="fa fa-home"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Property Dealing</h2>
                <p className="s-description text-center">
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="fa fa-pie-chart"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Projects Dealing</h2>
                <p className="s-description text-center">
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle"><i className="fa fa-building"></i></span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Construction</h2>
                <p className="s-description text-center">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="section-counter paralax-mf bg-image" style={{backgroundImage: "url(assets/img/counters-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-lg-4">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-checkmark-round"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">47</p>
                <span className="counter-text">PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-4">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ios-calendar-outline"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">5</p>
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-4">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ios-people"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">63</p>
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="ion-ribbon-a"></i></span>
              </div>
              <div className="counter-num">
                <p className="counter">36</p>
                <span className="counter-text">AWARD WON</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

   
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Portfolio
              </h3>
              <p className="subtitle-a">
               ACCOMPLISHMENTS
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/pot-1.PNG" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/port-1.PNG" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Downtown Mall And Residency</h2>
                    <div className="w-more">
                      <p className="w-ctegory">Selling Service Apartments in Downtown and Giving luxury life to our Clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/port-2.PNG" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/port-2.PNG" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Springs Gulberg</h2>
                    <div className="w-more">
                      <p className="w-ctegory">Springs Gulberg one of the Finest project for residential purpose make your own sweet home with the perks of Swimming pool.</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     

          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/port-3.PNG" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/port-3.PNG" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Gold Crest Mall DHA</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Selling Commercial shops in Gold Crest Mall DHA and Making Our Clients the owner of the best rental property in DHA.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="work-box">
              <a href="assets/img/port-4.PNG" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/port-4.PNG" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">H&S Apartments</h2>
                    <div className="w-more">
                      <p className="w-ctegory">H&S Apartments Coming in DHA Selling Service Apartments And Giving You the Dubai life style living.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="work-box">
              <a href="assets/img/port-5.jpeg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/port-5.jpeg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Sixty-6 Gulberg</h2>
                    <div className="w-more">
                      <p className="w-ctegory">Sixty-6 Gulberg Luxury Apartments With Those Amenities which you can never experienced.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/work-6.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/work-6.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Studio Big Bang</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>

    <div className="testimonials paralax-mf bg-image" style={{backgroundImage: "url(assets/img/overlay-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-mf" className="owl-carousel owl-theme">
              <div className="testimonial-box">
                <div className="author-test">
                  <img src="assets/img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a" />
                  <span className="author">Xavi Alonso</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <span className="comit"><i className="fa fa-quote-right"></i></span>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="author-test">
                  <img src="assets/img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a" />
                  <span className="author">Marta Socrate</span>
                </div>
                <div className="content-test">
                  <p className="description lead">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <span className="comit"><i className="fa fa-quote-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   

    
    <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url(assets/img/overlay-bg.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send Message Us
                      </h5>
                    </div>
                    <div>
                    <ContactForm/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                      <b>Clients</b> are always the First Priority for me so I stand by the Clients side and negotiate with the developers as much as I can on the behalf of my clients to reach me out tab on my social media icons ,given below or if you have any kind of query you can mail me(Send Message Us).<br/>All praises For the <b>ALLAH</b>.
                      </p>
                      <ul className="list-ico">
                        <li><span className="ion-ios-location"></span> CCA 208 FF block DHA Phase 4, Lahore Cantt</li>
                        <li><span className="ion-ios-telephone"></span> 0320-4051215</li>
                        <li><span className="ion-email"></span> hassanlohany789@gmail.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href="https://www.facebook.com/hasan.khan.1401"><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                        <li><a href="https://instagram.com/hassankhanlohany?utm_medium=copy_link"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

 
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="copyright-box">
            <p className="copyright">&copy; Copyright <strong>Bilal Shuja</strong>. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
  <div id="preloader"></div>

        </div>
    )
}

export default Home
