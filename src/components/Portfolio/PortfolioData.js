import React from 'react';
import firebaseConfig from '../../config/firebaseConfig';
// Components
import { PortfolioInput } from './PortfolioInput';
// Styled Components
import StyledHeading from '../../styles/StyledHeading';

function PortfolioData() {
  const [portfolioItems, setPortfolioItems] = React.useState([]);
  const [newPortfolioItem_title, setNewPortfolioItem_title] = React.useState();
  const [newPortfolioItem_desc, setNewPortfolioItem_desc] = React.useState();

  const [
    newPortfolioItem_imgURL,
    setNewPortfolioItem_imgURL,
  ] = React.useState();
  const [
    newPortfolioItem_githubLink,
    setNewPortfolioItem_githubLink,
  ] = React.useState();
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
    db.collection('portfolioItems').add({
      title: newPortfolioItem_title,
      desc: newPortfolioItem_desc,
      imgURL: newPortfolioItem_imgURL,
      githubLink: newPortfolioItem_githubLink,
    });
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
      <div
        style={{
          backgroundImage: `url(${newPortfolioItem_imgURL})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '600',
        }}
        value={newPortfolioItem_imgURL}
      >
        <StyledHeading style={styles}>New portfolio item</StyledHeading>
        <div style={inputStyle}>
          <input
            style={{
              width: '60%',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
            value={newPortfolioItem_title}
            onChange={(e) => setNewPortfolioItem_title(e.target.value)}
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
            value={newPortfolioItem_desc}
            onChange={(e) => setNewPortfolioItem_desc(e.target.value)}
          />
        </div>
        <div style={inputStyle}>
          <input
            style={{
              width: '60%',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
            value={newPortfolioItem_imgURL}
            onChange={(e) => setNewPortfolioItem_imgURL(e.target.value)}
          />
        </div>
        <div style={inputStyle}>
          <input
            style={{
              width: '60%',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
            value={newPortfolioItem_githubLink}
            onChange={(e) => setNewPortfolioItem_githubLink(e.target.value)}
          />
        </div>
        <div style={{ margin: 10 }}>
          <button onClick={onCreate}>Add</button>
        </div>
      </div>
      <div style={{ paddingTop: '60px' }}>
        <StyledHeading style={styles}>Edit Portfolio Items</StyledHeading>
        {portfolioItems.map((portfolioItems) => (
          <div key={portfolioItems.item}>
            <PortfolioInput portfolioItems={portfolioItems} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default PortfolioData;
