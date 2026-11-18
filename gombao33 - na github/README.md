# GOMBAO33 — sklep

Strona sklepu: niebo, krata, gołąb, łańcuch i ciuchy. Czysty HTML, bez instalowania czegokolwiek.

## Gdzie co zmieniać

| Co | Gdzie |
|---|---|
| Produkty, ceny, rozmiary, opisy, zdjęcia | `config.js` |
| Dostawa, płatności (BLIK, konto), maile z zamówieniami | `config.js` |
| Dane sprzedawcy do regulaminu, kontakt, Instagram | `config.js` |
| Wygląd, układ, animacje | `index.html` |
| Grafiki | folder `img/` |

## Dodanie nowego ciucha

1. Wrzuć zdjęcie przodu (i tyłu, jeśli jest) do `img/`, najlepiej jako `.webp` lub `.png` z przezroczystym tłem.
2. W `config.js` skopiuj jeden produkt z listy `products` i zmień `id`, `name`, `price`, `img`, `imgBack`, `desc`.
3. Wyprzedany rozmiar: `sizes: { S: true, M: false, ... }` (`false` = przekreślony).

## Podgląd u siebie

Otwórz `index.html` dwuklikiem w przeglądarce.

## Publikacja

Strona jest na Cloudflare (`gombao.marta-500.workers.dev`). Jeśli Cloudflare jest podpięty pod to repozytorium, każda zmiana zapisana na GitHubie sama trafia na stronę po minucie.

Instrukcja uruchomienia płatności i maili: `JAK-URUCHOMIC.txt`.
