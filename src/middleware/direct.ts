import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const User = require('../db/models/user');

const dotEnv = dotenv.config();
const secret: any = process.env.SECRET;

const authDirect = async (token: string) => {
  try {
    const decoded: any = jwt.verify(token, secret);
    if (!decoded) {
      throw new Error('malformed');
    }

    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token
    });
    if (!user) {
      throw new Error('expired');
    }
    const update = await User.updateOne({ _id: decoded._id }, { status: true });

    if (!update) {
      throw new Error();
    }

    return { status: true, message: 'confirmed' };
  } catch (error) {
    // console.log(error)
    return { status: false, message: error.message };
  }
};

export default authDirect;
