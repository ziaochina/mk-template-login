import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mk_template_login from './apps/mk-template-login/index.js'

const apps = {
	[mk_template_login.name]:mk_template_login,	
}


config(myConfig({apps}))


import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	

start()