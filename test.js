const utils = require('./utils')
const anonfile = require('anonfile-lib');
const t = async()=>{
  console.log(await utils.tokey(__dirname+'/src/3bf0bb363d.json'))
}
t()