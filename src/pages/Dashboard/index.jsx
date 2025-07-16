import { useEffect, useState } from "react";
import { getUserLists, createList } from "../../services/listService";
import ListCard from "./ListCard";
import CreateListForm from "./CreateListForm";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #212529;
`;

function Dashboard() {
  const [lists, setLists] = useState([]);

  const fecthLists = async () => {
    const data = await getUserLists();
    setLists(data);
  };

  const handleCreateList = async (title) => {
    await createList(title);
    fecthLists();
  };

  useEffect(() => {
    fecthLists();
  }, []);

  return (
    <Container>
      <Title>Minhas Listas</Title>
      <CreateListForm onCreate={handleCreateList} />
      <Grid>
        {lists.map((list) => (
          <ListCard key={list._id} list={list} />
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard;
