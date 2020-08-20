const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const Lesson = require('../models/Lessons')

const router = Router()


router.post(
  '/lessonCreate',
  async (res, req) => {
    try {
     const {create} = req.body
     const lesson = new Lesson ({
       name: "Введение в авто",
       menter:"Павел уколов",
       zoom: "zoom",
       material : "",
       date: new Date,
       video: ""
     });
     await lesson.save();

    } catch (e) {
      
    }
  }
)


router.get(
  '/lessons',
  async (res, req) => {
    try {

      const lesson = await Lesson.find({name})
      res.json(lesson);
    }catch(e){

    }
  } 
)

router.post(
  '/name',
  async (req, res) => {
  try {

    const {email} = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' })
    }

    res.json({  
      name: user.name, 
      tel: user.telegram,
      git : user.github,
      avatar: user.avatar ,
      email: user.email

    })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router