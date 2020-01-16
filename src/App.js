import React, {Component} from 'react';
import './scss/style.css';
import Todos from './components/Todos'
import Header from './components/Header'

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Drink a coffee',
        completed: true
      },
      {
        id: 2,
        title: 'Make a todo app with react',
        completed: false
      },
      {
        id: 3,
        title: 'learn about javascript Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        completed: true
      },
      {
        id: 4,
        title: 'Go to shopping',
        completed: true
      },
      {
        id: 5,
        title: 'Go to Collage',
        completed: false
      },
    ]
  }
  markComplete = () =>{
    this.setState({todos: this.state.todos.map(todo => {
        // todo.completed = true;
    })})
  }

  render(){
    return(
    <div className="App">
      <Header />
      <div className="items-list container">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    </div>
    )
  }
}
export default App;
