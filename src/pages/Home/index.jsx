import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Card, List } from "./styles";

const Home = () => {
  const [ninjas, setNinjas] = useState([]);

  useEffect(() => {
    api
      .get("characters", {
        offset: 0,
        limit: 100,
      })
      .then((response) => {
        console.log(response);
        setNinjas(response.data);
      });
  }, []);


  return (
    <>
      <h1>Tsunode Shippuden</h1>

      <List>
        {ninjas.map((ninja) => (
          <Card key={ninja.id}>
            <Link to={`/shinobis/${ninja.id}`}>
                <span>{ninja.name}</span>
                <img src={ninja.images[0]} alt={ninja.name} />
            </Link>
          </Card>
        ))}
      </List>
    </>
  );
};

export default Home;
