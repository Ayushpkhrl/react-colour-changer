import { useEffect, useState } from 'react';

const useCurrency = (currency) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Error fetching data:", err));
  }, [currency]);

  return data;
};

export default useCurrency;