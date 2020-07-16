
exports.seed = async function(knex) {
      await knex('user').insert([
        {id: 1, username: 'testname', password: 'temporarypassword'},
        {id: 2, username: 'nametwo', passoword: 'test'},
      ]);
};
