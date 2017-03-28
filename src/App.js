/*eslint-disable */
import React from 'react'
import Tab from './Tabs/Tabs'
import Tabss from './Atab/Tabs'
import CVS from './Challenges/Simple/Example'
import CV from './Challenges/Master/CV'
import styled from 'styled-components'
import Wrapper from './ODEUM/Tabs/Wrapper'
/*eslint-enable */

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent())
  };
  render() {
    var Div = styled.div`
     font: 300 14px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;
     background: #eee;
     margin: 0;
     padding: 0;
    `;
     var Divv = styled.div`
     padding:25px;
    `;
    return (
      <Div>
        {/*<TinyMCE
          content="<p>This is a story about a man who wanted to learn to develop code again. He started off with learning ReactJS which is just awesome :)</p>"
          config={{
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
          }}
          onChange={this.handleEditorChange}
        />*/}
        {/*<MyEditor />*/}
        {/*//<Tab />*/}
      
          {/*<div>
          <CV title="Test1" float="right">
            <p>Child1</p>
            <p>Child2</p>
          </CV>
            <CV title="Test2" float="left">
            <p>Child12222</p>
            <p>Child2</p>
          </CV>
          <CV title="Test3" float="right">
            <p>Child1</p>
            <p>Child2</p>
          </CV>
          </div>*/}
          <Divv>
            <Wrapper/>
            </Divv>
      </Div>
    )
  }
}

export default App

