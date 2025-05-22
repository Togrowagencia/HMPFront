const foldersData = [
    {
      "name": "Proyecto Solar",
      "id": "TX1001",
      "createdAt": "2025-05-21T09:00:00Z",
      "transaction": {
        "id": "TRX-001",
        "name": "Instalación de paneles"
      },
      "files": [
        { "name": "Plano general", "url": "https://files.example.com/plano1.pdf" },
        { "name": "Informe técnico", "url": "https://files.example.com/informe1.pdf" }
      ],
      "contracts": [
        { "name": "Contrato principal", "url": "https://files.example.com/contrato1.pdf", "isSigned": true }
      ],
      "user": {
        "id": "USR001",
        "name": "Carlos Pérez",
        "photoUrl": null
      }
    },
    {
      "name": "Remodelación Local",
      "id": "TX1002",
      "createdAt": "2025-05-20T15:30:00Z",
      "transaction": {
        "id": "TRX-002",
        "name": "Reforma estructural"
      },
      "files": [
        { "name": "Presupuesto", "url": "https://files.example.com/presupuesto.pdf" }
      ],
      "contracts": [
        { "name": "Acuerdo de servicio", "url": "https://files.example.com/acuerdo.pdf", "isSigned": false }
      ],
      "user": {
        "id": "USR002",
        "name": "Laura Gómez",
        "photoUrl": null
      }
    },
    {
      "name": "Alquiler Comercial",
      "id": "TX1003",
      "createdAt": "2025-05-19T11:45:00Z",
      "transaction": {
        "id": "TRX-003",
        "name": "Arrendamiento"
      },
      "files": [
        { "name": "Contrato arrendamiento", "url": "https://files.example.com/arrendamiento.pdf" },
        { "name": "Documentos legales", "url": "https://files.example.com/legal.pdf" },
        { "name": "Croquis", "url": "https://files.example.com/croquis.pdf" }
      ],
      "contracts": [
        { "name": "Contrato firmado", "url": "https://files.example.com/firmado.pdf", "isSigned": true }
      ],
      "user": {
        "id": "USR003",
        "name": "Jorge Martínez",
        "photoUrl": null
      }
    },
    {
      "name": "Compra Terreno",
      "id": "TX1004",
      "createdAt": "2025-05-18T08:20:00Z",
      "transaction": {
        "id": "TRX-004",
        "name": "Adquisición de terreno"
      },
      "files": [
        { "name": "Certificado libertad", "url": "https://files.example.com/certificado.pdf" }
      ],
      "contracts": [
        { "name": "Promesa compraventa", "url": "https://files.example.com/promesa.pdf", "isSigned": false }
      ],
      "user": {
        "id": "USR004",
        "name": "Ana Ríos",
        "photoUrl": null
      }
    },
    {
      "name": "Expansión Planta",
      "id": "TX1005",
      "createdAt": "2025-05-17T14:10:00Z",
      "transaction": {
        "id": "TRX-005",
        "name": "Ampliación planta industrial"
      },
      "files": [
        { "name": "Plano planta", "url": "https://files.example.com/planta.pdf" },
        { "name": "Simulación", "url": "https://files.example.com/simulacion.pdf" },
        { "name": "Estimación costos", "url": "https://files.example.com/costos.pdf" },
        { "name": "Reporte viabilidad", "url": "https://files.example.com/viabilidad.pdf" }
      ],
      "contracts": [
        { "name": "Contrato obra", "url": "https://files.example.com/obra.pdf", "isSigned": true }
      ],
      "user": {
        "id": "USR005",
        "name": "Sebastián Ruiz",
        "photoUrl": null
      }
    },
    {
      "name": "Venta Local",
      "id": "TX1006",
      "createdAt": "2025-05-16T10:00:00Z",
      "transaction": {
        "id": "TRX-006",
        "name": "Transferencia local comercial"
      },
      "files": [
        { "name": "Escritura venta", "url": "https://files.example.com/escritura.pdf" }
      ],
      "contracts": [
        { "name": "Contrato venta", "url": "https://files.example.com/venta.pdf", "isSigned": false }
      ],
      "user": {
        "id": "USR006",
        "name": "Valeria Torres",
        "photoUrl": null
      }
    },
    {
      "name": "Mantenimiento Oficinas",
      "id": "TX1007",
      "createdAt": "2025-05-15T13:30:00Z",
      "transaction": {
        "id": "TRX-007",
        "name": "Contrato mantenimiento"
      },
      "files": [
        { "name": "Checklist mantenimiento", "url": "https://files.example.com/checklist.pdf" },
        { "name": "Contrato anual", "url": "https://files.example.com/anual.pdf" }
      ],
      "contracts": [
        { "name": "Contrato firmado", "url": "https://files.example.com/firmado2.pdf", "isSigned": true }
      ],
      "user": {
        "id": "USR007",
        "name": "Mariana Díaz",
        "photoUrl": null
      }
    },
    {
      "name": "Reparación Techos",
      "id": "TX1008",
      "createdAt": "2025-05-14T09:15:00Z",
      "transaction": {
        "id": "TRX-008",
        "name": "Obra menor"
      },
      "files": [
        { "name": "Informe daños", "url": "https://files.example.com/danos.pdf" },
        { "name": "Presupuesto reparación", "url": "https://files.example.com/reparacion.pdf" }
      ],
      "contracts": [
        { "name": "Contrato reparación", "url": "https://files.example.com/contrato3.pdf", "isSigned": true }
      ],
      "user": {
        "id": "USR008",
        "name": "Daniel López",
        "photoUrl": null
      }
    },
    {
      "name": "Renta Temporal",
      "id": "TX1009",
      "createdAt": "2025-05-13T16:00:00Z",
      "transaction": {
        "id": "TRX-009",
        "name": "Alquiler temporal"
      },
      "files": [
        { "name": "Contrato alquiler", "url": "https://files.example.com/alquiler.pdf" },
        { "name": "Pagos iniciales", "url": "https://files.example.com/pagos.pdf" }
      ],
      "contracts": [
        { "name": "Acuerdo firmado", "url": "https://files.example.com/acuerdo2.pdf", "isSigned": false }
      ],
      "user": {
        "id": "USR009",
        "name": "Lucía Herrera",
        "photoUrl": null
      }
    },
    {
      "name": "Estudio Viabilidad",
      "id": "TX1010",
      "createdAt": "2025-05-12T07:50:00Z",
      "transaction": {
        "id": "TRX-010",
        "name": "Análisis preliminar"
      },
      "files": [
        { "name": "Informe financiero", "url": "https://files.example.com/financiero.pdf" },
        { "name": "Estudio técnico", "url": "https://files.example.com/tecnico.pdf" },
        { "name": "Datos de mercado", "url": "https://files.example.com/mercado.pdf" }
      ],
      "contracts": [
        { "name": "Contrato confidencialidad", "url": "https://files.example.com/confidencialidad.pdf", "isSigned": true }
      ],
      "user": {
        "id": "USR010",
        "name": "Tomás Vélez",
        "photoUrl": null
      }
    }
]

export default foldersData