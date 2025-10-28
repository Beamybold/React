import GreetingCard from "./components/GreetingCard";
import './app.css';

function App() {
  return(
    <div className="container">
      <GreetingCard name="Folarin" message="Enjoy your day!" color="blue" />
      <GreetingCard name="Adebimola" message="Have a great day ahead!" color="pink" />
      <GreetingCard name="Iseoluwa" message="You are awesome!" />
    </div>

  );
}



export default App;
