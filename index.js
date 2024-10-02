const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.get("/", (req, res) => {
    console.log('get request made')
    console.log('hi')
    console.log('line 8')
    res.send("Hello world")
})

app.post("/", (req, res) => {
    console.log(req.body)

})
app.patch("/", (req, res) => {
    console.log("patch req", req.body)
})
app.put("/", (req, res) => {
    console.log("put req", req.body)
})
app.listen(3000, () => console.log("server started on port 3000"))


const mongoConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017");
    console.log('DB connected')

}

mongoConnect()

