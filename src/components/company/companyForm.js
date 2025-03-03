import styles from "./companyForm.module.css";
import { useState, useEffect } from "react";
import Input from "../form/input";
import { useNavigate } from "react-router-dom";
import Select from "../form/select";
import SubmitButton from "../form/submitButton";
import { useBudget } from "../budget/budgetContext";

function CompanyInformationForm({handleSubmit, btnText, companyData}) {
  const [company, setCompany] = useState(companyData || {});
  const { budget, setBudget } = useBudget();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    // handleSubmit(company);
    navigate("/budget")
  };

  function handleChange(e) {
    setBudget({
      ...budget,
      company: {
        ...(budget.company || {}),
        [e.target.name]: e.target.value,
      },
    });
    console.log(budget);
  }
  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Cliente"
        name="cliente"
        placeholder="Insira o nome do cliente"
        handleOnChange={handleChange}
        value={budget.company?.cliente || ""}
      />
      <Input
        type="text"
        text="Telefone para Contato"
        name="telefone"
        placeholder="Insira o contato do cliente"
        handleOnChange={handleChange}
        value={budget.company?.telefone || ""}

      />
      <Input
        type="text"
        text="E-mail"
        name="email"
        placeholder="Insira o E-mail do cliente"
        handleOnChange={handleChange}
        value={budget.company?.email || ""}

      />
      {/* <Input
        type="text"
        text="Cliente"
        name="cliente"
        placeholder="Insira o nome do cliente"
        handlerOnChange={handleChange}
        value={company.cliente ? company.cliente : ''}

      /> */}
      {/* <Select name="category_id" text="Selecione Material" /> */}
      <SubmitButton text ={btnText} />
      {/* <div>
        <select name="material_id">
          <option disabled selected>
            Selecione Material
          </option>
        </select>
      </div>
      <div>
        <input type="text" placeholder="Largura"></input>
      </div>
      <div>
        <input type="text" placeholder="Altura"></input>
      </div>
      <div>
        <input type="text" placeholder="Quantidade de Módulos"></input>
      </div>
      <div>
        <input type="submit" value="Gerar Orçamento"></input>
      </div> */}
    </form>
  );
}
export default CompanyInformationForm;
