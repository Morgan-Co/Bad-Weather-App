import { useContext, useEffect, useRef } from 'react'
import WeatherDataContext from '../../../../../hoc/WeatherDataContext'
import { FiSearch } from 'react-icons/fi'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
	const buttonRef = useRef<HTMLButtonElement | null>(null)
	const {
		cityName,
		setCityName,
		getWeather,
		getForecastWeather,
		setWeatherData,
		setForecastWeather,
		setError,
		isForecastChecked,
		weatherData,
		setIsForecastChecked,
	} = useContext(WeatherDataContext)

	useEffect(() => {
		if (!weatherData) {
			console.log('kaban')
		}
		console.log(weatherData)
	}, [weatherData])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && cityName.trim() !== '') {
			getWeather(cityName, setCityName, setWeatherData, setError)
			getForecastWeather(cityName, setForecastWeather)
		}
	}

	useEffect(() => {
		const lockButton = () => {
			if (buttonRef.current) {
				if (cityName.trim() == '') buttonRef.current.classList.add('lock')
				else buttonRef.current.classList.remove('lock')
			}
		}
		lockButton()
	}, [buttonRef, cityName])
	return (
		<form action='#' className={styles.searchForm}>
			<input
				type='text'
				placeholder='City'
				value={cityName}
				onChange={e => {
					setCityName(e.target.value)
				}}
				onKeyDown={handleKeyDown}
				className={styles.searchInput}
			/>
			<label className={styles.weatherSwitch}>
				<input
					className={styles.weatherCheckbox}
					type='checkbox'
					checked={isForecastChecked}
					onChange={() => setIsForecastChecked(!isForecastChecked)}
				/>
				<span className={styles.sliderRound}></span>
			</label>
			<button
				type='button'
				onClick={() => {
					if (isForecastChecked) {
						getForecastWeather(cityName, setForecastWeather)
						setWeatherData(undefined)
					} else {
						getWeather(cityName, setCityName, setWeatherData, setError)
						setForecastWeather(undefined)
					}
				}}
				className={styles.searchButton}
				ref={buttonRef}
			>
				<FiSearch />
			</button>
		</form>
	)
}

export default SearchForm
