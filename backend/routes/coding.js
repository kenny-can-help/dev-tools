var express = require("express");
var zlib = require('zlib');
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

router.post("/base64/encode", function (req, res) {
    res.json({data: Buffer.from(req.body.data).toString('base64')})
})

router.post("/base64/decode", function (req, res) {
    res.json({data: Buffer.from(req.body.data, 'base64').toString()})
})

router.post("/compress", function (req, res) {
    const type = req.query.type;
    const data = req.body.data;
    let result = null;
    const buffer = Buffer.from(data)
    switch (type)  {
        case 'gzip':
            result = zlib.gzipSync(buffer)
            break;
        case 'brotli':
            result = zlib.brotliCompressSync(buffer);
            break;
        default:
            result = zlib.deflateSync(buffer);
            break;

    }
    res.json({data: result.toString("base64")})
})

router.post("/decompress", function (req, res) {
    const type = req.query.type;
    const data = req.body.data;
    let result = null;
    const buffer = Buffer.from(data,"base64")
    switch (type)  {
        case 'gzip':
            result = zlib.unzipSync(buffer)
            break;
        case 'brotli':
            result = zlib.brotliDecompressSync(buffer);
            break;
        default:
            result = zlib.inflateSync(buffer);
            break;

    }
    res.json({data: result.toString('utf-8')})
})



module.exports = router;
