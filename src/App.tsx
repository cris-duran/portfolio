import './App.css';
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import { Paper } from '@mui/material';
import { styles } from './constants/styles';

function App() {
  return (
    <>
      <Paper sx={styles.mainContainer}>
        <Header />
        <Main />
        <Footer />
      </Paper>
    </>
  )
}

export default App;