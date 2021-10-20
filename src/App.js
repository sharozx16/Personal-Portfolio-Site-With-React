import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js'; 
import Navbar from './components/Navbar';
import Header from './components/Header';



function App() {
  return (
    <>
    <Particles
    params={{
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area:1000
          }
        },
        shape: {
          type: "polygon",
          stroke:{
            width:10,
            color:"fff"
          }
         
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: "#fff",
          opacity: 1,
          width: 1
      },
      size: {
        value: 2, 
        random: true,
        anim: {
          enable: false,
          speed: 8,
          size_min: 4,
          sync: true
        }
      }
      }
    }}
    />
<Navbar/>
<Header/>
</>
  );
}

export default App;
