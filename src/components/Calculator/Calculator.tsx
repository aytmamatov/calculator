import "./calculator.scss";

function Calculator() {
  return (
    <div className="container">
      <input type="text" className="display" />

      <div className="buttons">
        <button className="operator" data-value="AC">
          AC
        </button>
        <button className="operator" data-value="DEL">
          DEL
        </button>
        <button className="operator" data-value="%">
          %
        </button>
        <button className="operator" data-value="/">
          /
        </button>

        <button data-value="7">7</button>
        <button data-value="8">8</button>
        <button data-value="9">9</button>
        <button className="operator" data-value="*">
          *
        </button>

        <button data-value="4">4</button>
        <button data-value="5">5</button>
        <button data-value="6">6</button>
        <button className="operator" data-value="-">
          -
        </button>

        <button data-value="1">1</button>
        <button data-value="2">2</button>
        <button data-value="3">3</button>
        <button className="operator" data-value="+">
          +
        </button>

        <button data-value="0">0</button>
        <button data-value="00">00</button>
        <button data-value=".">.</button>
        <button className="operator" data-value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
