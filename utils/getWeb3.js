import Web3 from 'web3'

let getWeb3 = new Promise(function (resolve) {
  window.addEventListener('load', function () {
    var results
    var web3 = window.web3
    var provider = new Web3.providers.HttpProvider(process.env.INFURA_URL)
    web3 = new Web3(provider)
    results = {
      web3: web3
    }
    resolve(results)
  })
})

export default getWeb3
