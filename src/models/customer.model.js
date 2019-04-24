let mongoose = require('mongoose')

const server = 'disfeed-qs7q8.mongodb.net'
const database = 'event-react-dev'
const user = 'jamlong'
const password = 'cheelong'

mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`, { useNewUrlParser: true })

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)