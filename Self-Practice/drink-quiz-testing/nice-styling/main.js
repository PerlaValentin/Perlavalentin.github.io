const Component = React.Component;
const Transition = ReactTransitionGroup.Transition;
const TransitionGroup = ReactTransitionGroup.TransitionGroup;
const CSSTransition = ReactTransitionGroup.CSSTransition;

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      answer: [],
      totalQuestion: 0,
      list: [],
      next: 1,
      finish: false,
      animate: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      this.setState({
        animate: true,
      });
    }
  }

  triggerAnimation = bool => {
    this.setState({
      animate: bool,
    });
  };

  getAnswer = (e, answer) => {
    console.log(answer === this.state.list[this.state.id].final, this.state.answer);
    this.setState({
      answer: [
        ...this.state.answer,
        answer === this.state.list[this.state.id].final,
      ],
      id: this.state.next,
      next: this.state.next + 1,
      finish: this.state.next + 1 > this.state.totalQuestion,
    });

    window.scroll(0, 0);
  };

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/snowleo208/100-Days-of-Code/master/9.%20Quiz/src/data.json'
    )
      .then(data => data.json())
      .then(json => {
        this.setState({
          list: json,
          totalQuestion: json.length,
        });
      });
  }

  render() {
    return !this.state.finish && this.state.list.length > 0 ? (
      <React.Fragment>
        <Header />
        <section className="quiz">
          <div className="quiz__image">
            <img
              src={`https://snowleo208.github.io/100-Days-of-Code/9.%20Quiz/assets/q${
                this.state.id + 1 < 10
                  ? '0' + (this.state.id + 1)
                  : this.state.id + 1
              }.jpg`}
              alt=""
              className={this.state.animate ? 'fade-in' : ''}
            />
          </div>
          <div className="quiz__wrapper">
            <div className="quiz__question">
              <h2>
                {this.state.list && this.state.list[this.state.id]['question']}
              </h2>
            </div>
            {/* <div className="quiz__answer"> */}
            <TransitionGroup className="quiz__answer">
              {this.state.list &&
                this.state.list[this.state.id]['answer'].map((item, index) => {
                  const delay = Math.max(0, index * 100);
                  return (
                    <CSSTransition
                      key={'a' + this.state.id + ' ' + item}
                      timeout={400}
                      classNames="fade"
                      unmountOnExit
                      onExited={() => {
                        this.triggerAnimation(false);
                      }}
                    >
                      <button
                        onClick={e => this.getAnswer(e, index)}
                        key={'a' + this.state.id + ' ' + item}
                        className="quiz__answer--item"
                        style={{ transitionDelay: `${delay}ms` }}
                      >
                        {item}
                      </button>
                    </CSSTransition>
                  );
                })}
            </TransitionGroup>
            {/* </div> */}
          </div>
        </section>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Header />
        <Result
          answer={this.state.answer.filter(item => item === true).length}
          totalQuestion={this.state.totalQuestion}
        />
      </React.Fragment>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
    };
  }
  isStart = () => {
    this.setState(prevState => {
      return {
        start: !prevState.start,
      };
    });
    window.scroll(0, 0);
  };
  render() {
    return (
      <header className={!this.state.start ? 'header intro' : 'header fade-in'}>
        <div>
          <img
            src="https://snowleo208.github.io/100-Days-of-Code/9.%20Quiz/assets/coffee-cup.svg"
            alt="Logo"
            className={
              !this.state.start ? 'header--logo__large fade-in' : 'header--logo'
            }
          />
          {!this.state.start ? (
            <React.Fragment>
              <h1>What is food, really?</h1>
              <p>
                This food and drink trivia let you know more about your
                knowledge of food!
              </p>
              <button onClick={this.isStart}>Start</button>
            </React.Fragment>
          ) : (
            ''
          )}
        </div>
      </header>
    );
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  share = media => {
    console.log(media);
    const text = `I have finished this food quiz and get ${
      this.props.answer
    } out of ${this.props.totalQuestion}!`;
    const url = 'https://codepen.io/snowleo208/pen/WajvaJ';
    console.log(encodeURIComponent(text));
    switch (media) {
      case 'twitter':
        window.open(
          `http://twitter.com/share?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}&hashtags=quiz,food`
        );
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}&t=${encodeURIComponent(text)}`
        );
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <React.Fragment>
        <section className="result fade-in">
          <div className="result__image">
            <img
              src="https://snowleo208.github.io/100-Days-of-Code/9.%20Quiz/assets/result-tanya-patrikeyeva-423820-unsplash.jpg"
              alt="Thank you for answering this quiz!"
            />
          </div>
          <div className="result__text">
            <h1>Your Results</h1>
            <p>
              You get <strong>{this.props.answer}</strong> out of
              <strong> {this.props.totalQuestion} </strong>! Well done!
            </p>

            <button
              className="result__button result__button--twitter"
              onClick={() => this.share('twitter')}
            >
              Share in Twitter
            </button>
            <button
              className="result__button result__button--facebook"
              onClick={() => this.share('facebook')}
            >
              Share in Facebook
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  render() {
    return <Quiz />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));