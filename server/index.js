const express = require('express')
const app = express()
// const usersRouter = require('./users/router')
const Sequelize = require('sequelize')
// const sequelize = require('../db')
const bodyParser = require('body-parser')
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.use(bodyParser.json())

const Users = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true

  },
  preferences: {
    type: Sequelize.INTEGER, //type: Sequelize.ARRAY(Sequelize.STRING)
    allowNull: true

  }},
  {tableName: 'users',
  timestamps: false}
)

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

app.get('/users', (req, res) => {
  	Users.findAll({
  	  attributes: ['id', 'name', 'preferences']
  	})
  	  .then(result => {
  	    res.send({
  	    	users: result
  	    })
  	  })
  	  .catch(err => {
  	    res.status(500).send({error: 'Something went wrong with Postgres'})
  	  })
})

app.get('/users/:id', (req, res) => {
    const usersId = req.params.id
    Users.findById(usersId)
    	  .then(result => {
    	  	if (!result) {
    	  		res.status(404).send({error: 'Does not exist'})
    	  	}
    	  	else {
    	  		res.send(result)
    	  	}
    	  })
    	  .catch(err => {
    	    res.status(500).send({error: 'Something went wrong with Postgres'})
    	  })
})


// app.post('/users', (req, res) => {
//     const users = req.body
//       console.log(users)
//
//     Users.create(users).then(entity => {
//
//       // send back the 201 Created status and the entity
//       res.status(201).send(entity)
//     })
// })

app.put('/users/:id', (req, res) => {
    const userId = Number(req.params.id)
    // const updates = req.body

      // find the user in the DB
    Users.findById(userId)
        .then(() => {
        // .then(model => {
          // change the user and store in DB
          // return model.update(updates)
          return Users.update({preferences: Sequelize.literal('preferences + 1')}, { where: {id: userId}})
        })
        .then(final => {
          // respond with the changed product and status code 200 OK
          res.send(final)
        })
        .catch(error => {
          res.status(500).send({
            message: `Something went wrong`,
            error
          })
        })
})

// app.delete('/users/:id', (req, res) => {
//     const usersId = Number(req.params.id)
//
//     Users.findById(req.params.id)
//     	  .then(entity => {
//     	    // change the users and store in DB
//     	    return entity.destroy()
//     	  })
//     	  .then(_ => {
//     	    // respond with the changed product and status code 200 OK
//     	    res.send({
//     	      message: 'The product was deleted succesfully'
//     	    })
//     	  })
//     	  .catch(error => {
//     	    res.status(500).send({
//     	      message: `Something went wrong`,
//     	      error
//     	    })
//     	  })
// })

// module.exports = users
