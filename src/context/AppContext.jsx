/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [logins, setLogins] = useState();
  const [pass, setPass] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [orders, setOrders] = useState([]);
  const [storage, setStorage] = useState();

  useEffect(() => {
    const user = localStorage.user ? JSON.parse(localStorage.user) : [];
    if (user !== null) {
      setIsLogged(user);
    }
  }, []);

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

  //console.log(isLogged.id);

  const getOrder = async () => {
    //setIsLoading(true);
    //let userId = { ...isLogged }
    // isLogged
    //   ?
    return await axios
      .get(`${process.env.NEXT_PUBLIC_API_HOST}/users/${isLogged.id}/orders`)
      .then(({ data }) => {
        setOrders(data);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
    // : "";
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getOrder();
  //   }, 5000)
  // }, []);

  // useEffect(() => {
  //   getOrder();
  // }, []);

  //console.log(orders);
  //console.log(isLogged.id);
  //console.log(storage);

    const error = "Такой пользователь не зарегистрирован";
    const sing = "Такой пользователь уже зарегистрирован";
    const user = "Добро пожаловать, ";

  const onSubmit = (data) => {
    const { name, phone } = data;
    let login = users.filter((item) => item.name === name);

    // if (isLoginForm) {
      if (login.length === 1) {
        login.forEach((item) => {
          if (item.name === name) {
            console.log(user, item.name);
            //setUserName(item.name);
            setIsLogged(item);
            //setIsTextError(false);
            //setIsTextUser(true);
            localStorage.setItem("user", JSON.stringify(item));
            //setIsLoginForm(false);
            //getOrder();
          }
        });
      } else if (login.length === 0) {
        console.log(error);
        //setIsTextError(true);
        //setIsTextUser(false);
        setIsLogged(false);
      // }
    } else {
      if (login.length === 1) {
        login.forEach((item) => {
          console.log(item);
          if (item.name === name) {
            console.log(sing);
            //setIsSingError(true);
          }
        });
      } else if (login.length === 0) {
        console.log("Новый пользователь");
        //setIsSingError(false);
        axios
          .post(`${process.env.NEXT_PUBLIC_API_HOST}/users`, {
            name: name,
            phone: phone,
            date: new Date().toLocaleString(),
          })
          .then(({ data }) => {
            window.location.reload();
            reset();
          })
          .catch(function (error) {
            console.log(error.message);
          });
      }
    }
    getOrder();
    //reset();
  };

  // useEffect(() => {
  //   getOrder();
  // }, []);

  const contextValue = {
    programs,
    setPrograms,
    getData,
    getUser,
    getOrder,
    users,
    logins,
    setLogins,
    pass,
    setPass,
    isLogged,
    setIsLogged,
    orders,
    storage,
    setStorage,
    onSubmit
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppWrapper };
