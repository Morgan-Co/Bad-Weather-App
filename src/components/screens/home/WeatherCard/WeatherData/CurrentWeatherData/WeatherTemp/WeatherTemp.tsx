import { useContext } from 'react'
import WeatherDataContext from '../../../../../../hoc/WeatherDataContext'
import { RiCelsiusLine } from 'react-icons/ri'
import styles from './WeatherTemp.module.scss'

const WeatherTemp = () => {
	const { weatherData } = useContext(WeatherDataContext)
	return (
		<div className={styles.weatherTemp}>
			{weatherData && weatherData.main ? Math.round(weatherData.main?.temp) : weatherData?.cod}
			{weatherData && weatherData.main ? <RiCelsiusLine/> : ""}
		</div>
	)
}

export default WeatherTemp
