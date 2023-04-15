import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppWrapper = ({ children }) => {

  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    return await axios
      .get(`http://localhost:3000/api/program`)
      .then(({ data }) => {
        setPrograms(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const contextValue = {
    programs, setPrograms, getData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
