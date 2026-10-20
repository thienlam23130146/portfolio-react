import { ThemeToggle } from './ThemeToggle.jsx';

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <h1 className="text-3xl font-bold">Dự án của mình</h1>
      <ThemeToggle />
    </header>
  );
}
