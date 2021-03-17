const express = require("express");
const app = express();
const knex = require("./knexfile");

function getAll(req, res) {
  knex.knex.select("")
    .from('sake')
    .orderBy('prefectures_id')
    .then(sakes => res.send(sakes))
};

function getOne(req, res) {
  knex.knex.select("")
    .from('sake')
    .where('prefectures_english_name', req.params.prefectures_english_name)
    .orderBy('prefectures_id')
    .then(sake => res.send(sake))
};

function add(req, res) {
  knex.knex('sake')
    .insert({
      prefectures_english_name: "Bordeaux",
      prefectures_japanese_name: "ボルドー",
      sake_name: "ワイン"
    })
    .then(function () {
      knex.knex.select("").from('sake')
        .orderBy('prefectures_id')
        .then(sakes => res.send(sakes))
    })
};

function update(req, res) {
  knex.knex('sake')
    .where('prefectures_english_name', req.params.prefectures_english_name)
    .update({
      sake_name: "ワイン"
    })
    .then(function () {
      knex.knex.select("").from('sake')
        .orderBy('prefectures_id')
        .then(sakes => res.send(sakes))
    })
}

function eraser(req, res) {
  knex.knex('sake')
    .where('prefectures_english_name', req.params.prefectures_english_name)
    .del()
    .then(function () {
      knex.knex.select("").from('sake')
        .orderBy('prefectures_id')
        .then(sakes => res.send(sakes))
    })
};

app.get("/sake", getAll);
app.get("/sake/:prefectures_english_name", getOne);
app.post("/sake", add);
app.patch("/sake/:prefectures_english_name", update);
app.delete("/sake/:prefectures_english_name", eraser);

app.listen("3000", () => (console.log("localhost is 3000")))

module.exports = {
  getAll,
  getOne,
  add,
  update,
  eraser
};