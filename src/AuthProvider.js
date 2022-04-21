import * as React from "react";
import axios from "axios";

const authContext = React.createContext();

const url = "https://cs6310-14.azurewebsites.net/Authentication/login";

export function useAuth() {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login(account, password) {
      return new Promise((res) => {
        axios
          .get(url + "/" + account + "/" + password)
          .then(() => {
            setAuthed(true);
            res();
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
