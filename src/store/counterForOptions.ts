import { ref } from "vue";
import { defineStore } from "pinia";


export const userCounterStoreForSetup = defineStore('counter', () => {
	const count = ref<number>(1)
	function increment() {
		count.value++
	}

	function doubleCount() {
		return count.value * 2
	}
	return { count, increment, doubleCount }
})