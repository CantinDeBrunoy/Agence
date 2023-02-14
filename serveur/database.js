import mysql from 'mysql2'

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'Agence'
}).promise();


export async function getPersonnes(){ 
    const result = await pool.query("SELECT * FROM Personne");
    return result[0];
}
