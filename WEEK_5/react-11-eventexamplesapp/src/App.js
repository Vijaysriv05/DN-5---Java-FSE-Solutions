import './App.css';

function App() {

  function sayHello() {
    alert("Hello! Welcome to React Events.");
  }

  function showMessage(message) {
    alert(message);
  }

  function handleClick(event) {
    alert("Synthetic Event Triggered!");
    console.log(event);
  }

  return (
    <div className="App">

      <h1>React Event Examples</h1>

      <button onClick={sayHello}>
        Say Hello
      </button>

      <br /><br />

      <button onClick={() => showMessage("Welcome to Cognizant Digital Nurture 5.0")}>
        Show Message
      </button>

      <br /><br />

      <button onClick={handleClick}>
        Synthetic Event
      </button>

    </div>
  );
}

export default App;
