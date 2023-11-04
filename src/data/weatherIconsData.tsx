import { IWeatherIconsData } from '../interfaces/IWeatherIconsData.ts'

import {
	ClearDayIcon,
	FewCloudsDayIcon,
	ScatteredCloudsDayIcon,
	LightRainDayIcon,
	ModerateRainDayIcon,
	HeavyRainDayIcon,
	LightThunderstormDayIcon,
} from '../components/ui/DayIcons.tsx'

import {
	ClearNightIcon,
	FewCloudsNightIcon,
	ScatteredCloudsNightIcon,
	LightRainNightIcon,
	ModerateRainNightIcon,
	HeavyRainNightIcon,
} from '../components/ui/NightIcons.tsx'

import {
	BrokenCloudsIcon,
	DrizzleIcon,
	VeryHeavyRainIcon,
	SleetIcon,
	SnowIcon,
	MistIcon,
	ThunderstormIcon,
	RainThunderstormIcon,
} from '../components/ui/CommonIcons.tsx'

export const weatherIconsData: IWeatherIconsData = {
	Clear: {
		code: [800],
		icon: {
			Day: <ClearDayIcon />,
			Night: <ClearNightIcon />,
		},
	},
	FewClouds: {
		code: [801],
		icon: {
			Day: <FewCloudsDayIcon />,
			Night: <FewCloudsNightIcon />,
		},
	},
	ScatteredClouds: {
		code: [802],
		icon: {
			Day: <ScatteredCloudsDayIcon />,
			Night: <ScatteredCloudsNightIcon />,
		},
	},
	BrokenClouds: {
		code: [803, 804],
		icon: <BrokenCloudsIcon />,
	},
	Drizzle: {
		code: [300, 301, 302, 310, 311, 312, 313, 314, 321],
		icon: <DrizzleIcon />,
	},
	LightRain: {
		code: [500],
		icon: {
			Day: <LightRainDayIcon />,
			Night: <LightRainNightIcon />,
		},
	},
	ModerateRain: {
		code: [501],
		icon: {
			Day: <ModerateRainDayIcon />,
			Night: <ModerateRainNightIcon />,
		},
	},
	HeavyRain: {
		code: [502],
		icon: {
			Day: <HeavyRainDayIcon />,
			Night: <HeavyRainNightIcon />,
		},
	},
	VeryHeavyRain: {
		code: [503, 504, 520, 521, 522, 531],
		icon: <VeryHeavyRainIcon />,
	},
	Sleet: {
		code: [504],
		icon: <SleetIcon />,
	},
	Snow: {
		code: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
		icon: <SnowIcon />,
	},
	Atmosphere: {
		code: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
		icon: <MistIcon />,
	},
	Thunderstorm: {
		code: [211, 212, 221],
		icon: <ThunderstormIcon />,
	},
	RainThunderstorm: {
		code: [200, 201, 202, 230, 231, 232],
		icon: <RainThunderstormIcon />,
	},
	LightThunderstorm: {
		code: [210],
		icon: <LightThunderstormDayIcon />,
	},
}
