import SearchForm from './SearchForm/SearchForm'
import LocationButton from './LocationButton/LocationButton'
import styles from "./SearchSection.module.scss"

const SearchSection = () => {
	return (
		<div className={styles.searchSection}>
			<SearchForm />
			<LocationButton />
		</div>
	)
}

export default SearchSection
