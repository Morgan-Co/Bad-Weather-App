import { useEffect, useState } from 'react'
import { ICurrentWeather } from '../../../../interfaces/ICurrentWeather'
import WeatherDataContext from '../../../hoc/WeatherDataContext'
import SearchSection from './SearchSection/SearchSection'
import WeatherData from './WeatherData/WeatherData'
import { selectCurrentWeatherIcon } from '../../../../utils/selectCurrentWeatherIcon'
import { getWeather } from '../../../hoc/getWeather'
import { getLocationWeather } from '../../../hoc/getLocationWeather'
import { getForecastWeather } from '../../../hoc/getForecastWeather'
import { IForecast } from '../../../../interfaces/IForecast'
import { selectForecastIcons } from '../../../../utils/selectForecastIcons'
import { getLocationForecast } from '../../../hoc/getLocationWeather'
import styles from './WeatherCard.module.scss'
const WeatherCard = () => {
	const [isForecastChecked, setIsForecastChecked] = useState(false)
	const [error, setError] = useState('')
	const [weatherData, setWeatherData] = useState<ICurrentWeather>()
	const [forecastWeather, setForecastWeather] = useState<IForecast>()
	const [cityName, setCityName] = useState<string>('')

	useEffect(() => {
		console.log(error)
	}, [error])

	return (
		<WeatherDataContext.Provider
			value={{
				cityName,
				setCityName,
				getWeather,
				setWeatherData,
				getForecastWeather,
				weatherData,
				getLocationWeather,
				selectCurrentWeatherIcon,
				setForecastWeather,
				selectForecastIcons,
				forecastWeather,
				getLocationForecast,
				setError,
				setIsForecastChecked,
				isForecastChecked
			}}
		>
			<div className={styles.weatherCard}>
				<SearchSection />
				{(weatherData || forecastWeather) && <WeatherData />}
			</div>
		</WeatherDataContext.Provider>
	)
}

export default WeatherCard
