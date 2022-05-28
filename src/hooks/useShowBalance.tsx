import { useState, useCallback } from "react";

export function useShowBalance() {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalanceVisibility = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setShowBalance((showBalance) => !showBalance);
    },
    []
  );

  return {
    showBalance,
    setShowBalance,
    toggleBalanceVisibility,
  };
}
