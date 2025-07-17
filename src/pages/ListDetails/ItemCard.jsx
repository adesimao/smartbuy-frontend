import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 600;
  color: #212529;
`;

const Category = styled.span`
  font-size: 0.85rem;
  color: #6c757d;
`;

const Status = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${(props) => (props.bought ? "#28a745" : "#dc3545")};
`;

function ItemCard({ item }) {
  return (
    <Card>
      <Info>
        <Name> {item.name} </Name>
        <Category> {item.category} </Category>
      </Info>
      <Status bought={item.bought}>
        {item.bought ? "Comprado" : "Pendente"}
      </Status>
    </Card>
  );
}

export default ItemCard;
