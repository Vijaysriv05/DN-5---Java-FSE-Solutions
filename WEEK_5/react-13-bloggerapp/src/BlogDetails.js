function BlogDetails() {

    const blogs = [

        {
            id: 1,
            title: "Getting Started with React"
        },

        {
            id: 2,
            title: "Understanding JSX"
        }

    ];

    return (

        <div>

            <h2>Blog Details</h2>

            <ul>

                {

                    blogs.map((blog) => (

                        <li key={blog.id}>
                            {blog.title}
                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BlogDetails;