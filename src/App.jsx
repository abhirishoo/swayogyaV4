import './App.css';
import BlueStrip from './components/Header/BlueStrip';
import Navbar from './components/Header/Navbar';
import ScrollHideDiv from './components/Header/ScrollHideDiv';
import Background from './components/Header/Background';
import AboutUs from './components/Hero/AboutUs';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import FAQs from './components/Middle/FAQs';
import Partners from './components/Middle/Partners';
import Testimonials from './components/Middle/Testimonials';
import Services from './components/Hero/Services';
import Swaknee from './components/Hero/Swaknee';
import Whatsapp from './components/Footer/Whatsapp';
import Ticks from './components/Hero/Ticks';
import Clinical from './components/Middle/Clinical';
import Steps from './components/Middle/Steps';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Science from './components/Middle/Science';
import Map from './components/Contact/Map';
import Producthero from './components/Product/Producthero';
import BookNow from './components/Contact/BookNow';
import Research from './components/Research/Research';
import Servicespage from './components/Services/Servicespage';
import Career from './components/Career/Career';
import Aboutpage from './components/About/Aboutpage';
import Aboutteam from './components/About/Aboutteam';
import Navbarsm from './components/Header/Navbarsm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="Hero">
                  <Background />
                  <Navbarsm/>
                  <BlueStrip />
                  <Navbar />
                  {/* <ScrollHideDiv  />  */}
                </div>
                <div id="MainContent">
                  <AboutUs />
                  <Ticks />
                  <Swaknee />
                  <Clinical />
                  <Steps />
                  <Science/>
                  <Services />
                </div>
                <div id="ContactUs">
                  
                  <Partners />
                  <FAQs />
                  <Testimonials />
                  <Contact />
                </div>
                <div id="Footer">
                  <Footer />
                  <Whatsapp />
                </div>
              </>
            }
          />
          <Route path="/home" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>

          </div>
          <div>
            <Contact/>
            <Footer/>
          </div>
          </> }/>
          <Route path="/about" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>

          </div>
          <div>
            <Aboutpage/>
            <Footer/>
          </div>
          </> }/>
          <Route path="/aboutus" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>

          </div>
          <div>
            <Aboutpage/>
            <Footer/>
          </div>
          </> }/>
          <Route path="/aboutteam" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>

          </div>
          <div>
            <Aboutteam/>
            <Footer/>
          </div>
          </> }/>
          <Route path="/services" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>

          </div>
          <div>
           <Servicespage/>
            <Footer/>
          </div>
          </> }/>
          <Route path="/research" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>

            <Research/>
          </div>
          <div>
            <Footer/>
          </div>
          </> }/>
          <Route path="/career" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>

          </div>
          <div>
            <Career/>
            <Footer/>
          </div>
          </> }/>
          <Route path="/contactus" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>

          </div>
          <div>
            <Map/>
            <Footer/>
          </div>
          </> }/>
          <Route path="/home" element={
          <>
          <div>
            <BlueStrip/>
            <Navbar/>
          </div>
          <div>
            <Contact/>
            <Footer/>
          </div>
          </> }/>

          <Route path='/product' element={
            <> 
            <div>
              <BlueStrip/>
            <Navbar/>
            <Navbarsm/>
            
            <Producthero/>
            <Footer/>
          </div>
          </> } />
          
          <Route path='/booknow' element={
            <>
            <BlueStrip/>
            <Navbar/>
            <Navbarsm/>
            <BookNow/>
            <Footer/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
