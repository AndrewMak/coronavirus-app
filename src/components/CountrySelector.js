import { useState } from 'react';
import useCountries from '../util/useCountries';
import Stats from './Stats';
import React from 'react';

export default function CountrySelector() {
  const { countries, loading, error } = useCountries(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('BRA');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... {error}</p>;
  return (
    <div>
      <h2>{selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
