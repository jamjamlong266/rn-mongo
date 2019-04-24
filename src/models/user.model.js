let mongoose = require('mongoose');

const server = 'disfeed-qs7q8.mongodb.net'
const database = 'event-react-dev'
const user = 'jamlong'
const password = 'cheelong'

mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`, { useNewUrlParser: true })

let UserSchema = new mongoose.Schema({
    name: {
        type
    }
})