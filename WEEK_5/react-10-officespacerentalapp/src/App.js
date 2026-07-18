import './App.css';
import officeImage from './images/office.png';

function App() {

  const office = {
    name: "Skyline Tech Park",
    rent: 55000,
    address: "OMR, Chennai"
  };

  const officeList = [
    {
      name: "Skyline Tech Park",
      rent: 55000,
      address: "OMR, Chennai"
    },
    {
      name: "Alpha Business Center",
      rent: 72000,
      address: "Guindy, Chennai"
    },
    {
      name: "Phoenix Towers",
      rent: 45000,
      address: "Velachery, Chennai"
    },
    {
      name: "Tech Hub",
      rent: 90000,
      address: "T Nagar, Chennai"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

       


<img
  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
  alt="Office"
  width="500"
  height="300"
/>


      <h2>Featured Office</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>
        <span
          style={{
            color: office.rent < 60000 ? "red" : "green",
            fontWeight: "bold"
          }}
        >
          {" "}₹{office.rent}
        </span>
      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item, index) => (

          <div className="card" key={index}>

            <h3>{item.name}</h3>

            <p>
              <b>Rent:</b>
              <span
                style={{
                  color: item.rent < 60000 ? "red" : "green",
                  fontWeight: "bold"
                }}
              >
                {" "}₹{item.rent}
              </span>
            </p>

            <p><b>Address:</b> {item.address}</p>

          </div>

        ))
      }

    </div>
  );
}

export default App;
