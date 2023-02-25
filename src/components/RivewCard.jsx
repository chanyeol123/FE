import Card from "react-bootstrap/Card";

function ReviewCards() {
  const reviews = [
    {
      title: "리뷰제목1",
      content: "팀장님 너무해1",
    },
    {
      title: "리뷰제목2",
      content: "팀장님 너무해2",
    },
    {
      title: "리뷰제목3",
      content: "팀장님 너무해3",
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center">
      {reviews.map((review, id) => (
        <Card
          key={id}
          bg="dark"
          text="white"
          style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
          className="my-2"
        >
          <Card.Header>{review.title}</Card.Header>
          <Card.Body>
            <Card.Title>샬라샬라</Card.Title>
            <Card.Text>{review.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ReviewCards;
