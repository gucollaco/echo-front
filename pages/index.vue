<template>
	<v-app>
		<v-container fluid>
			<v-form
				ref="form"
				v-model="valid"
				lazy-validation
			>
				<v-row
					class="mb-6"
					justify="center"
					no-gutters
				>
					<v-col lg="4" md="6" sm="12">
						<v-text-field
							v-model="username"
							:rules="usernameRules"
							label="Login"
							required
						></v-text-field>
						<v-text-field
							v-model="password"
							:rules="passwordRules"
							type="password"
							label="Senha"
							required
						></v-text-field>
					</v-col>
				</v-row>
				<v-row
					justify="center"
					no-gutters
				>
					<v-col lg="4" md="6" sm="12">
						<v-btn
							:disabled="!valid"
							color="primary"
							@click="validate"
							to="/home" nuxt
						>
							Entrar
						</v-btn>
					</v-col>
				</v-row>
			</v-form>
		</v-container>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		valid: true,
		username: '',
		usernameRules: [
			v => !!v || 'Insira seu usuário Unifesp'
		],
		password: '',
		passwordRules: [
			v => !!v || 'Insira sua senha Unifesp'
		]
	}),

	methods: {
		validate () {
			if (this.$refs.form.validate()) {
				console.log('oi')
			}
		}
	}
}
</script>

<style>

</style>
