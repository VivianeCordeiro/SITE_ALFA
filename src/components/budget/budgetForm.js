import { useState, useEffect } from "react";
import styles from "./budgetForm.module.css";
import Input from "../form/input";
import Select from "../form/select";
import SubmitButton from "../form/submitButton";
import { useBudget } from "./budgetContext";

function BudgetForm({ handleSubmit, btnText, budgetData }) {
  const { budget, setBudget } = useBudget();
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/materials", {
      mathod: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMaterial(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    console.log("1");

    e.preventDefault();
    console.log("budget");

    handleSubmit(budget);
  };

  function handleChange(e) {
    setBudget({ ...budget, [e.target.name]: e.target.value });
    console.log(budget);
  }

  function handleMaterial(e) {
    setBudget({
      ...budget,
      material: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="number"
        text="Largura (m)"
        name="largura"
        placeholder="Insira a Largura"
        handleOnChange={handleChange}
        value={budget.largura || undefined}
        step="any"
      />
      <Input
        type="number"
        text="Altura"
        name="altura"
        placeholder="Insira a Altura"
        handleOnChange={handleChange}
        value={budget.altura || undefined}
        step="any"
      />
      <Input
        type="number"
        text="Quantidade de Módulos"
        name="quantidadeModulos"
        placeholder="Insira a quantidade de módulos"
        handleOnChange={handleChange}
        value={budget.quantidadeModulos || undefined}
        step="any"
      />
      <Select
        name="category_id"
        text="Selecione Material"
        options={material}
        handleOnChange={handleMaterial}
        value={budget.material ? budget.material.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
export default BudgetForm;
