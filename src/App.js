import useHttp from './features/http.hook';
import { useEffect } from 'react';
import { useState } from 'react';

import fire from './icons/fire.jpg'
import get from './icons/next.jpg'
import info from './icons/info.jpg'
import './App.css';

function App() {

  const [bonus, setBonus] = useState();
  const [date, setDate] = useState();
  const [burning, setBurning] = useState();

  const GetBonus = async () => {
    const {getToken, getBonuses} = useHttp();
    
    const token = await getToken()
    const url =  `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${token}`;

    const bonusData = await getBonuses({url: url, AccessToken: token});

    setBonus(bonusData.data.currentQuantity);
    setDate(new Date(bonusData.data.dateBurning).toLocaleDateString());
    setBurning(bonusData.data.forBurningQuantity);
  }

  useEffect(() => {
    GetBonus()
  })

  return (
    <div className="App">
      <div class="white">
        <div class="white__logo">Логотип</div>
        <div class="white__info"><img src={info} alt="info"/></div>

        <div class="bonus">
          <div class="bonus__current">
            <div class="bonus__total">{bonus} бонусов</div>
            <div class="bonus__info">{date} сгорит <img src={fire} alt="fire"/> {burning} бонусов</div>
          </div>
          <div class="bonus__icon">
            <img src={get} alt="get" onClick={GetBonus}/>
          </div>
        </div>

      </div>
      <div class="red"></div>
    </div>
  );
}

export default App;
