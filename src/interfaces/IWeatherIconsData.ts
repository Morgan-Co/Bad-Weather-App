// export interface IWeatherIcon {
// 	[ket: string]: {
// 		code: Array<number>
// 		time?: Array<string>
// 		icon: JSX.Element
// 	}
// }

export interface IWeatherIconsData {
	[ket: string]: {
		code: Array<number>
		icon: { Day: React.ReactNode; Night: React.ReactNode} | React.ReactNode
	}
}
