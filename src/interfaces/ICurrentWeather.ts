export interface ICurrentWeather {
	dt: number
	main: {
		temp: number
		humidity: number
	}
	weather: {
		0: {
			icon: string,
			id: number
		}
	}
	wind: {
		speed: number
	}
	name: string
	sys: {
		sunrise: number
		sunset: number
	}
	timezone: number
	cod?: number
	message?: string
}
