In acest proiect vom încarca și procesa o imagine folosind un API și vom afisa pe un canvas două versiuni:imaginea originala si cea oglindita

##  Încărcarea imaginii:
Funcția `loadImageFromJSON()` face o cerere către API-ul dog.ceo pentru a obține o imagine aleatorie cu un câine. Se folosește un timestamp pentru a preveni cache-ul.
Dacă cererea este reușită, imaginea este încărcată și setată ca sursă 

##  Desenarea imaginii pe canvas:
Odată ce imaginea este încărcată complet, este desenată pe un canvas , iar dimensiunile canvasului sunt ajustate pentru a putea conține imaginea originală și versiunea oglindită, una sub cealaltă.

##  Oglindirea imaginii:
Datele pixelilor sunt extrase folosind `getImageData()` și sunt procesate pentru a crea o versiune oglindită pe orizontală. Aceasta se face prin schimbarea pozițiilor pixelilor din stânga și din dreapta a imaginii.
Imaginea procesată este apoi desenată pe partea inferioară a canvasului.

##  Actualizarea imaginilor:
Imaginea originală și cea oglindită sunt afișate în elemente HTML separate (originalImage și mirroredImage) folosind surse generate de canvas.

##  Gestionarea erorilor:
Dacă apare o eroare în timpul încărcării sau procesării imaginii, aceasta este prinsă și afișată în consolă.
