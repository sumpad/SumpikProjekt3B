import Layout from '../comps/MyLayout';


export default function Odlety() {
    return (
        <Layout>
      
      <div className="contable">
      <h3 className="nadpis">Odlety</h3>
      <table> 
          <tr><th>ID</th><th>Město</th><th>Čas</th></tr>
          <tr><td>1002</td><td>Brno</td><td>10:00</td></tr>
          <tr><td>1451</td><td>Praha</td><td>18:00</td></tr>
          <tr><td>1127</td><td>K.Vary</td><td>08:00 z</td></tr>
          <tr><td>1002</td><td>Brno</td><td>10:00</td></tr>
          <tr><td>1451</td><td>Praha</td><td>18:00</td></tr>
          <tr><td>1127</td><td>K.Vary</td><td>08:00 z</td></tr>
          <tr><td>1002</td><td>Brno</td><td>10:00</td></tr>
          <tr><td>1451</td><td>Praha</td><td>18:00</td></tr>
          <tr><td>1127</td><td>K.Vary</td><td>08:00 z</td></tr>
          <tr><td>1002</td><td>Brno</td><td>10:00</td></tr>
          <tr><td>1451</td><td>Praha</td><td>18:00</td></tr>
          <tr><td>1127</td><td>K.Vary</td><td>08:00 z</td></tr>
      </table>
    </div>
      <style jsx>{`
      *{
      font-family: sans-serif;
      }
      .contable {
        margin-left: 40%;
      }
      .nadpis{
        display: flex;
        justify-content: center;
        text-decoration: none;
        padding: 10px 20px;
        border: 1px solid blue;
        width: 5%;
      }
      th{
        color: blue;
        padding: 10px 20px;
        border: 1px solid blue;
      }
      td {
        padding: 10px 20px;
        color: white;
        background-color: blue;
      }
    
    `}</style>
        </Layout>
    );
  }
  