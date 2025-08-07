import dotenv from 'dotenv';
dotenv.config();

export const Data = {
  baseUrl: process.env.BASE_URL,
  users: {
    standard: {
       username: process.env.STANDARD_USER,
      password: process.env.PASSWORD
    }
  }
};