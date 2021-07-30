import Root from "./components";
import PCIcon from "./assets/images/PC-ICON.png"
import XboxIcon from "./assets/images/Xbox-ICON.png"
import PSIcon from "./assets/images/PS-ICON-2.png"
import NintendoIcon from "./assets/images/Nintendo-icon.png"


export default {
  name: "redeem-keys-frontity",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      LeftMenu: [
        [
          "Xbox",
          "/",
          XboxIcon
        ],
        [
          "Playstation",
          "/shop",
          PSIcon
        ],
        [
          "PC",
          "/product-category/playstation/",
          PCIcon        
        ],
        [
          "Nintendo",
          "/shop",
          NintendoIcon
        ],
      ],
      RightMenu: [
        [
          "My Account",
          "/",
          ""
        ],
      ]
    }
  },
  actions: {
    theme: {}
  }
};
