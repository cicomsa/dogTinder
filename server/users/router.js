// const Router = require('express').Router
// const Users = require('./model')
//
// const router = new Router()
//
// app.get('/users', (req, res) => {
//   	Users.findAll({
//   	  attributes: ['id', 'name', 'preferences']
//   	})
//   	  .then(result => {
//   	    res.send({
//   	    	users: result
//   	    })
//   	  })
//   	  .catch(err => {
//   	    res.status(500).send({error: 'Something went wrong with Postgres'})
//   	  })
// })
//
// app.get('/users/:id', (req, res) => {
//     const usersId = req.params.id
//     Users.findById(usersId)
//     	  .then(result => {
//     	  	if (!result) {
//     	  		res.status(404).send({error: 'Does not exist'})
//     	  	}
//     	  	else {
//     	  		res.send(result)
//     	  	}
//     	  })
//     	  .catch(err => {
//     	    res.status(500).send({error: 'Something went wrong with Postgres'})
//     	  })
// })
//
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
//
// app.put('/users/:id', (req, res) => {
//     const usersId = Number(req.params.id)
//     const updates = req.body
//
//       // find the user in the DB
//     Users.findById(req.params.id)
//         .then(entity => {
//           // change the user and store in DB
//           return entity.update(updates)
//         })
//         .then(final => {
//           // respond with the changed product and status code 200 OK
//           res.send(final)
//         })
//         .catch(error => {
//           res.status(500).send({
//             message: `Something went wrong`,
//             error
//           })
//         })
// })
//
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
//
// module.exports = router
