const express = require("express")
const mongoConnect = require("mongoose")

const app = express()

app.get("/", (req, res) => {
    console.log('get request made')
    console.log('hi')
    console.log('line 8')
    res.send("Hello world")
})

app.listen(3000, () => console.log("server started on port 3000"))

const mongoConnect = async() => {
    await mongoose.connect("mongodb://<usename>:<password>localhost:27017");
    console.log('DB connected')

}

mongoConnect()
