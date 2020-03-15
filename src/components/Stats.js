import styled from 'styled-components';
import useStats from '../util/useStats';
import React from 'react';
import NumberFormat from 'react-number-format';

const StatGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 10px;
  
`;
const StatBlock = styled.div`
background-color: #f39b9b;
width: 100%;
border-radius: 10px;
height: 100px;
align-items: center;
justify-items: center;
text-align: center;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... {error}</p>;
  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmados:</h3>
        <NumberFormat value={stats.confirmed?.value} displayType={'text'} decimalSeparator={"."} thousandSeparator={true} thousandsGroupStyle="thousand" ></NumberFormat>
      </StatBlock>
      <StatBlock>
        <h3>Percentual de Mortalidade:</h3>
        {/* colocar em percentual */}
        <NumberFormat value={(stats.deaths?.value/stats.confirmed?.value) * 100} displayType={'text'} decimalSeparator={"."} thousandSeparator={true} thousandsGroupStyle="thousand" ></NumberFormat>
      </StatBlock>
      <StatBlock>
        <h3>Percentual de Curados:</h3>
        {/* colocar em percentual */}
        <NumberFormat value={(stats.recovered?.value/(stats.confirmed?.value - stats.deaths?.value)) * 100} displayType={'text'} decimalSeparator={"."} thousandSeparator={true} thousandsGroupStyle="thousand" ></NumberFormat>
      </StatBlock>
      <StatBlock>
        <h3>Mortes:</h3>
        <NumberFormat value={stats.deaths?.value} displayType={'text'} thousandSeparator={true} decimalSeparator={"."}  thousandsGroupStyle="thousand" ></NumberFormat>
      </StatBlock>
      <StatBlock>
        <h3>Curados:</h3>
        <NumberFormat value={stats.recovered?.value} displayType={'text'} thousandSeparator={true} decimalSeparator={"."}  thousandsGroupStyle="thousand" ></NumberFormat>
      </StatBlock>
    </StatGrid>
  );
}
