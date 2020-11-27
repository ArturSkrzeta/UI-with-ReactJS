import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const ItemList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source ="id" />
        <TextField source="title" />
        <EditButton basePath="/items" />
        <DeleteButton basePath="/items" />
      </Datagrid>
    </List>
  )
}

export default ItemList;
