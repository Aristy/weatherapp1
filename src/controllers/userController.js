import mongoose from 'mongoose';
import {UserSchema} from '../models/useModels';

const User = mongoose.model('user', UserSchema)



 export const addNewUser = (req, res,) => {
  let newUser = new User ();
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.email = req.body.email;
   newUser.save((err, user) => {
    if (err) {
      res.send(err);
          }
          res.redirect('/');
  });
 
}
