import { JWT_SECRET_KEY } from '$env/static/private';
import jwt, { type SignOptions, type VerifyOptions } from 'jsonwebtoken';

export const sign = (payload: string | Buffer | object, opt?: SignOptions) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h', algorithm: 'HS256', ...opt });
};

export const verify = (payload: string, opt?: VerifyOptions) => {
  return jwt.verify(payload, JWT_SECRET_KEY, { algorithms: ['HS256'], ...opt });
};
