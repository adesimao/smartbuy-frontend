import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListById, addItemToList } from "../../services/listService";
import ItemCard from "./ItemCard";
import AddItemForm from "./AddItemForm";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

function ListDetails() {
  const { id } = useParams();
  const [list, setList] = useState(null);

  const fecthList = async () => {
    const data = await getListById(id);
    setList(data);
  };

  const handleAddItem = async (item) => {
    await addItemToList(id, item);
    fecthList();
  };

  useEffect(() => {
    fecthList();
  }, [id]);

  return (
    <Container>
      {list ? (
        <>
          <Title>{list.title}</Title>
          <AddItemForm onAdd={handleAddItem} />
          {list.items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
}

export default ListDetails;
