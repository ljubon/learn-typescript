import * as core from '@actions/core'
import { connected } from 'process'

core.setCommandEcho(true)
const msg: string = core.getInput('message')
core.info(msg)
core.debug(`Printing: ${msg} message...`)
