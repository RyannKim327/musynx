import { WebSocketServer, WebSocket } from "ws"

export default function WebSocketConfig() {
	const wss = new WebSocketServer({ port: 8080 })
	const channels = new Map<string, Set<any>>

	wss.on("connection", (ws: any, req) => {
		const url = new URL(req.url || "", `https://${req.headers.host}`)


		ws.on("message", (data) => {
			// TODO: To control the sync of two data for multi device
			console.log(data)
		})

		ws.on("close", () => {
			ws.dismiss()
		})
	})
}
