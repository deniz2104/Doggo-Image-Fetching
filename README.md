# Descrierea aplicatiei:

Acest proiect se focuseaza atat asupra prelucrarii cu API pentru a extrage o image cu catei,cat si asupra procesarii de imagine prin intermediul pixelilor.

# Implementare:

## Încărcarea imaginii:

Funcția `loadImageFromJSON()` face o cerere către API-ul dog.ceo pentru a obține o imagine aleatorie cu un câine. Se folosește un timestamp pentru a preveni cache-ul.
Dacă cererea este reușită, imaginea este încărcată și setată ca sursă.

## Desenarea imaginii pe canvas:

Odată ce imaginea este încărcată complet, este desenată pe un canvas , iar dimensiunile canvasului sunt ajustate pentru a putea conține imaginea originală și versiunea oglindită, una sub cealaltă.

## Oglindirea imaginii:

Datele pixelilor sunt extrase folosind `getImageData()` și sunt procesate pentru a crea o versiune oglindită pe orizontală. Aceasta se face prin schimbarea pozițiilor pixelilor din stânga și din dreapta a imaginii.
Imaginea procesată este apoi desenată pe partea inferioară a canvasului.

## Actualizarea imaginilor:

Imaginea originală și cea oglindită sunt afișate în elemente HTML separate (originalImage și mirroredImage) folosind surse generate de canvas.
