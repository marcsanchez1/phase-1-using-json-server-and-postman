console.log('before')
fetch('http://localhost:3000')
.then(res => console.log(res))
console.log('after')