//data object

// class Data{
//     constructor(name, school, teacher){
//         this.name = name
//         this.school = school
//         this.teacher = teacher
//     }
// }

// $("#submit").click(function() {
//     let hashable = new Data($('#name').val(), $('#school').val(), $('#teacher').val())
// 	let certificateData = JSON.stringify(hashable)
// 	ethereum.request({ method: 'eth_requestAccounts' });
// 	console.log(certificateData);
// });

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/

import detectEthereumProvider from '../node_modules/@metamask/detect-provider';

// this returns the provider, or null if it wasn't detected
async function main(){
  const provider = await detectEthereumProvider();
}
main()
console.log('hi')

if (provider) {
  startApp(provider); // Initialize your app
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  // If the provider returned by detectEthereumProvider is not the same as
  // window.ethereum, something is overwriting it, perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
  // Access the decentralized web!
}

const button = document.getElementById('connectButton')
button.onclick(ethereum.request({ method: 'eth_requestAccounts' }));





