import React from 'react';
import firebaseConfig from '../../config/firebaseConfig';
// Material Grid
import Grid from '@material-ui/core/Grid';

export const PortfolioInput = ({ portfolioItems }) => {
  const [title, setTitle] = React.useState(portfolioItems.title);
  const [desc, setDesc] = React.useState(portfolioItems.desc);
  const [imgURL, setImgURL] = React.useState(portfolioItems.imgURL);
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

  const inputStyle = {
    width: '100',
    margin: '10px',
  };

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <div style={{ backgroundColor: '#d9d9d9', padding: '50px' }}>
            <div style={inputStyle}>
              <input
                style={{
                  width: '60%',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                }}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
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
                value={imgURL}
                onChange={(e) => {
                  setImgURL(e.target.value);
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ margin: 10 }}>
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
