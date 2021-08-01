const settings = {
  "name": "redeem-keys-react",
  "state": {
    "frontity": {
      "url": "https://redeem-keys.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "redeem-keys-frontity",
      "state": {
        "theme": {
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://redeem-keys.com",
          "api": "https://redeem-keys.com/wp-json",
          "params": {
            "per_page": 40,
          },
          "postTypes": [
            {
              "type": "product",
              "endpoint": "product",
              "archive": "/shop/",
              // "archive": "/wp/v2/product/",
            },{
              "type": "product",
              "endpoint": "product",
              "archive": "/product/",
              // "archive": "/wp/v2/product/",
            },
            {
              "type": "product",
              "endpoint": "product",
              "archive": "/search/",
              // "archive": "/wp/v2/product/",
              
            },
            {
              "type": "products",
              "endpoint": "products",
              "archive": "/wc/v3/products/",
              // "archive": "/wp/v2/product/",
              
            },
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
