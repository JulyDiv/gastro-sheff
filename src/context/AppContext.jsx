/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  //const [logins, setLogins] = useState();
  //const [pass, setPass] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  //const [isLogged, setIsLogged] = useState([]);
  const [orders, setOrders] = useState([]);
  //const [storage, setStorage] = useState();
  const [userName, setUserName] = useState();
  const [isSignForm, setIsSignForm] = useState(false);
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    const user = localStorage.user ? JSON.parse(localStorage.user) : [];
    if (user !== null) {
      setIsLogged(user);
    }
  }, []);

  console.log(isLogged);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.user = JSON.stringify(isLogged);
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        localStorage.user = JSON.stringify(isLogged);
      });
    };
  }, [isLogged]);

  const getData = async () => {
    setIsLoading(true);
    return await axios
      .get(`http://localhost:3001/api/program`)
      .then(({ data }) => {
        setPrograms(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const getUser = async () => {
    //setIsLoading(true);
    return await axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/users`)
      .then(({ data }) => {
        setUsers(data);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const getOrder = () => {
    //setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/orders`)
      .then(({ data }) => {
        setOrders(data);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getOrder();
  }, []);

    // useEffect(() => {
    //   getOrder();
    // }, [isLogged]); убрать релоад после выхода из акка и проверить списки заказов у каждого юзера на соответсвие

  //console.log(isLogged.id);

  const error = "Такой пользователь не зарегистрирован";
  const sing = "Такой пользователь уже зарегистрирован";
  const user = "Добро пожаловать, ";

  const contextValue = {
    programs,
    setPrograms,
    getData,
    getUser,
    getOrder,
    sing,
    user,
    error,
    users,
    isLogged,
    setIsLogged,
    orders,
    setOrders,
    userName,
    setUserName,
    isSignForm,
    setIsSignForm,
    isForm,
    setIsForm,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
