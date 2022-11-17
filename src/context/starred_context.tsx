import React from "react";

export interface StarredContextProps {
  count: number;
  starredItemsIds: number[];
  updateStarred: (id: number | undefined, value?: boolean) => void;
}
interface Props {
  children?: React.ReactNode;
}

const StarredContext = React.createContext<StarredContextProps | null>(null);

const StarredProvider: React.FC<Props> = ({ children }) => {
  let storageStarredItems = JSON.parse(localStorage.getItem("starred") ?? "[]");
  let [count, setCount] = React.useState(storageStarredItems?.length ?? 0);
  let [starredItemsIds, setStarredItemsIds] =
    React.useState<number[]>(storageStarredItems);

  const updateStarred = React.useCallback(
    (id: number | undefined, value?: boolean) => {
      if (id === undefined) return;
      let cloneStarredIds = [...starredItemsIds];
      let isExist = cloneStarredIds.includes(id);

      // change count
      if (!isExist) {
        setCount((prev: number) => prev + 1);
        cloneStarredIds.push(id);
      } else {
        if (count > 0) {
          setCount((prev: number) => prev - 1);
        }
        cloneStarredIds = cloneStarredIds.filter((starred) => {
          return starred !== id;
        });
      }
      setStarredItemsIds(cloneStarredIds);
    },
    [count, starredItemsIds]
  );
  // // use effect for data save
  React.useEffect(() => {
    localStorage.setItem("starred", JSON.stringify(starredItemsIds));
  }, [starredItemsIds, updateStarred]);

  return (
    <StarredContext.Provider value={{ count, starredItemsIds, updateStarred }}>
      {children}
    </StarredContext.Provider>
  );
};

export { StarredContext, StarredProvider };
