import { useRef, useContext } from "react"
import {TodosContext} from '../store/todos-context'
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)
    /** NOTES:
     * every html element has a type or interface, so we need to specify which html element will connect this ref to, and in this case we need to set a default value to useRef, because this ref may be connected to another element, we set null here because we have no initial value
     */
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText)
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo;