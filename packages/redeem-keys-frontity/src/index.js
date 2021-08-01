import Root from "./components";
import PCIcon from "./assets/images/PC-ICON.png"
import XboxIcon from "./assets/images/Xbox-ICON.png"
import PSIcon from "./assets/images/PS-ICON-2.png"
import NintendoIcon from "./assets/images/Nintendo-icon.png"

import script from "@frontity/html2react/processors/script";

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
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [script]
    }
  },
};
