export interface IForecast {
	[key: string]: {
		dt: number
		main: {
			temp: number[]
			humidity: number[]
		}
		weather: {
			0: {
				icon: string
				id: number
			}
		}
		wind: {
			speed: number[]
		}
		name: string
		sys: {
			sunrise: number
			sunset: number
		}
		timezone: number
		icon: null | JSX.Element
	}
}