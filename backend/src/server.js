import express from 'express'
import dotenv from 'dotenv'


dotenv.config()

const app = express()
app.use(express.json())

app.use()

app.listen(3000, () => {
    console.log("API running")
})