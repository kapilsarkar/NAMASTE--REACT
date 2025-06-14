const comments = [
  {
    name: "Kapil Sarkar",
    text: "1 Hey there I am ",
    replies: [
      {
        name: "John Cena",
        text: "1.1 Hey there I am",
        replies: [
          {
            name: "Virat Kohli",
            text: "1.1.1 Hi, this is",
            replies: [
              {
                name: "Hrithik Roashan",
                text: "1.1.1.1 Hello from",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sachin Tendulkar",
    text: "2 Hello, I am a new commenter!",
    replies: [
      {
        name: "Rohit Sharma",
        text: "2.1 Hi Alice, welcome!",
        replies: [
          {
            name: "Jasprit Bumrah",
            text: "Glad to see new faces here!",
            replies: [
              {
                name: "Sourav Ganguly",
                text: "Let's keep the conversation going!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Brock Lesnar",
    text: "3 I have a question about the topic.",
    replies: [
      {
        name: "CM PUNK",
        text: "Hello, I am a new commenter!",
        replies: [],
      },
    ],
  },
  {
    name: "Ajay Devgan",
    text: "4 This is an interesting discussion.",
    replies: [
      {
        name: "Akshay kumar",
        text: "4.1 Indeed, it is!",
        replies: [],
      },
    ],
  },
  // New Comments
  {
    name: "Gautam Gambhir",
    text: "5 Great insights! Thank you for sharing.",
    replies: [],
  },
  {
    name: "Subhman Gill",
    text: "6 I disagree with some points here.",
    replies: [
      {
        name: "Rishabh Pant",
        text: "6.1 Could you elaborate on that?",
        replies: [
          {
            name: "Rinku Singh",
            text: "6.2 I'm also curious to know more.",
            // replies: [{}] ...we can;t use this although it is an empty array..but the recursion will happen over this..as it contains an object
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rahul Dravid",
    text: "7 I had a similar experience.",
    replies: [
      {
        name: "Akash Chopra",
        text: "7.1 Let's discuss this further!",
        replies: [
          {
            name: "Eo Sky",
            text: "7.1.1 I'm joining the discussion too!",
            replies: [],
          },
        ],
      },
    ],
  },
];

export default comments;