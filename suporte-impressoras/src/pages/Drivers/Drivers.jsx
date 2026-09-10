import mp100sth from "../../assets/images/impression/Bematech/MP-100s TH.png"
import mp2500th from "../../assets/images/impression/Bematech/MP-2500 TH.png"
import mp2800th from "../../assets/images/impression/Bematech/MP-2800 TH.png"
import mp4000th from "../../assets/images/impression/Bematech/MP-4000 TH.png"
import mp4200th from "../../assets/images/impression/Bematech/MP-4200 TH.png"
import mp4200hs from "../../assets/images/impression/Bematech/MP-4200 HS.png"
import mp5100th from "../../assets/images/impression/Bematech/MP-5100 TH.png"
import elgini7 from "../../assets/images/impression/Elgin/Elgin i7.png"
import elgini8 from "../../assets/images/impression/Elgin/Elgin i8.png"
import elgini9 from "../../assets/images/impression/Elgin/Elgin i9.png"
import tmt20 from "../../assets/images/impression/Epson/TM T20.png"
import tmt20x from "../../assets/images/impression/Epson/TM T20X.png"
import tmt88v from "../../assets/images/impression/Epson/TM T88V.png"
import controlId from "../../assets/images/impression/ControlID/Control ID.png"
import si150 from "../../assets/images/impression/Sweda/SI 150.png"
import si250 from "../../assets/images/impression/Sweda/SI 250.png"
import si300 from "../../assets/images/impression/Sweda/SI 300.png"
import dr700 from "../../assets/images/impression/Daruma/DR-700.png"
import dr800 from "../../assets/images/impression/Daruma/DR-800.png"
import tp450 from "../../assets/images/impression/Tanca/TP-450.png"
import tp620 from "../../assets/images/impression/Tanca/TP-620.png"
import tp650 from "../../assets/images/impression/Tanca/TP-650.png"
import diebold from "../../assets/images/impression/Diebold/Diebold.png"
import jp500 from "../../assets/images/impression/JetWay/JP-500.png"
import jp800 from "../../assets/images/impression/JetWay/JP-800.png"
import wp100 from "../../assets/images/impression/WayTec/WP-100.png"
import pos58 from "../../assets/images/impression/Pos-80/POS-58.png"
import pos80 from "../../assets/images/impression/Pos-80/POS-80.png"
import hprt from "../../assets/images/impression/HPRT/HPRT.png"
import feasso from "../../assets/images/impression/Feasso/Feasso.png"
import perto from "../../assets/images/impression/Perto/Perto.png"
import q4 from "../../assets/images/impression/TecToy/Tectoy Q4.png"
import tp500l from "../../assets/images/impression/Taicon/TP500L.png"
import tatp510lw from "../../assets/images/impression/Taicon/TA-TP510LW.png"
import tatp610lw from "../../assets/images/impression/Taicon/TA-TP610LW.png"
import G250 from "../../assets/images/impression/Gertec/Gertec G250.png"
import {
  DriverImpression,
  Img
} from "./styled"

export default function Drivers() {
  const driversData = [
    { 
      brand: "Bematech", 
      models: [ 
        { name: "Driver MP-100s TH", image: mp100sth, url: "https://drive.google.com/file/d/16fwJV3q1Bu--0ACQWzQ7agpM2rij9XdO/view?usp=sharing" },
        { name: "Driver MP-2500 TH", image: mp2500th, url: "https://drive.google.com/file/d/1u514HHsxL2es7n3ql8smndqUm_F25-Mh/view?usp=sharing" },
        { name: "Driver MP-2800 TH", image: mp2800th, url: "https://drive.google.com/file/d/1YGwjltpcd5FALSsmL0m-Z1KituN8TlkQ/view?usp=sharing" },
        { name: "Driver MP-4000 TH", image: mp4000th, url: "https://drive.google.com/file/d/1u514HHsxL2es7n3ql8smndqUm_F25-Mh/view?usp=sharing" },
        { name: "Driver MP-4200 TH", image: mp4200th, url: "https://drive.google.com/file/d/1u514HHsxL2es7n3ql8smndqUm_F25-Mh/view?usp=sharing" },
        { name: "Driver MP-4200 HS", image: mp4200hs, url: "https://drive.google.com/file/d/1wYgbBXffxt_57VOQTv8NbGznq5fo3onW/view?usp=sharing" },
        { name: "Driver MP-5100 TH", image: mp5100th, url: "https://drive.google.com/file/d/1qegaVSbvv5lhe6DLCXzm7XUQ6HyDSNxN/view?usp=sharing" }
      ] 
    },
    { 
      brand: "Elgin", 
      models: [
        { name: "Driver Elgin i7", image: elgini7, url: "https://drive.google.com/file/d/1K_x7kNkWI1YSUpXFBfVLjgNWMX0JqViW/view?usp=sharing" },
        { name: "Driver Elgin i8", image: elgini8, url: "https://drive.google.com/file/d/1htm8htRWy_aMtHesx4_HYhSEHDg4NnjO/view?usp=sharing" },
        { name: "Driver Elgin i9", image: elgini9, url: "https://drive.google.com/file/d/1K_x7kNkWI1YSUpXFBfVLjgNWMX0JqViW/view?usp=sharing" }
      ] 
    },
    { 
      brand: "Epson", 
      models: [
        { name: "Driver TM T20", image: tmt20, url: "https://drive.google.com/file/d/1Ejiwtzna3nk14vDomqe1CTKWZnsI8f56/view?usp=sharing" },
        { name: "Driver TM T20X", image: tmt20x, url: "https://drive.google.com/file/d/1jyJ5T-aIX3vHxvN_jS9wb-VcQvkg-7iC/view?usp=sharing" },
        { name: "Driver TM T88V", image: tmt88v,url: "https://drive.google.com/file/d/1LzwOn2iu9_7aPPQe3hqGboDd01Ki7JLl/view?usp=sharing" }
      ] 
    },
    { brand: "Control ID", models: [{ name: "Driver Control ID", image: controlId, url: "https://drive.google.com/file/d/1z5GzxpIDuDccwAxOikH7L5fAFlPW20Xm/view?usp=sharing"}] },
    { brand: "Sweda", models: [
      { name: "Driver SI 150", image: si150, url: "https://drive.google.com/file/d/1DiRU7D0mrbhrR7af9BqdqWClghkwKqZO/view?usp=sharing" },
      { name: "Driver SI 250", image: si250, url: "https://drive.google.com/file/d/1DiRU7D0mrbhrR7af9BqdqWClghkwKqZO/view?usp=sharing" },
      { name: "Driver SI 300", image: si300, url: "https://drive.google.com/file/d/1SErPH1wXIHQhXl-7lasocvp6yQNpvaQy/view?usp=sharing" }
    ]},
    { brand: "Daruma", models: [
      { name: "Driver DR-700", image: dr700, url: "https://drive.google.com/file/d/1XCO2eQTgC7Y1aUfn-x9DpuOiFO9QU-5W/view?usp=sharing" },
      { name: "Driver DR-800", image: dr800, url: "https://drive.google.com/file/d/1cNMepC_aZ4dVJ_dqLyXP9tAhALqF8gMq/view?usp=sharing" }
    ]},
    { brand: "Tanca", models: [
      { name: "Driver TP-450", image: tp450, url: "https://drive.google.com/file/d/1yux-HZp9H9N9URNrQ7Xq5qmwdR47hhp4/view?usp=sharing" },
      { name: "Driver TP-620", image: tp620, url: "https://drive.google.com/file/d/19y3xrb6imgEDexCEzc6qVHHQlX0fXorI/view?usp=sharing" },
      { name: "Driver TP-650", image: tp650, url: "https://drive.google.com/file/d/1K9ocI9IEGW3gnTpW5CgepIPFvt0rUN2w/view?usp=sharing" }
    ]},
    { brand: "Diebold", models: [{ name: "Driver Geral Diebold", image: diebold, url: "https://drive.google.com/file/d/1dUuhOKsHeFjozr81-VoeWKcIsMzmAxzR/view?usp=sharing" }] },
    { brand: "JetWay", models: [
      { name: "Driver JP-500", image: jp500, url: "https://drive.google.com/file/d/12bFcm3PA_IJHGw6KXAocmnM9aqY5QcIv/view?usp=sharing" },
      { name: "Driver JP-800", image: jp800, url: "https://drive.google.com/file/d/1df97VdhOg9Tg6z12AIyPE0CnrdXHuFr_/view?usp=sharing" }
    ]},
    { brand: "WayTec", models: [{ name: "Driver WP-100", image: wp100, url: "https://drive.google.com/file/d/17wmSi56Z5OMIks-GlhTSI4vNe69b6bLZ/view?usp=sharing" }] },
    { brand: "Pos-80 (Chinesas)", models: [
      { name: "Driver POS-58", image: pos58, url: "https://drive.google.com/file/d/12YyTKI5Y8WCbR7pYt5La4W8j8sdAGdhD/view?usp=sharing" },
      { name: "Driver POS-80", image: pos80, url: "https://drive.google.com/file/d/1kt7wEh4OfTzz-E0bEwNMY4HNKJTl9sQj/view?usp=sharing" }
    ]},
    { brand: "HPRT", models: [{ name: "Driver Geral HPRT", image: hprt, url: "https://drive.google.com/file/d/1I6J_kfSOr4MJE9dBvCSABDm48qIJHVaw/view?usp=sharing" }] },
    { brand: "Feasso", models: [{ name: "Driver Geral Feasso", image: feasso, url: "https://drive.google.com/file/d/1aCf1XmMH9TUM52wnie3EpBVUQPHXmGUv/view?usp=sharing" }] },
    { brand: "Perto", models: [{ name: "Driver Geral Perto", image: perto, url: "https://drive.google.com/file/d/1lk3R1z3bTRJYtcn2ctJtjAC91MDg7M7k/view?usp=sharing" }] },
    { brand: "TecToy", models: [{ name: "Driver Tectoy Q4", image: q4, url: "https://drive.google.com/drive/folders/1PH5dGA_il4obYvIBb3174SyvPhKd_7Wu?usp=sharing" }] },
    { brand: "Taicon", models: [
      { name: "Driver Taicon TP500L", image: tp500l, url: "https://drive.google.com/drive/folders/1PH5dGA_il4obYvIBb3174SyvPhKd_7Wu?usp=sharing" },
      { name: "Driver Taicon TA-TP510L/W", image: tatp510lw, url: "https://drive.google.com/drive/folders/1-7-sFk2tI2a8nj54wlA74D8nQaIHYDCw?usp=sharing" },
      { name: "Driver Taicon TA-TP610L/W", image: tatp610lw, url: "https://drive.google.com/drive/folders/13zveEwMRrtWhzHmVnzcoj_E_YCZunCM0?usp=sharing" }
    ]},
    { brand: "Gertec", models: [{ name: "Driver Gertec G250", image: G250, url: "https://drive.google.com/file/d/1TxvlDY6tmlZTr8PiqF60N5MdQudL2QeS/view?usp=sharing" }] }
  ];

  return (
    <div>
      <h2>Modelos e Drivers de Impressoras</h2>
      <p>Lista completa de drivers organizados por fabricante conforme o manual técnico:</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
        {driversData.map(item => (
          <div key={item.brand} style={{ background: '#e6f0fa', borderLeft: '5px solid #0066cc', padding: '15px', borderRadius: '4px' }}>
            <h3 style={{ color: '#004080', marginBottom: '8px' }}>{item.brand}</h3>
            <ul style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
              {item.models.map((model, idx) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                 {model.image && (
                  <Img src={model.image} alt={model.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }}/>
                 )}
                 <DriverImpression href={model.url}><span>{model.name}</span></DriverImpression>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}