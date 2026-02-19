``` mermaid
sequenceDiagram

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->>browser: 302 Found - Redirect to https://studies.cs.helsinki.fi/exampleapp/notes

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>browser: 200 OK - html-code

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: 200 OK - main.css

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>browser: 200 OK - main.js

Note right of browser: Browser executes script to get all the notes (with the one you recently created) from the server (data.json) 

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->>browser: 200 OK - [{"content":"noteContent","date":"noteDate"}, ...]

Note right of browser: Browser renders all notes
```
