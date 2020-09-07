import { endsWith } from '../lang'

const isYamlPath = (filePath) =>
  endsWith('.yml', filePath) || endsWith('.yaml', filePath)

export default isYamlPath
