import { useReducer } from "react";
import { createContext } from "react";


export const TodoContext = createContext()
const todoReducer = (todo, action) =>{
    switch(action.type){
        case "set_Title": return {...todo, title: action.payload};
        case "set_Description": return{...todo, description: action.payload};
        case "add_Todo": return [...todo, action.payload]
        default: return todo
    }
}
const TodoContextProvider = ({children}) => {

    const initialTodo = {
        title:"", 
        description: "",
    }

    const [todo, dispatch] = useReducer(todoReducer, initialTodo)
    return (
        <div>
            <TodoContext.Provider value={{todo, dispatch}}>{children}</TodoContext.Provider>
        </div>
    );
};

export default TodoContextProvider;