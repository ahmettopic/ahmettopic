import React from 'react';
import firebaseConfig from '../../config/firebaseConfig';
// Components
import { PortfolioInput } from './PortfolioInput';
// Styled Components
import StyledHeading from '../../styles/StyledHeading';

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

  const styles = {
    fontSize: '18px',
  };
  const inputStyle = {
    width: '100',
    margin: '10px',
  };

  return (
    <React.Fragment>
      <div style={{ marginTop: '10px' }}>
        <StyledHeading style={styles}>New portfolio item</StyledHeading>
        <div style={inputStyle}>
          <input
            style={{
              width: '60%',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
            value={newPortfolioItem}
            onChange={(e) => setNewPortfolioItem(e.target.value)}
          />
        </div>

        <div style={inputStyle}>
          <textarea
            style={{
              width: '60%',
              height: '10vh',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
          />
        </div>
        <div style={inputStyle}>
          <input
            style={{
              width: '60%',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
          />
        </div>
        <div style={{ margin: 10 }}>
          <button onClick={onCreate}>Add</button>
        </div>
      </div>
      <div style={{ paddingTop: '60px' }}>
        <StyledHeading style={styles}>Edit Portfolio Items</StyledHeading>
        {portfolioItems.map((portfolioItems) => (
          <div key={portfolioItems.title}>
            <PortfolioInput portfolioItems={portfolioItems} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default PortfolioData;
