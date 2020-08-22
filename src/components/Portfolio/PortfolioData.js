import React from 'react';
import firebaseConfig from '../../config/firebaseConfig';
// Components
import { PortfolioInput } from './PortfolioInput';

function PortfolioData() {
  const [portfolioItems, setPortfolioItems] = React.useState([]);

  React.useEffect(() => {
    const fetchdata = async () => {
      const db = firebaseConfig.firestore();
      const data = await db.collection('portfolioItems').get();
      setPortfolioItems(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchdata();
  }, []);

  return (
    <React.Fragment>
      {portfolioItems.map((portfolioItems) => (
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <PortfolioInput portfolioItems={portfolioItems} />
          </li>
        </ul>
      ))}
    </React.Fragment>
  );
}

export default PortfolioData;
