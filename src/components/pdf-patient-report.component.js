import React, { useState } from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import {
  PdfHeading,
  PdfHeader,
  PdfSubHeading,
  PdfSubHeader,
  PdfView,
  PdfPageNumber,
  PdfBorderView,
  PdfTable,
} from "./typography.component";
import dayjs from "dayjs";
// import {
//   PdfHeading,
//   PdfRegular,
//   PdfMedium,
//   PdfPageNumber,
//   PdfHeader,
//   PdfSubHeader,
//   PdfView,
//   PdfBorderView,
//   PdfFooterView,
//   PdfGrid,
//   PdfSmall,
//   PdfTable,
// } from "@components";

import { observer } from "mobx-react";
// Font.register({
//     family: 'arimaRegular',
//     src: ''
// })

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingBottom: "80pt",
  },
});
export const PdfPatientReport = observer(({ data }) => {
  console.log(data);
  const fields = [
    {
      title: "Test Name",
      width: "40",
    },
    {
      title: "Results",
      width: "20",
    },
    {
      title: "bio tech",
      width: "20",
    },
    {
      title: "other res",
      width: "20",
    },
  ];
  const tableData = [
    {
      testName: "aravind",
      results: "98789",
      units: "A",
      bioRefInterval: "876",
    },
    {
      testName: "aravind",
      results: "98789",
      units: "A",
      bioRefInterval: "876",
    },
    {
      testName: "aravind",
      results: "98789",
      units: "A",
      bioRefInterval: "876",
    },
    {
      testName: "aravind",
      results: "98789",
      units: "A",
      bioRefInterval: "876",
    },
    {
      testName: "aravind",
      results: "98789",
      units: "A",
      bioRefInterval: "876",
    },
  ];
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <PdfHeader fixed>
          <PdfHeading>Lims plus solutions</PdfHeading>
        </PdfHeader>
        <PdfSubHeader fixed></PdfSubHeader>
        {/* Address */}
        <PdfView fixed></PdfView>
        {/* Patient Detaiks */}
        <PdfBorderView mv={10} fixed></PdfBorderView>
        {/* Table */}
        {/* pdftable */}
        <PdfTable headerFixed fields={fields} data={tableData} />
        {/* page number */}
        <PdfPageNumber />
      </Page>
    </Document>
  );
});
