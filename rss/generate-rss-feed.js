import path from 'path'
const __dirname = import.meta.dirname

import { rssFeeder } from '@p-n-c/rssfeed'

const src = path.join(__dirname, '..', 'out')
const root = 'out'
const feed = {
  title: 'This website will not empower you.',
  link: 'https://the-public-good.com/',
  description: 'Latest articles from The Public Good',
  outputPath: 'feed.rss',
}
const options = {
  images: {
    main: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Beardsley-peacockskirt.PNG/430px-Beardsley-peacockskirt.PNG',
  },
  pathsToExclude: ['/', '_next'],
}

rssFeeder.generateRssFeed(src, root, feed, options)
