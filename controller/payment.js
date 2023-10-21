const fs = require('fs');

// 파일에 쓸 내용
const content = 'Hello, this is the content of the file.';

// 파일 생성 및 쓰기
fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.log('An error occurred:', err);
    return;
  }

  console.log('File has been created and written successfully.');
});

async function signSomeTx_CHAIN1() {
    //signning tx here
    console.log("signTx")
    return "txhash1"
}

async function signSomeTx_CHAIN2() {
    //signning tx here
    console.log("signTx")
    return "txhash2"
}

async function signSomeTx_CHAIN3() {
    //signning tx here
    console.log("signTx")
    return "txhash3"
}

async function signSomeTx_CHAIN4() {
    //signning tx here
    console.log("signTx")
    return "txhash4"
}

async function signFromChainID(tokenAddress, amount, chainId) {
    if(chainId==1) {
        const resTx = await signSomeTx_CHAIN1();
        return resTx;
    } else if (chainId==2){
        const resTx = await signSomeTx_CHAIN2();
        return resTx;
    } else if (chainId==3){
        const resTx = await signSomeTx_CHAIN3();
        return resTx;
    } else if (chainId==4){
        const resTx = await signSomeTx_CHAIN4();
        return resTx;
    }
}

module.exports = {
    signFromChainID
}