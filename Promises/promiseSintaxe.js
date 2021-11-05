const aPromise = new Promise((sucess, failure) => {
  const aNumber = 24
  sucess(aNumber)
  //failure(aNumber)
})

aPromise
  .then(sucessValue => {
    console.log(sucessValue)
  })
  .catch(failureValue => {
    console.log(failureValue)
  })