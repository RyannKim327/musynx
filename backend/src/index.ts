import cors from "cors"
import express from "express"

const app = express()
const PORT = 3000

app.use(cors)

app.get("/", (req, res) => {
	res.json({
		"message": "ok"
	})
})

app.listen(PORT, () => {
	console.log("Listening")
})
