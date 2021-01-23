const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');
morgan.token('body', (req, res) => JSON.stringify(req.body));

const Person = require('./models/person');

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());
app.use(express.static('build'));

// let persons = [
//   {
//     "name": "Arto Hellas",
//     "number": "040-123456",
//     "id": 1
//   },
//   {
//     "name": "Ada Lovelace",
//     "number": "39-44-5323521",
//     "id": 2
//   },
//   {
//     "name": "Dan Abramov",
//     "number": "12-43-234345",
//     "id": 3
//   },
//   {
//     "name": "Mary Poppendick",
//     "number": "39-23-6423122",
//     "id": 4
//   },
//   {
//     "name": "Maryf Poppendick",
//     "number": "39-23-6423122",
//     "id": 5
//   }
// ];

app.get('/api/persons', (req, res) => {
  Person.find({}).then(people => res.json(people));
});

app.post('/api/persons', (req, res) => {
  const { body } = req;
  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'some content is missing' });
  }

  if (persons.filter(person => person.name === body.name).length > 0) {
    return res.status(400).json({ error: 'name must be unique' });
  }

  const getRandomNumber = (min, max) =>
    Math.round(Math.random() * (max - min)) + min;
  const person = {
    name: body.name,
    number: body.number,
    id: getRandomNumber(100, 100000),
  };

  persons = persons.concat(person);
  res.json(person);
});

app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params;
  const person = persons.find(person => person.id === Number(id));

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params;
  persons = persons.filter(person => person.id !== Number(id));
  res.status(204).end();
});

app.get('/info', (req, res) => {
  const str = `<p>Phonebook has ${persons.length} entries.</p>${new Date()}`;
  res.send(str);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
