# TickTockToes

## Bellman
```js
Q[s][a] = Q[s][a] + alpha * (reward(s, a) + discount * Math.max(...Qs) - Q[s][a])
```

## Todos
- [x] Select action from table. If none, randomly select.
- [x] Add reward/punishment when game is done.
- [] Convert back to Map
- [] Compress Repeating Stuff
- [] Huffman Coding
- [] Use MessagePack
