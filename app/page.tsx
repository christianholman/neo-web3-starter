import Button from "../components/Button";

export default function Page() {
  return (
    <div className="flex p-24">
      <Button variant="ghost" intent="warning" title={"Hello, World!"} />
    </div>
  );
}
