exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("rahui")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("rahui").insert([
        {
          id: 21,
          user_id: 1,
          iwi: JSON.stringify(["Ngati Haua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "A Rahui with polygon",
          korero:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
          geo_ref: JSON.stringify([{ lat: -36.836032, lng: 174.469357 }, { lat: -36.846032, lng: 174.70357 }, { lat: -36.816032, lng: 174.468357 }, { lat: -36.826032, lng: 174.469957 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Nanz',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"]),
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
          geo_ref: JSON.stringify([{ lat: -41.291369, lng: 174.784672 }, { lat: -41.299236, lng: 174.780209 }, { lat: -41.296367, lng: 174.774158 }, { lat: -41.291369, lng: 174.784672 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Nanz',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"])
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
          geo_ref: JSON.stringify([{ lat: -36.836032, lng: 174.469357 }, { lat: -36.846032, lng: 174.70357 }, { lat: -36.816032, lng: 174.468357 }, { lat: -36.826032, lng: 174.469957 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Nanz',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"])
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
          geo_ref: JSON.stringify([{ lat: -41.287499, lng: 174.753687 }, { lat: -41.299236, lng: 174.760296 }, { lat: -41.314646, lng: 174.737723 }, { lat: -41.315379, lng: 174.732734 }, { lat: -41.305934, lng: 174.733034 }, { lat: -41.297810, lng: 174.739043 }, { lat: -41.287499, lng: 174.753687 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Fudz',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"])
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
          geo_ref: JSON.stringify([{ lat: -36.836032, lng: 174.469357 }, { lat: -36.846032, lng: 174.70357 }, { lat: -36.816032, lng: 174.468357 }, { lat: -36.826032, lng: 174.469957 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Fudz',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"])
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
          geo_ref: JSON.stringify([{ lat: -36.836032, lng: 174.469357 }, { lat: -36.846032, lng: 174.70357 }, { lat: -36.816032, lng: 174.468357 }, { lat: -36.826032, lng: 174.469957 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Ash',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"])
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
          geo_ref: JSON.stringify([{ lat: -36.836032, lng: 174.469357 }, { lat: -36.846032, lng: 174.70357 }, { lat: -36.816032, lng: 174.468357 }, { lat: -36.826032, lng: 174.469957 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Luke',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"])
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
          geo_ref: JSON.stringify([{ lat: -36.836032, lng: 174.469357 }, { lat: -36.846032, lng: 174.70357 }, { lat: -36.816032, lng: 174.468357 }, { lat: -36.826032, lng: 174.469957 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Nanz',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"])
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
          geo_ref: JSON.stringify([{ lat: -36.836032, lng: 174.469357 }, { lat: -36.846032, lng: 174.70357 }, { lat: -36.816032, lng: 174.468357 }, { lat: -36.826032, lng: 174.469957 }]),
          date_placed: '12-11-2018',
          date_lifted: '15-11-2018',
          authoriser: 'Nanz',
          contact: 'Luke on his phone 021495030',
          region: JSON.stringify(["Tamaki"])
        },
        {
          id: 30,
          user_id: 10,
          iwi: JSON.stringify(["Ngati Whatua"]),
          hapu: JSON.stringify(["Ngati Hinga", "Ngati Ruinga"]),
          description:
            "Rahui imposed after Okahu Bay urupā flooding",
          korero:
            "Ngāti Whātua Ōrākei and Ngāti Whātua Ōrākei Reserves Board have imposed a three-day rahui on Okahu Bay, as floodwaters from their cemetery are cleared to the sea.",
          geo_ref: JSON.stringify([{ lat: -36.836032, lng: 174.469357 }, { lat: -36.846032, lng: 174.70357 }, { lat: -36.816032, lng: 174.468357 }, { lat: -36.826032, lng: 174.469957 }]),
          date_placed: '6-04-2017',
          date_lifted: '9-04-2017',
          authoriser: 'Koro',
          contact: '0508 NW Orakei',
          region: "Tamaki"
        },
        {
          id: 31,
          user_id: 11,
          iwi: JSON.stringify(["Ngāpuhi"]),
          hapu: JSON.stringify(["Ngati Kuta", "Patukeha ki Te Rawhiti"]),
          description:
            "Maunganui Bay / Deep Water Cove closed to all fishing (except for kina)",
          korero:
            "Maunganui Bay, on the Cape Brett Peninsula in the Bay of Islands, was first closed to all fishing except kina on 1 December 2010 for a two­ year period. It has been rolled over every two years since then. Ngati Kuta and Patukeha ki Te Rawhiti, the two resident hapu, have requested a further closure as they consider that more time is required to allow depleted stocks in Maunganui Bay to continue rebuilding. The two hapu have maintained a traditional rahui (closure) over Maunganui Bay since March 2009, due to their concern about the depletion of fish stocks. The further closure provides ongoing statutory support for the traditional rahui",
          geo_ref: JSON.stringify([{ lat: -35.16643533792861, lng: 174.3177917555065 }, { lat: -35.188043311071716, lng: 174.1965988233776 }, { lat: -35.23264419283272, lng: 174.2728164747448 }, { lat: -35.16643533792861, lng: 174.3177917555065 }
          ]),
          date_placed: '01-12-2010',
          date_lifted: '',
          authoriser: 'Robert Willoughby',
          contact: '09 403 7012',
          region: "Te Tai Tokerau"
        },
        {
          id: 32,
          user_id: 11,
          iwi: JSON.stringify(["Ngāti Kahungunu ki Heretaunga Tamatea"]),
          hapu: JSON.stringify(["Ngati Kere"]),
          description:
            "Rahui placed in Central Hawke's Bay coast after man's death",
          korero:
            "A rahui on collecting seafood has been placed around the Porangahau coastline after the death of a 22-year-old in the water in the area. A police spokesperson said the man was found dead on Tuesday morning after a search for a missing person was started at 8.55pm on Monday evening. The death is being referred to the coroner. The rahui is being imposed by the Ngati Kere Rohe Trust and is from Te Pairahi to Pari o mahu . Seafood gathering is prohibited for three weeks. Source:  New Zealand Herald",
          geo_ref: JSON.stringify([{
            lat: -40.47671907977636, lng: 176.6390091227281
          }, { lat: -40.282138531455324, lng: 176.65274203288436 }, { lat: -40.194079300972945, lng: 176.83401644694686 }, { lat: -40.233929805292064, lng: 176.9685989664781 }, { lat: -40.551889657265036, lng: 176.77908480632186 }, { lat: -40.47671907977636, lng: 176.6390091227281 }
          ]),
          date_placed: '04-04-2019',
          date_lifted: '25-04-2019',
          authoriser: 'Not stated',
          contact: 'Not stated',
          region: "Tākitimu"
        },
        {
          id: 33,
          user_id: 11,
          iwi: JSON.stringify(["Ngātiwai"]),
          hapu: JSON.stringify(["Te Whānau a Rangiwhaakahu"]),
          description:
            "Rahūi at Te Wai O Taniwhawas (also known as Mermaid Pools) designed to preserve the cultural, ecological and physical environment.",
          korero:
            "The Te Whanau ā Rangiwhakaahu hapū yesterday morning put a rāhui in place over the popular pools at the northern headland of Matapouri and the access route over the Rangitapu headland to restore their environment, cultural and spiritual wellbeing. A ceremony took place at Matapouri Beach at 5am yesterday to bless and dedicate a carved pou before those present went to the local marae to conclude the formalities. the picturesque, turquoise tidal rock pools are enormously popular and draw hundreds of people in a day during long weekends and holidays. Environmentalists, community groups, civic leaders and the local hapū have long been concerned about the degraded state of the pools and the condition of the track. Issues include no provision of basic infrastructure like a proper track, toilets or rubbish disposal facilities and all these will have to be addressed going forward, the hapu said. Hapū trust board chairman Aperahama Edwards said a rāhui should not discourage people from visiting Matapouri and surrounding areas.",
          geo_ref: JSON.stringify([
            { lat: -35.55578112464781, lng: 174.5075801639855 }, { lat: -35.56157660076433, lng: 174.51556241801381 }, { lat: -35.55878365253887, lng: 174.5185664921105 }, { lat: -35.55396558810553, lng: 174.50989759257436 }, { lat: -35.55578112464781, lng: 174.5075801639855 }
          ]),
          date_placed: '19-04-2019',
          date_lifted: '',
          authoriser: 'Aperahama (Abe) Edwards',
          contact: 'None',
          region: "Te Tai Tokerau"
        },
        {
          id: 34,
          user_id: 11,
          iwi: JSON.stringify(["Te Kawerau a Maki"]),
          hapu: JSON.stringify([""]),
          description:
            "Rāhui on Waitakere Ranges to protect kauri",
          korero:
            "A rāhui has been placed over the Waitakere Ranges by the mana whenua in a bid to stop the spread of kauri dieback disease. In August an Auckland Council report said the rate of kauri dieback in the ranges had more than doubled from 8 percent five years ago to 19 percent. Prominent scientist Peter de Lange warned the kauri are headed for extinction and the biggest problem was the spread of the dieback disease by people.",
          geo_ref: JSON.stringify([{}]),
          date_placed: '02-12-2019',
          date_lifted: '',
          authoriser: 'Edward Ashby',
          contact: '',
          region: "Tāmaki"
        },
      ]);
    });
};