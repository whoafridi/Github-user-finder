import React, { useEffect, useState } from "react";
import Result from "../Result/Result";

const Search = () => {
  const [inputchange, setInputChange] = useState<string>("");
  const [repo, setRepo] = useState<Object>({});
  const [error, setError] = useState<string>('');
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputChange(e.target.value);
    console.log(inputchange);
  };

  const handleClick = () => {
    fetch(`https://api.github.com/users/${inputchange}`)
      .then((res) => res.json())
      .then((data) => {
        if(data.message){
          setError(data.message)
        }
      setRepo(data);
      })
    };

  useEffect(() => {
    handleClick();
  }, [inputchange]);

  return (
    <div className="container">
      <h1 className="text-center text-success text-capitalize fw-bolder fs-1 mt-4">
        Search for Github user
      </h1>
      <div className="input-group mb-4 mt-3 shadow-lg p-3 mb-5 bg-body rounded w-auto">
        <input
          type="text"
          value={inputchange}
          onChange={handleChange}
          className="form-control rounded-pill"
          placeholder="search github user"
        />
        <button
          onClick={() => handleClick()}
          className="btn btn-outline-secondary rounded-pill ms-1"
          type="button"
          disabled={!inputchange}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      {
        Object.keys(repo).length === 0 ? <></> :
      <Result repo={repo} error={error}></Result>
      }
    </div>
  );
};

export default Search;
