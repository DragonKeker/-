import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import {Fragment} from "react";
import {Row, Col, Menu} from 'antd'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
import MainLayout from '../../Component/Layout/Main'

export default function Home() {
    return(
        <MainLayout>
            <h1> "Стань частью команды" </h1>
            <img src={"./curve.svg"} className={styles.curve}/>
            <Menu  mode="horizontal">
                <Menu.Item  key="1">nav 1</Menu.Item>
                <Menu.Item  key="2">nav 2</Menu.Item>
                <Menu.Item  key="3">nav 3</Menu.Item>
            </Menu>
        </MainLayout>
    )
}

/*
export  class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="App">
                <div className="textboxes">
                    <h4>FloatLabelType as Auto</h4>
                    <TextBoxComponent placeholder="First Name" floatLabelType="Auto"/>
                </div>
                <div className="textboxes">
                    <h4>FloatLabelType as Always</h4>
                    <TextBoxComponent placeholder="Last Name" floatLabelType="Always"/>
                </div>
            </div>
        )
    }
};
ReactDOM.render(<App />, document.getElementById('input-container'));
*/
/*
export default function Home() {
  return (
      <Fragment>
          <img src={"./curve.svg"} className={styles.curve}/>
      </Fragment>
  )
}*/
/*
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
*/
/*function App() {
    const [checked, setChecked] = useState(true);

    function chengeCheckbox() {
        setChecked(!checked);
    }

    return <div>
        <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
    </div>;
}

export default App;*/

/*import React, { Component  } from 'react';
export class Home extends Component  {
    displayName = Home.name

    render() {
        return (
            <div>
                <h1>Hello world! This is Itay's new Web App</h1>
                <p>Welcome to your new single-page application, built with:</p>
                <ul>
                    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                    <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                </ul>
                <p>To help you get started, we've also set up:</p>
                <ul>
                    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
                    <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
                </ul>
                <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            </div>
        );
    }
}*/
