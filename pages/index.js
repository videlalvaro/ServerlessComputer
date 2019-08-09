import { AppConsumer } from '../components/AppProvider';
import Console from '../components/Console';

function Help(props) {
  return (
    <div className="help noise">
      <div className="window">
        <h3>Help</h3>
        <ul className="list">
          <li className="item">
            <span className="name">X</span>
            <span className="desc">The X 16-bit input</span>
          </li>
          <li className="item">
            <span className="name">Y</span>
            <span className="desc">The Y 16-bit input</span>
          </li>
          <li className="item">
            <span className="name">Flags</span>
            <span className="desc">The ALU takes the following flags</span>
          </li>
          <li className="item">
            <span className="name">zx</span>
            <span className="desc">zero the x input</span>
          </li>
          <li className="item">
            <span className="name">nx</span>
            <span className="desc">negate the x input</span>
          </li>
          <li className="item">
            <span className="name">zy</span>
            <span className="desc">zero the y input</span>
          </li>
          <li className="item">
            <span className="name">ny</span>
            <span className="desc">negate the y input</span>
          </li>
          <li className="item">
            <span className="name">op</span>
            <span className="desc">
              function code: 1 for X + Y, 0 for X & Y
            </span>
          </li>
          <li className="item">
            <span className="name">no</span>
            <span className="desc">negate output</span>
          </li>
        </ul>
        <button onClick={props.closeHelpModal}>Close Help</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div className="wrapper">
      <button onClick={props.showHelpModal}>Show Help</button>
      <Console />
    </div>
  );
}

function Root(props) {
  return (
    <AppConsumer>
      {(props) =>
        console.log(props) || (
          <div>
            <style jsx global>{`
              @font-face {
                font-family: Computer;
                src: url('/static/Computerfont.ttf');
              }

              html,
              body {
                margin: 0;
                padding: 0;
              }

              body {
                min-height: 100vh;
                background-color: transparent;
                overflow: hidden;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
                  'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
                  monospace;
                color: white;
                font-size: 14px;
                background-color: #222222;
                background-image: radial-gradient(
                  circle at 50% -100%,
                  rgb(0, 44, 72) 30%,
                  #ff00d922,
                  #000000
                );
                text-transform: uppercase;
                padding: 0;
                margin: 0;
              }

              .wrapper {
                position: relative;
                max-width: 1080px;
                margin: 0 auto;
              }

              .noise {
                background: linear-gradient(
                    rgba(10, 10, 10, 0.2),
                    rgba(0, 0, 0, 0.2)
                  ),
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    black 3px,
                    black 3px
                  );
              }
              .help {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 100;
                background-color: rgba(23, 23, 23, 0.48);
                padding: 0.5rem;
                height: 100vh;
                width: 100%;
              }

              .help .window {
                border: solid 3px #7a7a7a;
                background-color: #171717;
                padding: 1rem;
                width: 500px;
                height: 300px;
                margin: 0 auto;
                border-radius: 6px;
                top: -50%;
                transform: translateY(50%);
              }

              .help .name {
                padding-right: 1rem;
              }

              .help .list {
                padding: 0;
                margin: 0;
                list-style: none;
              }

              .help .item {
                margin: 0;
                padding: 0;
                display: flex;
                flex-grow: 0;
              }

              button {
                display: inline-block;
                font-size: 0.88rem;
                color: rgb(255, 255, 255);
                text-align: center;
                text-transform: uppercase;
                padding-left: 15px;
                padding-right: 15px;
                line-height: 30px;
                font-weight: bold;
                letter-spacing: 1.5px;
                background: transparent;
                border-radius: 6px;
                transition: background-color 0.2s ease 0s;
                margin: 15px 0;
              }

              button:hover {
                background-color: rgb(255, 255, 255);
                color: #262626;
                cursor: pointer;
              }
            `}</style>
            {props.helpModal && <Help {...props} />}
            <App {...props} />
          </div>
        )
      }
    </AppConsumer>
  );
}

export default Root;
