import React from 'react';
import './App.css';
import {
  Link,
  withRouter
} from "react-router-dom";

class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rankings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      selectedRankings: [],
      fishRank: "",
      soupRank: "",
      meatRank: "",
      chickenRank: "",
      cheeseRank: "",
      snailRank: "",
      duckRank: "",
      pastaRank: "",
      veggieRank: "",
      friesRank: ""
    };
  }

  optionHandler = (target) => {
    target.preventDefault()
    var optionType = target.target.id + "Rank"
    var selectedRank = target.target.value
    this.setState({
      selectedRankings: [...this.state.selectedRankings, {[target.target.value]:target.target.id}],
      rankings: this.state.rankings.filter(rank => rank !== parseInt(target.target.value)),
      [optionType]: parseInt(target.target.value)
    }, () => {
      if (this.state.rankings.length === 0){
        this.setState({
          rankings: ["Out of Rankings"]
        })
      }
    })
  }

  render() {
    return (
      <div className="customize-list">
      Rank the following items in terms of how much you like them:
      <form>
        <div>
          <label>
            Fish
            <select placeholder="Select Value" value={this.state.fishRank} id="fish" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.fishRank !== "" ?
                  <option value={this.state.fishRank}>{this.state.fishRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Soup
            <select value={this.state.soupRank} id="soup" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.soupRank !== "" ?
                  <option value={this.state.soupRank}>{this.state.soupRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Meat
            <select value={this.state.meatRank} id="meat" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.meatRank !== "" ?
                  <option value={this.state.meatRank}>{this.state.meatRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Chicken
            <select value={this.state.chickenRank} id="chicken" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.chickenRank !== "" ?
                  <option value={this.state.chickenRank}>{this.state.chickenRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Cheese
            <select value={this.state.cheeseRank} id="cheese" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.cheeseRank !== "" ?
                  <option value={this.state.cheeseRank}>{this.state.cheeseRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Snail
            <select value={this.state.snailRank} id="snail" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.snailRank !== "" ?
                  <option value={this.state.snailRank}>{this.state.snailRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Duck
            <select value={this.state.duckRank} id="duck" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.duckRank !== "" ?
                  <option value={this.state.duckRank}>{this.state.duckRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Pasta
            <select value={this.state.pastaRank} id="pasta" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.pastaRank !== "" ?
                  <option value={this.state.pastaRank}>{this.state.pastaRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Vegetables
            <select value={this.state.veggieRank} id="veggie" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.veggieRank !== "" ?
                  <option value={this.state.veggieRank}>{this.state.veggieRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            Fries
            <select value={this.state.friesRank} id="fries" onChange={this.optionHandler}>
            <option value="" disabled selected>Select an option...</option>
              {this.state.rankings.map((number, index) =>
                this.state.friesRank !== "" ?
                  <option value={this.state.friesRank}>{this.state.friesRank}</option>
                :
                  <React.Fragment key={number + Math.random()}>
                    <option value={number}>{number}</option>
                  </React.Fragment>

              )}
            </select>
          </label>
        </div>
      </form>
      <div>
        <Link to={{pathname: `/customizedHome`, state:{data: this.state.selectedRankings}}}>Submit</Link>
      </div>
      </div>
    );
  }
}

export default Customize;
