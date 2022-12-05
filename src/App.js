import './App.css';
import thumbs from './images/yay.jpg';


function App() {
  return (
    <div className="App">
      <h1>CPS530 LAB10 QUESTION 3</h1>
      <h2> dylan ha 501056670</h2>
      <p>
          this code uses the React.js framework to create a simple website. 
          <br></br>
          I chose REACT due to it's popularity, as well as me not being able to host my original Angular app. <br></br>
          I hosted it on my GitHub Pages website as it was free to use and I have already hosted my personal website on it. 
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <p>
        to install the react application, i used <b><code> npm init react-app 530REACT</code> </b>in my terminal. <br></br>
        i could now start my app using the command <b> <code> npm start</code></b>, allowing me to test my app on <b>http://localhost:3000</b>.  
        <br></br>
        With my framework installed and page built, i could then edit in my <b> App.js </b>file, and the style in my<b> App.css </b> file. <br></br>
        After i finished writing and styling my js file, I then uploaded it to github pages. I also had to edit my package.json in order for it to be able to host on Github.
      </p>

      <h3> challenges encountered</h3>
<p> As it was my first time working with web development frameworks, I initially struggled to understand how to actually create and navigate my 
  react application, as well as understanding the syntax as i do not have much experience with JavaScript. 
  
  I also spent hours trying to host my original project in Angular with no success, so I switched over to React.
  Thankfully as this is a simple website, I quickly got the hang of it and produced the webpage. (yay!) 
  <br></br> i also followed online tutorials to help me host my page!
</p>
      <br></br>
        <img src={thumbs} className="spinny" alt="logo" width="20%"/>
      <br></br>
      <p> i used the react library to give this lab a SPINNING thumbs up! <br></br>
      (or thumbs down, depending on where it's spinning.)</p>
      <p> side note to my TA: thank you for your time this semester! <br></br>
  you always responded to my emails fast and provided me with the support i needed to succeed in this course :D</p> 
    </div>
  );
}

export default App;
