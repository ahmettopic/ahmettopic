import React from 'react';
import firebaseConfig from '../../config/firebaseConfig';

function PortfolioData() {
  const [portfolioItems, setPortfolioItems] = React.useState([]);

  React.useEffect(() => {
    const fetchdata = async () => {
      const db = firebaseConfig.firestore();
      const data = await db.collection('portfolioItems').get();
      setPortfolioItems(data.docs.map((doc) => doc.data()));
    };
    fetchdata();
  }, []);

  return (
    <React.Fragment>
      {portfolioItems.map((portfolioItems) => (
        <ul key={portfolioItems.title} style={{ listStyleType: 'none' }}>
          <li>{portfolioItems.title}</li>
        </ul>
      ))}
    </React.Fragment>
  );
}

export default PortfolioData;
