import React, { useState, useEffect }  from 'react';
import PortfolioList from './PortfolioList';
import { featuredPortfolio, 
        webPortfolio,
        mobilePortfolio,
        designPortfolio,
        contentPortfolio
} from '../Data';


const Portfolio = () => {
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
        <div className="portfolio" id="portfolio">
            <h1 >Portfolio</h1>
            <ul>
               {list.map((item) =>(
                   <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
               ))}
           </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                    <img src={d.img} alt="" style={{width:"220px",height:"150px"}} className="pimages"/>
                    <h3>{d.title}</h3>
                   
                </div>
                ))}
                
          
            </div>
        </div>
    )
}

export default Portfolio
