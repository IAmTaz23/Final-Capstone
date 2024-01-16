app.use(bodyParser.json())


const dbString = process.env.DATABASE_URL
mongoose.connect(dbString)
const database = mongoose.connection


database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('MongoDB Connected!')
})

app.get('/', (req, res) => {
    res.send("Hello!")
})

app.get('/users/:id', tokenManager.authenicateToken, queries.getUser)


app.post('/users', queries.createUser)


app.delete('/users/:id', tokenManager.authenicateToken, queries.deleteUser)


app.put('/users/:id', tokenManager.authenicateToken, queries.updateUser)


app.get('/login', queries.login)

app.listen(3000)
console.log("Express is running!")