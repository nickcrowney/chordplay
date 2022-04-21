const usersModel= require('../models/users.models.js');

async function getUsers (req, res) {
  try {
    res.send(await usersModel.find());
  } catch(e){
    console.log(e);
  }
}

async function postUsers (req, res) {
  try {
    const post = await usersModel.create(req.body)
    console.log(post)
    res.send(post)
    res.status(201)

  } catch (e) {
    console.log(e)
    res.status(400)
  }
}

async function patchUsers (req,res) {
    try{
      const post = await usersModel.findOne({ _id: req.params.id })

		if (req.body.chordsKnow) {
			post.chordsKnow = req.body.chordsKnow
		}

		if (req.body.chordsNext) {
			post.chordsNext = req.body.chordsNext
		}
    if (req.body.songsMastered) {
			post.songsMastered = req.body.songsMastered
		}

		await post.save()
		res.send(post)

    } catch (e) {
        console.log(e)
        res.status(404)
    }

}



module.exports = {getUsers, postUsers, patchUsers};