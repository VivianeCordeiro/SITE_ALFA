import { useBudget } from "../budget/budgetContext";
import styles from "./budgetSummary.module.css"; // Importando o CSS
import SubmitButton from "../form/submitButton";
import React, { useState } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

if (pdfMake && pdfFonts) {
  pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfMake.vfs;
}

const BudgetSummary = () => {
  const { budget = {} } = useBudget();

  const services = budget?.service || [];
  const materials = budget?.material || [];

  const generatePDF = () => {
    const docDefinition = {
      content: [
        { text: "ORÇAMENTO", style: "header" },
        { text: "Alfa Venezianas Industriais", style: "subheader" },
        { text: "CNPJ: 47.102.882/0001-60", style: "info" },
        { text: "Rua Anésio Botasso, 301, Jardim Bela Vista II, Artur Nogueira-SP", style: "info" },
        { text: "CEP 13165-106", style: "info" },
        { text: "Tel: +55 (19) 99921-6351 | +55 (19) 99775-6921", style: "info" },
        { text: `Data: ${new Date().toLocaleDateString()}`, style: "info" },
        { text: "\nCliente", style: "section" },
        { text: `Nome: ${budget.clientName || "Não informado"}`, style: "text" },
        { text: `Telefone: ${budget.phone || "Não informado"}`, style: "text" },
        { text: `Email: ${budget.email || "Não informado"}`, style: "text" },
        { text: "\nInformações Básicas", style: "section" },
        { text: `Largura: ${budget.width || "-"} m`, style: "text" },
        { text: `Altura: ${budget.height || "-"} m`, style: "text" },
        { text: `Quantidade de Módulos: ${budget.modules || "-"}`, style: "text" },
        { text: `Material: ${budget.material || "Não informado"}`, style: "text" },
        { text: "\nServiços", style: "section" },
        {
          table: {
            headerRows: 1,
            widths: ["*", "auto", "auto", "auto", "auto"],
            body: [
              [
                { text: "Descrição", style: "tableHeader" },
                { text: "Unidade", style: "tableHeader" },
                { text: "Preço Unitário", style: "tableHeader" },
                { text: "Qtd.", style: "tableHeader" },
                { text: "Preço", style: "tableHeader" }
              ],
              ...budget?.service?.map(service => [
                service.description || "-",
                service.unit || "-",
                `R$ ${(service.unitPrice || 0).toFixed(2)}`,
                service.quantity || "-",
                `R$ ${(service.unitPrice * (service.quantity || 0)).toFixed(2)}`
              ])
            ]
          }
        },
        { text: "\nMateriais", style: "section" },
        {
          table: {
            headerRows: 1,
            widths: ["*", "auto", "auto", "auto", "auto"],
            body: [
              [
                { text: "Descrição", style: "tableHeader" },
                { text: "Unidade", style: "tableHeader" },
                { text: "Preço Unitário", style: "tableHeader" },
                { text: "Qtd.", style: "tableHeader" },
                { text: "Preço", style: "tableHeader" }
              ],
              ...budget?.material?.map(material => [
                material.description || "-",
                material.unit || "-",
                `R$ ${(material.unitPrice || 0).toFixed(2)}`,
                material.quantity || "-",
                `R$ ${(material.unitPrice * (material.quantity || 0)).toFixed(2)}`
              ])
            ]
          }
        },
        { text: "\nTotal", style: "section" },
        { text: `Serviços: R$ ${(budget.servicesTotal || 0).toFixed(2)}`, style: "text" },
        { text: `Materiais: R$ ${(budget.materialsTotal || 0).toFixed(2)}`, style: "text" },
        { text: `Total Geral: R$ ${((budget.servicesTotal || 0) + (budget.materialsTotal || 0)).toFixed(2)}`, style: "total" },
        { text: "\nFormas de Pagamento", style: "section" },
        { text: "Boleto, transferência bancária, dinheiro, cheque, cartão de crédito ou débito.", style: "text" },
      ],
      styles: {
        header: { fontSize: 20, bold: true, alignment: "center", margin: [0, 20, 0, 10] },
        subheader: { fontSize: 14, bold: true, alignment: "center", margin: [0, 5, 0, 5] },
        info: { fontSize: 10, alignment: "center", margin: [0, 2, 0, 2] },
        section: { fontSize: 12, bold: true, margin: [0, 15, 0, 5] },
        text: { fontSize: 11, margin: [0, 2, 0, 2] },
        total: { fontSize: 12, bold: true, color: "#FF0000", margin: [0, 5, 0, 5] },
        tableHeader: { bold: true, fontSize: 12, color: "white", fillColor: "#333333", alignment: "center" }
      }
    };

    pdfMake.createPdf(docDefinition).download("orcamento.pdf");
  
  };
  

  return (
    <div className={styles.container}>
      {budget ? (
        <div onSubmit={generatePDF} className={styles.card}>
          <h1>Resumo do Orçamento</h1>
          <ul className={styles.list}>
            <li>
              <strong>Cliente:</strong>{" "}
              {budget.company?.cliente || "Não informado"}
            </li>
            <li>
              <strong>Telefone:</strong>{" "}
              {budget.company?.telefone || "Não informado"}
            </li>
            <li>
              <strong>Email:</strong> {budget.company?.email || "Não informado"}
            </li>
            <li>
              <strong>Largura:</strong> {budget.largura || "Não informado"} m
            </li>
            <li>
              <strong>Altura:</strong> {budget.altura || "Não informado"} m
            </li>
            <li>
              <strong>Quantidade de Módulos:</strong>{" "}
              {budget.quantidadeModulos || "Não informado"}
            </li>
            <li>
              <strong>Material:</strong>{" "}
              {budget.material?.name || "Não informado"}
            </li>

            {/* Novos cálculos */}
            <li>
              <strong>Quantidade de Aletas:</strong>{" "}
              {budget.quantidadeAletas || "Não calculado"}
            </li>
            <li>
              <strong>Preço Total das Aletas:</strong> R${" "}
              {budget.precoTotalAletas?.toFixed(2) || "Não calculado"}
            </li>
            <li>
              <strong>Perfil U:</strong>{" "}
              {budget.perfilU?.toFixed(2) || "Não calculado"}
            </li>
            <li>
              <strong>Perfil J:</strong>{" "}
              {budget.perfilJ?.toFixed(2) || "Não calculado"}
            </li>
            <li>
              <strong>Rebite Florado:</strong>{" "}
              {budget.rebiteFlorado || "Não calculado"}
            </li>
          </ul>
          <SubmitButton text="Gerar PDF" onClick={generatePDF} />
        </div>
      ) : (
        <p className={styles.message}>Nenhum orçamento disponível.</p>
      )}
    </div>
  );
}

export default BudgetSummary;
