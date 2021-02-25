import React from "react";
import { useState } from "react";
import Account from "./Account";
import Header from "./Header";

const Home = () => {
  const [ismenuOpen, setIsmenuOpen] = useState(false);
  return (
    <div>
      <Header ismenuOpen={ismenuOpen} setIsmenuOpen={setIsmenuOpen} />
      <div className="feed">{ismenuOpen ? <Account /> : null}</div>
    </div>
  );
};

export default Home;
