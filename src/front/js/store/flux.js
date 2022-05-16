const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: { words: "helloWorld" },
      legendaryWeapons: [],
      exotics: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
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
    },
  };
};
export default getState;
