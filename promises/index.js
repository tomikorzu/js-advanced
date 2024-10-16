import kleur from "kleur";

console.log("Promises");

class fileDownload {
  constructor(fileName, fileSize, result) {
    this.fileName = fileName;
    this.fileSize = parseInt(fileSize);
    this.result = result;
  }

  download() {
    const randomTime = (Math.random() * 100).toFixed();
    const downloadTime = this.fileSize * randomTime;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.result) {
          resolve({
            name: this.fileName,
            time: downloadTime,
            message: `The download of the file "${
              this.fileName
            }" was successful in ${downloadTime / 1000} seconds`,
          });
        } else {
          reject({
            name: this.fileName,
            time: downloadTime,
            message: `The download of the file "${this.fileName}" failed in ${
              downloadTime / 1000
            } seconds`,
          });
        }
      }, downloadTime);
    });
  }
}

const windows = new fileDownload("Windows 11", "50mb", true);
const ubuntu = new fileDownload("Ubuntu", "25mb", true);
const macOS = new fileDownload("macOS", "5mb", true);

const downloads = [windows.download(), ubuntu.download(), macOS.download()];

Promise.all(downloads)
  .then((response) => allYes(response))
  .catch((error) =>
    console.log("Some downloads failed:", kleur.red(error.message))
  );

function allYes(response) {
  console.log(
    `${kleur.yellow(
      "All the files was downloaded successfully:"
    )} ${kleur.green(
      response.map((r) => {
        return r.message;
      })
    )}`
  );
}

Promise.allSettled(downloads).then((response) => whichYesAndNo(response));

function whichYesAndNo(response) {
  response.forEach((r) => {
    if (r.status === "fulfilled") {
      console.log(kleur.green(r.value.message));
    } else {
      console.log(kleur.red(r.reason.message));
    }
  });
}

Promise.any(downloads)
  .then((response) =>
    console.log(kleur.blue(`The first file downloaded was: ${response.name}`))
  )
  .catch((error) => console.log(kleur.red("All the files failed")));

Promise.race(downloads)
  .then((response) =>
    console.log(
      kleur.yellow(
        `The first file that finished was ${response.name} in ${
          response.time / 1000
        } seconds`
      )
    )
  )
  .catch((error) =>
    console.log(
      kleur.red(
        `The file which failed was ${error.name} in ${
          error.time / 1000
        } seconds`
      )
    )
  );
