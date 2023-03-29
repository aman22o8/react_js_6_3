// Write your code here
import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {userTodosList: initialTodosList}

  deleteTodo = id => {
    const {userTodosList} = this.state
    // console.log(id)
    const filtertodoList = userTodosList.filter(each => each.id !== id)
    console.log(filtertodoList)
    this.setState({userTodosList: filtertodoList})
  }

  render() {
    const {userTodosList} = this.state
    console.log(userTodosList)

    return (
      <div className="main_container">
        <div className="card_container">
          <h1 className="main_heading">Simple Todos</h1>
          <ul className="todo_container">
            {userTodosList.map(eachUser => (
              <TodoItem
                itemsinlist={eachUser}
                key={eachUser.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
