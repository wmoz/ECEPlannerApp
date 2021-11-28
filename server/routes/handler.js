const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [
        {
            "name": "bla",
            "msg": "bla bla bla",
            "username": "bla"
        },
        {
            "name": "bla",
            "msg": "bla bla bla",
            "username": "bla"
        },
        {
            "name": "bla",
            "msg": "bla bla bla",
            "username": "bla"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});
router.get('/', function (req, res) {
    res.end('NA');
  });

module.exports = router;