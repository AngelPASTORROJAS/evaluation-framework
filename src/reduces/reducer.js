const initialState = {
  count: 0,
  livres: [
    {
      titre: "CrazyLand",
      stock: 1,
    },
    {
      titre: "Poule aux oeufs d'or",
      stock: 3,
    },
    {
      titre: "Le loup",
      stock: 0,
    },
  ],
  titre: "",
  stock: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incr":
      const stock=state[action.index].stock-1
      return;
    case "decr":
      const stock=state[action.index].stock+1
      return;
  }
};
export { initialState, reducer };
