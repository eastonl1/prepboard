"use client"

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer"

// Calculate available space for time block rows
const PAGE_HEIGHT = 1224
const RESERVED_HEIGHT = 230 // Approx. header + month strip + spacing
const TOTAL_HEIGHT = PAGE_HEIGHT - RESERVED_HEIGHT // 1094pt

const styles = StyleSheet.create({
  page: {
    fontSize: 14,
    padding: 20,
    fontFamily: "Helvetica",
    flexDirection: "column",
    color: "#333",
  },
  title: {
  fontSize: 30,
  fontWeight: "bold",
  color: "#745fb5",
  textAlign: "center",
  marginBottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  numberRow: {
    fontSize: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  numBox: {
    width: "3.2%",
    textAlign: "center",
    padding: 2,
    border: "1pt solid #999",
    backgroundColor: "#f8f8f8",
  },
  row: {
    flexDirection: "row",
  },
  tableOuterBorder: {
    border: "2pt solid #333",
    borderRadius: 2,
    overflow: "hidden",
  },
  cell: {
    flex: 1,
    border: "0.5pt solid #999",
    textAlign: "center",
    padding: 4,
    flexWrap: "nowrap",
  },
  labelCell: {
    flex: 0.5,
    border: "0.5pt solid #999",
    padding: 4,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    fontSize: 18,
  },
  cycleRow: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "nowrap",
    flexShrink: 1,
  },
  cycleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    border: "1pt solid #999",
    fontSize: 14,
    marginHorizontal: 1.5,
    color: "#333",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
})

type Props = {
  name?: string
  cycleDays: number
  timeBlocks: string[]
}

export default function PlannerPDF({ name = "", cycleDays, timeBlocks }: Props) {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const cycleNums = Array.from({ length: cycleDays }, (_, i) => i + 1)
  const numberOfRows = timeBlocks.length
  const rowHeight = TOTAL_HEIGHT / numberOfRows

  return (
    <Document>
      <Page size={{ width: 1584, height: 1224 }} style={styles.page}>
        {/* Header */}
        <Text style={styles.title}>PrepBoard.com</Text>
        <View style={styles.header}>
          <Text style={{ fontSize: 18 }}>Month: _________________________________</Text>
          <Text style={{ fontSize: 18 }}>Name: {name || "_________________________________"}</Text>
        </View>

        {/* Number Strip */}
        <View style={styles.numberRow}>
          {Array.from({ length: 31 }, (_, i) => (
            <Text key={i} style={styles.numBox}>{i + 1}</Text>
          ))}
        </View>

        {/* Weekday Table with thick outer border */}
        <View style={styles.tableOuterBorder}>
          {/* Weekday Header */}
          <View style={styles.row}>
            <Text style={styles.labelCell}></Text>
            {weekdays.map((day, i) => (
              <Text key={i} style={[styles.cell, { fontWeight: "bold", fontSize: 18, backgroundColor: "#f2f2f2" }]}>{day}</Text>
            ))}
          </View>

          {/* Cycle Day Row */}
          <View style={styles.row}>
            <Text style={styles.labelCell}>Cycle Day</Text>
            {weekdays.map((_, i) => (
              <View key={i} style={styles.cell}>
                <View style={styles.cycleRow}>
                  {cycleNums.map((n) => (
                    <View key={n} style={styles.cycleCircle}>
                      <Text>{n}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Time Block Rows */}
          {Array.from({ length: numberOfRows }).map((_, i) => (
            <View key={i} style={[styles.row, { height: rowHeight }]}>
              <Text style={[styles.labelCell, { height: rowHeight }]}>{timeBlocks[i] || ""}</Text>
              {weekdays.map((_, j) => (
                <Text key={j} style={[styles.cell, { height: rowHeight }]}></Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
