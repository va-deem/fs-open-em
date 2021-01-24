const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');
morgan.token('body', (req) => JSON.stringify(req.body));

const Person = require('./models/person');

// express.json() should be first among middlewares
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors());
app.use(express.static('build'));

app.get('/api/persons', (req, res) => {
  Person.find({}).then(people => res.json(people));
});

app.post('/api/persons', (req, res, next) => {
  const { body } = req;
  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'some content is missing' });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save()
    .then(savedNote => res.json(savedNote))
    .catch(error => next(error));
});

app.get('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;
  Person.findById(id)
    .then(person => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch(err => next(err));
});

app.put('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, number } = req.body;
  const person = { name, number };

  Person.findByIdAndUpdate(id, person, { new: true })
    .then((uodatedPerson) => res.json(uodatedPerson))
    .catch(err => next(err));
});

app.delete('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;

  Person.findByIdAndRemove(id)
    .then(() => res.status(204).end())
    .catch(err => next(err));
});

app.get('/info', (req, res) => {
  const str = `<p>Phonebook has ${persons.length} entries.</p>${new Date()}`;
  res.send(str);
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  next(err);
};

// errorHandlershould be last among middlewares
app.use(errorHandler);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

