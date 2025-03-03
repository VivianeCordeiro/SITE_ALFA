import { useBudget } from "../budget/budgetContext";
import styles from "./budgetSummary.module.css"; // Importando o CSS

function BudgetSummary() {
  const { budget } = useBudget(); // Obtém o orçamento do contexto

  return (
    <div className={styles.container}>
      {budget ? (
        <div className={styles.card}>
          <h1>Resumo do Orçamento</h1>
          <ul className={styles.list}>
            <li><strong>Cliente:</strong> {budget.company?.cliente || "Não informado"}</li>
            <li><strong>Telefone:</strong> {budget.company?.telefone || "Não informado"}</li>
            <li><strong>Email:</strong> {budget.company?.email || "Não informado"}</li>
            <li><strong>Largura:</strong> {budget.largura || "Não informado"} m</li>
            <li><strong>Altura:</strong> {budget.altura || "Não informado"} m</li>
            <li><strong>Quantidade de Módulos:</strong> {budget.quantidadeModulos || "Não informado"}</li>
            <li><strong>Material:</strong> {budget.material?.name || "Não informado"}</li>

            {/* Novos cálculos */}
            <li><strong>Quantidade de Aletas:</strong> {budget.quantidadeAletas || "Não calculado"}</li>
            <li><strong>Preço Total das Aletas:</strong> R$ {budget.precoTotalAletas?.toFixed(2) || "Não calculado"}</li>
            <li><strong>Perfil U:</strong> {budget.perfilU?.toFixed(2) || "Não calculado"}</li>
            <li><strong>Perfil J:</strong> {budget.perfilJ?.toFixed(2) || "Não calculado"}</li>
            <li><strong>Rebite Florado:</strong> {budget.rebiteFlorado || "Não calculado"}</li>
          </ul>
        </div>
      ) : (
        <p className={styles.message}>Nenhum orçamento disponível.</p>
      )}
    </div>
  );
}

export default BudgetSummary;
