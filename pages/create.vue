<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex style="max-width:800px">
        <v-container>
          <v-row justify="center">
            <p class="display-1 text-xs-center">
              NEW
              <span style="color:#ff5722">WALLET</span>
            </p>
          </v-row>

          <v-row justify="center">
            <div class="col-12">
              <v-row justify="center">
                <v-col cols="12" md="7" sm="6">
                  <kbd class="white--text mb-3 mt-5">Pick a Password</kbd>
                  <v-text-field
                    solo
                    style="max-width:800px"
                    v-model="password"
                    type="password"
                    label="Password"
                  />
                  <v-text-field
                    solo
                    style="max-width:800px"
                    v-model="repeatPassword"
                    type="password"
                    label="Repeat Password"
                  />

                  <v-btn
                    id="styled-input"
                    color="green"
                    class="mt-5 styled-input"
                    block
                    @click="generateNewAccount()"
                  >CREATE NEW WALLET</v-btn>
                </v-col>
              </v-row>
            </div>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//var CryptoJS = require("crypto-js");
import getWeb3 from "../utils/getWeb3";

export default {
  data() {
    return {
      web3: null,
      privateKey: "",
      address: "",
      mnemonic: "",
      password: null,
      repeatPassword: null,
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  },
  created() {
    getWeb3
      .then(results => {
        this.web3 = results.web3;
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    generateNewAccount() {
      console.log("generating a new account....");
      if (this.password == null) {
        this.$toast.error("Please make at least a 8 character password");
        return;
      }
      if (this.password.length < 8) {
        this.$toast.error("Please make at least a 8 character password");
        return;
      }
      if (this.password !== this.repeatPassword) {
        this.$toast.error("Passwords don't match");
        return;
      }

      // var Wallet = this.web3.eth.accounts.create();
      // console.log(Wallet);
    },
    backToHome() {
      if (!this.saveCheckbox) {
        this.$toast.error("Please tick the checkbox...");
        return;
      }
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
#styled-input {
  height: 48px;
}
.styled-input label[for] {
  height: 48px;
}
</style>
