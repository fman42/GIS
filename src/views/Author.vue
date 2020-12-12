<template>
	<div class="author">
		<div class="author-summary">
			<div class="author-circle">
				<img src="../assets/profile.jpg" class="author-image">
			</div>
			<div class="author-short">
				<h2>Милан Желнов &#128187;</h2>
				<p>Студент группы П-31 ГПБОУ СРМК</p>
				<p>Telegram: <a href="https://teleg.run/yel_claw" target="_blank">перейти</a></p>
			</div>
		</div>
		<div class="author-description">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nibh nunc, luctus a mauris eget, malesuada sollicitudin ante. Mauris venenatis ex sem, pulvinar gravida justo pulvinar tristique. Duis id eros et elit hendrerit imperdiet non vel ligula. Integer eget varius mi. Maecenas laoreet urna id auctor blandit. Praesent ornare tempus viverra. Quisque at dui arcu. Donec quis nunc congue, finibus leo vel, sodales dolor. Morbi velit augue, rutrum in pretium vel, posuere sit amet tortor.</p>
		</div>
	</div>
</template>

<style scoped>
	.author {
		display: flex;
		flex-direction: column;
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