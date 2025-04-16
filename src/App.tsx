import './App.css';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import { Paper } from '@mui/material';
import { styles } from './constants/styles';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('home');

  return (
    <>
      <Paper sx={styles.mainContainer}>
        <Header value={value} setValue={setValue} />
        <Main />
        <Footer setValue={setValue} />
      </Paper>
    </>
  )
}

export default App;