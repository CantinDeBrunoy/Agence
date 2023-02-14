import express from "express";
import cors from "cors";
import { getPersonnes } from "./database.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

//GetPersonne
app.get('/Personne',async(req,res)=> {
    const personnes = await getPersonnes();
    res.send(personnes);
})

app.listen(port,()=> console.log(`App is running on ${port}`));
