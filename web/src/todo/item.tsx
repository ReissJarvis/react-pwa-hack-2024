import ListItem from "@mui/material/ListItem"
import { TODO } from "./todo"
import IconButton from "@mui/material/IconButton"
import ListItemText from "@mui/material/ListItemText"
import DeleteIcon from '@mui/icons-material/Delete';
import { PropsWithoutRef } from "react"

type TodoItemProps = {
    item: TODO
    index: number 
    onDelete: (item:TODO, index: number) => void
}

export default function TodoItem({item, index, onDelete}: PropsWithoutRef<TodoItemProps>) {
    return (
        <ListItem
        key={item.title+index}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
        onClick={() => onDelete(item, index)}
      >
        <ListItemText
          primary={item.title}
        />
      </ListItem>
)
         
}