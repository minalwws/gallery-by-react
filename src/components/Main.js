require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('../config/imageDatas.json');

class AppComponent extends React.Component {

  constructor(){
      super();
      (function(){
          for(let i = 0,l = imageDatas.length;i<l;i++){
              let single = imageDatas[i];
              single.url = require('../images/'+single.fileName);
          }
      })();
  }

  render() {
    return (
        <section className="stage">
            <section className="img-sec">

            </section>
            <nav className="controller-nav">

            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
