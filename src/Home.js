import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "How to become a good developer",
      body: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Libero dolorum amet quam tenetur doloribus itaque quas praesentium. Voluptas, quas dolores.",
      author: "john",
      id: 1,
    },
    {
      title: "10 tips to build React components",
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

  const [name, setName] = useState("maria");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect run");
    // console.log(blogs);
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        heading="All Blogs!"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("john")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
