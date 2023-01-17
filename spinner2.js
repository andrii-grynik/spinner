const spinner = (input) => {
  let i = 0
  function marryGoRound () {
    process.stdout.write(`\r${input[i]}`)
    if (i === input.length - 1) {
      process.stdout.write('\n')
      clearInterval(timer)
    }
    i++
  }
  marryGoRound(input)
  const timer = setInterval(marryGoRound, 200)
}

spinner('|/-\\|/-\\|')
