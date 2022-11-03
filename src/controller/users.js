const getAllUsers = (req, res) => {
    const data = {
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

module.exports = {
    getAllUsers,
    createNewUser,
}