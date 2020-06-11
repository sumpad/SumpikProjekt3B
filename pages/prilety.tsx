import Layout from "../comps/MyLayout";


export default function Prilety() {
    return (
        <Layout>
      
      <div className="contable">
      <h3 className="nadpis">Prilety</h3>
      <table> 
        <tr><th>ID</th><th>Město</th><th>Čas</th></tr>
        <tr><td>1248</td><td>Praha</td><td>15:00</td></tr>
        <tr><td>0865</td><td>K. Vary</td><td>21:00</td></tr>
        <tr><td>0984</td><td>Brno</td><td>10:00 z</td></tr>
        <tr><td>1248</td><td>Praha</td><td>15:00</td></tr>
        <tr><td>0865</td><td>K. Vary</td><td>21:00</td></tr>
        <tr><td>0984</td><td>Brno</td><td>10:00 z</td></tr>
        <tr><td>1248</td><td>Praha</td><td>15:00</td></tr>
        <tr><td>0865</td><td>K. Vary</td><td>21:00</td></tr>
        <tr><td>0984</td><td>Brno</td><td>10:00 z</td></tr>
        <tr><td>1248</td><td>Praha</td><td>15:00</td></tr>
        <tr><td>0865</td><td>K. Vary</td><td>21:00</td></tr>
        <tr><td>0984</td><td>Brno</td><td>10:00 z</td></tr>
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
  