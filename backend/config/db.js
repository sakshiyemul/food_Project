const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb+srv://sakshiyemul1524:sakshi2004@cluster0.pt6cl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => { console.log("database has been connected😎") })
        .catch((err) => { console.log(err) })
}
module.exports = connect