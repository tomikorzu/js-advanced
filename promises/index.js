import kleur from "kleur";

console.log("Promises");

class fileDownload {
  constructor(fileName, fileSize) {
    this.fileName = fileName;
    this.fileSize = fileSize;
  }
  download() {
    const randomTime = Math.floor(Math.random() * 100);
    const fileSizeInMB = parseInt(this.fileSize);
    const time = fileSizeInMB * randomTime;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: this.fileName,
          time: time,
          message: `The download of the file "${
            this.fileName
          }" was successful in ${time / 1000} seconds`,
        });
      }, time);
    });
  }
}

const windows = new fileDownload("Windows 11", "50mb");
const ubuntu = new fileDownload("Ubuntu", "25mb");

const downloads = [windows.download(), ubuntu.download()];

Promise.all(downloads)
  .then((response) => console.log(response.map((r) => {return r.message})))
  .catch((error) => console.log("There was an error:", error));


Promise.any(downloads)
  .then((response) =>
    console.log(
      `The first file that was downloaded was ${kleur.green(
        response.name
      )}`
    )
  )
  .catch((error) => console.log("There was an error:", error));
