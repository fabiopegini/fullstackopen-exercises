``` mermaid
sequenceDiagram

Note right of browser: User submits new note and the browser renders all notes (including the new one) with redrawNotes
Note right of browser: Then, the browser sends the new note to the server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->>browser: 201 Created - {"message":"note created"}
```
