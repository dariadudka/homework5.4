import React, { useState, useEffect } from 'react';
import { Badge, Card, ListGroup } from 'react-bootstrap';
import {List} from '../models/List.model'
import {User} from '../models/User.model'

type IListProps ={
  children: List| null;
}

const ListUsers = (props: IListProps) => {
console.log(props.children);
return(
<ListGroup as="ol" numbered>
  {props.children?.data.map((item) =>
  <ListGroup.Item>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.id},{item.first_name}, {item.email}</Card.Title>
      </Card.Body>
    </Card> 
  </ListGroup.Item>
  )}
</ListGroup>
)};


export default ListUsers