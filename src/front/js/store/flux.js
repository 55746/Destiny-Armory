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
  };
};
export default getState;
