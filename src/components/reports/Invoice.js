import React from "react";
import { Page, Document, Image, StyleSheet, Text } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
// import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import logo from "../../../src/logo.png";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";

const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 50,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
    //
    paddingBottom: "80pt",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Invoice = ({ invoice }) => (
  <Document>
    <Page style={styles.page}>
      <Text
        // style={styles.text}
        render={({ pageNumber, totalPages }) => (
          <>
            <h3>
              Page {pageNumber} of {totalPages}
            </h3>
          </>
        )}
        style={[
          { position: "absolute", bottom: 0, left: 0, right: 0 },
          { backgroundColor: "green", padding: 20, alignItems: "center" },
        ]}
        fixed
      />
      <Image style={styles.logo} src={logo} />
      <InvoiceTitle title="Invoice" />
      <InvoiceNo invoice={invoice} />
      <BillTo invoice={invoice} />
      <InvoiceItemsTable invoice={invoice} />
      <InvoiceThankYouMsg />
    </Page>
  </Document>
);

export default Invoice;
