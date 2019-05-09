exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tautoko")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tautoko").insert([
        {
          id: 41,
          user_id: 1,
          rahui_id: 21
        },
        {
          id: 42,
          user_id: 2,
          rahui_id: 22
        },
        {
          id: 43,
          user_id: 3,
          rahui_id: 23
        },
        {
          id: 44,
          user_id: 4,
          rahui_id: 24
        },
        {
          id: 45,
          user_id: 5,
          rahui_id: 25
        },
        {
          id: 46,
          user_id: 6,
          rahui_id: 26
        },
        {
          id: 47,
          user_id: 7,
          rahui_id: 27
        },
        {
          id: 48,
          user_id: 8,
          rahui_id: 28
        },
        {
          id: 49,
          user_id: 9,
          rahui_id: 29
        },
        {
          id: 50,
          user_id: 10,
          rahui_id: 30
        }
      ]);
    });
};
