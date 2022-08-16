---
title: "useCallback()"
sidebar_position: 9
---

## useCallback()

```jsx title="syntax"
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

The useCallback hook is used when you have a component in which the child is rerendering again and again without need.

Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

useCallback is a hook that we use to help with our app's performance.

Specifically, it prevents functions from being recreated every time our component re-renders, which can hurt the performance of our app.

If we go back to our PlayerList example from earlier and add the ability to add players to our array, when we pass down a function to remove them (handleRemovePlayer) via props, the function will be recreated every time.

The way to fix this is to wrap our callback function in useCallback and to include its one argument player in the dependencies array:

```jsx
function App() {
  const [player, setPlayer] = React.useState("");
  const [players, setPlayers] = React.useState(["Messi", "Ronaldo", "Laspada"]);

  function handleChangeInput(event) {
    setPlayer(event.target.value);
  }
  function handleAddPlayer() {
    setPlayers(players.concat(player));
  }
  const handleRemovePlayer = useCallback(
    (player) => {
      setPlayers(players.filter((p) => p !== player));
    },
    [players]
  );

  return (
    <>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddPlayer}>Add Player</button>
      <PlayerList players={players} handleRemovePlayer={handleRemovePlayer} />
    </>
  );
}

function PlayerList({ players, handleRemovePlayer }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player} onClick={() => handleRemovePlayer(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
}
```
