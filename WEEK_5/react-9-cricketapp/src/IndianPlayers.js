function IndianPlayers() {

    const players = [

        "Sachin",
        "Dhoni",
        "Virat",
        "Rohit",
        "Yuvaraj",
        "Raina"

    ];

    const oddPlayers = players.filter((player, index) => index % 2 === 0);

    const evenPlayers = players.filter((player, index) => index % 2 !== 0);

    const mergedPlayers = [

        "Mr. First Player",
        "Mr. Second Player",
        "Mr. Third Player",
        "Mr. Fourth Player",
        "Mr. Fifth Player",
        "Mr. Sixth Player"

    ];

    return (

        <div>

            <h2>Odd Players</h2>

            <ul>

                {
                    oddPlayers.map((player, index) => (

                        <li key={index}>
                            {index * 2 + 1} : {player}
                        </li>

                    ))
                }

            </ul>

            <hr />

            <h2>Even Players</h2>

            <ul>

                {
                    evenPlayers.map((player, index) => (

                        <li key={index}>
                            {index * 2 + 2} : {player}
                        </li>

                    ))
                }

            </ul>

            <hr />

            <h2>List of Indian Players Merged:</h2>

            <ul>

                {
                    mergedPlayers.map((player, index) => (

                        <li key={index}>
                            {player}
                        </li>

                    ))
                }

            </ul>

        </div>

    );
}

export default IndianPlayers;