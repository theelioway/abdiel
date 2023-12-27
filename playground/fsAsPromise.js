import fs from "fs/promises"

export const fileExistsPromise = async filePath => {
  try {
    await fs.access(filePath)
    return filePath
  } catch (error) {
    return false // File doesn't exist
  }
}

export const readFilePromise = filePath => {
  return fs.readFile(filePath, "utf8")
}

export const readDirectoryPromise = async directoryPath => {
  try {
    return await fs.readdir(directoryPath)
  } catch (error) {
    throw error
  }
}

export default {
  fileExistsPromise,
  readFilePromise,
  readDirectoryPromise,
}
