// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{YY-MM-DD}/v1/currencies/{currency}.json
import { useState, useEffect } from "react";
function currencyConverter(currency = "bdt") {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=> res.json())
    .then((res)=> setData(res[currency]))
    
      console.log(data)
  }, [currency]);
  console.log(data)
  return data
}

export default currencyConverter