/**
 * - Відображає текст з поточним значенням count
 * - Рендериться у App
 */

interface CountDisplayProps {
  count: number;
}

export default function CountDisplay({ count }: CountDisplayProps) {
  // Звідки взяти count?
  return <div>The current counter value is {count}</div>;
}
