import { useNavigate } from "react-router-dom";
import styles from "./budget.module.css";
import BudgetForm from "../budget/budgetForm";
const precoUnitAleta = 18;
const pecoUniPerfilU = 13;
const pecoUniPerfilJ = 13;

function Budget() {
  const navigate = useNavigate();
  function budgetCalculations(budget) {
    budget.quantidadeAletas = budget.largura/budget.quantidadeModulos;
    budget.precoTotalAletas = budget.quantidadeAletas * precoUnitAleta;
    budget.perfilU = budget.quantidadeAletas * pecoUniPerfilU;
    budget.perfilJ = budget.quantidadeAletas * pecoUniPerfilJ;
    // budget.maoDeObra = budget.
    budget.rebiteFlorado = budget.quantidadeAletas * 4;
  }

  function createPost(budget) {
    budgetCalculations(budget)
    console.log("budget 2", budget);
    budget.cost = 0;
    budget.service = [];
    budget.material = [];

    fetch("http://localhost:5000/budgets", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(budget),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("budgetSummary", { state: { message: "Orçamento criado com sucesso!" } });
      })
      .catch((err) => console.log(err));
    // navigate("/");
  }

  return (
    <div className={styles.newBudget_container}>
      <h1>Solicitar Orçamento</h1>
      <p>Informe os dados solicitados abaixo para solicitação de orçamento</p>
      <BudgetForm handleSubmit={createPost} btnText="Gerar Orçamento" />
    </div>
  );
}
export default Budget;
