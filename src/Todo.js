import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({todo, inprogress, id}) {

    const toggleInProgress = () => {
        db.collection("todos").doc(id).update({
            inprogress: !inprogress
        });
    } 

    const deleteTodo = () => {
        db.collection("todos").doc(id).delete({
        });
    }

    return (
        <div className="main">
            <ListItem>
                <ListItemText 
                className="progress" 
                primary={todo} 
                secondary={inprogress ? "In Progress" : " Completed "}
                
            />
            </ListItem>
            <Button onClick={toggleInProgress}>{inprogress ? "Done" : "unDone"}</Button>
            <Button onClick= {deleteTodo} >X</Button>
        </div>
    )
}
