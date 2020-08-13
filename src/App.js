import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzasurl = 'http://localhost:3000/pizzas'

class App extends Component {

  constructor() {
    super();
    this.state = {
      pizzas: [],
      editablePizza: ''
    }
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  fetchPizzas() {
    fetch(pizzasurl)
    .then(r => r.json())
    .then(pizzas => this.setState({pizzas}))
  }
  editPizza = (myPizza) => {
    this.setState({editablePizza: myPizza})
  }
  handleSubmit = (e) => {
    e.preventDefault
    let form = e.currentTagret
    let veggieOrNot 
    if (e.target.veggie === true) {
      veggieOrNot = true
    } else {
      veggieOrNot = false
    }
    let editablePizza = this.state.editablePizza
    let pizzaWithEdits = {
      topping: e.target.topping.value,
      size: e.target.size.value,
      vegetarian: veggieOrNot
    }
    let objecConfig = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(pizzaWithEdits)
    }
    fetch(`${pizzasurl}/${editablePizza}`, objecConfig).then(r => this.fetchPizzas())
    form.reset()
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        myPizza={this.state.editablePizza}
        handleSubmit={this.handleSubmit}/>
        <PizzaList 
        pizzas={this.state.pizzas}
        editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
