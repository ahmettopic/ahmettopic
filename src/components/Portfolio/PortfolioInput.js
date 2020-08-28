import React from 'react';
import firebaseConfig from '../../config/firebaseConfig';
// Material Grid
import Grid from '@material-ui/core/Grid';

export const PortfolioInput = ({ portfolioItems }) => {
  const [title, setTitle] = React.useState(portfolioItems.title);
  const [desc, setDesc] = React.useState(portfolioItems.desc);
  const [imgURL, setImgURL] = React.useState(portfolioItems.imgURL);
  const [githubLink, setGithubLink] = React.useState(portfolioItems.githubLink);
  const onUpdate = () => {
    const db = firebaseConfig.firestore();
    db.collection('portfolioItems')
      .doc(portfolioItems.id)
      .set({ ...portfolioItems, title, desc, imgURL, githubLink });
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
          <div
            style={{
              backgroundImage: `url(${imgURL})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '600',
              marginTop: '10px',
              padding: '5px',
            }}
          >
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
            <div style={inputStyle}>
              <input
                style={{
                  width: '60%',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                }}
                value={githubLink}
                onChange={(e) => {
                  setGithubLink(e.target.value);
                }}
              />
            </div>
            <div style={{ padding: 10 }}>
              <button onClick={onUpdate}>Update</button>
              <button onClick={onDelete}>Delete</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
