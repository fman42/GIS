<template>
	<div class="author">
		<div class="author-summary">
			<div class="author-circle">
				<img src="../assets/profile.jpg" class="author-image">
			</div>
			<div class="author-short">
				<h5>Милан Желнов &#128187;</h5>
				<p>Студент группы П-31 ГПБОУ СРМК</p>
				<p>Telegram: <a href="https://teleg.run/yel_claw" target="_blank">перейти</a></p>
				<p>GitHub: <a href="https://github.com/fman42" target="_blank">перейти</a></p>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.author {
		display: flex;
		flex-direction: column;
		margin-top: 6%;
	}

	.author-summary {
		display: flex;
		flex-direction: row;
	}

	.author-circle {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		position: relative;
		overflow: hidden;
	}

	.author-image {
		position: absolute;
		top: -30px;
	}

	.author-short {
		margin-left: 30px;
	}

	.author-description {
		width: 70%;
		margin-top: 25px;
	}
</style>