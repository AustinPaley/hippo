import React from 'react';
import './App.css';
import {
  Link
} from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: null
    };
  }

  render() {
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
                  <div className="item">
                    <div className="name text-uppercase">Soup du Jour</div>
                    <div className="descr">Chef's daily choice</div>
                    <div className="price">9</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">French Onion Soup</div>
                    <div className="descr">Caramelized onion, aged gruyere, crouton</div>
                    <div className="price">12</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Fish Cake</div>
                    <div className="descr">Blistered tomato, caper dill aioli</div>
                    <div className="price">15</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Escargot en Croute</div>
                    <div className="descr">Pernod, provencal butter, puff pastry</div>
                    <div className="price">16</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">House Made Chicken Liver Pate</div>
                    <div className="descr">Cornichons, pickled onion, whole grain mustard and baguette</div>
                    <div className="price">16</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Crispy Goat Cheese</div>
                    <div className="descr">Beet puree, blackberries, basil pesto</div>
                    <div className="price">16</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Organic Hummus</div>
                    <div className="descr">Choice of pita or vegetables</div>
                    <div className="price">13</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Zucchini Noodles</div>
                    <div className="descr">Basil pesto, shaved almonds and parmesan</div>
                    <div className="price">13</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Caesar Salad</div>
                    <div className="descr">Romaine, toasted croutons, shaved parmesan</div>
                    <div className="price">15</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Arugula Salad</div>
                    <div className="descr">Apples, orange segments, goat cheese, roasted almonds, citrus vinaigrette</div>
                    <div className="price">17</div>
                  </div>
                </div>
              </div>
              <div className="section dontsplit" data-slug="entrees">
                <div className="title-wrapper">
                  <h2 className="title">Entrees</h2>
                </div>
                <div className="items">
                  <div className="item">
                    <div className="name text-uppercase">Roasted Free Range Chicken*</div>
                    <div className="descr">Dauphinoise potato, tri color carrots, rosemary jus</div>
                    <div className="price">27</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Duck Confit*</div>
                    <div className="descr">Duck leg, fingerling potato, haricot verts, caramelized onions, brandied cherry reduction</div>
                    <div className="price">24</div>
                  </div>
                  <div className="item">
                    <div className="name text-uppercase">Capellini Pomodoro Pasta</div>
                    <div className="descr">Goat cheese and pine nuts</div>
                    <div className="price">18</div>
                </div>
                <div className="item">
                  <div className="name text-uppercase">Grilled Scottish Salmon* Fish</div>
                  <div className="descr">French lentils, thyme jus</div>
                  <div className="price">27</div>
                </div>
                <div className="item">
                  <div className="name text-uppercase">Branzino*</div>
                  <div className="descr">Cauliflower puree, sauteed broccoli, lobster reduction</div>
                  <div className="price">28</div>
                </div>
                <div className="item">
                  <div className="name text-uppercase">Beef Bourguignon*</div>
                  <div className="descr">Red wine, slow braised beef, pearl onions, cherry tomato, mushrooms, served atop mashed potato</div>
                  <div className="price">28</div>
                </div>
                <div className="item">
                  <div className="name text-uppercase">Steak Frites*</div>
                  <div className="descr">Grass fed 12oz new york strip steak, served with hand-cut fries</div>
                  <div className="price">36</div>
                </div>
                <div className="item">
                  <div className="name text-uppercase">Steak au Poivre*</div>
                  <div className="descr">Grass fed 12oz new york strip steak, peppercorn brandy sauce, served with dauphinoise potato</div>
                  <div className="price">38</div>
                </div>
                <div className="item">
                  <div className="name text-uppercase">FR Burger*</div>
                  <div className="descr">Pat la frieda, short rib and brisket blend, 8oz burger with bibb lettuce, tomato, red onion, house sauce served with hand-cut fries or salad</div>
                  <div className="price">19</div>
              </div>
            </div>
          </div>
          <div className="section dontsplit" data-slug="plats-daccompagnement">
            <div className="title-wrapper">
              <h2 className="title">Plats d'Accompagnement</h2>
              <div className="descr">$7 each or 3 for $18</div>
            </div>
            <div className="items">
              <div className="item">
                <div className="name text-uppercase">Sauteed Spinach</div>
              </div>
              <div className="item">
                <div className="name text-uppercase">Hand-Cut Fries</div>
              </div>
              <div className="item">
                <div className="name text-uppercase">Sauteed Broccoli</div>
              </div>
              <div className="item">
                <div className="name text-uppercase">Haricot Verts</div>
              </div>
              <div className="item">
                <div className="name text-uppercase">Filed Greens</div>
              </div>
              <div className="item">
                <div className="name text-uppercase">Tri-Color Carrots</div>
              </div>
              <div className="item">
                <div className="name text-uppercase">Sweet Potato Fries</div>
              </div>
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

export default Homepage;
