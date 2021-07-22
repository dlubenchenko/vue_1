const App = {
	data() {
		return {
			title: 'List of items',
			placeHolderString: 'Enter name of item',
			inputValue: '',
			items: ['First item'],
		}
	},
	methods: {
		addNewTitle() {
			if (this.inputValue) {
				this.items.push(this.inputValue)
				this.inputValue = ''
			}
		},
		toUpperCase(item) {
			return item.toUpperCase()
		},
		removeItem(i) {
			this.items.splice(i, 1)
		},
	},
	computed: {
		doubleCountComputed() {
			return this.items.length * 2
		},
	},
	watch: {
		inputValue(value) {
			if (value.length > 10) {
				this.inputValue = ''
			}
		},
	},
}

// const app = Vue.createApp(App)
// app.mount('#app')

// or

Vue.createApp(App).mount('#app')
