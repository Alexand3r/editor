/*eslint-disable */
import React from 'react'
import MyEditor from './DraftJS.js'
import Tab from './Tabs/Tabs'
import Cont from './Atab/Tabs'
import Tabb from './Atab/Tab'
import CVS from './Challenges/Simple/Example'
import CV from './Challenges/Master/CV'
import styled from 'styled-components'
/*eslint-enable */

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent())
  }

  render() {
    var Div = styled.div`
    margin: 20px;
    padding:10px;
    background-color: #efefef;
    `;
    return (
      <div>
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
        <div>
          <CV title="Test" float="left">
            <p>Child1</p>
            <p>Child2</p>
          </CV>
        
        </div>
        <div>
            <CV title="Test" float="left">
            <p>Child12222</p>
            <p>Child2</p>
          </CV>
         
          <CV title="Test" float="right">
            <p>Child1</p>
            <p>Child2</p>
          </CV>
        </div>
      </div>
    )
  }
}

export default App

