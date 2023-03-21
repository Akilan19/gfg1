const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");

const app = express();
app.use(bodyParser.json()); 
app.use(cors());

const config = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

app.post('/chat' , async(req,res) => {
    
    const {a} = req.body;
	console.log(a);

	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: a,
		max_tokens: 2048,
		temperature: 1,
	});
	console.log(response.data);
    res.send(response.data.choices[0].text);
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
