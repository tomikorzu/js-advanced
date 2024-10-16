console.log("Promises");

class fileDownload {
  constructor(fileName, fileSize) {
    this.fileName = fileName;
    this.fileSize = fileSize;
  }
  download() {
    const time = this.fileSize * 100;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          `The download of the file "${this.fileName}" was successful in ${
            time / 1000
          } seconds`
        );
      }, time);
    });
  }
}

const windows = new fileDownload("Windows 11", 50);
const ubuntu = new fileDownload("Ubuntu", 25);

Promise.all([windows.download(), ubuntu.download()])
  .then((response) => console.log(response))
  .catch((error) => console.log("There was an error:", error));
