import React from "react";
import { Typography} from "antd";
import { Link } from "react-router-dom";

import { Cryptocurrencies} from "../components";
import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
  return (
    <>
      {/* Top 10 Cryptocurrencies */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world.
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
    </>
  );
};

export default Homepage;
