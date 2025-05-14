const Blockchain = require('./Blockchain');

const Block = require('./block');

const blockchain = new Blockchain();

for(let i =1 ; i<10; i++)
{
    const newData = 'Block Nunber :'+' '+i;
    blockchain.addBlock({data: newData});
}

console.log(blockchain);