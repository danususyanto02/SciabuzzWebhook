const express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    PORT = 8080,
    keyAction = require("robotjs"),
    sayText = require('say');


app.use(bodyParser.json());

app.post("/", (request, respond) => {

    // amount itu jumlah donasi
    // donator_nama itu nama si donaturnya
    // donator_email itu email si donatornya
    // message itu pesan dari donator

    sayText.speak('Donasi ' + request.body.amount + 'Dari ' + request.body.supporter);
    console.log('Donasi Dari: ' + request.body.supporter);
    console.log('Donasi Sebesar: ' + request.body.amount);

    var timer = Date.now();

    if (request.body.amount >= 10000 && request.body.amount <= 15000) {

        while ((Date.now() - timer) < 10000) {
            keyAction.keyTap("1");
            keyAction.keyTap("2");
            keyAction.keyTap("3");
        }

    } else if (request.body.amount > 15000 && request.body.amount <= 25000) {

        while ((Date.now() - timer) < 10000) {
            keyAction.keyTap("g");
        }

    } else if (request.body.amount > 25000 && request.body.amount <= 35000) {

        keyAction.keyTap("X");

    } else if (request.body.amount > 35000 && request.body.amount <= 50000) {

        while ((Date.now() - timer) < 10000) {
            keyAction.keyToggle('w', 'down');
        }
        keyAction.keyToggle('w', 'up');

    } else if (request.body.amount > 50000 && request.body.amount <= 70000) {

        while ((Date.now() - timer) < 10000) {
            keyAction.keyTap("space");
        }


    } else if (request.body.amount >= 90000) {

        keyAction.keyTap("f4", ["alt"]);
        keyAction.moveMouse(594, 560);
        keyAction.mouseClick();

    }

    respond.status(200).end();
})

app.listen(PORT, () => console.log(`Program Berjalan Pada Port: ${PORT}`));
