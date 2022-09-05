import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import ErrorPage from './components/ErrorPage';
import styled from 'styled-components';
import { useState } from 'react';
const Wrapper = styled.div`
  background-color: #ececec;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
`;
function App() {
  const [googleAccount, setGoogleAccount] = useState(null);
  const handleLoginGoogle = (account) => {
    setGoogleAccount(account);
  };
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<Home googleAccount={googleAccount} />} />
        <Route
          path="/login"
          element={<LoginPage googleAccount={googleAccount} login={handleLoginGoogle} />}
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
