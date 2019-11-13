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
							v-model="email"
							:rules="emailRules"
							:label="$t('login.email')"
							required
						></v-text-field>
						<v-text-field
							v-model="password"
							:rules="passwordRules"
							type="password"
							:label="$t('login.password')"
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
							{{ $t('login.signin') }}
						</v-btn>
					</v-col>
				</v-row>
			</v-form>
		</v-container>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			valid: true,
			email: '',
			emailRules: [
				v => !!v || this.$t('login.rules.email')
			],
			password: '',
			passwordRules: [
				v => !!v || this.$t('login.rules.password')
			]
		}
	},

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
