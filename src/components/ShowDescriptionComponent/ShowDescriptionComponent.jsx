import React from 'react';

const ShowDescriptionComponent = ({ title, overview, id }) => (
  <div>
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"> {title} </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              {' '}

            </button>
          </div>
          <div className="modal-body">{overview}</div>
          <div className="modal-footer">
            {' '}
            <button type="button" className="btn btn-secondary" data-dismiss="modal"> Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ShowDescriptionComponent;
