import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization';

export default async function handler(req, res) {
 
    //console.log(req.method);
    if(req.method !== 'POST') return res.status(405).end();
     
    const auth = await authorization(req,res);
    //console.log(req.body);
    //const body = JSON.parse(req.body);
    const {title, content} = JSON.parse(req.body);

    // req.b ody.title();
    // req.body.content();
    const create = await db('posts').insert({
        title ,
        content 
    });

    const createdData = await db('posts').where('id',create).first();
 
    res.status(200);
    res.json({
        message : 'Post created succesfully',
        data : createdData
    });
}