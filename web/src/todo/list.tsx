import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { PropsWithChildren, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Typography } from "@mui/material";

type TodoListProps = {
    onAdd: (title: string) => void
}

export default function TodoList({children, onAdd}: PropsWithChildren<TodoListProps>) {
    const [value, setValue] = useState("")
    
    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return (
        <Container>
            <Container sx={{marginBottom:'10px'}}>
                <TextField id="outlined-basic" label="New Item" variant="standard" value={value} onChange={onChange}/> 
                <IconButton color="primary" aria-label="Add" onClick={() => {
                    onAdd(value)
                    setValue("")
                }}>
                    <AddIcon />
                </IconButton>
            </Container>
            
            
            <Divider sx={{marginBottom:'10px'}}/>

            { Array.isArray(children) && children.length > 0  ? children : <Typography variant="body1">No Items Added</Typography>}
        </Container>
    )
}