"use strict"
import { promises as fs } from "fs"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

export const fsPathMustExist = async filePath => {
  const dirPath = dirname(filePath)
  // Check if the directory exists
  try {
    await fs.access(dirPath)
  } catch (error) {
    // If the directory does not exist, create it
    await fs.mkdir(dirPath, { recursive: true })
  }
}

/** Find the path relative to a script module.
 *
 * @param {*} importMetaUrl Pass `import.meta.url`
 * @param {*} pathRelatively The path relative to the script file.
 * @returns
 * @usage
 * >> let path = fsImportMetaUrlPath(import.meta.url, "../../daddy/mummy/baby.json")
 */
export const fsImportMetaUrlPath = (importMetaUrl, filePathRelatively) =>
  join(dirname(fileURLToPath(importMetaUrl)), filePathRelatively)

export const fsReadJson = async filePath => {
  const json = await fs.readFile(filePath, "utf-8")
  return JSON.parse(json)
}

export const fsWriteJson = async (filePath, json) =>
  await fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf-8")

export default fsImportMetaUrlPath
