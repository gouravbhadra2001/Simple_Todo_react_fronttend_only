import React from 'react'

const Add = ({todoTitle, setTodoTitle, todoDescription, setTodoDescription, addTodo}) => {
  return (
    <>
    <section className="vh-40 z-2">
  <div className="row justify-content-center align-items-center">
  
    <div className="card custom-bg-card col-12 col-lg-6 shadow p-3 mb-5 rounded-5" >
      <h3 className="mb-4 pt-3 winhead-font">Add Item</h3>
      <form className="row g-3">
        <div className="mb-3">  
          <input
            type="text"
            className="form-control shadow-sm"
            id="exampleFormControlInput1"
            placeholder="Title"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control shadow-sm"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Description"
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-success btn-add-font border-2 rounded-5 btn-sm col-12 mb-2 col-md-2 col-sm-6 col-xs-6"
          onClick={addTodo}
          title='Add List Item'
        >
          Add
        </button>
      </form>
    </div>
  </div>
</section>

    </>
  )
}


export default Add
