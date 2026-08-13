export default function Drivers() {
  const driversData = [
    { brand: "Bematech", models: ["Driver MP-100s TH", "Driver MP-2500 TH", "Driver MP-2800 TH", "Driver MP-4000 TH", "Driver MP-4200 TH", "Driver MP-4200 HS", "Driver MP-5100 TH"] },
    { brand: "Elgin", models: ["Driver Elgin 17", "Driver Elgin 18", "Driver Elgin 19"] },
    { brand: "Epson", models: ["Driver TM T20", "Driver TM T20X", "Driver TM T88V"] },
    { brand: "Control ID", models: ["Driver Control ID"] },
    { brand: "Sweda", models: ["Driver SI 150", "Driver SI 250", "Driver SI 300"] },
    { brand: "Daruma", models: ["Driver DR-700", "Driver DR-800"] },
    { brand: "Tanca", models: ["Driver TP-450", "Driver TP-620", "Driver TP-650"] },
    { brand: "Diebold", models: ["Driver Geral Diebold"] },
    { brand: "JetWay", models: ["Driver JP-500", "Driver JP-800"] },
    { brand: "WayTec", models: ["Driver WP-100"] },
    { brand: "Pos-80 (Chinesas)", models: ["Driver POS-58", "Driver POS-80"] },
    { brand: "HPRT", models: ["Driver Geral HPRT"] },
    { brand: "Feasso", models: ["Driver Geral Feasso"] },
    { brand: "Perto", models: ["Driver Geral Perto"] },
    { brand: "TecToy", models: ["Driver Tectoy Q4"] },
    { brand: "Taicon", models: ["Driver Taicon TP500L", "Driver Taicon TA-TP510L/W", "Driver Taicon TA-TP610L/W"] },
    { brand: "Gertec", models: ["Driver Gertec G250"] }
  ];

  return (
    <div>
      <h2>Modelos e Drivers de Impressoras</h2>
      <p>Lista completa de drivers organizados por fabricante conforme o manual técnico:</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        {driversData.map(item => (
          <div key={item.brand} style={{ background: '#e6f0fa', borderLeft: '5px solid #0066cc', padding: '15px', borderRadius: '4px' }}>
            <h3 style={{ color: '#004080', marginBottom: '8px' }}>{item.brand}</h3>
            <ul style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
              {item.models.map((model, idx) => (
                <li key={idx}>{model}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}