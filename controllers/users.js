// const uuid= require('uuid') 

import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const { email, username } = req.body;

    // Check if a user with the same email or username already exists
    const existingUser = users.find(user => user.email === email || user.username === username);

    if (existingUser) {
        return res.status(400).send("User with this email or username already exists.");
    }

    // If not exists, create a new user
    const newUser = { ...req.body, id: uuid() };
    users.push(newUser);

    res.send("User added successfully");
};

export const getUser = (req, res) => {
    const id = req.params.id;
    const singleUser = users.filter((user) => user.id === id);
    // Check if user not exists
    if (!singleUser) {
        return res.status(404).send("User not found");
    }
    res.send(singleUser);
}

export const updateUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === id);

    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;

    res.send("User Updated Sucessfully!");
}
export const deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.send("User deleted Sucessfully");
}
