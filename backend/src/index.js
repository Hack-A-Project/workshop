import express from 'express';
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.post('/api', (req, res) => {
    let data = req.body;
    let num = parseInt(data.token) + 1
    let message = JSON.stringify({token: num});
    res.send(message);
	// res.send(`${num}`);
});
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

