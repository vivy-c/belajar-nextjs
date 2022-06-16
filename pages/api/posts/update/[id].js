import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization';

export default async function handler(req, res) {
    //console.log(req.query);

    if(req.method !== 'PUT') return res.status(405).end();

    const auth = await authorization(req,res);

    const { id } = req.query;
    const {title, content} = JSON.parse(req.body);

    const update = await db('posts')
                            .where({id})
                            .update({
                                title,
                                content
                            });
    const updateData = await db('posts').where({id}).first();
    res.status(200);
    res.json({
        message : 'Posts update successfully',
        data : updateData
    })
}