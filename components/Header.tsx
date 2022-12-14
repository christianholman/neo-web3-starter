import Web3Status from "./Web3Status";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <div className="py-12 px-4 flex flex-row items-center justify-between">
      <div></div>
      <div>
        <Web3Status />
      </div>
    </div>
  );
}
