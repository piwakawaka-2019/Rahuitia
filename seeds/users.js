exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
      
        {
        id: 11,
          first_name: "Robert",
          middle_name: "",
          last_name: "Willoughby",
          address: "",
          email: ""
        },
        {
          id: 12,
          first_name: "Rangi",
          middle_name: "",
          last_name: "Leaf",
          address: "",
          email: ""
        },
        {
          id: 13,
          first_name: "Aperahama",
          middle_name: "",
          last_name: "Edwards",
          address: "Kensington blvd",
          email: ""
        },
        {
          id: 14,
          first_name: "Edward",
          middle_name: "",
          last_name: "Ashby",
          address: "Sorghum place",
          email: ""
        }
      ]);
    });
};
