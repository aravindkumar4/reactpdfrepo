import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import Invoice from "./components/reports/Invoice";
import invoice from "./data/invoice";
// import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";
// import Table from "./components/Table";
// import GenerateReport from "./components/generatereport.screens";
function App() {
  return (
    <>
      <PDFViewer width="1000" height="600" className="app">
        <Invoice invoice={invoice} />
      </PDFViewer>
    </>
  );
}

export default App;
