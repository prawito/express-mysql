const express = require('express');

const usersRoutes = require('./routes/users.js');

const app = express();

// app.method(path, handler);
// app.use("/", (req, res, next) => {
//     res.send('Hello World');
// });

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json({
        nama: "Prawito",
        email: "prawitohudoro@gmail.com"
    });
});

app.post("/", (req, res) => {
    res.send('Hello POST Method');
});


app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
})