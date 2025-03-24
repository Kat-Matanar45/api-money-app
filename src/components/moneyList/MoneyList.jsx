
const MoneyList = ({nameMoney, selectedValue, setSelectedValue}) => {

    if (nameMoney.length === 0) {
        return <p>Загрузка валют...</p>;
    }

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const elements = nameMoney.map((item) => {
          const {id, name, charCode} = item;
              
          return (
              <option 
                  key = {id}
                  value={charCode}>
                      {name} 
              </option>
          )})
    
    return (
        <select className='moneyList' name="money" onChange={handleSelectChange} value={selectedValue}>
            <option value="">-- Выберите валюту --</option>
            {elements}
        </select>
    )
}

export default MoneyList;