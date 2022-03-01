import React from 'react';
import { Link } from 'react-router-dom';
import stocks from '../data';

const Dashboard= (props) =>{
    return(
        <div className='stocks'>
            {stocks.map((stock)=>{
                const props= stock;
                return(
                    <Link to={`/stocks/${stock.symbol}`} >
                        <h1>{props.name}</h1>
                    </Link>
                )
            })}
        </div>
    );
};

    
export default Dashboard;


