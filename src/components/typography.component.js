import React from "react";
import { Text } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
export const PdfHeading = (props, children) => {
  const { fontSize = "22px" } = props;
  const { fontWeight = "bold" } = props;
  const { fontFamily = "arimaRegular" } = props;
  return <Text style={{ fontSize, fontWeight, fontFamily }}>{children}</Text>;
};

export const PdfSubHeading = (props, children) => {
  const { fontSize = "20px" } = props;
  const { fontWeight = "bold" } = props;
  const { fontFamily = "arimaRegular" } = props;
  return <Text style={{ fontSize, fontWeight, fontFamily }}>{children}</Text>;
};

export const PdfMedium = (props, children) => {
  const { fontSize = "16px" } = props;
  const { fontWeight = "medium" } = props;
  const { fontFamily = "arimaRegular" } = props;
  const { textAlign = "left" } = props;

  return (
    <Text style={{ fontSize, fontWeight, fontFamily, textAlign }}>
      {children}
    </Text>
  );
};

export const PdfRegular = (props, children) => {
  const { fontSize = "12px" } = props;
  const { fontWeight = "normal" } = props;
  const { fontFamily = "arimaRegular" } = props;
  return <Text style={{ fontSize, fontWeight, fontFamily }}>{children}</Text>;
};
export const PdfPageNumber = ({ style, bottom = 55 }) => {
  return (
    <Text
      style={{
        ...style,
        position: "absolute",
        bottom: bottom,
        right: 5,
        fontSize: 12,
        color: "grey",
      }}
      render={({ pageNumber, totalPages }) =>
        `Page ${pageNumber} of ${totalPages}`
      }
      fixed
    />
  );
};
