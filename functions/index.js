const functions = require('firebase-functions');

const express = require("express");

const app = express();

const fs = require("fs");

const currentVersion = "v0.5.0";

const Router = require("./router");

const router = new Router(app,currentVersion);

router.configureRoutes();

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
