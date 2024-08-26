// const express = require('express');
import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router();

// const userController=require('../controllers/users')

router.get('/', getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

// module.exports = router;
export default router;