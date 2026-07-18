function CourseDetails() {

    const courses = [

        {
            id: 1,
            name: "React Fundamentals"
        },

        {
            id: 2,
            name: "Advanced JavaScript"
        }

    ];

    return (

        <div>

            <h2>Course Details</h2>

            <ul>

                {

                    courses.map((course) => (

                        <li key={course.id}>
                            {course.name}
                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default CourseDetails;