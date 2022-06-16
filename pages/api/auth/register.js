import db from '../../../libs/db';
// import bcrypt from 'bcryptjs/dist/bcrypt';
// import bcryptjs from 'bcryptjs';
import bcrypt from 'bcryptjs';

export default async function handler (req,res){

    if(req.method !== 'POST') return res.status(405).end();

    const {email,password} = JSON.parse(JSON.stringify(req.body));

    //console.log({email, password});

    const salt = bcrypt.genSaltSync(10);
    //console.log(salt);
    const passwordHash = bcrypt.hashSync(password, salt);
    // console.log(passwordHash);

    const register = await db('users').insert({
        email,
        password : passwordHash
    });

    const registeredUser = await db('users')
                            .where({id:register})
                            .first();

     res.status(200);
     res.json({
         message : 'User registered succesfully',
         data : registeredUser
     });
 }