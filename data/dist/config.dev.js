"use strict";

var knex = require("knex");

var knexfile = require("../knexfile");

module.exports = knex(knexfile.development);