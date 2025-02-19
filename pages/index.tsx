import { useViewerQuery } from '../lib/viewer.graphql';
import withApollo from '../lib/with-apollo';
import Layout from '../comps/MyLayout';

const Index = () => {
  const { data, loading } = useViewerQuery();

  if (loading) {
    return <div>Nacitani....</div>;
  }

  if (data) {
    const { viewer } = data;
    return (
      <Layout>
      <div className="zkouska">
        GRAPHQL funguje je "ADMIN" neboli viewer.name označen jako přihlášen: <br/>
        <br/>___{viewer.name} + {viewer.status}____
        <hr/>
        
      </div>
      <div className="contable">
      <h3 className="nadpis">Odlety</h3>
      <table> 
          <tr><th>ID</th><th>Město</th><th>Čas</th></tr>
          <tr><td>1002</td><td>Brno</td><td>10:00</td></tr>
          <tr><td>1451</td><td>Praha</td><td>18:00</td></tr>
          <tr><td>1127</td><td>K.Vary</td><td>08:00 z</td></tr>
      </table>
      <h3 className="nadpis">Prilety</h3>
      <table> 
        <tr><th>ID</th><th>Město</th><th>Čas</th></tr>
        <tr><td>1248</td><td>Praha</td><td>15:00</td></tr>
        <tr><td>0865</td><td>K. Vary</td><td>21:00</td></tr>
        <tr><td>0984</td><td>Brno</td><td>10:00 z</td></tr>
      </table>
      </div>
      <style jsx>{`
    *{
    font-family: sans-serif;
    }
    .zkouska {
      background-color: blue;
      color: white;
    }
    .contable {
      margin-left: 40%;
      margin-right: 30%;
    }
    @media screen and (max-width: 940px) {
      .contable {
        margin-left: 40%;
        margin-right: 30%;
      }
    }
    
    .nadpis{
      color: blue;
      text-decoration: none;
      padding: 10px 20px;
      border: 1px solid blue;
      width: 4em;
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

  return <div>...</div>;
};

export default withApollo(Index);
