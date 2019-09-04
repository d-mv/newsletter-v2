import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const User = require('../db/models/user');

const dotEnv = dotenv.config();
const secret: any = process.env.SECRET;

const authenticate = async (req: any, res: any, next: any) => {
  try {
    const token = req
      .header('Authorization')
      .replace('Bearer', '')
      .trim();

    const decoded: any = jwt.verify(token, secret);

    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate!' });
  }
};

export default authenticate;
