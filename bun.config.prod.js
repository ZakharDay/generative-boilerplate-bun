// await Bun.build({
//   entrypoints: ['./src/index.html'],
//   outdir: './dist',
//   minify: true,
//   splitting: false,
//   // sourcemap: 'external',
//   target: 'browser' // or 'bun', 'node', 'browser'
// }).catch(console.error)

await Bun.build({
  entrypoints: ['./src/index.html'],
  outdir: './dist',
  minify: true,
  target: 'browser' // default
})
