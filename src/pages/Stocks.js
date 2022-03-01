import React from 'react';
import Dashboard from './Dashboard';
import data from '../data';


const Stocks = () => {
  return (
    <div>
        <Dashboard  
        stock={data}
        />
    </div>
  );
};

export default  Stocks;