import jwt from 'jsonwebtoken';

export default function autorization (req, res){
    return new Promise((resolve, reject) => { 
    
    const { authorization } = req.headers;

    if(!authorization) return res.status(401).end();
   // console.log(req.headers);

   const authSplit = authorization.split(' ');
   //console.log(authSplit);

   const [authType, authToken] = [
       authSplit[0],
       authSplit[1]
   ]

   if(authType !== 'Bearer') return res.Status(401).end();
   
   return jwt.verify(authToken, 'ibukuCantik', function(err, decoded){
    if(err) return res.status(401).end();

    return resolve(decoded)
   });
 
});
}