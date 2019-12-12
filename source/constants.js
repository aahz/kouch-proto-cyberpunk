export const FIRST_LEVEL = {
	GAME: 'game',
	TOURNAMENT: 'tournament',
	PROFILE: 'profile',
	SETTINGS: 'settings'
};

export const FIRST_LEVEL_DATA = {
	[FIRST_LEVEL.GAME]: {
		title: 'Game',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[FIRST_LEVEL.TOURNAMENT]: {
		title: 'Tournament',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[FIRST_LEVEL.PROFILE]: {
		title: 'Profile',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[FIRST_LEVEL.SETTINGS]: {
		title: 'Settings',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
};

export const SECOND_LEVEL = {
	GAME_FIGHTS: `${FIRST_LEVEL.GAME}-fights`,
	GAME_GOLD: `${FIRST_LEVEL.GAME}-gold`,
	GAME_RUNES: `${FIRST_LEVEL.GAME}-runes`,
	GAME_INVENTORY: `${FIRST_LEVEL.GAME}-inventory`,
	GAME_ABILITIES: `${FIRST_LEVEL.GAME}-abilities`,
	GAME_NETWORTH: `${FIRST_LEVEL.GAME}-networth`,
	GAME_MAP: `${FIRST_LEVEL.GAME}-map`,
	TOURNAMENT_SCHEDULE: `${FIRST_LEVEL.TOURNAMENT}-schedule`,
	TOURNAMENT_STANDINGS: `${FIRST_LEVEL.TOURNAMENT}-standings`,
	TOURNAMENT_ABOUT: `${FIRST_LEVEL.TOURNAMENT}-about`,
	PROFILE_ACCOUNT: `${FIRST_LEVEL.PROFILE}-account`,
	PROFILE_FRIENDS: `${FIRST_LEVEL.PROFILE}-friends`,
	PROFILE_ACTIVITIES: `${FIRST_LEVEL.PROFILE}-activities`,
	PROFILE_SHOP: `${FIRST_LEVEL.PROFILE}-shop`,
	PROFILE_LOG_OUT: `${FIRST_LEVEL.PROFILE}-log-out`,
	SETTINGS_DISPLAY: `${FIRST_LEVEL.SETTINGS}-display`,
	SETTINGS_NOTIFICATIONS: `${FIRST_LEVEL.SETTINGS}-notifications`,
};

export const SECOND_LEVEL_DATA = {
	[SECOND_LEVEL.GAME_FIGHTS]: {
		title: 'Fights',
		icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n' +
			'<g transform="scale(-1,1) translate(-24, 0)">\n' +
			'<path fill="currentColor" d="M8.304 13.312l2.594 2.204L8 18l2 2-1.32 1.312-2.423-1.884L2.68 23H1v-1.49l3.55-3.784-1.87-2.414L4 14l2 2 2.304-2.688zM13.156 7.652L18 2l5-1-1 5-5.82 4.988-3.024-3.336z" opacity="0.6"/>\n' +
			'<path fill="currentColor" d="M21.32 23H23v-1.49l-3.55-3.784 1.87-2.414L20 14l-2 2L6 2 1 1l1 5 14 12-2 2 1.32 1.312 2.423-1.884z"/>\n' +
			'</g>\n' +
			'</svg>',
	},
	[SECOND_LEVEL.GAME_GOLD]: {
		title: 'Gold sources',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.GAME_RUNES]: {
		title: 'Runes',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.GAME_INVENTORY]: {
		title: 'Inventory',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.GAME_ABILITIES]: {
		title: 'Abilities',
		icon: '<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">' +
			'<path opacity="0.6" d="M22 3H37V18H22V3Z" fill="currentColor"/>' +
			'<path d="M3 3H18V18H3V3Z" fill="currentColor"/>' +
			'<path d="M22 22H37V37H22V22Z" fill="currentColor"/>' +
			'<path opacity="0.6" d="M3 22H18V37H3V22Z" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.GAME_NETWORTH]: {
		title: 'Net worth',
		icon: '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">' +
			'<path fill-rule="evenodd" clip-rule="evenodd" d="M40.002 16.3766L27.2747 25.4346L16.3656 21.8114L0.00195312 34.4926L14.5474 14.565L23.6383 16.3766L40.002 0.0722656" fill="currentColor" fill-opacity="0.6"/>' +
			'<path fill-rule="evenodd" clip-rule="evenodd" d="M40.002 39.9275H0.00195312L16.3656 27.2463L27.2747 30.8695L40.002 21.8115" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.GAME_MAP]: {
		title: 'Battle map',
		icon: '<svg viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
			'<path fill-rule="evenodd" clip-rule="evenodd" d="M0 6L10 0V20L0 26V6ZM22 6L12 0V20L22 26V6Z" fill="currentColor"/>' +
			'<path fill-rule="evenodd" clip-rule="evenodd" d="M34 0L24 6V26L34 20V0Z" fill="currentColor" opacity="0.6"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.TOURNAMENT_SCHEDULE]: {
		title: 'Games schedule',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.TOURNAMENT_STANDINGS]: {
		title: 'Standings',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.TOURNAMENT_ABOUT]: {
		title: 'About',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.PROFILE_ACCOUNT]: {
		title: 'Account',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.PROFILE_FRIENDS]: {
		title: 'Friends',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.PROFILE_ACTIVITIES]: {
		title: 'Activities',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.PROFILE_SHOP]: {
		title: 'Shop',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.PROFILE_LOG_OUT]: {
		title: 'Log out',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.SETTINGS_DISPLAY]: {
		title: 'Display',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
	[SECOND_LEVEL.SETTINGS_NOTIFICATIONS]: {
		title: 'Notifications',
		icon: '<svg viewBox="-30 0 511 512" xmlns="http://www.w3.org/2000/svg">' +
			'<path d="m436.222656 121.359375-210.207031-121.359375-210.203125 121.359375 210.203125 121.363281zm0 0" fill="currentColor"/>' +
			'<path d="m241.273438 512 210.261718-121.394531v-242.847657l-210.261718 121.390626zm0 0" fill="currentColor" opacity="0.7"/>' +
			'<path d="m.5 147.757812v242.847657l210.257812 121.394531v-242.851562zm0 0" fill="currentColor"/>' +
			'</svg>',
	},
};
