const getAllUsers = (req, res) => {
    const data = {
        id: '1',
        name: "Prawito",
        email: "prawito@gmail.com",
        address: "Tangerang"
    }

    res.json({
        message: 'GET all users success',
        data: data
    })
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new user success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message: 'UPDATE user success',
        data: req.body,
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
}