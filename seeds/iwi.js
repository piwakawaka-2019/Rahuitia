exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("rahui")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("rahui").insert([
        {
          id: 21,
          user_id: 1,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "A Rahui with polygon",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -36.836032, lng: 174.469357},{lat: -36.846032, lng: 174.70357},{lat: -36.816032, lng: 174.468357},{lat: -36.826032, lng: 174.469957}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 22,
          user_id: 2,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "This is a Rahui with polygon",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -41.291369, lng: 174.784672},{lat: -41.299236, lng: 174.780209},{lat: -41.296367, lng: 174.774158},{lat: -41.291369, lng:  174.784672}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 23,
          user_id: 3,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -36.836032, lng: 174.469357},{lat: -36.846032, lng: 174.70357},{lat: -36.816032, lng: 174.468357},{lat: -36.826032, lng: 174.469957}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 24,
          user_id: 4,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -41.287499, lng: 174.753687},{lat: -41.299236, lng: 174.760296},{lat: -41.314646, lng: 174.737723},{lat:-41.315379, lng: 174.732734},{lat: -41.305934, lng:  174.733034},{lat: -41.297810, lng:  174.739043},{lat: -41.287499, lng: 174.753687}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        
        {
          id: 25,
          user_id: 5,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -36.836032, lng: 174.469357},{lat: -36.846032, lng: 174.70357},{lat: -36.816032, lng: 174.468357},{lat: -36.826032, lng: 174.469957}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 26,
          user_id: 6,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -36.836032, lng: 174.469357},{lat: -36.846032, lng: 174.70357},{lat: -36.816032, lng: 174.468357},{lat: -36.826032, lng: 174.469957}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 27,
          user_id: 7,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -36.836032, lng: 174.469357},{lat: -36.846032, lng: 174.70357},{lat: -36.816032, lng: 174.468357},{lat: -36.826032, lng: 174.469957}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 28,
          user_id: 8,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -36.836032, lng: 174.469357},{lat: -36.846032, lng: 174.70357},{lat: -36.816032, lng: 174.468357},{lat: -36.826032, lng: 174.469957}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 29,
          user_id: 9,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -36.836032, lng: 174.469357},{lat: -36.846032, lng: 174.70357},{lat: -36.816032, lng: 174.468357},{lat: -36.826032, lng: 174.469957}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 30,
          user_id: 10,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{lat: -36.836032, lng: 174.469357},{lat: -36.846032, lng: 174.70357},{lat: -36.816032, lng: 174.468357},{lat: -36.826032, lng: 174.469957}]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        }
      ]);
    });
};