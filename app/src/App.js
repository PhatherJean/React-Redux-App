import { connect } from "react-redux";
import "./App.css";

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Grown Folk Jokes </h1>
      <section className="box box1">
        <p>
          {props.jokes.joke}
          {props.jokes.setup}
        </p>
      </section>
      <section className="box box2">
        <p>{props.jokes.delivery}</p>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    jokes: {
      error: state.jokes.error,
      category: state.jokes.category,
      type: state.jokes.type,
      joke: state.jokes.joke,
      setup: state.jokes.setup,
      delivery: state.jokes.delivery,
      id: "",
      safe: state.safe,
      lang: "",
    },
  };
};
export default connect(mapStateToProps)(App);
