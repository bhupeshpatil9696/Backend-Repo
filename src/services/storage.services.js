const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.MAGEKIT_PRIVATE_KEY,
});

async function uploadfile(file) {
    const result = await imagekit.files.upload({
        file: file.buffer.toString("base64"),
        fileName: "home",
    });

    return result;
}

module.exports = { uploadfile };