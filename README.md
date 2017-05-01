# React Components
Create and style react components. This repo is designed to be a playground for building individul React components

## Requirements
This app uses npm. If you dont have npm, visit their site [here](https://docs.npmjs.com/getting-started/what-is-npm). 

## Getting started
- Install the needed node modules with `npm install`
- Start the app with `npm run start`
- App runs on port `8080`

## Using react-bootstrap
- Find the components you want to use [here](https://react-bootstrap.github.io/components.html)
- Copy the code for the component you want, and paste it inside the `return` of the `render` function in the `Component.js` file.
- Import the bootstrap elements. Example:
```javascript
    import {Nav, NavItem, Col, Tab, Row} from 'react-bootstrap'
```
- Add styling in the `styles.js` file. Example:
  ```javascript
    var styles = {
        container:{
            marginLeft: 10
        },
        navColumn:{
            paddingRight: 0, 
            backgroundColor: '#F8F8F8',
            height: '100vh',
            borderRight: '1px solid #e7e7e7'
        },
        contentColumn:{
            height: '100vh'
        }
    }
    module.exports = styles;
