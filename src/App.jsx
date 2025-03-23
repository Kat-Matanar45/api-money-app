import { useState, useEffect } from 'react';

import './App.css'

import ApiMoney from './services/api-money'
import ErrorMessage from './components/errorMessage/ErrorMessage'
import View from './components/view/View';

function App() {

  const apiMoney = new ApiMoney();

  const [arrayMoney, setArrayMoney] = useState({});
  const [nameMoney, setNameMoney] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiMoney.getAllMoney()
            .then(res => setArrayMoney(res))
            .catch(onError)
  }, []); // Загружаем данные при монтировании

  useEffect(() => {
      if (Object.keys(arrayMoney).length > 0) {
          const names = Object.values(arrayMoney).map(item => ({
              id: item.ID,
              name: item.Name,
              charCode: item.CharCode,
              nominal: item.Nominal,
              value: item.Value
          }));
          setNameMoney(names);
      }
  }, [arrayMoney]);

  const onError = () => {
      setError(true)
  }

  const errorMessage = error ? <ErrorMessage/> : null;
  const content = !error ? <View nameMoney={nameMoney}/> : null;

  return (
    <>
      {errorMessage}
      {content}
    </>
  )
}

export default App
