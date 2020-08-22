import React from 'react';
import firebaseConfig from '../../config/firebaseConfig';
// Components
import { PortfolioInput } from './PortfolioInput';

function PortfolioData() {
  const [portfolioItems, setPortfolioItems] = React.useState([]);
  const [newPortfolioItem, setNewPortfolioItem] = React.useState();

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

  const onCreate = () => {
    const db = firebaseConfig.firestore();
    db.collection('portfolioItems').add({ title: newPortfolioItem });
  };

  return (
    <React.Fragment>
      <input
        value={newPortfolioItem}
        onChange={(e) => setNewPortfolioItem(e.target.value)}
      />
      <button onClick={onCreate}>Create</button>
      <ul style={{ listStyleType: 'none' }}>
        {portfolioItems.map((portfolioItems) => (
          <li key={portfolioItems.title}>
            <PortfolioInput portfolioItems={portfolioItems} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default PortfolioData;
