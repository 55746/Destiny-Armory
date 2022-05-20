const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
      legendaryWeapons: [],
      exoticWeapons: [],
    },
    actions: {
      getData: () => {
        fetch(
          "https://3001-55746-destinyweaponsli-4bt3rw87ozx.ws-us45.gitpod.io/api/legendary",
          {
            // FIGURING OUT HOW TO GET THE RIGHT END TO THE URL TO SHOW US ALL THE INFO IN A LIST
            method: "GET",
            redirect: "follow",
            mode: "no-cors",
          }
        )
          .then((res) => res.json())
          .then((data) => setStore({ legendaryWeapons: data }))
          .catch((error) => console.error("error", error));
        // let url = fetch().map() +
      },
      pullExotic: () => {
        fetch(
          `https://3001-55746-destinyweaponsli-u9xr1lfzxfb.ws-us45.gitpod.io/api/exotics`,
          {
            method: "GET",
            redirect: "follow",
            // mode: "no-cors",
          }
        )
          .then((res) => res.json())
          .then((data) => setStore({ exoticWeapons: data }))
          .catch((err) => console.log("err", err));
      },
      signUp: (email, password, first_name, last_name, dob) => {
        const new_user = {
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
          dob: dob,
        };
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_user),
          // redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      signIn: (email, password) => {
        const user = {
          email: email,
          password: password,
        };
        fetch(process.env.BACKEND_URL + "/api/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => getActions().verifyUser(result.access_token))
          .catch((error) => console.log("error", error));
      },

      verifyUser: (token) => {
        fetch(process.env.BACKEND_URL + "/api/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => setStore({ user: result }))
          .catch((error) => console.log("error", error));
        // localStorage.setItem("token", token);
      },
      logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
      },
    },
  };
};
export default getState;
