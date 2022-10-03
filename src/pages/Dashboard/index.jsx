import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const Dashboard = () => {
  const { id } = useParams();
  const [ninja, setNinja] = useState(null);

  useEffect(() => {
    api.get(`/characters/${id}`).then((response) => {
      console.log(response);
      setNinja(response.data);
    });
  }, [id]);

  return (
    <>
      {ninja ? (
        <div>
          <h1>{ninja.name}</h1>
        </div>
      ) : (
        <div> Ninja não encotrado</div>
      )}
    </>
  );
};

export default Dashboard;
