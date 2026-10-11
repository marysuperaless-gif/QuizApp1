interface Props {
  text: string;
  selected: boolean;
  onSelect: () => void;
}

export default function AnswerOption({ text, selected, onSelect }: Props) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition
        ${
          selected
            ? "border-white bg-pink-500 ring-2 ring-white"
            : "border-pink-200/50 bg-pink-400/30 hover:border-pink-100 hover:bg-pink-400/50"
        }`}
    >
      <input
        type="radio"
        name="answer"
        checked={selected}
        onChange={onSelect}
        className="h-4 w-4 accent-pink-600"
      />
      <span>{text}</span>
    </label>
  );
}