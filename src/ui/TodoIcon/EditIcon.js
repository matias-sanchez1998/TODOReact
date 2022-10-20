import React from 'react'
import { TodoIcon } from './';

function EditIcon({onEdit}) {
    return (
        <TodoIcon
        onClick={onEdit}

          type="edit"
        />
      );
}

export {EditIcon}