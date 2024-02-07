import { useState } from "react";
const Home = () => {
  // let name = "john";
  const [name, setName] = useState("john");
  const [age, setAge] = useState(30);
  const handleClick = () => {
    // name = "maria";
    // console.log(name);
    setName("maria");
    setAge(25);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
