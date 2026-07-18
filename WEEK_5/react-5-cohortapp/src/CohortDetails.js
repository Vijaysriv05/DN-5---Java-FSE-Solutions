import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails() {

    const cohorts = [

        {
            name: "Java FSE",
            startDate: "10-Jul-2026",
            currentStatus: "Ongoing",
            coach: "John",
            trainer: "David"
        },

        {
            name: "React Training",
            startDate: "20-Jun-2026",
            currentStatus: "Completed",
            coach: "Kevin",
            trainer: "Peter"
        }

    ];

    return (

        <div>

            <h1>Cohort Details</h1>

            {

                cohorts.map((cohort, index) => (

                    <div className={styles.box} key={index}>

                        <h3
                            style={{
                                color:
                                    cohort.currentStatus.toLowerCase() === "ongoing"
                                        ? "green"
                                        : "blue"
                            }}
                        >
                            {cohort.name}
                        </h3>

                        <dl>

                            <dt>Started On</dt>
                            <dd>{cohort.startDate}</dd>

                            <dt>Current Status</dt>
                            <dd>{cohort.currentStatus}</dd>

                            <dt>Coach</dt>
                            <dd>{cohort.coach}</dd>

                            <dt>Trainer</dt>
                            <dd>{cohort.trainer}</dd>

                        </dl>

                    </div>

                ))

            }

        </div>

    );

}

export default CohortDetails;