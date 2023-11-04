import { ICurrentWeather } from '../../interfaces/ICurrentWeather'
import { locationRequest } from '../../utils/locationRequest'
import { IForecast } from '../../interfaces/IForecast'

const API_KEY: string = '8a2c11dcf257f052c6bfb35ebdda1766'

export const getLocationWeather = async (
	setWeatherData: (data: ICurrentWeather) => void
) => {
	try {
		const locationData = await locationRequest()
		const latitude: number = parseFloat(locationData.lat.toFixed(2))
		const longitude: number = parseFloat(locationData.lon.toFixed(2))
		const URL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
		const res = await fetch(URL)
		const data = await res.json()
		setWeatherData(data)
	} catch (error) {
		console.error(error)
	}
}

export const getLocationForecast = async (
	setForecastWeather: (data: IForecast) => void
) => {
	try {
		const locationData = await locationRequest()
		const latitude: number = parseFloat(locationData.lat.toFixed(2))
		const longitude: number = parseFloat(locationData.lon.toFixed(2))

		const URL: string = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

		const res = await fetch(URL)
		const data = await res.json()
		const dailyWeather: IForecast = {}

		data.list.forEach((forecast: ICurrentWeather) => {
			const timestamp = forecast.dt * 1000
			const date = new Date(timestamp)
				.toLocaleDateString('ru-RU', { timeZone: 'UTC' })
				.split('.')
				.reverse()
				.join('-')

			if (!dailyWeather[date]) {
				dailyWeather[date] = {
					dt: forecast.dt,
					main: {
						temp: [forecast.main.temp],
						humidity: [forecast.main.humidity],
					},
					weather: {
						0: {
							icon: forecast.weather[0].icon,
							id: forecast.weather[0].id,
						},
					},
					wind: {
						speed: [forecast.wind.speed],
					},
					name: data.city.name,
					sys: {
						sunrise: data.city.sunrise,
						sunset: data.city.sunset,
					},
					timezone: data.city.timezone,
					icon: null,
				}
			} else {
				dailyWeather[date].dt = forecast.dt
				dailyWeather[date].main.temp.push(forecast.main.temp)
				dailyWeather[date].main.humidity.push(forecast.main.humidity)
				dailyWeather[date].wind.speed.push(forecast.wind.speed)
			}
		})

		for (const date in dailyWeather) {
			const averageTemp =
				dailyWeather[date].main.temp.reduce((a, b) => a + b, 0) /
				dailyWeather[date].main.temp.length
			const averageHumidity =
				dailyWeather[date].main.humidity.reduce((a, b) => a + b, 0) /
				dailyWeather[date].main.humidity.length
			const averageWindSpeed =
				dailyWeather[date].wind.speed.reduce((a, b) => a + b, 0) /
				dailyWeather[date].wind.speed.length

			dailyWeather[date].main.temp = [averageTemp]
			dailyWeather[date].main.humidity = [averageHumidity]
			dailyWeather[date].wind.speed = [averageWindSpeed]
		}
		setForecastWeather(dailyWeather)
	} catch (error) {
		console.error(error)
	}
}
