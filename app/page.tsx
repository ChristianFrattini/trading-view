import TradingView from "./components/TradingView";

export default function Home() {
  return (
    <div className={"flex justify-center mt-3"}>
      <TradingView />;
      <TradingView />;
    </div>
  );
}
