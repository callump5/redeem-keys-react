import Root from "./components";


export default {
  name: "redeem-keys-frontity",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      menu: [
        [
          "Home",
          "/"
        ],
        [
          "Shop",
          "/shop"
        ],
      ],
    }
  },
  actions: {
    theme: {}
  }
};
