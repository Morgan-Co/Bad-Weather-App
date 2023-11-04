import { useContext } from 'react'
import WeatherDataContext from '../../../../../../hoc/WeatherDataContext'
import styles from './WeatherName.module.scss'

const WeatherName = () => {
	const { weatherData } = useContext(WeatherDataContext)

	return (
		<h1 className={styles.weatherName}>
			{weatherData?.name ? weatherData?.name : weatherData?.message}
		</h1>
	)
}

export default WeatherName
