export default function handler (req, res) {
    res.status(200);
    //res.end('Ini post');
    res.json({
        message : 'Ini Testing Post'
    });
}