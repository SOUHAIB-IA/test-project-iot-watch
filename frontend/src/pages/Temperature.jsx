import React from 'react';

/* Components */
import Content from '../components/Content';
import Header from '../components/Header';
import Insights from '../components/Insights';
 import TemperaturePrediction from '../components/TemperaturePrediction';
import WeeklyStats from '../components/WeeklyStats';

function Temperature(){
    return(
        <div className="w-screen max-w-screen min-h-screen bg-zinc-50">
      <Header />
      <Content />
      
      <TemperaturePrediction />
      <WeeklyStats /> 

      <Insights />
    </div>
    )
}

export default Temperature;