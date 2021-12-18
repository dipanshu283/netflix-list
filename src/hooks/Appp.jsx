import React from "react";
import Hero from "./Hero";
import FullCard from './FullCard';
import './hooks.css'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Error from "./error";


function Appp(props) {
  const data = [
    {
      tittle: "Html",
      description: "This is Html",
      explain : `HTML stands for Hypertext Markup Language, and it is the most widely used language to write Web Pages.

      Hypertext refers to the way in which Web pages (HTML documents) are linked together. Thus, the link available on a webpage is called Hypertext.
      
      As its name suggests, HTML is a Markup Language which means you use HTML to simply "mark-up" a text document with tags that tell a Web browser how to structure it to display.
      
      Originally, HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers.
      
      Now, HTML is being widely used to format web pages with the help of different tags available in HTML language.
   `

    },
    {
      tittle: "Css",
      description: "This is Css",
      explain: `CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces. It can also be used with any kind of XML documents including plain XML, SVG and XUL.

      CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications.
      
      `

    },
    {
      tittle: "JavaScript",
      description: "This is JavaScript",
      explain:`JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.`
    },
    {
      tittle: "React",
      description: "This is React",
      explain : `React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.`
    },
    {
      tittle: "Angular",
      description: "This is Angular",
      explain : `AngularJS used to be the “golden child” among JavaScript frameworks, as it was initially introduced by Google corporation in 2012. It was built with the Model-View-Controller concept in mind, though authors of the framework often called it “Model-View-*” or even “Model-View-Whatever”.

      The framework, written in pure JavaScript, was intended to decouple an application’s logic from DOM manipulation, and aimed at dynamic page updates. Still, it wasn’t very intrusive: you could have only a part of the page controlled by AngularJS. This framework introduced many powerful features allowing the developer to create rich, single-page applications quite easily.
      
      `
    },
    {
      tittle: "Php",
      description: "This is Php",
      explain : `PHP is a general-purpose scripting language geared towards web development.[7] It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.[8] The PHP reference implementation is now produced by The PHP Group.[9] PHP originally stood for Personal Home Page,[8] but it now stands for the recursive initialism PHP: Hypertext Preprocessor.[10]

      PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP code – which may be any type of data, such as generated HTML or binary image data – would form the whole or part of an HTTP response.`
    },
  ];

  return (
    
    <Router >
    
     
    <Routes>
      <Route  exact path="/" element={<Hero data = {data}/>} />
    </Routes>
    <Routes>
      <Route exact path="/Cards/:tittle" element={<FullCard data = {data}
      />} />
    </Routes>
    <Routes>
      <Route  exact path="*" element={<Error data = {data}
      />} />
    </Routes>
    
  
  </Router>

  

  
  );
}

export default Appp;
