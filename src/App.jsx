import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="app">
      <Header />
            <Section title="What is react?">
        <p>
          React is a JavaScript library for building user interfaces, particularly 
          web applications. Developed by Facebook, it allows developers to create 
          reusable UI components and efficiently update and render them when data 
          changes. React uses a virtual DOM to optimize performance by minimizing 
          direct manipulation of the actual DOM.
        </p>
      </Section>
      
      <Section title="Benefits of react">
        <ul>
          <li>Component-based architecture for reusable code</li>
          <li>Virtual DOM for improved performance</li>
          <li>Unidirectional data flow for easier debugging</li>
          <li>Rich ecosystem and community support</li>
          <li>Ability to write mobile apps with React Native</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;