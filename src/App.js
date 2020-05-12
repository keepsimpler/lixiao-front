import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from "./dataProvider";
import { StudentList } from './students';  // {}括起来表示export时不是default

const dataProvider = drfProvider('http://localhost:8000')
const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="students" list={StudentList} />
  </Admin>
);

export default App;
