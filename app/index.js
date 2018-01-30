import jsonToYml from './jsonToYml';

jsonToYml('src/data.json', 'dest/data.yaml').then(() => {
  console.log('Successfully converted json to yaml.');
}).catch(() => {
  console.log('Failed to convert json to yaml.');
});
