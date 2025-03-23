import { useState, useEffect } from 'react';

import MoneyList from '../moneyList/MoneyList';
import BlokInfo from '../blokInfo/BlokInfo';

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
        <div className="app">
          <div className="top_controls">
            <label htmlFor='rub'>
              Введите сумму в рублях:  
            </label>
            <input id='rub' type='text' onChange={(e) => setRubInput(e.target.value)}/>
          </div>
          <div className="counter">
            {counter}
          </div>
          <div className="controls">
            <MoneyList nameMoney={nameMoney} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
            <button disabled={isDisabled} onClick={() => calcCounter(selectedValue)}>Конвертировать</button>
          </div>
          {isDisabled ? <BlokInfo/> : null}
        </div>
        <a href="https://www.cbr-xml-daily.ru/">Курсы валют, API</a>
      </>
    )
  }

  export default View;