import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import ProfileParent from './components/ProfileCard/ProfileParent'
import FamilyTree from './components/FamilyTree/Grandparent'
import AddTodo from "./components/AddTodo/AddTodo";
import TodoItem from "./components/TodoItem/TodoItem";
import Billspliter from './components/Billspliter/Billspliter'
import './App.css'

function App() {

// const  ProfileName = "Nuvola"
// const  ProfileTitle = "Canine master"
const todos = [

  {
    id: 1,
    text: "Köp kaffe",
    done: false
  },
  {
    id: 2,
    text: "brygg kaffe",
    done: false
  }
]

function updateTodos(newTodo) {
  console.log("newTodo: ", newTodo);
  // TODO Skapa ett object med id, text och done
  const todo = {
    id: todos.length + 1,
    text: newTodo,
    done: false
  }
  console.log("todo item", todo)
  // TODO Pusha in objectet in i todos
  todos.push(todo)
  console.log("todos:", todos)
}
const todoComponents = todos.map((todo) => {
  return <TodoItem text={todo.text} done={todo.done} key={todo.id} />;
});



return (
    <>
     <Header />
      {/* <Profilecard ProfileName={ProfileName} ProfileTitle={ProfileTitle}/> */}
     <ProfileParent />
     {/* When App.tsx is rendered, it includes ProfileParent. */}
     <FamilyTree />

     <ul>{todoComponents}</ul>
     <AddTodo updateTodos={updateTodos} />     
     <Billspliter   /> 
     <Footer />
    </>
  )
}

export default App
