const moment = require('moment');

const movies = [
  {
    id: "mv01",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDUzODgxOTktODllNi00ZDA5LWI3YjktYTk0MWIwOGZlYmIwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "The Specials",
    summary:
      "For twenty years, Bruno and Malik have lived in a different world—the world of autistic children and teens. In charge of two separate nonprofit organizations (The Hatch & The Shelter), they train young people from underprivileged areas to be caregivers for extreme cases that have been refused by all other institutions. It’s an exceptional partnership, outside of traditional settings, for some quite extraordinary characters.",
    sessions: ["ss01", "ss07", "ss13"]
  },
  {
    id: "mv02",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzcyZDNlNDktOWRhYy00ODQ5LTg1ODQtZmFmZTIyMjg2Yjk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Ford v Ferrari",
    summary:
      "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
    sessions: ["ss02", "ss08", "ss14"]
  },
  {
    id: "mv03",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDZmN2ZjMDgtZWM5MS00MDYzLWEzOGQtNzAzOGEyMzY0OTU1XkEyXkFqcGdeQXVyMzQxMDgxOTM@._V1_.jpg",
    title: "Awoken",
    summary:
      "Karla, a young medical student, is trying to cure her brother, Blake, from a terminal sleep illness called Fatal Familial Insomnia, where you are unable to sleep until you die. On her quest to treat him, a more sinister reason for his condition is revealed.",
    sessions: ["ss03", "ss09", "ss15"]
  },
  {
    id: "mv04",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTY1OTQyM2YtM2ZjOC00OWQwLTkzM2YtZjAyOGZkYjlhNWFhXkEyXkFqcGdeQXVyMTk5MzE1MTY@._V1_.jpg",
    title: "Arctic Dogs",
    summary:
      "Animals band together to save the day when the evil Otto Von Walrus hatches a sinister scheme to accelerate global warming and melt the Arctic Circle.",
    sessions: ["ss04", "ss10", "ss12"]
  },
  {
    id: "mv05",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2RlMjcyMGQtZTU3OC00NGRlLWExMGEtYjU3ZjUyMDc0NWZmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
    title: "The Foreigner",
    summary:
      "Quan is a humble London businessman whose long-buried past erupts in a revenge-fueled vendetta when the only person left for him to love – his teenage daughter – dies in a senseless act of politically-motivated terrorism. His relentless search to find the terrorists leads to a cat-and-mouse conflict with a British government official whose own past may hold the clues to the identities of the elusive killers.",
    sessions: ["ss05", "ss06", "ss11"]
  },
  {
    id: "mv06",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTcyMTQzMDIwNl5BMl5BanBnXkFtZTgwMTY1NjgzMzI@._V1_.jpg",
    title: "Professor Marston and the Wonder Women",
    summary:
      "The unconventional life of Dr. William Marston, the Harvard psychologist and inventor who helped invent the modern lie detector test and created Wonder Woman in 1941.",
    sessions: ["ss16", "ss19", "ss22"]
  },
  {
    id: "mv07",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
    title: "Star Wars: The Rise of Skywalker",
    summary:
      "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
    sessions: ["ss17", "ss23", "ss29"]
  },
  {
    id: "mv08",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQ0Mjk1YjItNWI1Ny00NWE2LWFlYTAtYjViY2YzMTVlOGVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Motherless Brooklyn",
    summary:
      "Lionel Essrog, a private detective living with Tourette syndrome, ventures to solve the murder of his mentor and best friend — a mystery that carries him from the gin-soaked jazz clubs of Harlem to the slums of Brooklyn to the gilded halls of New York's power brokers.",
    sessions: ["ss18", "ss27", "ss33"]
  },
  {
    id: "mv09",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTQ4ZmY0NjgtYzVhNy00NzhiLTk3YTYtNzM1MTdjM2VhZDA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Last Christmas",
    summary:
      "Kate is a young woman subscribed to bad decisions. Her last date with disaster? That of having accepted to work as Santa's elf for a department store. However, she meets Tom there. Her life takes a new turn. For Kate, it seems too good to be true.",
    sessions: ["ss20", "ss26", "ss34"]
  },
  {
    id: "mv10",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Jumanji: The Next Level",
    summary:
      "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
    sessions: ["ss21", "ss24", "ss30"]
  },
  {
    id: "mv11",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    title: "Frozen II",
    summary:
      "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    sessions: ["ss28", "ss31", "ss32"]
  },
  {
    id: "mv12",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    title: "The Matrix",
    summary:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    sessions: ["ss25", "ss35"]
  }
];

const sessions = [
  {
    id: "ss01",
    time: moment().hour(12).minutes(0).add({ days: 0, minutes: 0 }),
    seatsBooked: [
      {row: 4, place: 1},
      {row: 5, place: 10},
      {row: 2, place: 6},
      {row: 2, place: 8},
      {row: 4, place: 4},
      {row: 5, place: 4},
      {row: 1, place: 2}
    ]
  },
  {
    id: "ss02",
    time: moment().hour(12).minutes(0).add({ days: 0, minutes: 150 }),
    seatsBooked: [
      {row: 4, place: 4}
    ]
  },
  {
    id: "ss03",
    time: moment().hour(12).minutes(0).add({ days: 0, minutes: 300 }),
    seatsBooked: [
      {row: 4, place: 3},
      {row: 1, place: 9},
      {row: 4, place: 3},
      {row: 3, place: 5},
      {row: 2, place: 3},
      {row: 3, place: 8},
      {row: 2, place: 7},
      {row: 1, place: 1},
      {row: 5, place: 5},
      {row: 2, place: 8},
      {row: 5, place: 4},
      {row: 2, place: 8},
      {row: 4, place: 2},
      {row: 5, place: 2},
      {row: 4, place: 9}
    ]
  },
  {
    id: "ss04",
    time: moment().hour(12).minutes(0).add({ days: 0, minutes: 450 }),
    seatsBooked: [
      {row: 1, place: 7},
      {row: 4, place: 3},
      {row: 4, place: 3},
      {row: 5, place: 9},
      {row: 5, place: 1},
      {row: 1, place: 5},
      {row: 5, place: 5},
      {row: 4, place: 4},
      {row: 2, place: 5},
      {row: 5, place: 8},
      {row: 2, place: 7},
      {row: 5, place: 10}
    ]
  },
  {
    id: "ss05",
    time: moment().hour(12).minutes(0).add({ days: 0, minutes: 600 }),
    seatsBooked: [
      {row: 4, place: 2},
      {row: 1, place: 8},
      {row: 2, place: 1},
      {row: 3, place: 10},
      {row: 1, place: 9},
      {row: 3, place: 3},
      {row: 4, place: 5},
      {row: 2, place: 6},
      {row: 4, place: 3},
      {row: 4, place: 8},
      {row: 5, place: 8},
      {row: 4, place: 1},
      {row: 4, place: 6},
      {row: 2, place: 4},
      {row: 1, place: 1},
      {row: 1, place: 9},
      {row: 5, place: 2}
    ]
  },
  {
    id: "ss06",
    time: moment().hour(12).minutes(0).add({ days: 1, minutes: 0 }),
    seatsBooked: [
      {row: 5, place: 6},
      {row: 3, place: 9},
      {row: 2, place: 8},
      {row: 4, place: 4},
      {row: 1, place: 3},
      {row: 3, place: 6}
    ]
  },
  {
    id: "ss07",
    time: moment().hour(12).minutes(0).add({ days: 1, minutes: 150 }),
    seatsBooked: [
      {row: 2, place: 6},
      {row: 2, place: 1},
      {row: 3, place: 6},
      {row: 5, place: 5},
      {row: 3, place: 6},
      {row: 4, place: 6},
      {row: 3, place: 1}
    ]
  },
  {
    id: "ss08",
    time: moment().hour(12).minutes(0).add({ days: 1, minutes: 300 }),
    seatsBooked: [
      {row: 1, place: 7},
      {row: 4, place: 9},
      {row: 4, place: 2},
      {row: 3, place: 10},
      {row: 2, place: 1},
      {row: 1, place: 2},
      {row: 5, place: 8},
      {row: 2, place: 3},
      {row: 2, place: 2},
      {row: 4, place: 1},
      {row: 5, place: 5},
      {row: 2, place: 1},
      {row: 5, place: 9}
    ]
  },
  {
    id: "ss09",
    time: moment().hour(12).minutes(0).add({ days: 1, minutes: 450 }),
    seatsBooked: [
      {row: 5, place: 10},
      {row: 3, place: 5},
      {row: 4, place: 9},
      {row: 5, place: 1},
      {row: 4, place: 4},
      {row: 2, place: 3},
      {row: 5, place: 4},
      {row: 5, place: 1},
      {row: 5, place: 9},
      {row: 3, place: 6},
      {row: 5, place: 10},
      {row: 5, place: 3},
      {row: 1, place: 4},
      {row: 4, place: 3}
    ]
  },
  {
    id: "ss10",
    time: moment().hour(12).minutes(0).add({ days: 1, minutes: 600 }),
    seatsBooked: [
      {row: 5, place: 7}
    ]
  },
  {
    id: "ss11",
    time: moment().hour(12).minutes(0).add({ days: 2, minutes: 0 }),
    seatsBooked: [
      {row: 5, place: 7},
      {row: 4, place: 9},
      {row: 3, place: 1},
      {row: 2, place: 6},
      {row: 4, place: 1},
      {row: 4, place: 8},
      {row: 4, place: 5},
      {row: 5, place: 4}
    ]
  },
  {
    id: "ss12",
    time: moment().hour(12).minutes(0).add({ days: 2, minutes: 150 }),
    seatsBooked: [
      {row: 1, place: 4},
      {row: 3, place: 4},
      {row: 2, place: 6},
      {row: 5, place: 4},
      {row: 1, place: 8},
      {row: 4, place: 8},
      {row: 3, place: 8},
      {row: 2, place: 2},
      {row: 2, place: 9}
    ]
  },
  {
    id: "ss13",
    time: moment().hour(12).minutes(0).add({ days: 2, minutes: 300 }),
    seatsBooked: [
      {row: 3, place: 7}
    ]
  },
  {
    id: "ss14",
    time: moment().hour(12).minutes(0).add({ days: 2, minutes: 450 }),
    seatsBooked: [
      {row: 3, place: 6},
      {row: 3, place: 10},
      {row: 1, place: 3},
      {row: 5, place: 6},
      {row: 1, place: 5},
      {row: 3, place: 4},
      {row: 1, place: 10},
      {row: 5, place: 6},
      {row: 4, place: 9},
      {row: 3, place: 9},
      {row: 4, place: 5},
      {row: 4, place: 7},
      {row: 4, place: 7},
      {row: 4, place: 9},
      {row: 1, place: 10},
      {row: 4, place: 1},
      {row: 3, place: 6},
      {row: 1, place: 5}
    ]
  },
  {
    id: "ss15",
    time: moment().hour(12).minutes(0).add({ days: 2, minutes: 600 }),
    seatsBooked: [
      {row: 4, place: 7},
      {row: 4, place: 9},
      {row: 5, place: 9},
      {row: 1, place: 2},
      {row: 1, place: 5},
      {row: 5, place: 5},
      {row: 2, place: 5},
      {row: 2, place: 2},
      {row: 5, place: 6},
      {row: 4, place: 1},
      {row: 3, place: 3},
      {row: 5, place: 2},
      {row: 2, place: 7},
      {row: 4, place: 9}
    ]
  },
  {
    id: "ss16",
    time: moment().hour(12).minutes(0).add({ days: 3, minutes: 0 }),
    seatsBooked: [
      {row: 5, place: 4},
      {row: 1, place: 9},
      {row: 2, place: 7},
      {row: 1, place: 2},
      {row: 3, place: 6},
      {row: 5, place: 3},
      {row: 3, place: 1},
      {row: 2, place: 7}
    ]
  },
  {
    id: "ss17",
    time: moment().hour(12).minutes(0).add({ days: 3, minutes: 150 }),
    seatsBooked: [
      {row: 1, place: 8},
      {row: 4, place: 8},
      {row: 5, place: 2},
      {row: 4, place: 4},
      {row: 5, place: 5},
      {row: 5, place: 5},
      {row: 4, place: 2},
      {row: 1, place: 5},
      {row: 1, place: 2},
      {row: 2, place: 1},
      {row: 1, place: 8},
      {row: 2, place: 4},
      {row: 3, place: 2},
      {row: 2, place: 10},
      {row: 2, place: 8},
      {row: 4, place: 1},
      {row: 1, place: 8},
      {row: 1, place: 10}
    ]
  },
  {
    id: "ss18",
    time: moment().hour(12).minutes(0).add({ days: 3, minutes: 300 }),
    seatsBooked: [
      {row: 4, place: 9},
      {row: 1, place: 5},
      {row: 1, place: 10},
      {row: 4, place: 6},
      {row: 2, place: 1},
      {row: 2, place: 9},
      {row: 5, place: 4},
      {row: 1, place: 3},
      {row: 2, place: 6},
      {row: 3, place: 5},
      {row: 4, place: 9},
      {row: 3, place: 10}
    ]
  },
  {
    id: "ss19",
    time: moment().hour(12).minutes(0).add({ days: 3, minutes: 450 }),
    seatsBooked: [
      {row: 3, place: 6},
      {row: 1, place: 5},
      {row: 3, place: 4},
      {row: 2, place: 8},
      {row: 5, place: 4},
      {row: 2, place: 5},
      {row: 4, place: 8},
      {row: 3, place: 6},
      {row: 2, place: 7},
      {row: 2, place: 3}
    ]
  },
  {
    id: "ss20",
    time: moment().hour(12).minutes(0).add({ days: 3, minutes: 600 }),
    seatsBooked: [
      {row: 2, place: 7},
      {row: 3, place: 2},
      {row: 2, place: 6},
      {row: 3, place: 3},
      {row: 4, place: 3},
      {row: 3, place: 8},
      {row: 4, place: 7},
      {row: 4, place: 9},
      {row: 1, place: 5},
      {row: 5, place: 9},
      {row: 2, place: 1}
    ]
  },
  {
    id: "ss21",
    time: moment().hour(12).minutes(0).add({ days: 4, minutes: 0 }),
    seatsBooked: [
      {row: 4, place: 7},
      {row: 5, place: 4},
      {row: 5, place: 4},
      {row: 2, place: 6},
      {row: 1, place: 2},
      {row: 2, place: 1},
      {row: 1, place: 3},
      {row: 1, place: 7},
      {row: 3, place: 9},
      {row: 1, place: 8},
      {row: 2, place: 9},
      {row: 3, place: 8},
      {row: 2, place: 6},
      {row: 2, place: 10},
      {row: 3, place: 4},
      {row: 4, place: 7},
      {row: 1, place: 1},
      {row: 3, place: 6}
    ]
  },
  {
    id: "ss22",
    time: moment().hour(12).minutes(0).add({ days: 4, minutes: 150 }),
    seatsBooked: [
      {row: 4, place: 9},
      {row: 1, place: 4},
      {row: 1, place: 4},
      {row: 4, place: 7},
      {row: 5, place: 7},
      {row: 2, place: 9},
      {row: 5, place: 8},
      {row: 5, place: 1}
    ]
  },
  {
    id: "ss23",
    time: moment().hour(12).minutes(0).add({ days: 4, minutes: 300 }),
    seatsBooked: [
      {row: 3, place: 9},
      {row: 1, place: 8},
      {row: 2, place: 5},
      {row: 3, place: 2},
      {row: 2, place: 7},
      {row: 2, place: 6},
      {row: 4, place: 7},
      {row: 2, place: 1},
      {row: 5, place: 5},
      {row: 2, place: 4}
    ]
  },
  {
    id: "ss24",
    time: moment().hour(12).minutes(0).add({ days: 4, minutes: 450 }),
    seatsBooked: [
      {row: 3, place: 9},
      {row: 5, place: 1},
      {row: 4, place: 5},
      {row: 4, place: 6},
      {row: 4, place: 8},
      {row: 5, place: 5},
      {row: 4, place: 9},
      {row: 5, place: 2},
      {row: 1, place: 4},
      {row: 1, place: 10}
    ]
  },
  {
    id: "ss25",
    time: moment().hour(12).minutes(0).add({ days: 4, minutes: 600 }),
    seatsBooked: [
      {row: 1, place: 8}
    ]
  },
  {
    id: "ss26",
    time: moment().hour(12).minutes(0).add({ days: 5, minutes: 0 }),
    seatsBooked: [
      {row: 3, place: 4},
      {row: 5, place: 2},
      {row: 2, place: 6},
      {row: 5, place: 5},
      {row: 1, place: 1}
    ]
  },
  {
    id: "ss27",
    time: moment().hour(12).minutes(0).add({ days: 5, minutes: 150 }),
    seatsBooked: [
      {row: 3, place: 4},
      {row: 3, place: 6},
      {row: 1, place: 8},
      {row: 2, place: 10},
      {row: 5, place: 6},
      {row: 1, place: 7},
      {row: 5, place: 3},
      {row: 3, place: 4}
    ]
  },
  {
    id: "ss28",
    time: moment().hour(12).minutes(0).add({ days: 5, minutes: 300 }),
    seatsBooked: [
      {row: 1, place: 8},
      {row: 2, place: 1},
      {row: 4, place: 5},
      {row: 2, place: 4}
    ]
  },
  {
    id: "ss29",
    time: moment().hour(12).minutes(0).add({ days: 5, minutes: 450 }),
    seatsBooked: [
      {row: 5, place: 8},
      {row: 1, place: 5},
      {row: 3, place: 10},
      {row: 3, place: 4},
      {row: 4, place: 10},
      {row: 2, place: 8},
      {row: 1, place: 7},
      {row: 5, place: 1},
      {row: 1, place: 3},
      {row: 5, place: 10},
      {row: 5, place: 8},
      {row: 1, place: 10},
      {row: 3, place: 5},
      {row: 1, place: 6},
      {row: 3, place: 1},
      {row: 4, place: 8},
      {row: 4, place: 6},
      {row: 2, place: 1}
    ]
  },
  {
    id: "ss30",
    time: moment().hour(12).minutes(0).add({ days: 5, minutes: 600 }),
    seatsBooked: [
      {row: 4, place: 2},
      {row: 5, place: 1},
      {row: 1, place: 1},
      {row: 5, place: 2},
      {row: 3, place: 7}
    ]
  },
  {
    id: "ss31",
    time: moment().hour(12).minutes(0).add({ days: 6, minutes: 0 }),
    seatsBooked: [
      {row: 3, place: 2},
      {row: 2, place: 7},
      {row: 3, place: 1},
      {row: 1, place: 5},
      {row: 1, place: 5},
      {row: 5, place: 1},
      {row: 3, place: 8},
      {row: 2, place: 3}
    ]
  },
  {
    id: "ss32",
    time: moment().hour(12).minutes(0).add({ days: 6, minutes: 150 }),
    seatsBooked: [
      {row: 1, place: 3},
      {row: 5, place: 5},
      {row: 1, place: 2},
      {row: 5, place: 4},
      {row: 4, place: 4},
      {row: 2, place: 8},
      {row: 5, place: 7},
      {row: 4, place: 7},
      {row: 2, place: 4},
      {row: 4, place: 10},
      {row: 3, place: 7},
      {row: 3, place: 8},
      {row: 3, place: 1},
      {row: 5, place: 6},
      {row: 5, place: 6},
      {row: 5, place: 6},
      {row: 1, place: 2},
      {row: 3, place: 8},
      {row: 5, place: 7}
    ]
  },
  {
    id: "ss33",
    time: moment().hour(12).minutes(0).add({ days: 6, minutes: 300 }),
    seatsBooked: [
      {row: 5, place: 4},
      {row: 2, place: 3},
      {row: 2, place: 4},
      {row: 2, place: 10},
      {row: 5, place: 1},
      {row: 4, place: 10},
      {row: 1, place: 3},
      {row: 3, place: 9},
      {row: 2, place: 4},
      {row: 3, place: 1},
      {row: 2, place: 3}
    ]
  },
  {
    id: "ss34",
    time: moment().hour(12).minutes(0).add({ days: 6, minutes: 450 }),
    seatsBooked: [
      {row: 3, place: 4},
      {row: 2, place: 2},
      {row: 2, place: 7},
      {row: 5, place: 6},
      {row: 4, place: 10},
      {row: 4, place: 7},
      {row: 1, place: 1},
      {row: 3, place: 4},
      {row: 3, place: 8},
      {row: 5, place: 7},
      {row: 5, place: 9},
      {row: 2, place: 5},
      {row: 3, place: 2},
      {row: 3, place: 4},
      {row: 5, place: 7}
    ]
  },
  {
    id: "ss35",
    time: moment().hour(12).minutes(0).add({ days: 6, minutes: 600 }),
    seatsBooked: [
      {row: 3, place: 5},
      {row: 1, place: 5},
      {row: 3, place: 5},
      {row: 5, place: 6},
      {row: 1, place: 3},
      {row: 4, place: 5},
      {row: 4, place: 8},
      {row: 4, place: 8},
      {row: 4, place: 5},
      {row: 1, place: 8},
      {row: 4, place: 4},
      {row: 3, place: 2},
      {row: 1, place: 6},
      {row: 5, place: 4},
      {row: 4, place: 3}
    ]
  }
]

export { movies, sessions };
