import React from 'react';


const List = ({ listNames, listDescriptions, remove }) => {
  return (
    <>
      {listNames?.length > 0 ? (
        <div className="list-group z-1">
          {listNames.map((title, index) => (
            <div className="row justify-content-center align-items-center h-100">
            <div className="col-10 col-sm-9 col-xl-7">

            <div className="mb-3 d-flex list-group-item custom-card-bg shadow-lg rounded" key={index}>
  
              <a
                href="#"
                className="list-group-item list-group-item-action border-0 btn-list-font"
                data-bs-toggle="tooltip" data-bs-placement="left"
                title={listDescriptions[index]}
                style={{width:"80vw"}}
              >
               <span className="badge bg-info me-2 px-3 py-2">{index + 1}</span> {title}
              </a>
             
              <button
                type="button"
                className="btn btn-outline-danger btn-sm col-2 offset-5 btn-del-font"
                onClick={() => remove(title, listDescriptions[index])}
                title='Delete List Item'
              >
                Delete
              </button>
            </div>
            </div>
            </div>
          ))}
        </div>

      ) : (
        <center><h1 className='nothing-font'>No item added</h1></center>
      )}
    </>
  );
};

export default List;


