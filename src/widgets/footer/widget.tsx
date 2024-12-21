import type React from "react";

export default (): React.ReactElement => {
  return (
    <footer className="container flex justify-between text-white/50 border-t border-white/50 py-4 mt-4">
      <div>Thank you for visiting {`:)`}</div>
      <div>Source Code {`->`}</div>
    </footer>
  );
};
