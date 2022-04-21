const {Router} = require('express');
const router = Router();
const songsController = require('./controllers/controller.js');
const usersController = require('./controllers/users.controllers')

router.get('/songs', songsController.getSongs);
router.post('/songs', songsController.postSongs);


router.get('/users', usersController.getUsers);
router.post('/users', usersController.postUsers);
router.patch('/users/:id', usersController.patchUsers);
module.exports = router;