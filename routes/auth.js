const express = require('express');
const passport = require('passport');
const router = express.Router();



//@desc Authenticate with GOOGLE
//route  GET/ AUTH/GOOGLE

router.get('/google',  passport.authenticate('google', { scope:['profile']}))

//@desc Google auth callback

//route  GET/ auth/GOOGLE/callback

router.get('/google/callback', passport.authenticate('google',{failureRedirect: '/'}),
    (req, res)=>{
     res.redirect('/dashboard')   
    })

//@desc logout user
//@route  /auth/logout

router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');

})

module.exports=router;
