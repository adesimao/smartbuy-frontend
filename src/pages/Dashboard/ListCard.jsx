import styled from "styled-components";

const Card = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h3`
  color: #212529;
  font-size: 1.1rem;
  margin: 0;
`;

const DateText = styled.span`
  font-size: 0.875rem;
  color: #6c757d;
`;

function ListCard({ list }) {
  const formattedDate = new Date(list.createdAt).toLocaleDateString("pt-PT");

  return (
    <Card>
      <Title>{list.title}</Title>
      <DateText>Criada em: {formattedDate}</DateText>
    </Card>
  );
}

export default ListCard;
