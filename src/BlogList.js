const BlogList = ({ blogs, heading }) => {
  //   const blogs = props.blogs;
  //   const heading = props.heading;
  //   console.log(props, blogs, heading);

  return (
    <div className="blog-list">
      <h2>{heading}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
