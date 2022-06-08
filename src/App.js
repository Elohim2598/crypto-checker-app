import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Crypto } from './components/Crypto';
import { useSpring, animated } from 'react-spring';

function App() {
  const [coins, setCoins] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => alert('Error: ' + err));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(query.toLowerCase())
  );

  const style1 = useSpring({
    from: { opacity: 0, marginRight: -500 },
    to: { opacity: 1, marginRight: 0 },
    delay: 1500,
  });

  const style2 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 500,
  });

  return (
    <div className="app-container">
      <animated.div style={style2} className="search-box">
        <input
          type="text"
          placeholder="Search for a coin"
          onChange={(e) => setQuery(e.target.value)}
        />
      </animated.div>
      {filteredCoins.map((coin) => (
        <animated.div style={style1}>
          <Crypto
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        </animated.div>
      ))}
    </div>
  );
}

export default App;
