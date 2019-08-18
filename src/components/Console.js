function Console() {
  return (
    <div>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .case {
          display: flex;
          border-radius: 2px;
          z-index: 0;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          background-color: #26c5ff;
          opacity: 1;
          box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.3),
            12px 12px 20px 0 rgba(0, 0, 0, 0.8);
          padding: 1.2em;
          min-height: calc(100vh - 400px);
        }

        .display {
          overflow: hidden;
          width: 100%;
          padding: 1.2em;
          flex-direction: column-reverse;
          justify-content: flex-start;
          position: relative;
          background-color: #080808;
          opacity: 1;
          z-index: 5;
          border-radius: 10px;
          filter: drop-shadow(16px 16px 20px rgba(0, 0, 0, 0.25));
          box-shadow: inset 0px 1px 1px 1px rgba(0, 0, 0, 1),
            inset 2px -2px 1px rgba(255, 255, 255, 0.35);
        }

        .panel-header {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
        }

        .panel-header .logo {
          flex: 0;
          background-color: transparent;
          padding: 2rem 0.5rem;
          position: relative;
          border-radius: 10px;
          border: solid 1px black;
        }

        .panel-header .rest {
          flex: 1;
          border-radius: 10px;
          border: solid 1px white;
          padding: 1rem;
          position: relative;
        }

        .panel-header .rest p {
          font-size: 0.8rem;
          line-height: 1.4rem;
        }

        .panel-header .line {
          position: absolute;
          bottom: 7px;
          right: 0;
          left: 0;
          display: inline-block;
          width: 100%;
          background: white;
          height: 3px;
          border-radius: 50px;
          z-index: 0;
          box-shadow: inset 0px 1px 1px 1px rgba(0, 0, 0, 1),
            inset 2px -2px 1px rgba(255, 255, 255, 0.35);
          z-index: 0;
        }

        .panel-header small {
          display: block;
          position: relative;
          width: 100%;
          color: white;
          letter-spacing: 2.5px;
          font-weight: bold;
          margin-bottom: 20px;
          font-family: Helvetica, Arial, sans-serif;
          text-transform: uppercase;
          font-size: 0.8rem;
          text-shadow: rgba(0, 0, 0, 0.28) 1px 1px 0px;
          text-align: center;
        }

        .panel-header small > span {
          background-color: black;
          text-align: center;
          position: relative;
          padding: 0px 10px;
        }

        .title {
          position: absolute;
          top: 2px;
          margin-top: -10px;
          text-transform: uppercase;
          font-size: 1rem;
          letter-spacing: 2px;
          font-family: Raleway, Arial, sans-serif;
          background-color: black;
          display: inline-block;
          font-weight: bold;
          padding: 0px 15px;
        }

        .panel-header .rest p {
          font-size: 0.8rem;
          line-height: 1.4rem;
        }

        .panel-header .heading {
          font-family: 'Computer';
          font-size: 2rem;
          line-height: 2rem;
          font-weight: 700;
          letter-spacing: 0.0975rem;
          text-transform: uppercase;
          white-space: nowrap;
          letter-spacing: 9px;
          color: #ffffff;
          z-index: 5;
          position: relative;
          margin-bottom: 15px;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
          text-align: center;
          white-space: pre-wrap;
        }

        .panel-child {
          display: flex;
          flex-direction: row;
          width: 100%;
          position: relative;
          border-radius: 10px;
          border-width: 1px;
          border-style: solid;
          border-color: white;
          border-image: initial;
          flex: 1 1 0%;
          padding: 1em;
          margin-bottom: 20px;
        }

        @media (min-width: 900px) {
          .case {
            min-height: 100%;
          }

          .panel-header {
            flex-direction: row;
          }

          .panel-header .heading {
            min-width: 500px;
          }
        }
      `}</style>
      <div className="case">
        <div className="display">
          <div className="panel">
            <div className="panel-child panel-output">
              <h3 className="title">OUTPUT</h3>
            </div>
            <div className="panel-child panel-computer">
              <h3 className="title">COMPUTER</h3>
            </div>
            <div className="panel-header">
              <div className="logo">
                <h1 className="heading">Serverless Computer</h1>
                <small className="sub-heading">
                  <div className="line" />
                  <span>ALU using Azure Functions as logic gates</span>
                </small>
              </div>
              <div className="rest">
                <h3 className="title">Description</h3>
                <p>
                  This is a 16-bit ALU's running in the cloud. Each logic gate
                  is implemented as an{' '}
                  <a href="https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-overview?WT.mc_id=serverlesscomputer-website-alvidela">
                    Azure Function
                  </a>
                </p>
                <p>
                  Set the 16-bit inputs X and Y below and submit your operations
                  so they can be on the serverless ALU.
                </p>
                <p>
                  <span>
                    built by @old_sound &<a href="curcio.be">@okbel</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Console;
