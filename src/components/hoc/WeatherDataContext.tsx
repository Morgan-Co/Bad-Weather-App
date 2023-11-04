import { createContext } from 'react'
import { IForecast } from '../../interfaces/IForecast'
import { ICurrentWeather } from '../../interfaces/ICurrentWeather'
import { IWeatherIconsData } from '../../interfaces/IWeatherIconsData'

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

interface IWeatherContext {
	cityName: string
	setCityName: React.Dispatch<React.SetStateAction<string>>
	getWeather: (
		cityName: string,
		setCityName: (data: string) => void,
		setWeatherData: (data: ICurrentWeather) => void,
		setError: (data: string) => void
	) => void
	getForecastWeather: (
		cityName: string,
		setForecastWeather: (data: IForecast) => void
	) => void
	weatherData: ICurrentWeather | undefined
	getLocationWeather: (setWeatherData: (data: ICurrentWeather) => void) => void
	selectCurrentWeatherIcon: (
		weatherIconsData: IWeatherIconsData,
		weatherData: ICurrentWeather | undefined
	) => React.ReactNode
	setWeatherData: (data: ICurrentWeather | undefined) => void
	setForecastWeather: (data: IForecast | undefined) => void
	selectForecastIcons: (
		weatherIconsData: IWeatherIconsData,
		forecastWeather: IForecastIcon
	) => void
	forecastWeather: IForecast | undefined
	getLocationForecast: (setForecastWeather: (data: IForecast) => void) => void
	setError: (data: string) => void
	setIsForecastChecked: (data: boolean)=> void
	isForecastChecked: boolean
}

const WeatherDataContext = createContext<IWeatherContext>({} as IWeatherContext)

export default WeatherDataContext
