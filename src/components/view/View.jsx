import { useState, useEffect } from 'react';

import MoneyList from '../moneyList/MoneyList';
import BlokInfo from '../blokInfo/BlokInfo';

import exchangeImg from '../../../public/img/exchange1.png'
import availabilityImg from '../../../public/img/availability.png'
import receiveImg from '../../../public/img/receive.png'

const View = ({nameMoney}) => {

    const [selectedValue, setSelectedValue] = useState("");
    const [counter, setCounter] = useState(0);
    const [rubInput, setRubInput] = useState(0);

    const isDisabled = selectedValue === "" || rubInput === 0 || rubInput === "";

    useEffect(() => {
      if (isDisabled) {setCounter(0)}
    }, [isDisabled]);

    const calcCounter = (selectedValue) => {
        const monValueAkt = nameMoney.filter(item => item.charCode === selectedValue);
        const rubKonver = Number((rubInput * monValueAkt[0].nominal / monValueAkt[0].value).toFixed(2))
        return setCounter(rubKonver) 
    }

    return (
      <>
        <h1>Калькулятор обмена валют</h1>
        <div className="app">
          <div className="top_controls">
            {/* <label htmlFor='rub'>
              Введите сумму в рублях:  
            </label> */}
            <div className='top-rub'>
                <img src={availabilityImg}/>
                <input id='rub' type='text' onChange={(e) => setRubInput(e.target.value)}/>
                <p>RUB</p>
            </div>
            <div className='top-money'>
                <img src={exchangeImg}/>
                <MoneyList nameMoney={nameMoney} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            </div>
            <div className='top-total'>
                <img src={receiveImg}/>
                <div className="counter">
                  {counter}
                </div>
                <p>{selectedValue}</p>
            </div>
          </div>
          <div className="controls">
            <button disabled={isDisabled} onClick={() => calcCounter(selectedValue)}>Конвертировать</button>
          </div>
          {isDisabled ? <BlokInfo/> : null}
        </div>
        <a href="https://www.cbr-xml-daily.ru/">Курсы валют, API</a>
      </>
    )
  }

  export default View;