import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'

const ClientList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source ="id" />
        <TextField source="name" />
        <EditButton basePath="/clients" />
        <DeleteButton basePath="/clients" />
      </Datagrid>
    </List>
  )
}

export default ClientList;
