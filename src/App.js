import React, { Component } from 'react';
import {TodoList} from './todoList';
import {TodoForm} from './todoForm';
import {Header} from './inc/header';
import {Footer} from './inc/footer';


const myTasks = [
  'Learn React',
  'Redux React Integration',
  'AJAX Web ',
  'Mongo DB'
]
class App extends Component {
  addTask(val){
    console.log(myTasks)
    myTasks.push(val);
    console.log(myTasks)
  }
 
  render() {
   
    return (
      <div className="container">
      <Header/>
      <TodoForm addTasks={this.addTask}/>
      <TodoList myTasks={myTasks} />
      <Footer/>
     
      
      </div>
    );
  }
}

export default App;
