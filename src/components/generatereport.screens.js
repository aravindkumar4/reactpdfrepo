import React from "react";
import { PdfPatientReport } from "./pdf-patient-report.component";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
const GenerateReport = () => {
  <PDFViewer showToolbar={true}>
    <PdfPatientReport />
  </PDFViewer>;
};

export default GenerateReport;
