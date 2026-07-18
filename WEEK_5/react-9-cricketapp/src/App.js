import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {

  const flag = true;

  return (
    <div>

      <ListofPlayers flag={flag} />

      <hr />

      <IndianPlayers />

    </div>
  );
}

export default App;