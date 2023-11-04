import { IWeatherIconsData } from '../interfaces/IWeatherIconsData'
import { ICurrentWeather } from '../interfaces/ICurrentWeather'

export const selectCurrentWeatherIcon = (
	weatherIconsData: IWeatherIconsData,
	weatherData: ICurrentWeather | undefined
) => {
	let selectedIcon = null
	if (weatherData?.weather) {
		for (const title in weatherIconsData) {
			const iconData = weatherIconsData[title]
			const weatherCode = weatherData?.weather[0]?.id
	
			if (weatherCode && iconData.code.includes(weatherCode)) {
				const icon = iconData.icon
	
				if (
					icon &&
					typeof icon === 'object' &&
					'Day' in icon &&
					'Night' in icon
				) {
					const sunrise = new Date(weatherData?.sys.sunrise * 1000)
					const sunset = new Date(weatherData?.sys.sunset * 1000)
					const currentTime = new Date()
	
					selectedIcon =
						currentTime > sunrise && currentTime < sunset ? icon.Day : icon.Night
				} else {
					selectedIcon = icon
				}
				break
			}
		}
	}

	
	return selectedIcon
}
