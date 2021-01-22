import { connect } from "react-redux";
import "./App.css";
import { reducer } from "./reducers";

const initialState = {
  dbz: {
    title: "Seikoku no Dragonar",
    episodes: 13,
    image_url:
      "https://cdn.myanimelist.net/images/anime/13/56419.jpg?s=3b263990a49e0de6238033736192dffd",
    synopsis:
      'Learning to ride and tame dragons comes easy to most students at Ansarivan Dragonar Academy—except for first-year sh Blake, who is known by his fellow classmates as the "number one problem "',
  },
};
console.log(initialState);
const App = (props) => {
  return (
    <div className="App">
      <h1> Dragonball Saga </h1>
      <div className="dragon">
        <h2>{initialState.dbz.title}</h2>
        <img src={initialState.dbz.image_url} alt={initialState.dbz.title} />
        <p className="bio">{initialState.dbz.synopsis}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};
export default connect(mapStateToProps)(App);
