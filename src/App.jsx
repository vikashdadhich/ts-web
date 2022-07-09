
// import './css/style.scss';
// import {Home} from './component/Home';
import { Container } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Home/Header';
// import {mainPage} from './component/Page';
import MainPage from './component/Page';

function App() {
  return (
    <Container className="App" >
      <Header />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </Container>
  );
}

export default App;
