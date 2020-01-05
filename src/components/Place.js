import "./Place.css";
import React from "react";

function Place(props) {
  // Reprezentuje jedno siedzenie w kinie - może mieć stan wolne, zajęte i wybrane - początkowy stan oznaczany jest przy renderowaniu na podstawie bazy danych.
  // Kliknięcie w zajęte miejsce nie powoduje żadnej akcji.
  // Kliknięcie w wolne miejsce zmienia flagę wybrane na true i dodaje miejsce do listy zajętych miejsc którą tworzymy lokalnie - dopiero kiedy użytkownik zatwierdzi operację odpowiednim przyciskiem dodajemy zarezerwowane miejsca do listy poprzednio zarezerwowanych w bazie danych.
}

export default Place;
