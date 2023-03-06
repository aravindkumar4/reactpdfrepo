import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import "./App.css";
import Invoice from "./components/reports/Invoice";
import invoice from "./data/invoice";

// import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";
// import Table from "./components/Table";
// import GenerateReport from "./components/generatereport.screens";
const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});
// width="1000" height="600" className="app">
function App() {
  return (
    <>
      <PDFViewer style={styles.viewer}>
        <Invoice invoice={invoice} />
      </PDFViewer>
    </>
  );
}

export default App;
