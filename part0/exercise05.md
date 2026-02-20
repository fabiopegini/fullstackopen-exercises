´´´ mermaid
sequenceDiagram

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>browser: 200 OK - html-code
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: 200 OK - main.css
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>browser: 200 OK - spa.js
Note right of browser: Browser executes script to get all the notes (with the one recently created) from the server (data.json)
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: 200 OK - [{"content":"noteContent","date":"noteDate"}, ...]
Note right of browser: Browser renders all notes with the function redrawNotes()

```
