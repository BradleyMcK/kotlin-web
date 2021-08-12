{
  mode: 'production',
  resolve: {
    modules: [
      'C:\\Users\\bradl\\IdeaProjects\\kotlin-web\\build\\js\\packages\\kotlin-web\\kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\bradl\\IdeaProjects\\kotlin-web\\build\\js\\packages\\kotlin-web\\kotlin-dce\\kotlin-web.js'
    ]
  },
  output: {
    path: 'C:\\Users\\bradl\\IdeaProjects\\kotlin-web\\build\\distributions',
    filename: [Function: filename],
    library: 'kotlin-web',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}