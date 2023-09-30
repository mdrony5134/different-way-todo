import { useContext } from "react";
import { TodoContext } from "./Context/TodoContextProvider";


const Todo = () => {
    
    const {todo, dispatch} = useContext(TodoContext)
    const {title, description} = todo;

    const handleAddItem = () =>{
        if(title && description){
            dispatch({
                type: 'add_Todo',
                payload:{
                    title,
                    description,
                },
            });
        }
    }

    return (
        <div>
            <input 
            type="text" 
            placeholder="Title..."
            value={title}
            onChange={(e)=>dispatch({type: "set_Title", payload: e.target.value})}
            />

            <input 
            type="text" 
            value={description}
            placeholder="Description..."
            onChange={(e)=>dispatch({type: "set_Description", payload: e.target.value})}
            />
             <button onClick={handleAddItem}></button>
             <div className="show">
                {todo.map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;