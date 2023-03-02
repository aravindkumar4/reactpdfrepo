import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

export const PdfView = ({
  mh = 20,
  p = 2,
  flexDirection = "column",
  style,
  fixed = false,
  children,
}) => {
  return (
    <View
      style={{
        ...style,
        marginHorizontal: mh,
        padding: p,
        flexDirection: flexDirection,
      }}
      fixed={fixed}
    >
      {children}
    </View>
  );
};
export const PdfBorderView = ({
  mh = 20,
  mv = 50,
  p = 2,
  borderColor = "gray",
  bw = 2,
  style,
  fixed = false,
  children,
}) => {
  return (
    <View
      style={{
        ...style,
        marginHorizontal: mh,
        marginVertical: mv,
        padding: p,
        borderColor: borderColor,
        borderWidth: bw,
      }}
      fixed={fixed}
    >
      {children}
    </View>
  );
};
export const PdfHeader = ({
  bg = "orange",
  p = 10,
  alignItems = "flex-start",
  fixed = false,
  children,
}) => {
  return (
    <View
      style={{
        backgroundColor: bg,
        alignItems: alignItems,
        padding: p,
      }}
      fixed={fixed}
    >
      {children}
    </View>
  );
};
export const PdfSubHeader = ({
  bg = "yellow",
  p = 4,
  alignItems = "flex-end",
  fixed = false,
  children,
}) => {
  return (
    <View
      style={{
        backgroundColor: bg,
        alignItems: alignItems,
        padding: p,
      }}
      fixed={fixed}
    >
      {children}
    </View>
  );
};
export const PdfFooterView = ({
  bg = "orange",
  p = 10,
  alignItems = "center",
  fixed = false,
  children,
}) => {
  return (
    <View
      style={[
        { position: "absolute", bottom: 0, left: 0, right: 0 },
        { backgroundColor: bg, padding: p, alignItems: alignItems },
      ]}
      fixed={fixed}
    >
      {children}
    </View>
  );
};
export const PdfGrid = ({ cols = 1, bg = "white", children }) => (
  <View
    style={{
      width: `${100 / cols}%`,
      backgroundColor: bg,
    }}
  >
    {children}
  </View>
);
