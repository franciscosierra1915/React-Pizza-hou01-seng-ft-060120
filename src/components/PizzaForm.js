import React from "react"

const PizzaForm = (props) => {
  const pizza = props.myPizza

  return(
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name='topping' value={pizza.topping}/>
        </div>
        <div className="col">
          <select value={pizza.size} className="form-control" name='size'>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check" >
            <input className="form-check-input" type="radio" value="Vegetarian" name='veggie' checked={pizza.vegetarian ? true : ''}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name='not veggie'checked={pizza.vegetarian ? '' : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" name="submit">Submit</button>
        </div>
      </div>
      </form>

  )
}

export default PizzaForm

