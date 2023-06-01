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
      return;
    case "decr":
      return;
  }
};
export { initialState, reducer };
