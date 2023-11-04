import { useContext } from 'react'
import WeatherDataContext from '../../../../../../hoc/WeatherDataContext'
import styles from "./WeatherSideData.module.scss"

const WeatherSideData = () => {
	const { weatherData } = useContext(WeatherDataContext)
	return (
		<div className={styles.weatherSideData}>
			<div>{weatherData?.main ? `${weatherData?.main?.humidity}%` : ""}</div>
			<div>{weatherData?.wind ? `${weatherData?.wind.speed} km/h` : ""}</div>
		</div>
	)
}

export default WeatherSideData
