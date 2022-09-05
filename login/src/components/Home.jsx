import React, { useEffect, useState } from 'react';

const Home = ({ googleAccount }) => {
  const [accountGoogle, setAccountGoogle] = useState(null);
  useEffect(() => {
    setAccountGoogle(googleAccount);
  }, [googleAccount]);
  return (
    <div>
      {accountGoogle ? (
        <div>
          <h1>{accountGoogle.name}</h1>
          <h2>{accountGoogle.email}</h2>
          <img src={accountGoogle.profilePic} alt="profilePic" />
        </div>
      ) : (
        <div>Bạn chưa đăng nhập!</div>
      )}
    </div>
  );
};

export default Home;
