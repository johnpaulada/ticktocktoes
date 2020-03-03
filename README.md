# TickTockToes

## Bellman
```js
Q[s][a] = Q[s][a] + alpha * (reward(s, a) + discount * Math.max(...Qs) - Q[s][a])
```

## TODOs
- [ ] Select action from table. If none, randomly select.
- [ ] Add reward/punishment when game is done.