import { useContext } from 'react'
import { weatherIconsData } from '../../../../../../../data/weatherIconsData'
import WeatherDataContext from '../../../../../../hoc/WeatherDataContext'
import styles from './WeatherIcon.module.scss'

export const WeatherIcon = () => {
	const { selectCurrentWeatherIcon, weatherData } =
		useContext(WeatherDataContext)
	return (
		<div className={styles.weatherIcon}>
			{selectCurrentWeatherIcon(weatherIconsData, weatherData)}
		</div>
	)
}
