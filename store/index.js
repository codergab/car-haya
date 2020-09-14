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
	carDetails: {},
	bookings: []
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
		state.inventories.splice(vehicleIndex, 1);
	},
	BOOK_VEHICLE(state, booking) {
		state.bookings.push({ ...booking, id: nanoid(), status: 1 });
	},
	UPDATE_BOOKING(state, payload) {
		try {
			const bookingIndex = state.bookings.findIndex((booking) => booking.id == payload.id);
			state.bookings[bookingIndex].status = payload.status;
		} catch (error) {
			console.log(error);
		}
	},
	DELETE_BOOKING(state, id) {
		const bookingIndex = state.bookings.findIndex((booking) => booking.id == id);
		state.bookings.splice(bookingIndex, 1);
	},
	EMPTY_BOOKING(state) {
		state.bookings.length = 0;
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
	},
	async bookCar(context, booking) {
		await context.commit('BOOK_VEHICLE', booking);
	},
	async updateBooking(context, payload) {
		await context.commit('UPDATE_BOOKING', payload);
	},
	async deleteBooking(context, id) {
		await context.commit('DELETE_BOOKING', id);
	},
	emptyBookings(context) {
		context.commit('EMPTY_BOOKING');
	}
};

export const getters = {
	getInventories(state) {
		return state.inventories;
	},
	getBookings(state) {
		return state.bookings;
	},
	getCar(state) {
		return state.carDetails;
	}
};
