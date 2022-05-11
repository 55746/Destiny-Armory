const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: { words: "helloWorld" },
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
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getData: (par) => {
        fetch(
          `https://3000-55746-louisealert20-ewghhi2nbe0.ws-us44.gitpod.io/api/hello`,
          {
            method: "GET",
            redirect: "follow",
          }
        )
          .then((res) => res.json())
          .then((data) => setStore({ getData: data }))
          .catch((err) => console.error(err, error));
      },
      getMessage: () => {
        // fetching data from the backend
        let newList = "testing to see if this shows up";
        fetch(process.env.BACKEND_URL + "/api/hello", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newList),
          redirect: "follow",
        })
          .then((resp) => resp.json())
          .then((data) => setStore({ newList: data.newList }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
