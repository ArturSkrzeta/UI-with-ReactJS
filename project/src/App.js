import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ItemList from './components/ItemList'
import ClientList from './components/ClientList'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='items' list={ItemList} />
      <Resource name='clients' list={ClientList} />
    </Admin>
  );
}

export default App;
