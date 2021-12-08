import React from 'react';
import './App.css';
import {
  Link,
  withRouter
} from "react-router-dom";

import { menuApps, menuEntrees, menuSides } from './menu.js'

class CustomizedHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customizedApps: [],
      customizedEntrees: [],
      customizedSides: []
    };
  }

  componentDidMount(){
    var likesArray = this.props.location.state.data.map((obj => Object.values(obj))).flat()
    console.log(likesArray)
    var customizedApps = []
    var customizedEntrees = []
    var customizedSides = []

    for (var i=0; i<likesArray.length; i++){
      var customizedApps = [...customizedApps, menuApps.filter(obj => obj.type === likesArray[i])]
    }
    customizedApps = customizedApps.flat()

    for (var i=0; i<likesArray.length; i++){
      var customizedEntrees = [...customizedEntrees, menuEntrees.filter(obj => obj.type === likesArray[i])]
    }
    customizedEntrees = customizedEntrees.flat()

    for (var i=0; i<likesArray.length; i++){
      var customizedSides = [...customizedSides, menuSides.filter(obj => obj.type === likesArray[i])]
    }
    customizedSides = customizedSides.flat()

    this.setState({
      customizedApps: customizedApps,
      customizedEntrees: customizedEntrees,
      customizedSides: customizedSides
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
      <div className="customize-menu">
        <Link to={{pathname: `/customize`}}>Customize My Menu</Link>
      </div>
      <section className="themed themed-  show-separator-False page-layout-whole subpage  singleplatformmenupage odd">
        <section className="sp-menu-wrapper">
          <div className="container">
            <div className="page-header inside text-center">
              <div className="title-wrapper">
                <h2 className="title">Dinner Menu</h2>
              </div>
            </div>
            <div className="sections text-left">
              <div className="section dontsplit" data-slug="starters-and-salads">
                <div className="title-wrapper">
                  <h2 className="title">Starters and Salads</h2>
                  <div className="descr">Add Protein to Your Salad: Chicken or Shrimp $9</div>
                </div>
                <div className="items">
                  {this.state.customizedApps.map((obj, index) =>
                    <React.Fragment>
                      <div className="item">
                        <div className="name text-uppercase">{obj.title}</div>
                        <div className="descr">{obj.description}</div>
                        <div className="price">{obj.price}</div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
              <div className="section dontsplit" data-slug="entrees">
                <div className="title-wrapper">
                  <h2 className="title">Entrees</h2>
                </div>
                <div className="items">
                  {this.state.customizedEntrees.map((obj, index) =>
                    <React.Fragment>
                      <div className="item">
                        <div className="name text-uppercase">{obj.title}</div>
                        <div className="descr">{obj.description}</div>
                        <div className="price">{obj.price}</div>
                      </div>
                    </React.Fragment>
                  )}
            </div>
          </div>
          <div className="section dontsplit" data-slug="plats-daccompagnement">
            <div className="title-wrapper">
              <h2 className="title">Plats d'Accompagnement</h2>
              <div className="descr">$7 each or 3 for $18</div>
            </div>
            <div className="items">
              {this.state.customizedSides.map((obj, index) =>
                <React.Fragment>
                  <div className="item">
                    <div className="name text-uppercase">{obj.title}</div>
                    <div className="descr">{obj.description}</div>
                    <div className="price">{obj.price}</div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
      </div>
      <div className="menu-footnote text-center">Vegetarian: may contain dairy or eggs. *Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food borne ill</div>
    </div>
  </section>
</section>
</div>
    );
  }
}

export default CustomizedHome;
