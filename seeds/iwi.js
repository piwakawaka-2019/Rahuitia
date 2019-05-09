exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("iwi")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("iwi").insert([
        {
          id: 61,
          user_id: 1,
          iwi_name: "Ngai Tahu"
        },
        {
          id: 62,
          user_id: 2,
          iwi_name: "Ngati Kahungunu"
        },
        {
          id: 63,
          user_id: 3,
          iwi_name: "Tuhoe"
        },
        {
          id: 64,
          user_id: 4,
          iwi_name: "Te Arawa"
        },
        {
          id: 65,
          user_id: 5,
          iwi_name: "Te Atihaunui-a-paparangi"
        },
        {
          id: 66,
          user_id: 6,
          iwi_name: "Nga Puhi"
        },
        {
          id: 67,
          user_id: 7,
          iwi_name: "Nga Rauru"
        },
        {
          id: 68,
          user_id: 8,
          iwi_name: "Te Ati Awa"
        },
        {
          id: 69,
          user_id: 9,
          iwi_name: "Te Aupouri"
        },
        {
          id: 70,
          user_id: 10,
          iwi_name: "Rangitane"
        }
      ]);
    });
};
