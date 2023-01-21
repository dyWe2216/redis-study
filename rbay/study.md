Design Considerations

- what type of data are we storing?
- Should we be concerned about the size of data?
- Do we need to expire this data?
- what will the key naming policy be for this data?
- Any business-logic concerns?

동시성 처리 방법

- atomic update command (HINCRBY or HSETNX)
- 트랜잭션 사용 (with the watch command)
- lock
- custom LUA update script
