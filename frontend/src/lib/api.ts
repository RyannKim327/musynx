import axios from "axios"

const api = axios.create({
	baseURL: "http://localhost:3000",
})

type Params = Record<string, any>

export async function get(endpoint: string, params?: Params) {
	const { data } = await api.get(endpoint, {
		params
	})

	if (data.error) {
		return {
			error: data.error
		}
	}
	return { data }
}
