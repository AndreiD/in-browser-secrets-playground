<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 ma-5 style="max-width:500px">
      <v-card :elevation="0" class="elevation-4 pa-3">
        <v-card-text>
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'lock' : 'remove_red_eye'"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            label="Password"
            hint="At least 8 characters"
            required
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="secondary"
            block
            elevation="0"
            @click="newWallet()"
            type="submit"
          >Create New Wallet</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    password: null,
    email: null,
    recaptchaToken: "",
    showPassword: false,
    errors: []
  }),
  mounted() {
    this.loading = false;
  },
  methods: {
    newWallet() {}
  }
};
</script>
