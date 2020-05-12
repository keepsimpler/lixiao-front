import React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'react-admin';


export const StudentList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="name" label="姓名"  />
        <TextField source="code" label="学号" />
        <TextField source="school_name" label="院系" />
        <TextField source="department_name" label="专业" />
        <TextField source="team_name" label="班级" />
        <BooleanField source="caiwu_flag" label="是否缴费" valueLabelTrue="已缴费" valueLabelFalse="未缴费" />
        <BooleanField source="tushu_flag" label="是否还书" />
        <BooleanField source="sushe_flag" label="是否退宿" />
        <BooleanField source="grad_flag" label="是否发放毕业证" />
    </Datagrid>
  </List>
);
