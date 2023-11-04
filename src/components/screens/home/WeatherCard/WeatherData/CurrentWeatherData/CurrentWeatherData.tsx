import WeatherTemp from './WeatherTemp/WeatherTemp'
import WeatherSideData from './WeatherSideData/WeatherSideData'
import { WeatherIcon } from './WeatherIcon/WeatherIcon'
import WeatherName from './WeatherName/WeatherName'
import styles from "./CurrentWeatherData.module.scss"
const CurrentWeatherData = () => {
	return (
		<div className={styles.currentWeatherData}>
			<WeatherIcon />
			<WeatherTemp />
			<WeatherName />
			<WeatherSideData />
		</div>
	)
}

export default CurrentWeatherData
