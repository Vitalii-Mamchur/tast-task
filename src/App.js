import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ListUsers from './components/ListUsers/ListUsers';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Wrapper>
        <ListUsers />
        <Form />
      </Wrapper>
    </div>
  );
}

export default App;
