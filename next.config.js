module.exports = {
  output: 'export',
  webpack: config => {
    config.externals = config.externals || []
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  images: {
    unoptimized: true
  }
}
