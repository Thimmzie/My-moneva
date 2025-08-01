import React from 'react';
import { useState, useEffect } from 'react';
import American from '../assets/images/american.png';
// import Paypal from '../assets/images/paypal.png';
// import Shoppay from '../assets/images/shop-pay.png';
// import Visa from '../assets/images/visa.png';
// import Westernunion from '../assets/images/westernunion.png';

const sponsors = () => {
  return (
    <div>
      <h1>
        More than 100+<br></br>
        companies partner
      </h1>
      <div>
        <img src={American} alt="/" />
      </div>
    </div>
  );
};

export default sponsors;
