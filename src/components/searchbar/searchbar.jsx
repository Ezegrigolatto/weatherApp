import { useDispatch } from "react-redux";
import { getInfo } from "../../redux/actions";
import { useState} from "react";
import "./searchbar.css";

export default function SearchBar(props) {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getInfo(city),
    setCity("")
    );
  };

  const onChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form className="searchbarBox" onSubmit={onSubmit} >
      <input
        className="inputcity"
        type="text"
        placeholder="City..."
        onChange={onChange}
        value={city}
      />
      <button 
        type="submit"
        className="btn"
        > Search </button>
    </form>
  );
}