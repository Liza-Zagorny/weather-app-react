import "../css/Search.css";

function Search() {
  return (
    <div className="Search">
      <div className="row search-row">
        <div className="col-10 search-from ">
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search another city"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="col-2 d-grid gap-2 d-flex justify-content-evenly">
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
