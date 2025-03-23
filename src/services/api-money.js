class ApiMoney {
    getResource = async () => {
        let res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        if (!res.ok) {
            throw new Error(`Could not fetch https://www.cbr-xml-daily.ru/daily_json.js, status: ${res.status}`);
        }
        return await res.json()
    }

    getAllMoney = async () => {
        let res = await this.getResource();
        return res.Valute
    }
}

export default ApiMoney;