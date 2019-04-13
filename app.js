var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', (req, res) => {
  let user = { email: 'example@example.com', first_name: 'Jhon', last_name: 'Trump', cellphone: '3177654321' }
  res.send(user)
});

app.use('/groups', (req, res) => {
  let groups = [
    {
      id: 1,
      name: 'Paseo Cartagena',
      creation_date: '2018-12-14T11:49:00-05:00',
      last_modification_date: '2018-12-14T11:49:00-05:00'
    },
    {
      id: 2,
      name: 'Campamento Neusa',
      creation_date: '2018-12-14T11:49:00-05:00',
      last_modification_date: '2018-12-14T11:49:00-05:00'
    }
  ]
  res.send(groups)
});

app.use('/group/:id', (req, res) => {
  let groupDetail = {
    id: req.params.id,
    name: 'Paseo Cartagena',
    creation_date: '2018-12-14T11:49:00-05:00',
    description: 'lorem',
    participants: [
      {
        first_name: 'Jhon',
        last_name: 'Doe',
        cellphone: 3177654321
      },
      {
        first_name: 'Peter',
        last_name: 'Doe',
        cellphone: 3179456123
      }
    ],
    expenses: [
      {
        id: 1,
        name: 'Alquiler',
        owner: {
          email: 'example@example.com',
          first_name: 'Jhon',
          last_name: 'Trump',
          cellphone: 3177654321
        },
        price: 50000,
        creation_date: '2018-12-14T11:49:00-05:00',
        last_modification_date: '2018-12-14T11:49:00-05:00'
      },
      {
        id: 2,
        name: 'Comida',
        owner: {
          email: 'example2@example2.com',
          first_name: 'Peter',
          last_name: 'Trump',
          cellphone: 3177654321
        },
        price: 40000,
        creation_date: '2018-12-14T11:49:00-05:00',
        last_modification_date: '2018-12-14T11:49:00-05:00'
      }
    ]
  }
  res.send(groupDetail)
});

app.use('/expense/:id', (req, res) => {
  let expenseDetail = {
    id: req.params.id,
    name: 'Taxi',
    price: 12000,
    creation_date: '2018-12-14T11:49:00-05:00',
    last_modification_date: '2018-12-14T11:49:00-05:00',
    owner: {
      email: 'example@example.com',
      first_name: 'Jhon',
      last_name: 'Trump',
      cellphone: 3177654321
    },
    participants: [
      {
        first_name: 'Jhon',
        last_name: 'Doe',
        cellphone: 3177654321,
        due: 6000
      },
      {
        first_name: 'Peter',
        last_name: 'Doe',
        cellphone: 3179456123,
        due: 6000
      }
    ],
    group: {
      id: 1,
      name: 'Paseo Cartagena',
      creation_date: '2018-12-14T11:49:00-05:00'
    }
  }
  res.send(expenseDetail)
});

app.use(express.static(path.join(__dirname, 'client/build')));

module.exports = app;
