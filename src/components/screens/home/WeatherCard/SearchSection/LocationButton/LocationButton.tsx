import { useContext } from 'react'
import WeatherDataContext from '../../../../../hoc/WeatherDataContext'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import styles from './LocationButton.module.scss'

const LocationButton = () => {
	const {
		getLocationWeather,
		setWeatherData,
		getLocationForecast,
		setForecastWeather,
		isForecastChecked,
	} = useContext(WeatherDataContext)
	return (
		<button
			type='button'
			onClick={() => {
				if (isForecastChecked) {
					getLocationForecast(setForecastWeather)
					setWeatherData(undefined)
				} else {
					getLocationWeather(setWeatherData)
					setForecastWeather(undefined)
				}
			}}
			className={styles.locationButton}
		>
			<FaLocationCrosshairs />
		</button>
	)
}

export default LocationButton
