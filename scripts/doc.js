const jsdoc2md = require('jsdoc-to-markdown')
const FS = require('fs-extra')
const path = require('path')



jsdoc2md.render({ files: 'src/reg/*.js' }).then((v)=>{
  FS.outputFile(path.resolve(process.cwd(),'docs/reg.md'),v)
})
