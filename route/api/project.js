const express = require('express');
const router = express.Router();
const auth = require('../../middleweare/auth')
const {check, validationResult} = require("express-validator");
const Profile = require('../../models/Profile')
const User = require('../../models/User')
const Project = require('../../models/Project')


// @route GET api/projects
// @desc  Getcurrent users profile
// @access private

router.get('/', auth, async (req, res)=>{

    try {

    const projects = await Project.findOne({user: req.user.id}).populate(
        'user', ['name', 'avatar']
  )
  if(!projects){
    return res.status(500).json({msg: "there is no project for this user"})
    }
    res.json(projects)

    } catch (err) {
        console.error(err.message)
    }
})

// @route POST api/projects
// @desc  Getcurrent users profile
// @access private

router.post('/',[auth,[
    check('title', 'tittle is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
    check('enddate', 'end date is required').not().isEmpty()
]], (req, res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
    return res.status(400).json({errors: errors.array()})

    const{
        
    }
    }

})

module.exports = router; 