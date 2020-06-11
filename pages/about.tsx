import Layout from '../comps/MyLayout';

export default function About() {
    return (
        <Layout>
    <div className="Zamestnanci">
        <h3 className="nadpis">Zamestnanci letiste</h3>
        <ul title="Zamestnanci">
            <li><strong className="pozice">Manažer:</strong> Dominik Žiga +420 565 214 575</li><br />
            <li><strong className="pozice">Správce:</strong> Marián Bílý +420 658 154 750</li><br />
            <li><strong className="pozice">Uklizečka:</strong> Monika Giňová +420 705 454 745</li>
        </ul>
    </div>
    <style jsx>{`
        * {
          font-family:  sans-serif;
        }
        li {
            list-style-type: none;
        }
        .nadpis{
            padding-left: 20px;
        }
        .pozice {
            color: yellow;
        }
        .Zamestnanci {
            display: flex;
            justify-content: center;
            padding: 10px 10px;
            width: 30%;
            color: white;
            background-color: blue;
            border-radius: 10px;
        }
      `}</style>
        </Layout>
    );
  }