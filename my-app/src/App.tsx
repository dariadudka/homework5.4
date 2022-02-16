import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { arrayBuffer } from 'stream/consumers';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Data } from './models/data.model';
import { Support } from './models/Support.model';
import {User} from './models/User.model'
import UserComponent from './components/user.components'
import ListComponent from './components/List.component'
import {List} from './models/List.model'

const loadUser = async (url: string): Promise<User> => 
{
  const response = await fetch(url);
  const user = await response.json();

  return user as User;
}

const loadList = async (url: string): Promise<List> => 
{
  const response = await fetch(url);
  const list = await response.json();

  return list as List;
}

function App() {
  const [user1, setUser1] = useState<User | null>(null);
  const [list1, setList] = useState<List| null> (null);;

  useEffect(()=>
  {
    const initialize = async ()=> 
    {
      const loadedUser = await loadUser("https://reqres.in/api/users/2");
      const loadedList = await loadList("https://reqres.in/api/users?page=2")
      setUser1(loadedUser);
      setList(loadedList);
    }
    initialize();
    return()=>{}
  },[])

  return (
     <div className="App">
    <ListComponent children={list1}></ListComponent>
    </div>
  );
}

export default App;
