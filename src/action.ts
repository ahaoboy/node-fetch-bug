import { downloadToFile } from './index'

async function main() {
  for (const i of [
    "https://github.com/ahaoboy/txiki.js-build/releases/download/v0.1.1/tjs-x86_64-unknown-linux-gnu.tar.gz",
    "https://github.com/ahaoboy/spidermonkey-build/releases/latest/download/spidermonkey-x86_64-unknown-linux-gnu.tar.xz"
  ]) {
    const path = await downloadToFile(i)
    console.log('download to ', path)
  }
}

main()