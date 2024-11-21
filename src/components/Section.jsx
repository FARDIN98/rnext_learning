/* eslint-disable react/prop-types */
import { levelContext } from "../contexts/levelContext";
export default function Section({level, children }) {
  return (
    <section className="section">
      <levelContext.Provider value={level}>
          {children}
      </levelContext.Provider>
    </section>
  );
}
