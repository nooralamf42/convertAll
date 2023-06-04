import '../css/App.css';
import Navbar from './Navbar';
import Layout from './PageLayout';
import { Route, Routes } from 'react-router-dom';

const convertionData = {
  length : [
    ["cms", "feet", 30.48],
    ["cms", "m", 100],
    ["inch", "feet", 12],
    ["km", "mile", 1.609],
    ["miles", "yards", 1760],
    ["yards", "feet", 3],
    ["mm", "inch", 0.03937],
    ["nm", "micrometer", 0.001]
]
,
  mass : [
    ["grams", "kilograms", 1000],
    ["grams", "pounds", 453.592],
    ["kilograms", "pounds", 0.453592],
    ["ounces", "grams", 28.3495],
    ["pounds", "ounces", 16],
    ["metric tons", "kilograms", 0.001],
    ["short tons", "pounds", 0.0005],
    ["long tons", "pounds", 0.000446429]
]

,
  currency : [
    ["rupees", "dollar", 82.564740],
    ["rupees", "euro", 88.592800],
    ["rupees", "pound", 101.936111],
    ["rupees", "australian dollar", 53.823367],
    ["rupees", "canadian dollar", 60.641606],
    ["rupees", "singapore dollar", 61.139399],
    ["rupees", "swiss franc", 91.102797],
    ["rupees", "malaysian ringgit", 17.946715],
    ["rupees", "japanese yen", 0.587015],
    ["rupees", "chinese yuan", 11.687608],
    ["rupees", "pakistani rupee", 0.289534],
    ["rupees", "indonesian rupiah", 0.005501],
    ["rupees", "philippine peso", 1.477231],
    ["rupees", "iranian rial", 0.001952],
    ["rupees", "israeli shekel", 22.146726],
    ["rupees", "south korean won", 0.062392],
    ["rupees", "kuwaiti dinar", 268.399092],
    ["rupees", "libyan dinar", 17.129762],
    ["rupees", "mauritian rupee", 1.813788],
    ["rupees", "nepalese rupee", 0.624707],
    ["rupees", "omani rial", 214.487473],
    ["rupees", "qatari riyal", 22.682621],
    ["rupees", "saudi riyal", 22.017264],
    ["rupees", "sri lankan rupee" ,0.277434]
]
,

  time : [
    ["seconds", "minutes",  60],
    ["seconds", "hours",  3600],
    ["seconds", "days",  86400],
    ["seconds", "weeks",  604800],
    ["minutes", "hours",  60],
    ["minutes", "days",  1440],
    ["minutes", "weeks",  10080],
    ["hours", "days",  24],
    ["hours", "weeks",  168],
    ["days", "weeks",  7]
  ]
,

  data : [
    ["kilobytes", "bytes", 0.001],
    ["megabytes", "kilobytes", 0.001],
    ["gigabytes", "kilobytes", 0.000001],
    ["terabytes", "kilobytes", 0.000000001],
    ["kilobytes", "megabytes", 1000],
    ["gigabytes", "megabytes", 0.001],
    ["terabytes", "gigabytes", 0.001],
    ["kilobytes", "terabytes", 1000000000],
    ["megabytes", "terabytes", 1000000],
    ["gigabytes", "terabytes", 1000]
]
}



function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Layout convertionType="Length" data = {convertionData.length} />} />
        <Route  path="/length" element={<Layout convertionType="Length" data = {convertionData.length} />} />
        <Route  path="/currency" element={<Layout convertionType="Currency" data = {convertionData.currency} />} />
        <Route  path="/mass" element={<Layout convertionType="Mass" data = {convertionData.mass} />} />
        <Route  path="/time" element={<Layout convertionType="Time" data = {convertionData.time} />} />
        <Route  path="/data" element={<Layout convertionType="Data" data = {convertionData.data} />} />
      </Routes>
    </div>
  );
}

export default App;
