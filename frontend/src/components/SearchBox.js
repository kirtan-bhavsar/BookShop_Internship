import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="search-setting">
      <div>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5 for_form search-setting"
        ></Form.Control>
      </div>
      <div>
        <Button
          type="submit"
          variant="outline-success"
          className="p-2 for_search search-setting-2"
        >
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchBox;
//if search fails then delete this
