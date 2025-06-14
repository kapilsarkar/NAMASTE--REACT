const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Kapil",
      text: "Lorem Ipsum Lorem",
      replies: [
        {
          name: "Akshay Sir",
          text: "JS TEACHER",
        },
         {
          name: "Akshay Sir",
          text: "JS TEACHER",
        },
      ],
    },
    {
      name: "Kapil",
      text: "Lorem Ipsum Lorem",
      replies: [],
    },
    {
      name: "Kapil",
      text: "Lorem Ipsum Lorem",
      replies: [],
    },
    {
      name: "Kapil",
      text: "Lorem Ipsum Lorem",
      replies: [],
    },
    {
      name: "Kapil",
      text: "Lorem Ipsum Lorem",
      replies: [],
    },
  ];
  const Comment = ({data})=>{
     return <div>Comment</div>
  }
  return (
    <div className=" m-5 p-2">
      <h2 className=" text-2xl font-bold">Comments : </h2>
      <Comment/>
    </div>
  );
};

export default CommentsContainer;
