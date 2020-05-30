//metodo up é para criacao de tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

//O metodo down é pra desfazer algo que deu errado na tabela (voltar pra outra)
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
