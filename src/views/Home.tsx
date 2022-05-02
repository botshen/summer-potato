import { useEffect } from "react";
import axios from "../config/axios";
const Home: React.FC = () => {
  useEffect(() => {
    axios.get("/me");
  }, []);
  return <div></div>;
};

export { Home };
