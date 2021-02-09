import React from 'react'

interface TodoListItemProps {
    todo: {
        text: string;
        complete: boolean;
    }
}

export const TodoListItem = props => {
    return (
        <li>
          Content  
        </li>
    )
}
