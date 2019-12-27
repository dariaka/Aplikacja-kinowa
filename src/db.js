const moment = require("moment");

// Movies database
const movies = [
  {
    _id: "mv01",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDUzODgxOTktODllNi00ZDA5LWI3YjktYTk0MWIwOGZlYmIwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "The Specials",
    summary:
      "For twenty years, Bruno and Malik have lived in a different world—the world of autistic children and teens. In charge of two separate nonprofit organizations (The Hatch & The Shelter), they train young people from underprivileged areas to be caregivers for extreme cases that have been refused by all other institutions. It’s an exceptional partnership, outside of traditional settings, for some quite extraordinary characters.",
    sessions: ["ss01", "ss02", "ss07"]
  },
  {
    _id: "mv02",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzcyZDNlNDktOWRhYy00ODQ5LTg1ODQtZmFmZTIyMjg2Yjk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Ford v Ferrari",
    summary:
      "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
    sessions: ["ss03", "ss04"]
  },
  {
    _id: "mv03",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDZmN2ZjMDgtZWM5MS00MDYzLWEzOGQtNzAzOGEyMzY0OTU1XkEyXkFqcGdeQXVyMzQxMDgxOTM@._V1_.jpg",
    title: "Awoken",
    summary:
      "Karla, a young medical student, is trying to cure her brother, Blake, from a terminal sleep illness called Fatal Familial Insomnia, where you are unable to sleep until you die. On her quest to treat him, a more sinister reason for his condition is revealed.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv04",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTY1OTQyM2YtM2ZjOC00OWQwLTkzM2YtZjAyOGZkYjlhNWFhXkEyXkFqcGdeQXVyMTk5MzE1MTY@._V1_.jpg",
    title: "Arctic Dogs",
    summary:
      "Animals band together to save the day when the evil Otto Von Walrus hatches a sinister scheme to accelerate global warming and melt the Arctic Circle.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv05",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2RlMjcyMGQtZTU3OC00NGRlLWExMGEtYjU3ZjUyMDc0NWZmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
    title: "The Foreigner",
    summary:
      "Quan is a humble London businessman whose long-buried past erupts in a revenge-fueled vendetta when the only person left for him to love – his teenage daughter – dies in a senseless act of politically-motivated terrorism. His relentless search to find the terrorists leads to a cat-and-mouse conflict with a British government official whose own past may hold the clues to the identities of the elusive killers.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv06",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTcyMTQzMDIwNl5BMl5BanBnXkFtZTgwMTY1NjgzMzI@._V1_.jpg",
    title: "Professor Marston and the Wonder Women",
    summary:
      "The unconventional life of Dr. William Marston, the Harvard psychologist and inventor who helped invent the modern lie detector test and created Wonder Woman in 1941.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv07",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
    title: "Star Wars: The Rise of Skywalker",
    summary:
      "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv08",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQ0Mjk1YjItNWI1Ny00NWE2LWFlYTAtYjViY2YzMTVlOGVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Motherless Brooklyn",
    summary:
      "Lionel Essrog, a private detective living with Tourette syndrome, ventures to solve the murder of his mentor and best friend — a mystery that carries him from the gin-soaked jazz clubs of Harlem to the slums of Brooklyn to the gilded halls of New York's power brokers.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv09",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTQ4ZmY0NjgtYzVhNy00NzhiLTk3YTYtNzM1MTdjM2VhZDA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Last Christmas",
    summary:
      "Kate is a young woman subscribed to bad decisions. Her last date with disaster? That of having accepted to work as Santa's elf for a department store. However, she meets Tom there. Her life takes a new turn. For Kate, it seems too good to be true.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv10",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    title: "Jumanji: The Next Level",
    summary:
      "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv11",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    title: "Frozen II",
    summary:
      "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    sessions: ["ss05", "ss06", "ss08"]
  },
  {
    _id: "mv12",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    title: "The Matrix",
    summary:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    sessions: ["ss05", "ss06", "ss08"]
  }
];

const sessions = [
  {
    _id: "ss01",
    time: moment()
      .hour(16)
      .minutes(0)
      .add({
        days: 1,
        hours: 1,
        minutes: 30
      }),
    seatsBooked: [
      {
        row: 3,
        place: 4
      },
      {
        row: 4,
        place: 5
      },
      {
        row: 4,
        place: 6
      }
    ]
  },
  {
    _id: "ss02",
    time: moment()
      .hour(16)
      .minutes(0)
      .add({
        days: 1,
        hours: 3,
        minutes: 15
      }),
    seatsBooked: [
      {
        row: 3,
        place: 7
      },
      {
        row: 3,
        place: 5
      },
      {
        row: 3,
        place: 6
      }
    ]
  },
  {
    _id: "ss03",
    time: moment()
      .hour(16)
      .minutes(0)
      .add({
        days: 2,
        hours: 1,
        minutes: 30
      }),
    seatsBooked: [
      {
        row: 4,
        place: 4
      },
      {
        row: 4,
        place: 5
      },
      {
        row: 4,
        place: 6
      }
    ]
  },
  {
    _id: "ss04",
    time: moment()
      .hour(16)
      .minutes(0)
      .add({
        days: 2,
        hours: 3,
        minutes: 15
      }),
    seatsBooked: [
      {
        row: 4,
        place: 4
      },
      {
        row: 4,
        place: 5
      },
      {
        row: 4,
        place: 6
      }
    ]
  }
];

export { movies, sessions };
