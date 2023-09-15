import { ReactNode } from "react";
import useTheme from "../context/ThemeContext";

export default function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }: { title:string, children: ReactNode }) {
  const className = 'panel-' + useTheme();
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2>{useTheme()}</h2>
      {children}
    </section>
  )
}

function Button({ children }: { children: ReactNode }) {
  const className = 'button-' + useTheme();
  return (
    <button className={className}>
      {children}
    </button>
  );
}