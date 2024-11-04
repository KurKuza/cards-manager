<script>
import { ref, onMounted } from 'vue'

export default {
	setup() {
		const deferredPrompt = ref(null)
		const isInstallable = ref(false)

		onMounted(() => {
			// Слушаем событие beforeinstallprompt
			window.addEventListener('beforeinstallprompt', (e) => {
				e.preventDefault()
				deferredPrompt.value = e
				isInstallable.value = true
			})
		})

		const installPWA = async () => {
			if (deferredPrompt.value) {
				deferredPrompt.value.prompt() // показываем запрос на установку
				const choiceResult = await deferredPrompt.value.userChoice

				// Проверка выбора пользователя
				if (choiceResult.outcome === 'accepted') {
					console.log('PWA установлено')
				} else {
					console.log('PWA установка отменена')
				}

				// Сбрасываем событие
				deferredPrompt.value = null
				isInstallable.value = false
			}
		}

		return {
			installPWA,
			isInstallable,
		}
	},
}
</script>

<template>
	<div v-if="isInstallable" class="flex justify-center mt-4 mb-4">
		<LargeButton
			@click="installPWA"
			class="flex items-center p-3 w-full transition border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 text-gray-600 active:border-blue-500 active:text-blue-500 duration-300 active:scale-95"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="w-8 h-8 mr-4 stroke-slate-400"
			>
				<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
				<polyline points="7 10 12 15 17 10" />
				<line x1="12" y1="15" x2="12" y2="3" />
			</svg>
			<div class="text-md font-medium">Установить приложение</div>
		</LargeButton>
	</div>
</template>

<style scoped></style>
