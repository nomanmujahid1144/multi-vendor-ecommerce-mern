const fs = require("fs");
const ErrorResponse = require("../utils/errorResponse");

exports.uploadImage = async (image, next) => {
  console.log("i was called");
  return new Promise((resolve, reject) => {
    if (!image.mimetype.startsWith("image") && !image.mimetype.startsWith("application")) {
      return next(new ErrorResponse(`Please upload an image file`, 400));
    }

    const path = `${process.env.FILE_UPLOAD_PATH}/${Math.floor(
      Math.random() * 100000 + 1
    )}.${image.name.replace(/\s/g, "")}`;
    image.mv(path, (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 400)); // next func error response
      }
      resolve({
        photoPath: path.slice(8),
      });
    });
  });
}

exports.randomPassword = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const passwordLength = Math.floor(Math.random() * 3) + 6; // Generates a length between 6 and 8

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
 
  return password;
}