import { JWT_SECRET_KEY } from '$env/static/private';
import type { User } from '$types';
import jwt, { type SignOptions, type VerifyOptions } from 'jsonwebtoken';

const sign = (payload: string | Buffer | object, opt?: SignOptions) => {
  return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h', algorithm: 'HS256', ...opt });
};

const verify = (payload: string, opt?: VerifyOptions) => {
  return jwt.verify(payload, JWT_SECRET_KEY, { algorithms: ['HS256'], ...opt });
};

export const createToken = (user: User) => {
  return sign({
    sub: user.username,
    fullname: user.fullname
  });
};

export const verifyToken = (token: string): User | null => {
  try {
    const decoded = verify(token) as User & { sub: string };
    return {
      username: decoded.sub,
      fullname: decoded.fullname
    };
  } catch {
    return null;
  }
};

export const refreshToken = (token: string): string | null => {
  try {
    const decoded = verify(token) as User & { sub: string };
    return createToken({
      username: decoded.sub,
      fullname: decoded.fullname
    });
  } catch {
    return null;
  }
};
