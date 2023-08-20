import React from 'react';
import './App.css';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
  return (
    <div className="App">
     <SpreadsheetComponent allowOpen={true} allowSave={true} 
     openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open'
     saveUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'
     >

     </SpreadsheetComponent>

    </div>
  );
}

export default App;
