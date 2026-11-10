// Svi podaci o firmi na jednom mjestu – ovdje mijenjati kontakt, usluge i mjesta.

export const firma = {
  naziv: '4KGradnja',
  punNaziv: '4KGradnja j.d.o.o.',
  telefon: '095 864 0398',
  telefonLink: 'tel:+385958640398',
  whatsapp: 'https://wa.me/385958640398?text=' +
    encodeURIComponent('Pozdrav, zanima me procjena radova.'),
  adresa: 'Ulica dr. Franje Tuđmana, Zadar',
  email: '', // klijent još nema mail – kad ga otvori, upisati ovdje
};

/* KONTAKT FORMA
   Forma šalje upite preko Web3Forms (besplatno, bez servera).
   1) Na https://web3forms.com upisati mail na koji trebaju stizati upiti
   2) Dobiveni Access Key zalijepiti ovdje
   Dok je ključ prazan, forma posloži upit i otvori ga u WhatsAppu prema broju firme. */
export const kontaktForma = {
  web3formsKey: '',
};

export const whatsappLink = (poruka: string) =>
  'https://wa.me/385958640398?text=' + encodeURIComponent(poruka);

/* ---------- DIGITALNI MARKETING ----------
   Sadržaj još nije dogovoren s klijentom – sve ispod su placeholderi.
   Kad klijent pošalje tekst, samo zamijeniti vrijednosti. */

const ikone = ['social', 'megaphone', 'target', 'search', 'monitor', 'camera'];

export const marketingUsluge = ikone.map((ikona, i) => ({
  naslov: `Usluga ${i + 1}`,
  opis: 'Kratki opis usluge. Klijent upisuje što točno nudi.',
  ikona,
}));

export const marketingKoraci = [1, 2, 3, 4].map((n) => ({
  naslov: `Korak ${n}`,
  opis: 'Opis koraka u suradnji s klijentom.',
}));

export const marketingKlijenti = [1, 2, 3, 4].map((n) => ({
  naslov: `Ciljana skupina ${n}`,
  opis: 'Kome je usluga namijenjena.',
}));

export const marketingPitanja = [1, 2, 3, 4].map((n) => ({
  pitanje: `Često pitanje ${n}?`,
  odgovor: 'Odgovor na pitanje. Upisuje se kad klijent potvrdi sadržaj.',
}));

/* ---------- NASLOVNICA (građevinski radovi) ---------- */

export const usluge = [
  {
    naslov: 'Završni unutarnji radovi',
    opis: 'Priprema podloga, sanacija pukotina i završna obrada zidova i stropova u stanovima, kućama i poslovnim prostorima.',
    ikona: 'interior',
  },
  {
    naslov: 'Fasade',
    opis: 'Izrada i obnova fasada, od pripreme i izolacije do završnog sloja, za novogradnju i postojeće objekte.',
    ikona: 'facade',
  },
  {
    naslov: 'Gletanje',
    opis: 'Ravne i glatke površine spremne za bojanje, bez vidljivih neravnina i prijelaza.',
    ikona: 'trowel',
  },
  {
    naslov: 'Bojanje zidova i stropova',
    opis: 'Uredno i precizno bojanje unutarnjih prostora, uz zaštitu podova, namještaja i stolarije.',
    ikona: 'roller',
  },
  {
    naslov: 'Strojno bojanje',
    opis: 'Brže nanošenje boje na velike površine i ujednačen završni sloj, idealno za hale, urede i fasade.',
    ikona: 'spray',
  },
  {
    naslov: 'Hidroizolacije',
    opis: 'Zaštita od vlage i prodora vode za terase, krovove, temelje i druge izložene dijelove objekta.',
    ikona: 'drop',
  },
];

export const koraci = [
  {
    naslov: 'Procjena',
    opis: 'Dolazimo na objekt, pregledamo stanje i dogovorimo što točno treba napraviti.',
  },
  {
    naslov: 'Ponuda',
    opis: 'Dobivate jasnu ponudu s opisom radova i rokom izvedbe, bez skrivenih stavki.',
  },
  {
    naslov: 'Izvedba',
    opis: 'Radove izvodimo prema dogovoru i iza sebe ostavljamo uredan, čist prostor.',
  },
];

export const mjesta = [
  'Zadar', 'Biograd na Moru', 'Nin', 'Benkovac', 'Obrovac', 'Pag',
  'Novigrad', 'Sukošan', 'Bibinje', 'Zemunik', 'Poličnik', 'Posedarje',
];
