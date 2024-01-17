import{ useState } from "react";
import TodoItem from "./item";
import TodoList from "./list";
import { TODO } from "./todo";

export default function TodoContainer () {

    const [state, updateState] = useState<TODO[]>(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]')

        return storedTodos || []
    })

    function onDelete(item: TODO, index: number) {
        const arrayWithoutItem = state.splice(index, state.indexOf(item))

        localStorage.setItem('todos', JSON.stringify(arrayWithoutItem))

        updateState(arrayWithoutItem)
    }

    function onAdd(title: string) {
        const newArray = [...state, {title} as TODO]

        localStorage.setItem('todos', JSON.stringify(newArray))

        updateState(newArray)
    }

    const listItems = state.map((item, index) => {
        return (
            <TodoItem item={item} index={index} onDelete={onDelete}></TodoItem>
        )
    })

    return (
        <div>
            <TodoList onAdd={onAdd}>
                {listItems}
            </TodoList>
        </div>
    )
}