const settings = {
  "name": "redeem-keys-react",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
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
          "headers": {
            // By default remove this header from the state in the afterSSR
            "Authorization": "Basic YWFhOmJiYg", 
          },
          "postTypes": [
            {
              "type": "product",
              "endpoint": "product",
              "archive": "/shop/",
              "params": {
                "per_page": 15,
                "_embed": true,
              },
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
