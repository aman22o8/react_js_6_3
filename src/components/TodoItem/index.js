// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemsinlist, deleteTodo} = props
  const {title, id} = itemsinlist
  const onClickDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="item_container">
      <p className="description">{title}</p>
      <div className="particular">
        <button onClick={onClickDelete} className="button" type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
