const express = require('express');

import { sendEmail } from '../../mail';
import authenticate from '../../middleware/auth';
const User = require('../../db/models/user');

const router = new express.Router();

router.post('/', async (req: any, res: any) => {
  const user: any = new User(req.body);
  try {
    const token = await user.newAuthToken();
    // TODO: refactor below
    // send confirmation mail
    const url = `https://the-new-place/user/verify?id=${token}`;
    const send = await sendEmail(user.email, url);
    //.assign message
    const message = 'Verification email has been sent';

    res.status(201).send(message);
  } catch (e) {
    res.status(400).send(e.errmsg ? e.errmsg : e);
  }
});

router.post('/login', async (req: any, res: any) => {
  try {
    const user = await User.checkValidCredentials(req.body.email, req.body.password);
    if (user.activated) {
      const token = await user.newAuthToken();
      // get expiry date
      const today = new Date();
      const expires = new Date(today.setDate(today.getDate() + 30));
      res
        .cookie('token', token, {
          domain: 'localhost',
          httpOnly: true,
          // secure:true,
          expires
        })
        .send({ user, token });
    } else {
      //.assign message
      const message = 'Your account has not been verified';
      // TODO: what to do next?
      // send mail with link
      res.send({ message });
    }
  } catch (error) {
    res.status(400).send({ message: error.toString() });
  }
});

router.get('/check', authenticate, async (req: any, res: any) => {
  try {
    const { _id } = req.user;
    res.send({
      user: { _id }
    });
  } catch (error) {
    res.status(400).send({ message: error.toString() });
  }
});

router.post('/logout', authenticate, async (req: any, res: any) => {
  try {
    req.user.tokens = req.user.tokens.filter((token: any) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

router.post('/logoutall', authenticate, async (req: any, res: any) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
