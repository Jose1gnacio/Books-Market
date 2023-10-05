import React from "react";

import Banner from '../component/intercambio/Banner'
import BannerInverso from '../component/intercambio/BannerInverso'

const Intercambio = () => {

  return (
    <div className="div container-fluid">
      <div className="div row">
        <Banner />
      </div>
      <div className="div row">
        <BannerInverso />
      </div>
    </div>
  )
}

export default Intercambio