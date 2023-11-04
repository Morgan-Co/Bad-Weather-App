import { ICurrentWeather } from '../../interfaces/ICurrentWeather'

export const getWeather = async (
	cityName: string,
	setCityName: (data: string) => void,
	setWeatherData: (data: ICurrentWeather) => void,
	setError: (data: string) => void
) => {
	const API_KEY: string = '8a2c11dcf257f052c6bfb35ebdda1766'
	const CURRENT_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
	try {
		const res = await fetch(CURRENT_URL)
		const data = await res.json()
		setWeatherData(data)
		setCityName('')
	} catch (error) {
		console.error(error)
		setError('Error')
	}
}
