import {useAccordionContext} from "./Accordion.jsx";
import {useAccordionItemContext} from "./AccordionItem.jsx";

export default function AccordionTitle({children}) {

  const {id} = useAccordionItemContext();

  const {
    toggleItem,
  } = useAccordionContext();

  return <h3 onClick={() => toggleItem(id)}>{children}</h3>
}
