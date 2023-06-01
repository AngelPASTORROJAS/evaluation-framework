const initialState = {
  count: 0,
  livres: [
    {
      titre: "CrazyLand",
      stock:1
    },
    {
      titre: "Poule aux oeufs d'or",
      stock:3
    },
  ],
  titre: "",
  stock: 0
};

const reducer = (state, action) => {
};
export { initialState, reducer };
