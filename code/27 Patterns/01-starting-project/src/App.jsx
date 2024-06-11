import Accordion from "./components/accordion/Accordion.jsx";
import SearchableList from "./Searchable/SearchableList.jsx";
import {PLACES} from "./place.js";
import Place from "./Place.jsx";

function App() {
  return (
      <main>
        <section>
          <h2>Why work with us?</h2>
          <Accordion className="accordion">
            <Accordion.Item className="accordion-item" id='local-guides'>
              <Accordion.Title>We are boss</Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>Do you wanna build a snow man</p>
                  <p>I don't want to build a snow man</p>
                </article>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item className="accordion-item" id='experience'>
              <Accordion.Title>We got 20 years of experience</Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>i like it</p>
                  <p>i make it</p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </section>
        <section>
          <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
            {(item) => <Place item={item}/>}
          </SearchableList>
          <SearchableList items={['item1', 'item2']} itemKeyFn={(item) => item}>
            {(item) => {
              return <p>{item}</p>
            }}
          </SearchableList>
        </section>
      </main>
  )
}

export default App;
