import { useState } from "react";
import "./App.css";

function App() {

  const [tickets, setTickets] = useState(5);

  const bookTicket = () => {

    if (tickets > 0) {
      setTickets(tickets - 1);
    }
  };

  return (

    <div className="App">

      <h1>Ticket Booking App</h1>

      <h2>Available Tickets : {tickets}</h2>

      {
        tickets > 0 ?

          <button onClick={bookTicket}>
            Book Ticket
          </button>

          :

          <h2 className="soldout">
            House Full
          </h2>

      }

    </div>

  );

}

export default App;
