import { nanoid } from 'nanoid';

export const state = () => ({
	inventories: [
		// {
		// 	model: 'Honda Civic',
		// 	price: '546.44',
		// 	year: '2019',
		// 	location: 'Lagos',
		// 	make: 'Toyota',
		// 	imageUrl: 'https://vimg.cheki.com.ng/xl/7_inventory2212301_1595231038.jpg'
		// },
		// {
		// 	model: 'Honda Civic',
		// 	price: '546.44',
		// 	year: '2019',
		// 	location: 'Lagos',
		// 	make: 'Toyota',
		// 	imageUrl: 'https://vimg.cheki.com.ng/xl/7_inventory2212301_1595231038.jpg'
		// },
		// {
		// 	model: 'Honda Civic',
		// 	price: '546.44',
		// 	year: '2019',
		// 	location: 'Lagos',
		// 	make: 'Toyota',
		// 	imageUrl: 'https://vimg.cheki.com.ng/xl/7_inventory2212301_1595231038.jpg'
		// },
		// {
		// 	model: 'Honda Civic',
		// 	price: '546.44',
		// 	year: '2019',
		// 	location: 'Lagos',
		// 	make: 'Toyota',
		// 	imageUrl: 'https://vimg.cheki.com.ng/xl/7_inventory2212301_1595231038.jpg'
		// }
	],
	carDetails: {}
});

export const mutations = {
	ADD_VEHICLE(state, payload) {
		state.inventories.push({
			id: nanoid(),
			isBooked: false,
			...payload
		});
	},
	SET_CAR_DETAILS(state, id) {
		const car = state.inventories.find((car) => car.id == id);
		state.carDetails = car;
	},
	DELETE_VEHICLE(state, id) {
		const vehicleIndex = state.inventories.findIndex((car) => car.id == id);
		console.log(vehicleIndex);
		state.inventories = state.inventories.splice(vehicleIndex, 1);
	}
};

export const actions = {
	async addVehicle(context, payload) {
		await context.commit('ADD_VEHICLE', payload);
	},

	async deleteVehicle(context, id) {
		await context.commit('DELETE_VEHICLE', id);
	},
	async setCarDetails(context, id) {
		await context.commit('SET_CAR_DETAILS', id);
	}
};

export const getters = {
	getInventories(state) {
		return state.inventories;
	},
	getCar(state) {
		return state.carDetails;
	}
};
