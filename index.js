const express = require("express");
const app = express();
const knex = require("./knexfile");

//ODERBY でソートする！！！！！！！１

function getAll(req, res) {
  knex.knex.select("")
    .from('sake')
    .then(sakes => res.send(sakes))
};

function getOne(req, res) {
  console.log("reqOne: ", req.params.prefectures_id)
  knex.knex.select("")
    .from('sake')
    .where('prefectures_id', req.params.prefectures_id)
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
        .then(sakes => res.send(sakes))
    })
};

function update(req, res) {
  knex.knex('sake')
    .where('prefectures_id', req.params.prefectures_id)
    .update({
      sake_name: "ワイン"
    })
    .then(function () {
      knex.knex.select("").from('sake')
        .then(sakes => res.send(sakes))
    })
}

function eraser(req, res) {
  knex.knex('sake')
    .where('prefectures_id', req.params.prefectures_id)
    .del()
    .then(function () {
      knex.knex.select("").from('sake')
        .then(sakes => res.send(sakes))
    })
};

app.get("/sake", getAll);
app.get("/sake/:prefectures_id", getOne);
app.post("/sake", add);
app.patch("/sake/:prefectures_id", update);
app.delete("/sake/:prefectures_id", eraser);

app.listen("3000", () => (console.log("localhost is 3000")))

module.exports = {
  getAll,
  getOne,
  add,
  update,
  eraser
};