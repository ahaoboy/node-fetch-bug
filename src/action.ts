import { downloadToFile } from './index'

async function main() {
  for (const i of [
    "https://nodejs.org/dist/v23.7.0/node-v23.7.0-linux-x64.tar.xz",
    "https://github.com/oven-sh/bun/releases/latest/download/bun-linux-x64-baseline.zip",
    "https://github.com/awslabs/llrt/releases/latest/download/llrt-linux-x64-full-sdk.zip",
    "https://github.com/facebook/hermes/releases/latest/download/hermes-cli-linux.tar.gz",
    "https://github.com/Moddable-OpenSource/moddable/releases/latest/download/xst-lin64.zip",
    "https://github.com/denoland/deno/releases/download/v2.1.10/deno-x86_64-unknown-linux-gnu.zip",
    "https://github.com/denoland/deno/releases/download/v2.1.10/denort-x86_64-unknown-linux-gnu.zip",
    "https://github.com/ahaoboy/txiki.js-build/releases/download/v0.1.1/tjs-x86_64-unknown-linux-gnu.tar.gz",
    "https://github.com/ahaoboy/spidermonkey-build/releases/latest/download/spidermonkey-x86_64-unknown-linux-gnu.tar.xz",
    "https://github.com/ahaoboy/v8-build/releases/download/v0.1.3/v8-x86_64-unknown-linux-gnu.tar.xz",
  ]) {
    downloadToFile(i).then(path => console.log('download to ', path))
  }
}

main()