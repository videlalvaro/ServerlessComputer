function Light({ status }) {
  return (
    <div className="s">
      <style jsx global>{`
        .s {
          display: inline-block;
          margin: 20px;
          margin-top: 100px;
          position: relative;
          min-width: 20px;
        }

        .s span {
          display: block;
          transition: top 0.2s;
        }

        .led {
          position: absolute;
          top: -50px;
          border-radius: 10em;
        }

        .led-border {
          border: 0.2em solid black;
          border-radius: 4em;
        }

        .led-light {
          border-radius: 6rem;
          box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.5) inset;
        }

        .led-glow {
          width: 6em;
          height: 6em;
          position: relative;
          border-radius: 10em;
        }

        .led-glow:before {
          content: '';
          display: block;
          width: 6em;
          height: 6em;
          position: absolute;
          top: 0.1em;
          left: 0.1em;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10em;
          -webkit-box-shadow: 0 0 1em rgba(255, 255, 255, 0.75);
          -moz-box-shadow: 0 0 1em rgba(255, 255, 255, 0.75);
          box-shadow: 0 0 1em rgba(255, 255, 255, 0.75);
          opacity: 0.5;
        }

        .led-glowx:after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          top: 0.3em;
          left: 0.7em;
          opacity: 0.2;
          filter: alpha(opacity=20);
          border: 1em solid #fff;
          border-color: transparent #fff transparent #fff;
          border-radius: 10em;
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        .led:after {
          display: block;
          width: 100%;
          position: absolute;
          left: 0;
          color: #666;
          font-family: arial, verdana, sans-serif;
          font-weight: bold;
          text-align: center;
          text-shadow: 0 0.1em rgba(0, 0, 0, 0.7);
        }

        .led--red:after {
          content: 'OUTPUT';
          font-size: 0.5rem;
          letter-spacing: 1.2px;
          top: 28px;
          left: -50%;
          translate: transformX(-50%);
        }

        .led.flag .led--red:after {
          content: 'INPUT';
          left: -25%;
        }

        .led--red {
          border-top: 0.1em solid rgba(237, 28, 36, 0.2);
          border-bottom: 0.1em solid rgba(255, 255, 255, 0.25);
          -webkit-box-shadow: 0 0 3em rgb(237, 28, 36);
          -moz-box-shadow: 0 0 3em rgb(237, 28, 36);
          box-shadow: 0 0 3em rgb(237, 28, 36);
        }

        .led--red .led-light {
          background: rgb(237, 28, 36);
          border: 0.1em solid rgb(161, 30, 45);
        }

        .led--red .led-glow {
          background: #fff;
          background: rgba(255, 255, 255, 0.3);
          filter: alpha(opacity=30);
        }

        .led--red.on {
          box-shadow: 0 0 3em rgb(237, 28, 36);
        }

        .led.off .led-glow {
          background: rgba(0, 0, 0, 0.34);
        }
      `}</style>
      <span className={`led led--red ${status ? 'off' : ''}`}>
        <span className="led-border">
          <span className="led-light">
            <span className="led-glow " />
          </span>
        </span>
      </span>
    </div>
  );
}

export default Light;
