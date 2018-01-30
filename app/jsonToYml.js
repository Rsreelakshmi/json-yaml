import fs from 'fs';
import YAML from 'json2yaml';

const readFile = inputFile => new Promise((resolve, reject) => {
  fs.readFile(inputFile, (err, data) => {
    if (err) {
      reject();
    } else {
      resolve(data);
    }
  });
});

const writeFile = (outputFile, data) => new Promise((resolve, reject) => {
  const obj = JSON.parse(data);
  const objSize = obj.length;
  const parsedData = YAML.stringify(obj.map(item => ({ ...item, objSize })));

  fs.writeFile(
    outputFile,
    parsedData,
    (err) => {
      if (err) {
        reject();
      } else {
        resolve(true);
      }
    },
  );
});

const jsonToYml = (inputFile, outputFile) => readFile(inputFile)
  .then(data => writeFile(outputFile, data));

export default jsonToYml;
