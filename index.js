const express = require('express');

const Blockchainapp = express();

Blockchainapp.get('/',(req,res) => res.send('Welcome to my Blockchain Application in JavaScript language'));

Blockchainapp.listen('5000',() => console.log('sever started at port 5000'));