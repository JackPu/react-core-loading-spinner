import React from 'react';
import { Spinner }  from '../../../src/index';
class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      btnState: false,
    };
  }

  handleClick() {
    this.setState({
      show:!this.state.show,
    })
  }

  handleTimeout() {
    var self = this;
    this.setState({
      btnState: true
    })
    setTimeout(() => {
      this.setState({
        btnState: false,
      });
    },5000)
  }

  render() {
    return(
      <div className="loading-examples">
        <div className="content pure-u-4-5">
          <div className="pure-g">
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
              <h4>Default loading</h4>
              <div className="loading-demo">
                <Spinner show={true}></Spinner>  
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={true}></Spinner>'}
              </code></pre>
              <h4>Change <code>color</code> Property</h4>
              <div className="loading-box">
                <Spinner show={true} color="#3498db"></Spinner>
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={true} color="#3498db"></Spinner>'}
              </code></pre>
              <h4>Set <code>type</code> Property</h4>
              <div className="loading-box">
                <Spinner type="gif" show={true} color="#3498db"></Spinner>
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={true} type="gif" color="#3498db"></Spinner>'}
              </code></pre>
              <h4>Use customed <code>children</code> component</h4>
              <div className="loading-box">
                <Spinner show={true} color="#3498db" text="Request...">
                  <img width={80} src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif"/>
                </Spinner>
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={true} type="gif" color="#3498db">\n<img width={80} src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif"/>\n</Spinner>'}
              </code></pre>
              <h4>Show or hide the spinner by <code>show</code> property</h4>
              <button className="btn btn-primary" onClick={() => {this.handleClick()}}>Show</button>
              <button style={{marginLeft:20}} className="btn btn-default" onClick={() => {this.handleClick()}}>Hide</button>
              <div className="loading-box">
                <Spinner type="gif" text={this.state.show?'Show...':'Hide...'} show={this.state.show} color="#3498db"></Spinner>
              </div>
              <pre className="highlight javascript"><code>
              {'<Spinner show={this.state.show} type="gif" color="#3498db"></Spinner>'}
              </code></pre>
              <h4>Set <code>display</code> to "inline" </h4>
              <button style={{marginLeft:20}} disabled={this.state.btnState} className="btn btn-primary" onClick={() => {this.handleTimeout()}}>Show
                 <Spinner size="24" display="inline"  show={this.state.btnState} color="#fff"></Spinner>
              </button>
              <pre className="highlight javascript"><code>
              {'<Spinner show={this.state.show} type="gif" color="#3498db"></Spinner>'}
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Contents;
