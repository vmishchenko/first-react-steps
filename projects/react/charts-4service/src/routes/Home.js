import React from 'react';

import {HorizontalBar, Line, Doughnut} from 'react-chartjs-2';
import dataPie from "../data/dataPie";
import dataBar from "../data/dataBar";
import dataLine from "../data/dataLine";

const Home = () => {

  return (
    <div className="main">
      <div className="main__gray-line"></div>
      <div className="main__title-block">
        <h2 className="main__title-block--title">
          Hi Filip
        </h2>
        <h4 className="main__title-block--subtitle">
          Checkout your latest projects and their progress.
        </h4>
      </div>

      <div className="charts">
        <div className="charts__block charts__line">
          <div className="charts__title-block">
            <h2 className="charts__title-block--title">
              Wavy Lines
            </h2>
            <h4 className="main__title-block--subtitle">
              Working Hours
            </h4>
          </div>
          <Line data={dataLine} legend={{display: 'none'}} />
        </div>
        <div className="charts__block charts__pie">
          <Doughnut data={dataPie} legend={{position: 'right'}} />

        </div>
        <div className="charts__block charts__bar">
          <HorizontalBar data={dataBar}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
