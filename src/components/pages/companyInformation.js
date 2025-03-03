import styles from "./companyInformation.module.css";
import CompanyInformationForm from "../company/companyForm";
function CompanyInformation() {
  return (
    <div className={styles.newCompanyInformation_container}>
      <h1>Solicitar Orçamento</h1>
      <p>Informe os dados solicitados abaixo para solicitação de orçamento</p>
      <CompanyInformationForm btnText="Seguinte" />
    </div>
  );
}
export default CompanyInformation;
