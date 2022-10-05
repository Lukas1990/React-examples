import React, {useState, useEffect} from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';


function TodoApp(props) {

  let savedItems = JSON.parse(localStorage.getItem("savedItems"));
  if (savedItems == null) { savedItems = [] }
  
  const [items, setItems] = useState(savedItems)

  const handleItemSubmit = (item) => {
    setItems([...items, item])
  }
  const handleDeleteItem = (id) => {
    setItems(items.filter((item, index) => index !== id));
    savedItems.splice(id, 1)
  }

  useEffect(() => {
    localStorage.setItem('savedItems', JSON.stringify(items));
  }, [items])


  return (

<div className="govuk-grid-row">

  <ListTodo items={items} onDeleteItem={handleDeleteItem} phrase={props.phrase} />
  <AddTodo onItemSubmit={handleItemSubmit} phrase={props.phrase} />

</div>

  );
}

export default TodoApp;
