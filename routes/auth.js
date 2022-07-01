const express = require('express')
const passport = require('passport')
const router = express.Router()

//Get the user password from the session
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))


//GET /auth/google/callback to autentificate fron dashboard
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => { res.redirect('/dashboard') }
)

//Send the user to logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router