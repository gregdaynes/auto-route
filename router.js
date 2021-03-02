import express from 'express'
import yaml from 'yaml'
import fs from 'fs'
import { join } from 'desm'

export default (configPath) => {
  const routingFile = fs.readFileSync(configPath, 'utf8')
  const config = yaml.parse(routingFile).functions

  const Router = express.Router();

  Object.values(config)
    .forEach(async ({ handler, method, path }) => {
      const imported = await import(join(import.meta.url, handler))

      Router[method](path, imported.default)
    })

  return Router;
}
