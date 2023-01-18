const sentence = 'hello there from lighthouse labs'
let initial = 0
for (const char of sentence) {
  initial += 75
  setTimeout(() => {
    process.stdout.write(char) // prints all the values in one line.
  }, initial) // <= 1s delay to make it noticeable. Can dial it down later.
}
setTimeout(() => {
  console.log('')
}, initial + 75)
