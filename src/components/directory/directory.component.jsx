import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",

          imageUrl: "images/hats.png", // local file in public/images/
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",

          imageUrl: "images/jackets.png", // local file in public/images/
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",

          imageUrl: "images/sneakers.png", // local file in public/images/
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",

          imageUrl: "images/womens.png", // local file in public/images/
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",

          imageUrl: "images/men.png", // local file in public/images/
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherMenuItems }) => (
          <MenuItem key={id} {...otherMenuItems} />
        ))}
      </div>
    );
  }
}

export default Directory;
