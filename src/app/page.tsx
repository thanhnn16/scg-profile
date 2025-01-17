'use client';
import React from "react";
import {Document, Page, PDFViewer, StyleSheet, Text, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


const MyDocument = () => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
);

export default function Home() {
  return (
    <PDFViewer>
        <MyDocument />
    </PDFViewer>
  );
}
