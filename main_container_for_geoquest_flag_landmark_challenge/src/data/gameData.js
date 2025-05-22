/**
 * Game data for GeoQuest: Flag & Landmark Challenge
 * Contains information about countries, their flags, capitals, landmarks, and continents
 */

export const continents = {
  AFRICA: 'Africa',
  ASIA: 'Asia',
  EUROPE: 'Europe',
  NORTH_AMERICA: 'North America',
  SOUTH_AMERICA: 'South America',
  OCEANIA: 'Oceania',
  ANTARCTICA: 'Antarctica'
};

export const countries = [
  {
    id: 1,
    name: 'United States',
    code: 'us',
    flagUrl: 'https://flagcdn.com/us.svg',
    capital: 'Washington, D.C.',
    continent: continents.NORTH_AMERICA,
    landmarks: [
      { name: 'Statue of Liberty', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/320px-Statue_of_Liberty_7.jpg' },
      { name: 'Grand Canyon', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/320px-Canyon_River_Tree_%28165872763%29.jpeg' }
    ]
  },
  {
    id: 2,
    name: 'United Kingdom',
    code: 'gb',
    flagUrl: 'https://flagcdn.com/gb.svg',
    capital: 'London',
    continent: continents.EUROPE,
    landmarks: [
      { name: 'Big Ben', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/320px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg' },
      { name: 'Tower Bridge', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tower_Bridge_from_Shad_Thames.jpg/320px-Tower_Bridge_from_Shad_Thames.jpg' }
    ]
  },
  {
    id: 3,
    name: 'France',
    code: 'fr',
    flagUrl: 'https://flagcdn.com/fr.svg',
    capital: 'Paris',
    continent: continents.EUROPE,
    landmarks: [
      { name: 'Eiffel Tower', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/320px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg' },
      { name: 'Louvre Museum', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/320px-Louvre_Museum_Wikimedia_Commons.jpg' }
    ]
  },
  {
    id: 4,
    name: 'Japan',
    code: 'jp',
    flagUrl: 'https://flagcdn.com/jp.svg',
    capital: 'Tokyo',
    continent: continents.ASIA,
    landmarks: [
      { name: 'Mount Fuji', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/320px-080103_hakkai_fuji.jpg' },
      { name: 'Tokyo Tower', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tokyo_Tower_at_night_2.JPG/320px-Tokyo_Tower_at_night_2.JPG' }
    ]
  },
  {
    id: 5,
    name: 'Brazil',
    code: 'br',
    flagUrl: 'https://flagcdn.com/br.svg',
    capital: 'Brasília',
    continent: continents.SOUTH_AMERICA,
    landmarks: [
      { name: 'Christ the Redeemer', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Rio_de_Janeiro%2C_Brazil.jpg/320px-Christ_the_Redeemer_-_Rio_de_Janeiro%2C_Brazil.jpg' },
      { name: 'Iguazu Falls', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Cataratas.jpg/320px-Cataratas.jpg' }
    ]
  },
  {
    id: 6,
    name: 'Australia',
    code: 'au',
    flagUrl: 'https://flagcdn.com/au.svg',
    capital: 'Canberra',
    continent: continents.OCEANIA,
    landmarks: [
      { name: 'Sydney Opera House', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/320px-Sydney_Opera_House_-_Dec_2008.jpg' },
      { name: 'Great Barrier Reef', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Reef.jpg/320px-Reef.jpg' }
    ]
  },
  {
    id: 7,
    name: 'Egypt',
    code: 'eg',
    flagUrl: 'https://flagcdn.com/eg.svg',
    capital: 'Cairo',
    continent: continents.AFRICA,
    landmarks: [
      { name: 'Great Pyramids of Giza', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/320px-Kheops-Pyramid.jpg' },
      { name: 'Sphinx', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Great_Sphinx_of_Giza_-_20080716.jpg/320px-Great_Sphinx_of_Giza_-_20080716.jpg' }
    ]
  },
  {
    id: 8,
    name: 'India',
    code: 'in',
    flagUrl: 'https://flagcdn.com/in.svg',
    capital: 'New Delhi',
    continent: continents.ASIA,
    landmarks: [
      { name: 'Taj Mahal', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/320px-Taj_Mahal_%28Edited%29.jpeg' },
      { name: 'India Gate', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/India_Gate_in_New_Delhi_03-2016.jpg/320px-India_Gate_in_New_Delhi_03-2016.jpg' }
    ]
  },
  {
    id: 9,
    name: 'Canada',
    code: 'ca',
    flagUrl: 'https://flagcdn.com/ca.svg',
    capital: 'Ottawa',
    continent: continents.NORTH_AMERICA,
    landmarks: [
      { name: 'CN Tower', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/CN_Tower_-_Toronto%2C_Ontario%2C_Canada_-_August_11%2C_2017.jpg/320px-CN_Tower_-_Toronto%2C_Ontario%2C_Canada_-_August_11%2C_2017.jpg' },
      { name: 'Niagara Falls', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/3_Sisters_in_Niagara_Falls.jpg/320px-3_Sisters_in_Niagara_Falls.jpg' }
    ]
  },
  {
    id: 10,
    name: 'Italy',
    code: 'it',
    flagUrl: 'https://flagcdn.com/it.svg',
    capital: 'Rome',
    continent: continents.EUROPE,
    landmarks: [
      { name: 'Colosseum', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/320px-Colosseum_in_Rome-April_2007-1-_copie_2B.jpg' },
      { name: 'Leaning Tower of Pisa', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Leaning_Tower_of_Pisa_April_2015.jpg/320px-Leaning_Tower_of_Pisa_April_2015.jpg' }
    ]
  }
];

export const difficulties = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard'
};

export const gameModes = {
  FLAGS: 'Flags',
  CAPITALS: 'Capitals',
  LANDMARKS: 'Landmarks',
  CONTINENTS: 'Continents'
};

// Helper functions
export const getRandomCountries = (count, excludeIds = []) => {
  const filteredCountries = countries.filter(country => !excludeIds.includes(country.id));
  const shuffled = [...filteredCountries].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getCountryById = (id) => {
  return countries.find(country => country.id === id);
};

export const getCountriesByContinent = (continent) => {
  return countries.filter(country => country.continent === continent);
};
