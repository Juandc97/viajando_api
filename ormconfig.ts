import { ConnectionOptions } from 'typeorm';

export const config: ConnectionOptions = {
   "name": "default",
   "type": "postgres",
   "host": "ec2-52-73-247-67.compute-1.amazonaws.com",
   "port": 5432,
   "username": "zicgedciewboti",
   "password": "a05fb891d75caf969f630ebbd60514e181e21e75959a1379ac31c1f3bc3ecaf5",
   "database": "d79qr6pooekr94",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ]
}
