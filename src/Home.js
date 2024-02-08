import { useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "How to become a good developer",
      body: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Libero dolorum amet quam tenetur doloribus itaque quas praesentium. Voluptas, quas dolores.",
      author: "john",
      id: 1,
    },
    {
      title: "10 tips to build a React components",
      body: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Libero dolorum amet quam tenetur doloribus itaque quas praesentium. Voluptas, quas dolores.",
      author: "andrew",
      id: 2,
    },
    {
      title: "React JS tutorial",
      body: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Libero dolorum amet quam tenetur doloribus itaque quas praesentium. Voluptas, quas dolores.",
      author: "maria",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
