import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const __dirname = path.resolve(path.dirname(''));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/frontend/weirdlinks.html'));
});

app.listen(PORT, () => {
	console.log(`app listening on port ${PORT}`);
});
