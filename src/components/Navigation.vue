<template>
	<div class="navigation">
		<ul>
			<li>
				<button class="nav-button waves-effect waves-light btn" @click="$router.push('/')">Главная</button>
			</li>
			<li>
				<button class="nav-button waves-effect waves-light btn" @click="$router.push('/consumers')">Потребители</button>
			</li>
			<li>
				<button class="nav-button waves-effect waves-light btn" @click="$router.push('/schema')">Схема</button>
			</li>
			<li>
				<button class="nav-button waves-effect waves-light btn" @click="$router.push('author')">Автор</button>
			</li>
			<li>
				<p class="copyright disabled">&copy; GIS</p>
			</li>
		</ul>
	</div>
</template>