const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();

app.use(cors());

const cards = [
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptas nesciunt dicta ab labore cupiditate non recusandae! Enim at minima, similique qui ut, et voluptatum a, id voluptatibus ex quod. Voluptas sint fugit nesciunt cum!"
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptas nesciunt dicta ab labore cupiditate non recusandae! Enim at minima, similique qui ut, et voluptatum a, id voluptatibus ex quod. Voluptas sint fugit nesciunt cum!"
    }, 
    {
        title: "Lorem ipsum dolor sit amet consectetur.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptas nesciunt dicta ab labore cupiditate non recusandae! Enim at minima, similique qui ut, et voluptatum a, id voluptatibus ex quod. Voluptas sint fugit nesciunt cum!"
    },
]

app.get('/cards', (req, res) => {
    res.json(cards);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
})