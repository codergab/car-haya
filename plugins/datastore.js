import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
	createPersistedState({
		key: 'car-haya'
	})(store);
};
