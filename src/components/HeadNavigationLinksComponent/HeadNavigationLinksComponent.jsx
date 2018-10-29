import React from 'react';

const HeadNavigationLinksComponent = ({ children, title }) => {

  return (
    <div className="jumbotron" style={{padding:10, margin:0}}>
      <h1 className="display-7" >{title}</h1>
        <div className="card" style={{ display: 'flex' }}>
          <div className="btn-group">
            {children}
          </div>

      </div>
      </div>
  );
};

export default HeadNavigationLinksComponent;
