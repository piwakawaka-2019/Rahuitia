exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          first_name: "Fudz",
          middle_name: "Raw",
          last_name: "",
          address: "for example 123",
          email: "wakefieldraw@gmail.com"
        },
        {
          id: 2,
          first_name: "Jorge",
          middle_name: "",
          last_name: "Korako",
          address: "for example 456",
          email: "anotherexample@gmail.com"
        },
        {
          id: 3,
          first_name: "Manu",
          middle_name: "huia",
          last_name: "Vatuvei",
          address: "for example 789 ",
          email: "example@gmail.com"
        },
        {
          id: 4,
          first_name: "Blaine",
          middle_name: "Piwakawaka",
          last_name: "Western",
          address: "Germany 123",
          email: "Bw@gmail.com"
        },
        {
          id: 5,
          first_name: "Ash",
          middle_name: "Ketchum",
          last_name: "Vivier",
          address: "Zimbabwe 1234",
          email: "ashv@gmail.com"
        },
        {
          id: 6,
          first_name: "Nanz",
          middle_name: "CSS",
          last_name: "Bootstrap",
          address: "123 middle earth",
          email: "nanzcss@gmail.com"
        },
        {
          id: 7,
          first_name: "Robbie",
          middle_name: "Roberto",
          last_name: "Great",
          address: "EnspiralDevAcademy",
          email: "robthegr8@gmail.com"
        },
        {
          id: 8,
          first_name: "Des",
          middle_name: "the notorious",
          last_name: "McGregor",
          address: "Ireland 789",
          email: "ilovenz@gmail.com"
        },
        {
          id: 9,
          first_name: "Cliff",
          middle_name: "Raichu",
          last_name: "Anton",
          address: "Lastarria 440",
          email: "cliffton47@gmail.com"
        },
        {
          id: 10,
          first_name: "Devon",
          middle_name: "Patrick",
          last_name: "Lumsden",
          address: "kia ora 469",
          email: "arts74@gmail.com"
        }
      ]);
    });
};


{lat: -35.55578112464781, lng: 174.5075801639855}, {lat: -35.56157660076433, lng: 174.51556241801381}, {lat: -35.55878365253887, lng: 174.5185664921105}, {lat: -35.55396558810553, lng: 174.50989759257436}