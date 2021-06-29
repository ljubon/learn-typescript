import * as core from '@actions/core'

const msg: string = core.getInput('message')
core.debug(`Printing: ${msg} message...`)
