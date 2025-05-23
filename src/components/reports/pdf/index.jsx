// ReporteSaraGarcia.jsx
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    width: 835,
    height: 534,
    padding: 20,
    fontFamily: 'Helvetica'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0056B3',
    marginBottom: 20
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  card: {
    width: '30%',
    padding: 10,
    borderRadius: 5,
    color: 'white'
  },
  greenCard: { backgroundColor: '#28a745' },
  blueCard: { backgroundColor: '#007bff' },
  redCard: { backgroundColor: '#dc3545' },
  cardTitle: {
    fontSize: 12,
    marginTop: 5
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  lowerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftBox: {
    width: '48%',
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  rightBox: {
    width: '48%',
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 5
  },
  circleWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
    marginBottom: 10
  },
  halfCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderStyle: 'solid'
  },
  circleBackground: {
    borderColor: '#e0e0e0'
  },
  circleProgress: {
    borderColor: '#28a745',
    transform: 'rotate(180deg)',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent'
  },
  percentageText: {
    position: 'absolute',
    top: 42,
    left: 38,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745'
  },
  goalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745'
  },
  subtitle: {
    fontSize: 10,
    color: '#6c757d'
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  bullet: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginRight: 5
  },
  chartBarContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10
  },
  chartBar: {
    width: 10,
    borderRadius: 2
  },
  bar1: {
    height: 50,
    backgroundColor: '#007bff'
  },
  bar2: {
    height: 40,
    backgroundColor: '#28a745'
  },
  bar3: {
    height: 20,
    backgroundColor: '#dc3545'
  }
});

// Documento PDF
export const ReportPDF = () => (
  <Document>
    <Page size={{ width: 835, height: 320 }} style={styles.page}>
      <Text style={styles.header}>Reporte Sara Garcia Enero</Text>

      <View style={styles.cardRow}>
        <View style={[styles.card, styles.greenCard]}>
          <Text style={styles.cardValue}>25</Text>
          <Text style={styles.cardTitle}>Total Transacciones</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.cardValue}>100</Text>
          <Text style={styles.cardTitle}>Propiedades</Text>
        </View>
        <View style={[styles.card, styles.redCard]}>
          <Text style={styles.cardValue}>100</Text>
          <Text style={styles.cardTitle}>Clientes</Text>
        </View>
      </View>

      <View style={styles.lowerRow}>
        {/* Progreso circular */}
        <View style={styles.leftBox}>
          <View style={styles.circleWrapper}>
            <View style={[styles.halfCircle, styles.circleBackground]} />
            <View style={[styles.halfCircle, styles.circleProgress]} />
            <Text style={styles.percentageText}>50%</Text>
          </View>
          <Text style={styles.goalText}>$1.000</Text>
          <Text style={styles.subtitle}>Objetivo $2.000</Text>
        </View>

        {/* Gráfico de barras */}
        <View style={styles.rightBox}>
          <View style={styles.chartBarContainer}>
            <View style={[styles.chartBar, styles.bar1]} />
            <View style={[styles.chartBar, styles.bar2]} />
            <View style={[styles.chartBar, styles.bar3]} />
          </View>

          <View style={styles.bulletRow}>
            <View style={[styles.bullet, { backgroundColor: '#007bff' }]} />
            <Text style={styles.subtitle}>5 Tareas en curso</Text>
          </View>
          <View style={styles.bulletRow}>
            <View style={[styles.bullet, { backgroundColor: '#28a745' }]} />
            <Text style={styles.subtitle}>5 Tareas completadas</Text>
          </View>
          <View style={styles.bulletRow}>
            <View style={[styles.bullet, { backgroundColor: '#dc3545' }]} />
            <Text style={styles.subtitle}>5 Tareas sin iniciar</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ReportPDF;
