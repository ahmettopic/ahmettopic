import React from 'react';
import firebaseConfig from '../../config/firebaseConfig';

export const PortfolioInput = ({ portfolioItems }) => {
  const [title, setTitle] = React.useState(portfolioItems.title);
  const onUpdate = () => {
    const db = firebaseConfig.firestore();
    db.collection('portfolioItems')
      .doc(portfolioItems.id)
      .set({ ...portfolioItems, title });
  };

  const onDelete = () => {
    const db = firebaseConfig.firestore();
    db.collection('portfolioItems').doc(portfolioItems.id).delete();
  };
  return (
    <React.Fragment>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </React.Fragment>
  );
};
