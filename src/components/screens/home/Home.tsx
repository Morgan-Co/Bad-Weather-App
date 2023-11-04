import WeatherCard from './WeatherCard/WeatherCard'
import styles from "./Home.module.scss"

const Home = () => {
	return (
		<div className={styles.homePage}>
			<WeatherCard />
		</div>
	)
}

export default Home
