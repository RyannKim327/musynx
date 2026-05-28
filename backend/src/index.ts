import cors from "cors"
import express from "express"

const app = express()
const PORT = 3000

app.use(cors())

app.get("/", (req, res) => {
	res.json({
		"message": "ok"
	})
})

app.get("/test", (req, res) => {
	res.json([
		{
			title: "Hello",
			id: "hihihi",
			artist: "Adele"
		},
		{
			title: "Hello World",
			id: "hihihia2fwe",
			artist: "ta"
		},
		{
			title: "Hello Love",
			id: "hihihisdfgsd",
			artist: "Gin"
		},
	])
})

app.listen(PORT, () => {
	console.log("Listening")
})
