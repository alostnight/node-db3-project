const db = require("../data/config");

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(schemeId) {
    return db('steps as st')
    .join('schemes as s', 's.Id', 'st.scheme_id')
    .select('s.id', 's.scheme_name as Scheme', 'st.step_number as Step', 'st.instructions')
    .where('st.scheme_id', schemeId)
}

function add(scheme){
    return db("schemes")
    .insert(scheme)
    .then(id => {
        return findById(id[0]);
    });
}

function update(changes, id){
    return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id){
    return db("schemes")
    .where("id", id)
    .del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}