
// This is the array of questions that will be asked
var questionsList = [
    {
        question: 'What city was struck by the 9-11 terriost attacks?',
        answer: [
            'a: Paris',
            'b: New York',
            'c: Bejeing',
            'd: Durban',
        ],
        correctAnswer: 'b: New York',
    },
    {
        question: 'What was the tallest recorded building structure in ancient times that was later abandoned and unfinished; also recorded in the bible?',
        answer: [
            'a: Rome Collesium',
            'b: Burg Khalifa',
            'c: Empire State Building',
            'd: The Tower of Babel'
        ],
        correctAnswer: 'd: The Tower of Babel',
    },
    {
        question: 'What three things motivate the land migratition of people?',
        answer: [
            'a: Money, power, and respect.',
            'b: Democracy, capitalism, and dollars.',
            'c: Economics, resources, and better living.',
            'd: War, famine, and religious freedom.'
        ],
        correctAnswer: 'c: Economics, resources, and better living.',
    },
    {
        question: 'Is there a difference between a sun and a star, and why?',
        answer: [
            'a: Yes, a star is just a bright light in the sky.',
            'b: No, both are essential the same thing.',
            "c: Maybe, depending on the type of star it could be considerd a sun especially if it has planets in it's orbit.",
            'd: Neither, both have nothing to do with each other.',
        ],
        correctAnswer: 'b: No, both are essential the same thing.',
    },
    {
        question: 'What year did the city of Atlanta in the state of Georgia hold the Summer Olympics?',
        answer: [
            'a: 1996',
            'b: 1984',
            "c: The Summer Olympics was never held there, but the Winter Olympics were in 1995",
            'd: 1990',
        ],
        correctAnswer: 'a: 1996',
    },
    {
        question: 'What fact about the New York gangster Beanie Sigel is not common known?',
        answer: [
            'a: He is of Jewish hertiage.',
            'b: He was associated with the likes of Arnold Rothstein and Lucky Luciano.',
            "c: He invisioned and contributed to the creation of Las Vegas.",
            'd: He participated in the illegal sell of alchol during the Prohibation Era.',
        ],
        correctAnswer: 'b: He invisioned and contributed to the creation of Las Vegas.',
    },
    {
        question: 'What occasion corresponds to the longest day of the year?',
        answer: [
            'a: The peak of winter.',
            'b: During an eclipse of the sun.',
            "c: The summer solstice.",
            'd: The start of spring season.',
        ],
        correctAnswer: 'c: The summer solstice.',
    },
    {
        question: 'What identity document is required to travel to different countries around the world?',
        answer: [
            'a: A passport.',
            'b: A driver license.',
            'c: A social secuirty card',
            'd: Universal identification card.',
        ],
        correctAnswer: 'a: A passport.',
    },
];

localStorage.setItem("questionsList", JSON.stringify(questions));