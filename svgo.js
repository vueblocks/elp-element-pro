const fs = require('fs')
const path = require('path')
const SVGO = require('svgo')

const filePath = path.resolve(__dirname, './src/assets/icons')
const svgo = new SVGO({
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeAttrs: { attrs: 'fill' } }
  ]
})

fs.readdir(filePath, (err, files) => {
  if (err) {}
  files.forEach(fileName => {
    if (/^.+\.svg$/.test(fileName)) {
      let _fullPath = path.join(filePath, fileName)
      fs.readFile(_fullPath, 'utf8', (err, data) => {
        if (err) {}
        svgo.optimize(data, { path: _fullPath }).then(result => {
          fs.writeFile(_fullPath, result.data, () => {})
        })
      })
    }
  })
})
