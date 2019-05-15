exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("hapu")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("hapu").insert([
        
        {
          id: 81,
          user_id: 11,
          hapu_name: ["Ngati Kuta", "Patukeha ki Te Rawhiti"]
        },
        {
          id: 82,
          user_id: 12,
          hapu_name: "Ngati Kere"
        },
        {
          id: 83,
          user_id: 13,
          hapu_name: "Te Whānau a Rangiwhaakahu"
        },
        {
          id: 84,
          user_id: 14,
          hapu_name: ""
        }
      ]);
    });
};