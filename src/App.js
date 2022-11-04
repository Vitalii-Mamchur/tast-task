import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ListUsers from './components/ListUsers/ListUsers';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
      </Wrapper>
      <Hero />
      <Wrapper>
        <ListUsers />
      </Wrapper>
    </div>
  );
}

export default App;
