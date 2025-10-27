import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <Container>
          <h1>Pagina não encontrada</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            maiores quae suscipit libero iusto facere odit saepe minima?
            Accusamus autem soluta nostrum distinctio nobis nihil eaque labore
            laborum maxime quasi.
          </p>
        </Container>
      </MainTemplate>
    </>
  );
}
