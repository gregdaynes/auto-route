import express from 'express'
import log from 'chip-log'
import router from './router.js'

const { context, request } = log.middleware

const app = express()
app.use(context())
app.use(request())
app.use(router('./routing.yml'))

app.listen(3000, () => log.info('Starte d'))
