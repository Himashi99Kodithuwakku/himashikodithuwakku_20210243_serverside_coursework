const express = require('express');
const sqlite3 = require ('sqlite3').verbose();
const cors = require('cors');


const app = express();
// const PORT = 5000;

app.use(cors());

// connect db

const db = new sqlite3.Database('./database/tb.db',  (err) => {
    if (err) {
        console.error('Could not connect to database', err);

    }else {
        console.log('Connected to AQLite database');

    // create table for users
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id  INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Erro creating tabke:',err.message);          
        } else {
            console.log('User table created');
        }
    });
}
});