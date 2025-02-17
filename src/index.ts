import { tmpdir } from 'os'
import path from 'path'
import fs from 'fs'

export function randomId() {
  return Math.random().toString(36).slice(1)
}

export function getFetchOption() {
  const headers: HeadersInit = {
    'User-Agent': 'GitHub Actions',
  }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`
  }
  return {
    headers,
  }
}
export async function downloadBinary(url: string) {
  const response = await fetch(url, getFetchOption())
  return await response.arrayBuffer()
}

export async function downloadToFile(url: string, outputPath?: string) {
  if (!outputPath) {
    const name = url.split('/').at(-1)!
    const dir = path.join(tmpdir(), randomId())
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    outputPath = path.join(dir, name)
  }
  outputPath = outputPath.replaceAll('\\', '/')
  const dir = outputPath.split('/').slice(0, -1).join('/')
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  const response = await fetch(url, getFetchOption())
  const buf = await response.arrayBuffer()
  fs.writeFileSync(outputPath, Buffer.from(buf))
  return outputPath
}
