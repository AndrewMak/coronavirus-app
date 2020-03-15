import { useState, useMemo } from 'react';

export default function useCountries(url) {
  const [countries, setcountries] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useMemo(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setcountries(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return {
    countries,
    loading,
    error,
  };
}
