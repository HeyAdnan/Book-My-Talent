const mongoose = require('mongoose');

const url = 'mongodb+srv://HeyAdnan:HeyAdnan@cluster0.wzh0pa1.mongodb.net/Talentshow?retryWrites=true&w=majority';

// asynchronous - return Promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;