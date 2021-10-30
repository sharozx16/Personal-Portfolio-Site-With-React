import React, { useState, useEffect }  from 'react';
import PortfolioList from './PortfolioList';
import { featuredPortfolio, 
        webPortfolio,
        mobilePortfolio,
        designPortfolio,
        contentPortfolio
} from '../Data';
import 'aos/dist/aos.css';
import Aos from 'aos';


const Portfolio = () => {
    useEffect(() => {
        Aos.init({duration: 1200});
    }, []);
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web Applications"
        },
        {
            id: "mobile",
            title: "Mobile Applications"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "content",
            title: "Content Design"
        }
    ]
    useEffect(() => {
      switch(selected){
          case "featured":
              setData(featuredPortfolio);
              break;
          case "web":
             setData(webPortfolio);
             break;
          case "mobile":
             setData(mobilePortfolio);
             break;
          case "design":
             setData(designPortfolio);
             break;
         case "content":
              setData(contentPortfolio);
              break;
        default:
            setData(featuredPortfolio);
            
      }
    }, [selected])
    return (
        <div  className="portfolio" id="portfolio">
            <h1 data-aos="fade-down" data-aos-easing="ease-out-back"  data-aos-anchor-placement="bottom-bottom" >Portfolio</h1>
            <div data-aos="zoom-out" data-aos-easing="ease-out-back"  data-aos-anchor-placement="bottom-bottom" className="tabs">
            <ul>
               {list.map((item) =>(
                   <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
               ))}
           </ul>
           </div>
            <div  data-aos="slide-up" data-aos-easing="ease-in-out" className="container projects">
                {data.map(d => (
                    <div className="item">
                    <img src={d.img} alt="" style={{width:"330px",height:"250px"}} className="pimages"/>
                    <h3>{d.title}</h3>
                   
                </div>
                ))}
                
          
            </div>
        </div>
    )
}

export default Portfolio
