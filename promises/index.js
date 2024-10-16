import kleur from "kleur";

console.log("Promises");

class fileDownload {
  constructor(fileName, fileSize, result) {
    this.fileName = fileName;
    this.fileSize = parseInt(fileSize);
    this.result = result;
  }

  download() {
    const randomTime = Math.floor(Math.random() * 100);
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

const windows = new fileDownload("Windows 11", "50mb", false);
const ubuntu = new fileDownload("Ubuntu", "25mb", true);
const macOS = new fileDownload("macOS", "5mb", true);

const downloads = [windows.download(), ubuntu.download(), macOS.download()];

Promise.all(downloads)
  .then((response) =>
    console.log(
      response.map((r) => {
        return r.message;
      })
    )
  )
  .catch((error) => console.log("There was an error:", error));

Promise.any(downloads)
  .then((response) =>
    console.log(
      `The first file that was downloaded was ${kleur.green(response.name)}`
    )
  )
  .catch((error) => console.log("There was an error:", error));
