import React from 'react';

function CalculateScore() {

    const Name = "Vijay Sri V";

    const m1 = 85;
    const m2 = 90;
    const m3 = 88;

    const total = m1 + m2 + m3;
    const average = total / 3;

    let grade = "";

    if (average >= 90)
        grade = "A+";
    else if (average >= 80)
        grade = "A";
    else if (average >= 70)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else
        grade = "Fail";

    return (

        <div className="container">

            <h1>Student Score Calculator</h1>

            <h3>Name : {Name}</h3>

            <p>Subject 1 : {m1}</p>

            <p>Subject 2 : {m2}</p>

            <p>Subject 3 : {m3}</p>

            <h3>Total : {total}</h3>

            <h3>Average : {average.toFixed(2)}</h3>

            <h2>Grade : {grade}</h2>

        </div>

    );

}

export default CalculateScore;