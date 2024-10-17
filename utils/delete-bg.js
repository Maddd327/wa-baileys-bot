const { removeBackground } = require('@imgly/background-removal-node');

const removeBg = async (img) => {
    const blob = await removeBackground(img);
    const buffer = Buffer.from(await blob.arrayBuffer());
    const dataURL = `data:image/png;base64,${buffer.toString("base64")}`;
    return dataURL;
}

module.exports = {
    removeBg
}