const  { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const dotenv=require("dotenv");
 const express = require('express');
 dotenv.config();
 const bodyParser = require('body-parser')
const configuration = new Configuration({
    organization: "org-HVrC297azLgB4GqL2joFeqEa",
    apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json())
app.use(cors())

const port=4000;

app.post('/', async(req,res) =>{

    const {message} = req.body;

    const response = await openai.createCompletion({

        model:"text-davinci-003",
        prompt:`${message}`,
        max_tokens:500,
        temperature:0.5,
    }) ;

   
    res.json({message:response.data.choices[0].text})
})

app.listen(port,() => {

    console.log(`The server is running on port ${port}`)
})



//const response = await openai.listEngines();


//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