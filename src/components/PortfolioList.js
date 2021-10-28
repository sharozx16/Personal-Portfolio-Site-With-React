import React from 'react';


const PortfolioList = ({id, title, active, setSelected}) => {
    return (
        <li  className={active ? "portfolioList act" : "portfolioList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    
    )
}

export default PortfolioList
