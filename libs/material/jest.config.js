module.exports = {
  name: 'y-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/y/material',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
