import React from 'react';

export function Crypto({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <div className="crypto-item">
          <div className="crypto-container-left">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="symbol">{symbol}</p>
          </div>
          <div className="crypto-container-right">
            <p className="price">${price}</p>

            <p className="volume">${volume.toLocaleString()}</p>
          </div>
          <div className="crypto-container-far-right">
            {priceChange < 0 ? (
              <p className="coin-percent red" style={{ color: 'red' }}>
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent green" style={{ color: 'green' }}>
                {priceChange.toFixed(2)}%
              </p>
            )}

            <p className="coin-marketCap">
              Market Cap: ${marketCap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
