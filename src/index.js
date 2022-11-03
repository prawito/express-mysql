const express = require('express');
const mysql = require('mysql2');

const usersRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/logs');

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'express_mysql',
});

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes);

app.use('/', (req, res) => {
    dbPool.execute('SELECT * FROM users', (err, rows) => {
        if(err){
            res.json({
                message: 'connection failed'
            })
        }

        res.json({
            message: 'connection success',
            data: rows,
        })
    })
})

app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
})