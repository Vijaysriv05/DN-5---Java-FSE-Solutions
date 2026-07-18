function ListofPlayers(props) {

    const players = [

        { name: "Mr. Jack", score: 50 },
        { name: "Mr. Michael", score: 70 },
        { name: "Mr. John", score: 40 },
        { name: "Mr. Ann", score: 61 },
        { name: "Mr. Elisabeth", score: 61 },
        { name: "Mr. Sachin", score: 95 },
        { name: "Mr. Dhoni", score: 100 },
        { name: "Mr. Virat", score: 84 },
        { name: "Mr. Jadeja", score: 64 },
        { name: "Mr. Rohit", score: 80 }

    ];

    if (props.flag) {

        return (

            <div>

                <h2>List of Players</h2>

                <ul>

                    {
                        players.map((player, index) => (

                            <li key={index}>
                                {player.name} {player.score}
                            </li>

                        ))
                    }

                </ul>

                <h2>List of Players having Scores Less than 70</h2>

                <ul>

                    {
                        players
                            .filter(player => player.score < 70)
                            .map((player, index) => (

                                <li key={index}>
                                    {player.name} {player.score}
                                </li>

                            ))
                    }

                </ul>

            </div>

        );

    }

    return <h2>Flag is False</h2>;
}

export default ListofPlayers;