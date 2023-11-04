import { IWeatherIconsData } from '../interfaces/IWeatherIconsData'
// import { IForecast } from '../interfaces/IForecast'

export interface IForecastIcon {
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

export const selectForecastIcons = (
	weatherIconsData: IWeatherIconsData,
	forecastWeather: IForecastIcon
) => {
	const selectedIcons = []
	for (const title in weatherIconsData) {
		const iconData = weatherIconsData[title]
		const weatherCode = forecastWeather.weather[0].id

		if (weatherCode && iconData.code.includes(weatherCode)) {
			const icon = iconData.icon

			if (
				icon &&
				typeof icon === 'object' &&
				'Day' in icon &&
				'Night' in icon
			) {
				const selIcon = icon.Day
				selectedIcons.push(selIcon)
			} else {
				selectedIcons.push(icon)
			}
		}
	}

	return selectedIcons
}
