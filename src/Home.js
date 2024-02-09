import { useState } from "react";
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
  return (
    <div className="home">
      <BlogList blogs={blogs} heading="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "maria")}
        heading="Maria's blogs!"
      />
    </div>
  );
};

export default Home;
