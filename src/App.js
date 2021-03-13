import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem.js';
import todosData from './todosData.js';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todoItems : todosData
    }
  }
  handelChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let {todoItems} = state;
      todoItems[index].completed = true;
      return todoItems;
    })
  }
render(){
  const {todoItems} = this.state;
  const activeTasks = todoItems.filter(task => task.completed === false);
  const completedTasks = todoItems.filter(task => task.completed === true);
  const finalTasks = [...activeTasks,...completedTasks].map(item =>{
    return(
      <ToDoItem    
      key= {item.id}
      descript = {item.description}
      complit = {item.completed}
      handelChange = {() => {this.handelChange(item.id)}}
      />
    )
  } )


  return (
    <div className="App">
      <h1 className="App__tittle">What you say?</h1>
    {finalTasks}
    </div>
  );
}
}

export default App;
