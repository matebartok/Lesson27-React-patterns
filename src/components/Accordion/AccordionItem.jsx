import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, className, title, children }) {
  const { toggleItem, openItemId } = useAccordionContext();

  const isOpen = id === openItemId;

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div className={isOpen ? "accordion-item-content open" : "accordion-item-content"}>{children}</div>
    </li>
  );
}
