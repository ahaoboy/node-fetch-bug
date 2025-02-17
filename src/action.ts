import { downloadToFile } from './index'

async function main() {
  for (
    const i of [
      'https://github.com/ahaoboy/easy-install/raw/refs/heads/main/dist-manifest/node.json',
      'https://nodejs.org/dist/v23.7.0/node-v23.7.0-linux-x64.tar.xz',
      'https://github.com/ahaoboy/easy-install/raw/refs/heads/main/dist-manifest/bun.json',
      'https://github.com/oven-sh/bun/releases/latest/download/bun-linux-x64-baseline.zip',
      'https://github.com/ahaoboy/easy-install/raw/refs/heads/main/dist-manifest/boa.json',
      'https://github.com/boa-dev/boa/releases/latest/download/boa-linux-amd64',
      'https://github.com/ahaoboy/easy-install/raw/refs/heads/main/dist-manifest/llrt.json',
      'https://github.com/awslabs/llrt/releases/latest/download/llrt-linux-x64-full-sdk.zip',
      'https://github.com/ahaoboy/easy-install/raw/refs/heads/main/dist-manifest/hermes.json',
      'https://github.com/facebook/hermes/releases/latest/download/hermes-cli-linux.tar.gz',
      'https://github.com/ahaoboy/easy-install/raw/refs/heads/main/dist-manifest/xst.json',
      'https://github.com/Moddable-OpenSource/moddable/releases/latest/download/xst-lin64.zip',
      'https://github.com/denoland/deno/releases/latest/download/dist-manifest.json',
      'https://api.github.com/repos/denoland/deno/releases/latest',
      'https://github.com/denoland/deno/releases/download/v2.1.10/deno-x86_64-unknown-linux-gnu.zip',
      'https://github.com/denoland/deno/releases/download/v2.1.10/denort-x86_64-unknown-linux-gnu.zip',
      'https://github.com/ahaoboy/txiki.js-build/releases/latest/download/dist-manifest.json',
      'https://api.github.com/repos/ahaoboy/txiki.js-build/releases/latest',
      'https://github.com/ahaoboy/txiki.js-build/releases/download/v0.1.1/tjs-x86_64-unknown-linux-gnu.tar.gz',
      'https://github.com/ahaoboy/spidermonkey-build/releases/latest/download/dist-manifest.json',
      'https://github.com/ahaoboy/spidermonkey-build/releases/latest/download/spidermonkey-x86_64-unknown-linux-gnu.tar.xz',
      'https://github.com/ahaoboy/v8-build/releases/latest/download/dist-manifest.json',
    ]
  ) {
    downloadToFile(i).then((path) => console.log('download to ', path))
  }
}

main()
