exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("hapu")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("hapu").insert([
        {
          id: 81,
          user_id: 1,
          hapu_name: "Ngati Irakehu"
        },
        {
          id: 82,
          user_id: 2,
          hapu_name: "Ngati Kahungunu ki Heretaunga"
        },
        {
          id: 83,
          user_id: 3,
          hapu_name: "Hgati Tawhaki"
        },
        {
          id: 84,
          user_id: 4,
          hapu_name: "Ngati Makino"
        },
        {
          id: 85,
          user_id: 5,
          hapu_name: "Nga Paerangi"
        },
        {
          id: 86,
          user_id: 6,
          hapu_name: "Ngati Hine"
        },
        {
          id: 87,
          user_id: 7,
          hapu_name: "Nga Rauru"
        },
        {
          id: 88,
          user_id: 8,
          hapu_name: "Te Ati Awa"
        },
        {
          id: 89,
          user_id: 9,
          hapu_name: "Te Aupouri"
        },
        {
          id: 90,
          user_id: 10,
          hapu_name: "Rangitane"
        }
      ]);
    });
};