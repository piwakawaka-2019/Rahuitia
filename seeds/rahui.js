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
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "[{lat: -41.267622, lng: 174.745222}, {lat: -41.261520, lng: 174.753413}, {lat: -41.267003, lng: 174.761482}, {lat: -41.270654, lng: 174.749472}]",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 22,
          user_id: 2,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "[{lat: -36.836032, lng: 174.469357}, {lat: -36.846032, lng: 174.70357}, {lat: -36.816032, lng: 174.468357}, {lat: -36.826032, lng: 174.469957}]",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 23,
          user_id: 3,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 24,
          user_id: 4,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 25,
          user_id: 5,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 26,
          user_id: 6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 27,
          user_id: 7,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 28,
          user_id: 8,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 29,
          user_id: 9,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        },
        {
          id: 30,
          user_id: 10,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: "",
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018'
        }
      ]);
    });
};
