import {User} from '../models/User.model'
import React, { useState, useEffect } from 'react';

type UserProps = { 
    user: User| null, 
    onClick?: (newUser: User) => void };

const UserComponent: React.FC<UserProps> = (props: UserProps) => {

    const result: JSX.Element = props.user !== null 
    ? (<div>User:{props.user.data.first_name}</div>)
    : (<div>No content</div>)
    return (
        <div className="user-info">
            {result}
        </div>
    );
  }

export default UserComponent