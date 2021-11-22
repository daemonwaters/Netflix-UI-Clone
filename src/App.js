import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Row from './components/Row';
import {data} from './components/FAQData'
import FAQ from './components/FAQ';
import Button from './components/Button'
import {FaAngleRight} from 'react-icons/fa'
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Hero/>
      <NavBar/>
      <Row>
        <div className="row-text">
          <h1>
          Enjoy on your TV.
          </h1>
          <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
        <div className="row-img" id="r1">
        </div>
      </Row>
      <Row direction='reverse'>
        <div className="row-text">
          <h1>
          Download your shows to watch offline.
          </h1>
          <p>
          Save your favorites easily and always have something to watch.
          </p>
        </div>
        <div className="row-img" id="r2">
        </div>
      </Row>
      <Row>
        <div className="row-text">
          <h1>
          Watch everywhere.
          </h1>
          <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
          </p>
        </div>
        <div className="row-img" id="r3">
        </div>
      </Row>
      <Row direction='reverse'>
        <div className="row-text">
          <h1>
          Create profiles for kids.
          </h1>
          <p>
          Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </p>
        </div>
        <div className="row-img" id="r4">
        </div>
      </Row>
      <FAQ>
        {data.map((item)=>{
          return (
            <div className="data" key={item.id}>
              {item.title}
              <span>+</span>
            </div>
          )
        })}
                        <div className="email-section">
                    <input type="text" name="email" placeholder="Email adress"/>
                    <Button>
                        Get started
                        <FaAngleRight/>
                    </Button>
                </div>
      </FAQ>
     <Footer/>
    </div>
  );
}

export default App;
