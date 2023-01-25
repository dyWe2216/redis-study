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

# Stream

# XADD

127.0.0.1:6379> xadd fruits \* color red name strowberry
"1674607866209-0"

# XREAD

127.0.0.1:6379> xread streams fruits 0-0

1. 1. "fruits"
   2. 1. 1. "1674607866209-0"
         2. 1. "color"
            2. "red"
            3. "name"
            4. "strawberry"
      2. 1. "1674608003563-0"
         2. 1. "color"
            2. "red"
            3. "name"
            4. "strawberry"
      3. 1. "1674608004266-0"
         2. 1. "color"
            2. "red"
            3. "name"
            4. "strawberry"

- count
  127.0.0.1:6379> xread count 2 streams fruits 0-0

1. 1. "fruits"
   2. 1. 1. "1674607866209-0"
         2. 1. "color"
            2. "red"
            3. "name"
            4. "strawberry"
      2. 1. "1674608003563-0"
         2. 1. "color"
            2. "red"
            3. "name"
            4. "strawberry"
