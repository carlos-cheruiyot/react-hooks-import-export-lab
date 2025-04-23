import React from "react";
import { username ,city } from "../__tests__/user.test";
function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;