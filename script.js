// ===== Strong's data (JSON + XML) =====
let strongsJson = {};
let strongsJsonLoaded = false;

let strongsXml = null;
let strongsXmlLoaded = false;

// ===== Jude + Strong's source text =====
const judeRaw = `
Jud 1:1  Jude,G2455 the servantG1401 of JesusG2424 Christ,G5547 andG1161 brotherG80 of James,G2385 to them that are sanctifiedG37 byG1722 GodG2316 the Father,G3962 andG2532 preservedG5083 in JesusG2424 Christ,G5547 and called:G2822 
Jud 1:2  MercyG1656 unto you,G5213 andG2532 peace,G1515 andG2532 love,G26 be multiplied.G4129 
 
Jud 1:3  Beloved,G27 when I gaveG4160 allG3956 diligenceG4710 to writeG1125 unto youG5213 ofG4012 theG3588 commonG2839 salvation,G4991 it was needfulG2192 G318 for me to writeG1125 unto you,G5213 and exhortG3870 you that ye should earnestly contend forG1864 theG3588 faithG4102 which was onceG530 deliveredG3860 unto theG3588 saints.G40 
Jud 1:4  ForG1063 there are certainG5100 menG444 crept in unawares,G3921 who were before of old ordainedG4270 G3819 toG1519 thisG5124 condemnation,G2917 ungodly men,G765 turningG3346 theG3588 graceG5485 of ourG2257 GodG2316 intoG1519 lasciviousness,G766 andG2532 denyingG720 theG3588 onlyG3441 LordG1203 God,G2316 andG2532 ourG2257 LordG2962 JesusG2424 Christ.G5547 
Jud 1:5  I(G1161) willG1014 therefore put you in remembrance,G5279 G5209 though yeG5209 onceG530 knewG1492 this,G5124 how thatG3754 theG3588 Lord,G2962 having savedG4982 the peopleG2992 out ofG1537 the landG1093 of Egypt,G125 afterwardG1208 destroyedG622 them that believedG4100 not.G3361 
Jud 1:6  AndG5037 the angelsG32 which keptG5083 notG3361 theirG1438 first estate,G746 butG235 leftG620 their ownG2398 habitation,G3613 he hath reservedG5083 in everlastingG126 chainsG1199 underG5259 darknessG2217 untoG1519 the judgmentG2920 of the greatG3173 day.G2250 
Jud 1:7  Even asG5613 SodomG4670 andG2532 Gomorrha,G1116 andG2532 theG3588 citiesG4172 aboutG4012 themG846 in like manner,G3664 G5158 giving themselves over to fornication,G1608 andG2532 goingG565 afterG3694 strangeG2087 flesh,G4561 are set forthG4295 for an example,G1164 sufferingG5254 the vengeanceG1349 of eternalG166 fire.G4442 
Jud 1:8  LikewiseG3668 alsoG2532 theseG3778 filthy dreamersG1797 defileG3392 the flesh,G4561 (G3303) despiseG114 dominion,G2963 andG1161 speak evil ofG987 dignities.G1391 
Jud 1:9  YetG1161 MichaelG3413 theG3588 archangel,G743 whenG3753 contendingG1252 with theG3588 devilG1228 he disputedG1256 aboutG4012 theG3588 bodyG4983 of Moses,G3475 durstG5111 notG3756 bring againstG2018 him a railingG988 accusation,G2920 butG235 said,G2036 The LordG2962 rebukeG2008 thee.G4671 
Jud 1:10  ButG1161 theseG3778 speak evil ofG987 those thingsG3745 which they(G3303) knowG1492 not:G3756 butG1161 whatG3745 they knowG1987 naturally,G5447 asG5613 bruteG249 beasts,G2226 inG1722 those thingsG5125 they corrupt themselves.G5351 
Jud 1:11  WoeG3759 unto them!G846 forG3754 they have goneG4198 in theG3588 wayG3598 of Cain,G2535 andG2532 ran greedily afterG1632 theG3588 errorG4106 of BalaamG903 for reward,G3408 andG2532 perishedG622 in theG3588 gainsayingG485 of Core.G2879 
Jud 1:12  TheseG3778 areG1526 spotsG4694 inG1722 yourG5216 feasts of charity,G26 when they feast withG4910 you,G5213 feedingG4165 themselvesG1438 without fear:G870 cloudsG3507 they are without water,G504 carried aboutG4064 ofG5259 winds;G417 treesG1186 whose fruit withereth,G5352 without fruit,G175 twiceG1364 dead,G599 plucked up by the roots;G1610 
Jud 1:13  RagingG66 wavesG2949 of the sea,G2281 foaming outG1890 their ownG1438 shame;G152 wanderingG4107 stars,G792 to whomG3739 is reservedG5083 theG3588 blacknessG2217 of darknessG4655 for ever.G1519 G165 
Jud 1:14  AndG1161 EnochG1802 also,G2532 the seventhG1442 fromG575 Adam,G76 prophesiedG4395 of these,G5125 saying,G3004 Behold,G2400 the LordG2962 comethG2064 withG1722 ten thousandsG3461 of hisG848 saints,G40 
Jud 1:15  To executeG4160 judgmentG2920 uponG2596 all,G3956 andG2532 to convinceG1827 allG3956 that are ungodlyG765 among themG846 ofG4012 allG3956 theirG848 ungodlyG763 deedsG2041 whichG3739 they have ungodly committed,G764 andG2532 ofG4012 allG3956 their hardG4642 speeches whichG3739 ungodlyG765 sinnersG268 have spokenG2980 againstG2596 him.G846 
Jud 1:16  TheseG3778 areG1526 murmurers,G1113 complainers,G3202 walkingG4198 afterG2596 their ownG848 lusts;G1939 andG2532 theirG848 mouthG4750 speakethG2980 great swellingG5246 words, having men's persons in admirationG2296 G4383 because ofG5484 advantage.G5622 
 
Jud 1:17  But,G1161 beloved,G27 rememberG3415 yeG5210 theG3588 wordsG4487 which were spoken beforeG4280 ofG5259 theG3588 apostlesG652 of ourG2257 LordG2962 JesusG2424 Christ;G5547 
Jud 1:18  How thatG3754 they toldG3004 youG5213 there should(G3754) beG2071 mockersG1703 inG1722 the lastG2078 time,G5550 who should walkG4198 afterG2596 their ownG1438 ungodlyG763 lusts.G1939 
Jud 1:19  TheseG3778 beG1526 they who separateG592 themselves,G1438 sensual,G5591 havingG2192 notG3361 the Spirit.G4151 
Jud 1:20  ButG1161 ye,G5210 beloved,G27 building upG2026 yourselvesG1438 on yourG5216 most holyG40 faith,G4102 prayingG4336 inG1722 the HolyG40 Ghost,G4151 
Jud 1:21  KeepG5083 yourselvesG1438 inG1722 the loveG26 of God,G2316 looking forG4327 theG3588 mercyG1656 of ourG2257 LordG2962 JesusG2424 ChristG5547 untoG1519 eternalG166 life.G2222 
Jud 1:22  AndG2532 of someG3739 G3303 have compassion,G1653 making a difference:G1252 
Jud 1:23  AndG1161 othersG3739 saveG4982 withG1722 fear,G5401 pullingG726 them out ofG1537 theG3588 fire;G4442 hatingG3404 evenG2532 theG3588 garmentG5509 spottedG4696 byG575 theG3588 flesh.G4561 
 
Jud 1:24  NowG1161 unto him that is ableG1410 to keepG5442 youG5209 from falling,G679 andG2532 to presentG2476 you faultlessG299 before the presenceG2714 of hisG848 gloryG1391 withG1722 exceeding joy,G20 
Jud 1:25  To the onlyG3441 wiseG4680 GodG2316 ourG2257 Saviour,G4990 be gloryG1391 andG2532 majesty,G3172 dominionG2904 andG2532 power,G1849 bothG5037 nowG3568 andG2532 ever.G1519 G3956 G165 Amen.G281 
`;

// ===== Utility: parse Jude into verse objects =====
function parseJudeVerses() {
  const verses = [];

  const lines = judeRaw
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0);

  lines.forEach(line => {
    const parts = line.split(/\s+/);
    if (parts.length < 3) return;

    const book = parts[0];        // "Jud"
    const chapVers = parts[1];    // "1:1"
    const restIndex = line.indexOf(chapVers) + chapVers.length;
    const verseText = line.slice(restIndex).trim();

    const [chapterStr, verseStr] = chapVers.split(':');
    const chapter = parseInt(chapterStr, 10);
    const verse = parseInt(verseStr, 10);

    verses.push({ book, chapter, verse, text: verseText });
  });

  return verses;
}

// ===== Render Jude in paragraph form =====
function renderJudeParagraphs() {
  const container = document.getElementById('book-content');
  container.innerHTML = '';

  const verses = parseJudeVerses();

  // Paragraph ranges
  const paragraphRanges = [
    { start: 1, end: 2 },    // Greeting
    { start: 3, end: 4 },    // Call to contend
    { start: 5, end: 16 },   // Warnings
    { start: 17, end: 23 },  // Exhortations
    { start: 24, end: 25 }   // Doxology
  ];

  paragraphRanges.forEach(range => {
    const p = document.createElement('p');
    p.className = 'paragraph';

    const versesInRange = verses.filter(
      v => v.chapter === 1 && v.verse >= range.start && v.verse <= range.end
    );

    versesInRange.forEach((v, idxV) => {
      if (idxV > 0) {
        p.appendChild(document.createTextNode(' '));
      }
      appendVerseToParagraph(p, v);
    });

    container.appendChild(p);
  });

  attachWordHandlers();
}

// Append one verse into a paragraph element
function appendVerseToParagraph(p, verseObj) {
  const vn = document.createElement('span');
  vn.className = 'verse-num';
  vn.textContent = verseObj.verse;
  p.appendChild(vn);
  p.appendChild(document.createTextNode(' '));

  const tokens = verseObj.text.split(/\s+/);

  tokens.forEach((tok, idx) => {
    if (idx > 0) {
      p.appendChild(document.createTextNode(' '));
    }

    const match = tok.match(/G(\d+)/);
    if (match) {
      const code = 'G' + match[1];
      let pre = tok.slice(0, match.index);
      let post = tok.slice(match.index + match[0].length);

      // Remove parentheses around tokens like I(G1161)
      pre = pre.replace(/[()]/g, '');
      post = post.replace(/[()]/g, '');

      if (pre) {
        const span = document.createElement('span');
        span.className = 'word';
        span.dataset.strongs = code;
        span.textContent = pre;
        p.appendChild(span);

        if (post) {
          p.appendChild(document.createTextNode(post));
        }
      }
    } else {
      p.appendChild(document.createTextNode(tok));
    }
  });
}

// ===== Strong's JSON Loader =====
function loadStrongsJson() {
  fetch('./strongs-greek.json')
    .then(res => {
      if (!res.ok) throw new Error('Unable to load strongs-greek.json');
      return res.json();
    })
    .then(data => {
      strongsJson = data;
      strongsJsonLoaded = true;
      console.log("Strong's Greek JSON loaded:", Object.keys(strongsJson).length, 'entries');
    })
    .catch(err => console.warn('JSON load error:', err.message));
}

// ===== Strong's XML Loader =====
function loadStrongsXml() {
  fetch('./strongsgreek.xml')
    .then(res => {
      if (!res.ok) throw new Error('Unable to load strongsgreek.xml');
      return res.text();
    })
    .then(text => {
      const parser = new DOMParser();
      strongsXml = parser.parseFromString(text, 'application/xml');
      strongsXmlLoaded = true;
      console.log("Strong's Greek XML loaded");
    })
    .catch(err => console.warn('XML load error:', err.message));
}

// ===== Attach click handlers to Strong's words =====
function attachWordHandlers() {
  const words = document.querySelectorAll('.word[data-strongs]');
  words.forEach(word => {
    if (!word.dataset.hasListener) {
      word.addEventListener('click', () => {
        const code = word.getAttribute('data-strongs');
        const clickedWord = word.textContent || '';
        openStrongsModal(code, clickedWord);
      });
      word.dataset.hasListener = 'true';
    }
  });
}

// ===== Find entry in XML using Strong's code =====
function findXmlEntry(code) {
  if (!strongsXml || !strongsXmlLoaded) return null;
  if (!code) return null;

  const num = code.replace(/^[GH]/i, '');
  const padded = num.padStart(5, '0');
  return strongsXml.querySelector('entry[strongs="' + padded + '"]');
}

// ===== Open Strong's Modal =====
function openStrongsModal(code, clickedWord) {
  let lemma = '';
  let translit = '';
  let strongsDef = '';
  let kjvDef = '';

  // JSON first
  if (strongsJsonLoaded && strongsJson[code]) {
    const entryJson = strongsJson[code];
    lemma = entryJson.lemma || lemma;
    translit = entryJson.translit || translit;
    strongsDef = entryJson.strongs_def || strongsDef;

    if (entryJson.kjv_def) {
      kjvDef += entryJson.kjv_def;
    }
    if (entryJson.kjv_usage && Array.isArray(entryJson.kjv_usage) && entryJson.kjv_usage.length > 0) {
      kjvDef += (kjvDef ? ' ' : '') + 'Usage: ' + entryJson.kjv_usage.join(', ');
    }
  }

  // XML supplement
  const xmlEntry = findXmlEntry(code);
  if (xmlEntry) {
    const greekNode = xmlEntry.querySelector('greek');
    const pronNode = xmlEntry.querySelector('pronunciation');
    const strongsDefNode = xmlEntry.querySelector('strongs_def');
    const kjvDefNode = xmlEntry.querySelector('kjv_def');

    if (!lemma && greekNode) {
      lemma = greekNode.getAttribute('unicode') || lemma;
    }
    if (!translit && greekNode) {
      translit = greekNode.getAttribute('translit') || translit;
    }
    if (!strongsDef && strongsDefNode) {
      strongsDef = strongsDefNode.textContent.trim();
    }
    if (!kjvDef && kjvDefNode) {
      kjvDef = kjvDefNode.textContent.trim();
    }

    if (pronNode) {
      const pron = pronNode.getAttribute('strongs');
      if (pron) {
        translit = translit ? `${translit} (${pron})` : pron;
      }
    }
  }

  const header = document.getElementById('strongsHeader');
  const lemmaEl = document.getElementById('strongsLemma');
  const translitEl = document.getElementById('strongsTranslit');
  const codeEl = document.getElementById('strongsCode');
  const defEl = document.getElementById('strongsDef');
  const kjvEl = document.getElementById('strongsKJV');

  const displayWord = (clickedWord || '').trim();

  if (!lemma && !translit && !strongsDef && !kjvDef) {
    header.textContent = displayWord
      ? `${displayWord} – Strong's ${code} (not found)`
      : `Strong's ${code} (not found)`;
    lemmaEl.textContent = '';
    translitEl.textContent = '';
    codeEl.textContent = code;
    defEl.textContent = 'No entry found in strongs-greek.json or strongsgreek.xml for this number.';
    kjvEl.textContent = '';
  } else {
    header.textContent = displayWord
      ? `${displayWord} – Strong's ${code}`
      : `Strong's ${code}`;
    lemmaEl.textContent = lemma;
    translitEl.textContent = translit;
    codeEl.textContent = code;
    defEl.textContent = strongsDef;
    kjvEl.textContent = kjvDef;
  }

  document.getElementById('strongsModal').style.display = 'block';
}

// ===== Close modal when clicking backdrop =====
function closeStrongsModal(event) {
  if (event.target.id === 'strongsModal') {
    document.getElementById('strongsModal').style.display = 'none';
  }
}

// ===== Theme toggle (dark <-> light) =====
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}

// ===== Bootstrapping =====
document.addEventListener('DOMContentLoaded', () => {
  // Force DARK mode by default on every load
  document.body.classList.remove('light-mode');

  renderJudeParagraphs();
  loadStrongsJson();
  loadStrongsXml();
});
