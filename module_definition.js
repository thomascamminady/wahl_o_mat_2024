// UTF8-Zeichen öäüðý

/**
 * Partei-Informationen
 *
 * Aus Thesen-CMS ausgespielt fuer Wahl-o-mat 39508
 *
 * 1.0.0        08.05.2024 15:04:28 Wahl-O-Mat
 *
 * @category    Bpb
 * @package     Wahl-O-Mat
 * @subpackage  CMS-Definitionen-Statements
 * @copyright   Bundeszentrale fuer politische Bildung
 */

/*
  --------------------------------------------------------------
  Vordefinieren der in den Templates gefunden assoziativen Keys
  mit denenen auf WOMT_aTexte und WOMT_aBilder zugriffen wird
  nicht vorhanden Indexe fuehren in Javascript sonst zu Fehlern!

  Wenn mit Variablen auf die assoziativen Arrays zugegriffen wird
  kann dies nicht automatisch analsysit werden,
  die Variablen werden aber zur Erinnuner im output angezeigt!
  --------------------------------------------------------------
*/
var WOMT_gExportUtf8 = 1;
var WOMT_aTexte = new Array();
var WOMT_aBilder = new Array();
var WOMT_nParteien = 0;
var WOMT_nThesen = 0;
var WOMT_nThemen = 0;
var WOMT_aSprachen_ID2Bez = new Array();
var WOMT_aSprachen_ID2Langcode = new Array();

var WOMT_aSprachen_ID2N = new Array();
var WOMT_aSprachen_N2ID = new Array();
var WOMT_aParteien_ID2N = new Array();
var WOMT_aParteien_N2ID = new Array();
var WOMT_aThesen_ID2N = new Array();
var WOMT_aThesen_N2ID = new Array();
var WOMT_aThemen_ID2N = new Array();
var WOMT_aThemen_N2ID = new Array();
var WOMT_aThesen = new Array();
var WOMT_aThesenLinks = new Array();
var WOMT_aThesenVotematch = new Array();
var WOMT_aThesenVotematchId = new Array();
var WOMT_aThesenBilder = new Array();
var WOMT_aThesenThema = new Array();
var WOMT_aParteienURL = new Array();
var WOMT_aParteienFix = new Array();
var WOMT_aParteienLogos = new Array();
var WOMT_aParteienLogos2 = new Array();
var WOMT_aParteienLogos3 = new Array();
var WOMT_aParteienLogos4 = new Array();
var WOMT_aParteien = new Array();
var WOMT_aParteienChecksum = new Array();
var WOMT_aParteiFix = new Array();
var WOMT_aThemen = new Array();
var WOMT_aThesenParteien = new Array();
var WOMT_sCheckSumImport = "";
var WOMT_sCheckSumExport = "";
var WOMT_sGenerationTimeTexte = "";
var WOMT_sCheckSumTexte = new Array();
//var WOMT_sCheckSumTexteMD5 = new Array();
//var WOMT_sCheckSumTexteKey = new Array();
var WAHLOMATEN_ID = 1;
var WOMT_sGenerationTime = "";

WAHLOMATEN_ID = 39508;

WOMT_aSprachen_ID2Bez[1] = "de";
WOMT_aSprachen_ID2Langcode[1] = "de";
WOMT_nParteien = 34;
WOMT_nThesen = 38;
WOMT_nThemen = 1;
WOMT_aSprachen_N2ID[0] = "1";
WOMT_aSprachen_ID2N[1] = "0";
WOMT_aParteien_N2ID[0] = "39509";
WOMT_aParteien_ID2N[39509] = "0";
WOMT_aParteien_N2ID[1] = "39513";
WOMT_aParteien_ID2N[39513] = "1";
WOMT_aParteien_N2ID[2] = "39515";
WOMT_aParteien_ID2N[39515] = "2";
WOMT_aParteien_N2ID[3] = "39517";
WOMT_aParteien_ID2N[39517] = "3";
WOMT_aParteien_N2ID[4] = "39519";
WOMT_aParteien_ID2N[39519] = "4";
WOMT_aParteien_N2ID[5] = "39521";
WOMT_aParteien_ID2N[39521] = "5";
WOMT_aParteien_N2ID[6] = "39523";
WOMT_aParteien_ID2N[39523] = "6";
WOMT_aParteien_N2ID[7] = "39525";
WOMT_aParteien_ID2N[39525] = "7";
WOMT_aParteien_N2ID[8] = "39527";
WOMT_aParteien_ID2N[39527] = "8";
WOMT_aParteien_N2ID[9] = "39529";
WOMT_aParteien_ID2N[39529] = "9";
WOMT_aParteien_N2ID[10] = "39531";
WOMT_aParteien_ID2N[39531] = "10";
WOMT_aParteien_N2ID[11] = "39533";
WOMT_aParteien_ID2N[39533] = "11";
WOMT_aParteien_N2ID[12] = "39535";
WOMT_aParteien_ID2N[39535] = "12";
WOMT_aParteien_N2ID[13] = "39537";
WOMT_aParteien_ID2N[39537] = "13";
WOMT_aParteien_N2ID[14] = "39539";
WOMT_aParteien_ID2N[39539] = "14";
WOMT_aParteien_N2ID[15] = "40112";
WOMT_aParteien_ID2N[40112] = "15";
WOMT_aParteien_N2ID[16] = "39543";
WOMT_aParteien_ID2N[39543] = "16";
WOMT_aParteien_N2ID[17] = "39545";
WOMT_aParteien_ID2N[39545] = "17";
WOMT_aParteien_N2ID[18] = "39549";
WOMT_aParteien_ID2N[39549] = "18";
WOMT_aParteien_N2ID[19] = "39551";
WOMT_aParteien_ID2N[39551] = "19";
WOMT_aParteien_N2ID[20] = "39561";
WOMT_aParteien_ID2N[39561] = "20";
WOMT_aParteien_N2ID[21] = "39563";
WOMT_aParteien_ID2N[39563] = "21";
WOMT_aParteien_N2ID[22] = "39565";
WOMT_aParteien_ID2N[39565] = "22";
WOMT_aParteien_N2ID[23] = "39568";
WOMT_aParteien_ID2N[39568] = "23";
WOMT_aParteien_N2ID[24] = "39570";
WOMT_aParteien_ID2N[39570] = "24";
WOMT_aParteien_N2ID[25] = "39574";
WOMT_aParteien_ID2N[39574] = "25";
WOMT_aParteien_N2ID[26] = "39578";
WOMT_aParteien_ID2N[39578] = "26";
WOMT_aParteien_N2ID[27] = "39580";
WOMT_aParteien_ID2N[39580] = "27";
WOMT_aParteien_N2ID[28] = "39584";
WOMT_aParteien_ID2N[39584] = "28";
WOMT_aParteien_N2ID[29] = "39604";
WOMT_aParteien_ID2N[39604] = "29";
WOMT_aParteien_N2ID[30] = "40207";
WOMT_aParteien_ID2N[40207] = "30";
WOMT_aParteien_N2ID[31] = "39608";
WOMT_aParteien_ID2N[39608] = "31";
WOMT_aParteien_N2ID[32] = "39611";
WOMT_aParteien_ID2N[39611] = "32";
WOMT_aParteien_N2ID[33] = "39617";
WOMT_aParteien_ID2N[39617] = "33";
WOMT_aThesen_N2ID[0] = "39676";
WOMT_aThesen_ID2N[39676] = "0";
WOMT_aThesenBilder[0] = new Array();
WOMT_aThesenBilder[0][0] = "images/";
WOMT_aThesenBilder[0][1] = "0";
WOMT_aThesenBilder[0][2] = "0";
WOMT_aThesen_N2ID[1] = "39644";
WOMT_aThesen_ID2N[39644] = "1";
WOMT_aThesenBilder[1] = new Array();
WOMT_aThesenBilder[1][0] = "images/";
WOMT_aThesenBilder[1][1] = "0";
WOMT_aThesenBilder[1][2] = "0";
WOMT_aThesen_N2ID[2] = "39669";
WOMT_aThesen_ID2N[39669] = "2";
WOMT_aThesenBilder[2] = new Array();
WOMT_aThesenBilder[2][0] = "images/";
WOMT_aThesenBilder[2][1] = "0";
WOMT_aThesenBilder[2][2] = "0";
WOMT_aThesen_N2ID[3] = "39659";
WOMT_aThesen_ID2N[39659] = "3";
WOMT_aThesenBilder[3] = new Array();
WOMT_aThesenBilder[3][0] = "images/";
WOMT_aThesenBilder[3][1] = "0";
WOMT_aThesenBilder[3][2] = "0";
WOMT_aThesen_N2ID[4] = "39647";
WOMT_aThesen_ID2N[39647] = "4";
WOMT_aThesenBilder[4] = new Array();
WOMT_aThesenBilder[4][0] = "images/";
WOMT_aThesenBilder[4][1] = "0";
WOMT_aThesenBilder[4][2] = "0";
WOMT_aThesen_N2ID[5] = "39678";
WOMT_aThesen_ID2N[39678] = "5";
WOMT_aThesenBilder[5] = new Array();
WOMT_aThesenBilder[5][0] = "images/";
WOMT_aThesenBilder[5][1] = "0";
WOMT_aThesenBilder[5][2] = "0";
WOMT_aThesen_N2ID[6] = "39696";
WOMT_aThesen_ID2N[39696] = "6";
WOMT_aThesenBilder[6] = new Array();
WOMT_aThesenBilder[6][0] = "images/";
WOMT_aThesenBilder[6][1] = "0";
WOMT_aThesenBilder[6][2] = "0";
WOMT_aThesen_N2ID[7] = "39652";
WOMT_aThesen_ID2N[39652] = "7";
WOMT_aThesenBilder[7] = new Array();
WOMT_aThesenBilder[7][0] = "images/";
WOMT_aThesenBilder[7][1] = "0";
WOMT_aThesenBilder[7][2] = "0";
WOMT_aThesen_N2ID[8] = "39633";
WOMT_aThesen_ID2N[39633] = "8";
WOMT_aThesenBilder[8] = new Array();
WOMT_aThesenBilder[8][0] = "images/";
WOMT_aThesenBilder[8][1] = "0";
WOMT_aThesenBilder[8][2] = "0";
WOMT_aThesen_N2ID[9] = "39706";
WOMT_aThesen_ID2N[39706] = "9";
WOMT_aThesenBilder[9] = new Array();
WOMT_aThesenBilder[9][0] = "images/";
WOMT_aThesenBilder[9][1] = "0";
WOMT_aThesenBilder[9][2] = "0";
WOMT_aThesen_N2ID[10] = "39642";
WOMT_aThesen_ID2N[39642] = "10";
WOMT_aThesenBilder[10] = new Array();
WOMT_aThesenBilder[10][0] = "images/";
WOMT_aThesenBilder[10][1] = "0";
WOMT_aThesenBilder[10][2] = "0";
WOMT_aThesen_N2ID[11] = "39666";
WOMT_aThesen_ID2N[39666] = "11";
WOMT_aThesenBilder[11] = new Array();
WOMT_aThesenBilder[11][0] = "images/";
WOMT_aThesenBilder[11][1] = "0";
WOMT_aThesenBilder[11][2] = "0";
WOMT_aThesen_N2ID[12] = "39702";
WOMT_aThesen_ID2N[39702] = "12";
WOMT_aThesenBilder[12] = new Array();
WOMT_aThesenBilder[12][0] = "images/";
WOMT_aThesenBilder[12][1] = "0";
WOMT_aThesenBilder[12][2] = "0";
WOMT_aThesen_N2ID[13] = "39645";
WOMT_aThesen_ID2N[39645] = "13";
WOMT_aThesenBilder[13] = new Array();
WOMT_aThesenBilder[13][0] = "images/";
WOMT_aThesenBilder[13][1] = "0";
WOMT_aThesenBilder[13][2] = "0";
WOMT_aThesen_N2ID[14] = "39693";
WOMT_aThesen_ID2N[39693] = "14";
WOMT_aThesenBilder[14] = new Array();
WOMT_aThesenBilder[14][0] = "images/";
WOMT_aThesenBilder[14][1] = "0";
WOMT_aThesenBilder[14][2] = "0";
WOMT_aThesen_N2ID[15] = "39698";
WOMT_aThesen_ID2N[39698] = "15";
WOMT_aThesenBilder[15] = new Array();
WOMT_aThesenBilder[15][0] = "images/";
WOMT_aThesenBilder[15][1] = "0";
WOMT_aThesenBilder[15][2] = "0";
WOMT_aThesen_N2ID[16] = "39665";
WOMT_aThesen_ID2N[39665] = "16";
WOMT_aThesenBilder[16] = new Array();
WOMT_aThesenBilder[16][0] = "images/";
WOMT_aThesenBilder[16][1] = "0";
WOMT_aThesenBilder[16][2] = "0";
WOMT_aThesen_N2ID[17] = "39634";
WOMT_aThesen_ID2N[39634] = "17";
WOMT_aThesenBilder[17] = new Array();
WOMT_aThesenBilder[17][0] = "images/";
WOMT_aThesenBilder[17][1] = "0";
WOMT_aThesenBilder[17][2] = "0";
WOMT_aThesen_N2ID[18] = "39697";
WOMT_aThesen_ID2N[39697] = "18";
WOMT_aThesenBilder[18] = new Array();
WOMT_aThesenBilder[18][0] = "images/";
WOMT_aThesenBilder[18][1] = "0";
WOMT_aThesenBilder[18][2] = "0";
WOMT_aThesen_N2ID[19] = "39658";
WOMT_aThesen_ID2N[39658] = "19";
WOMT_aThesenBilder[19] = new Array();
WOMT_aThesenBilder[19][0] = "images/";
WOMT_aThesenBilder[19][1] = "0";
WOMT_aThesenBilder[19][2] = "0";
WOMT_aThesen_N2ID[20] = "39636";
WOMT_aThesen_ID2N[39636] = "20";
WOMT_aThesenBilder[20] = new Array();
WOMT_aThesenBilder[20][0] = "images/";
WOMT_aThesenBilder[20][1] = "0";
WOMT_aThesenBilder[20][2] = "0";
WOMT_aThesen_N2ID[21] = "39680";
WOMT_aThesen_ID2N[39680] = "21";
WOMT_aThesenBilder[21] = new Array();
WOMT_aThesenBilder[21][0] = "images/";
WOMT_aThesenBilder[21][1] = "0";
WOMT_aThesenBilder[21][2] = "0";
WOMT_aThesen_N2ID[22] = "39689";
WOMT_aThesen_ID2N[39689] = "22";
WOMT_aThesenBilder[22] = new Array();
WOMT_aThesenBilder[22][0] = "images/";
WOMT_aThesenBilder[22][1] = "0";
WOMT_aThesenBilder[22][2] = "0";
WOMT_aThesen_N2ID[23] = "39667";
WOMT_aThesen_ID2N[39667] = "23";
WOMT_aThesenBilder[23] = new Array();
WOMT_aThesenBilder[23][0] = "images/";
WOMT_aThesenBilder[23][1] = "0";
WOMT_aThesenBilder[23][2] = "0";
WOMT_aThesen_N2ID[24] = "39654";
WOMT_aThesen_ID2N[39654] = "24";
WOMT_aThesenBilder[24] = new Array();
WOMT_aThesenBilder[24][0] = "images/";
WOMT_aThesenBilder[24][1] = "0";
WOMT_aThesenBilder[24][2] = "0";
WOMT_aThesen_N2ID[25] = "39649";
WOMT_aThesen_ID2N[39649] = "25";
WOMT_aThesenBilder[25] = new Array();
WOMT_aThesenBilder[25][0] = "images/";
WOMT_aThesenBilder[25][1] = "0";
WOMT_aThesenBilder[25][2] = "0";
WOMT_aThesen_N2ID[26] = "39694";
WOMT_aThesen_ID2N[39694] = "26";
WOMT_aThesenBilder[26] = new Array();
WOMT_aThesenBilder[26][0] = "images/";
WOMT_aThesenBilder[26][1] = "0";
WOMT_aThesenBilder[26][2] = "0";
WOMT_aThesen_N2ID[27] = "39703";
WOMT_aThesen_ID2N[39703] = "27";
WOMT_aThesenBilder[27] = new Array();
WOMT_aThesenBilder[27][0] = "images/";
WOMT_aThesenBilder[27][1] = "0";
WOMT_aThesenBilder[27][2] = "0";
WOMT_aThesen_N2ID[28] = "39660";
WOMT_aThesen_ID2N[39660] = "28";
WOMT_aThesenBilder[28] = new Array();
WOMT_aThesenBilder[28][0] = "images/";
WOMT_aThesenBilder[28][1] = "0";
WOMT_aThesenBilder[28][2] = "0";
WOMT_aThesen_N2ID[29] = "39701";
WOMT_aThesen_ID2N[39701] = "29";
WOMT_aThesenBilder[29] = new Array();
WOMT_aThesenBilder[29][0] = "images/";
WOMT_aThesenBilder[29][1] = "0";
WOMT_aThesenBilder[29][2] = "0";
WOMT_aThesen_N2ID[30] = "39631";
WOMT_aThesen_ID2N[39631] = "30";
WOMT_aThesenBilder[30] = new Array();
WOMT_aThesenBilder[30][0] = "images/";
WOMT_aThesenBilder[30][1] = "0";
WOMT_aThesenBilder[30][2] = "0";
WOMT_aThesen_N2ID[31] = "39673";
WOMT_aThesen_ID2N[39673] = "31";
WOMT_aThesenBilder[31] = new Array();
WOMT_aThesenBilder[31][0] = "images/";
WOMT_aThesenBilder[31][1] = "0";
WOMT_aThesenBilder[31][2] = "0";
WOMT_aThesen_N2ID[32] = "39679";
WOMT_aThesen_ID2N[39679] = "32";
WOMT_aThesenBilder[32] = new Array();
WOMT_aThesenBilder[32][0] = "images/";
WOMT_aThesenBilder[32][1] = "0";
WOMT_aThesenBilder[32][2] = "0";
WOMT_aThesen_N2ID[33] = "39711";
WOMT_aThesen_ID2N[39711] = "33";
WOMT_aThesenBilder[33] = new Array();
WOMT_aThesenBilder[33][0] = "images/";
WOMT_aThesenBilder[33][1] = "0";
WOMT_aThesenBilder[33][2] = "0";
WOMT_aThesen_N2ID[34] = "39641";
WOMT_aThesen_ID2N[39641] = "34";
WOMT_aThesenBilder[34] = new Array();
WOMT_aThesenBilder[34][0] = "images/";
WOMT_aThesenBilder[34][1] = "0";
WOMT_aThesenBilder[34][2] = "0";
WOMT_aThesen_N2ID[35] = "39672";
WOMT_aThesen_ID2N[39672] = "35";
WOMT_aThesenBilder[35] = new Array();
WOMT_aThesenBilder[35][0] = "images/";
WOMT_aThesenBilder[35][1] = "0";
WOMT_aThesenBilder[35][2] = "0";
WOMT_aThesen_N2ID[36] = "39662";
WOMT_aThesen_ID2N[39662] = "36";
WOMT_aThesenBilder[36] = new Array();
WOMT_aThesenBilder[36][0] = "images/";
WOMT_aThesenBilder[36][1] = "0";
WOMT_aThesenBilder[36][2] = "0";
WOMT_aThesen_N2ID[37] = "39708";
WOMT_aThesen_ID2N[39708] = "37";
WOMT_aThesenBilder[37] = new Array();
WOMT_aThesenBilder[37][0] = "images/";
WOMT_aThesenBilder[37][1] = "0";
WOMT_aThesenBilder[37][2] = "0";
WOMT_aThesen[0] = new Array();
WOMT_aThesenLinks[0] = new Array();
WOMT_aThesenVotematch[0] = "0";
WOMT_aThesenVotematchId[0] = "0";
WOMT_aThesen[0][0] = new Array();
WOMT_aThesenLinks[0][0] = new Array();
WOMT_aThesenLinks[0][0][0] = new Array();
WOMT_aThesenLinks[0][0][0][0] =
  "Ein gemeinsames Finanzministerium für die Eurozone? (Dossier: Europäische Wirtschaftspolitik, bpb.de)";
WOMT_aThesenLinks[0][0][0][1] =
  "https://www.bpb.de/themen/wirtschaft/europa-wirtschaft/261906/ein-gemeinsames-finanzministerium-fuer-die-eurozone/";
WOMT_aThesenLinks[0][0][0][2] = "url";
WOMT_aThesenLinks[0][0][1] = new Array();
WOMT_aThesenLinks[0][0][1][0] =
  "Langfristiger EU-Haushalt (Hintergrund Aktuell, bpb.de)";
WOMT_aThesenLinks[0][0][1][1] =
  "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/326427/langfristiger-eu-haushalt-mehr-geld-fuer-klimaschutz-und-digitales/";
WOMT_aThesenLinks[0][0][1][2] = "url";
WOMT_aThesenLinks[0][0][2] = new Array();
WOMT_aThesenLinks[0][0][2][0] = "Alicia Prager: Familienkrach (fluter.de)";
WOMT_aThesenLinks[0][0][2][1] =
  "https://www.fluter.de/eu-politik-in-der-corona-wirtschaftskrise-einfach-erklaert";
WOMT_aThesenLinks[0][0][2][2] = "url";
WOMT_aThesen[0][0][0] = "EU-Steuern";
WOMT_aThesen[0][0][1] = "Die EU soll eigene Steuern erheben dürfen.";
WOMT_aThesenThema[0] = "0";
WOMT_aThesenParteien[0] = new Array();

WOMT_aThesen[1] = new Array();
WOMT_aThesenLinks[1] = new Array();
WOMT_aThesenVotematch[1] = "0";
WOMT_aThesenVotematchId[1] = "0";
WOMT_aThesen[1][0] = new Array();
WOMT_aThesenLinks[1][0] = new Array();
WOMT_aThesenLinks[1][0][0] = new Array();
WOMT_aThesenLinks[1][0][0][0] =
  "Thorsten Kroska: Nachhaltige Mobilität (Dossier: Klimawandel, bpb.de)";
WOMT_aThesenLinks[1][0][0][1] =
  "https://www.bpb.de/themen/klimawandel/dossier-klimawandel/516500/nachhaltige-mobilitaet/";
WOMT_aThesenLinks[1][0][0][2] = "url";
WOMT_aThesenLinks[1][0][1] = new Array();
WOMT_aThesenLinks[1][0][1][0] = "APuZ: Das Auto (bpb.de)";
WOMT_aThesenLinks[1][0][1][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/298753/das-auto/ ";
WOMT_aThesenLinks[1][0][1][2] = "url";
WOMT_aThesen[1][0][0] = "Verbrennungsmotoren";
WOMT_aThesen[1][0][1] =
  "Fahrzeuge mit Verbrennungsmotoren sollen auch nach 2035 in der EU neu zugelassen werden können.";
WOMT_aThesenThema[1] = "0";
WOMT_aThesenParteien[1] = new Array();

WOMT_aThesen[2] = new Array();
WOMT_aThesenLinks[2] = new Array();
WOMT_aThesenVotematch[2] = "0";
WOMT_aThesenVotematchId[2] = "0";
WOMT_aThesen[2][0] = new Array();
WOMT_aThesenLinks[2][0] = new Array();
WOMT_aThesenLinks[2][0][0] = new Array();
WOMT_aThesenLinks[2][0][0][0] =
  "Flucht und Migration über das Mittelmeer: Was tut die EU? (Hintergrund aktuell, bpb.de)";
WOMT_aThesenLinks[2][0][0][1] =
  "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/313491/flucht-und-migration-ueber-das-mittelmeer-was-tut-die-eu/ ";
WOMT_aThesenLinks[2][0][0][2] = "url";
WOMT_aThesenLinks[2][0][1] = new Array();
WOMT_aThesenLinks[2][0][1][0] = "Flucht nach Europa (eutotopics.net)";
WOMT_aThesenLinks[2][0][1][1] =
  "https://www.eurotopics.net/de/149220/flucht-nach-europa";
WOMT_aThesenLinks[2][0][1][2] = "url";
WOMT_aThesenLinks[2][0][2] = new Array();
WOMT_aThesenLinks[2][0][2][0] =
  "Kurzdossier: EU-Migrations- und Asylpolitik (bpb.de)";
WOMT_aThesenLinks[2][0][2][1] =
  "https://www.bpb.de/themen/migration-integration/kurzdossiers/517146/eu-migrations-und-asylpolitik/";
WOMT_aThesenLinks[2][0][2][2] = "url";
WOMT_aThesen[2][0][0] = "Seenotrettung";
WOMT_aThesen[2][0][1] =
  "Die EU soll eine eigene Seenotrettung im Mittelmeer aufbauen.";
WOMT_aThesenThema[2] = "0";
WOMT_aThesenParteien[2] = new Array();

WOMT_aThesen[3] = new Array();
WOMT_aThesenLinks[3] = new Array();
WOMT_aThesenVotematch[3] = "1";
WOMT_aThesenVotematchId[3] = "9";
WOMT_aThesen[3][0] = new Array();
WOMT_aThesenLinks[3][0] = new Array();
WOMT_aThesenLinks[3][0][0] = new Array();
WOMT_aThesenLinks[3][0][0][0] =
  "Markus Becker: Ökonomische Perspektiven des EU-Beitritts der Ukraine (Dossier Europäische Wirtschaftspolitik, bpb.de)";
WOMT_aThesenLinks[3][0][0][1] =
  "https://www.bpb.de/themen/wirtschaft/europa-wirtschaft/543027/oekonomische-perspektiven-des-eu-beitritts-der-ukraine/";
WOMT_aThesenLinks[3][0][0][2] = "url";
WOMT_aThesenLinks[3][0][1] = new Array();
WOMT_aThesenLinks[3][0][1][0] =
  "Julia Lauter: Wie wird ein Land Mitglied der Europäischen Union? (fluter.de)";
WOMT_aThesenLinks[3][0][1][1] =
  "https://fluter.de/eu-beitritt-prozess-einfach-erklaert-faq ";
WOMT_aThesenLinks[3][0][1][2] = "html";
WOMT_aThesenLinks[3][0][2] = new Array();
WOMT_aThesenLinks[3][0][2][0] =
  "Russlands Krieg gegen die Ukraine (eurotopics.net)";
WOMT_aThesenLinks[3][0][2][1] =
  "https://www.eurotopics.net/de/277036/russlands-krieg-gegen-die-ukraine";
WOMT_aThesenLinks[3][0][2][2] = "url";
WOMT_aThesen[3][0][0] = "EU-Mitgliedschaft der Ukraine";
WOMT_aThesen[3][0][1] = "Die Ukraine soll Mitglied der EU werden.";
WOMT_aThesenThema[3] = "0";
WOMT_aThesenParteien[3] = new Array();

WOMT_aThesen[4] = new Array();
WOMT_aThesenLinks[4] = new Array();
WOMT_aThesenVotematch[4] = "0";
WOMT_aThesenVotematchId[4] = "0";
WOMT_aThesen[4][0] = new Array();
WOMT_aThesenLinks[4][0] = new Array();
WOMT_aThesenLinks[4][0][0] = new Array();
WOMT_aThesenLinks[4][0][0][0] =
  "Gut ernähren (Podcast “Was uns betrifft”, bpb.de)";
WOMT_aThesenLinks[4][0][0][1] =
  "https://www.bpb.de/mediathek/podcasts/schere-stein-politik/505459/was-uns-betrifft-gut-ernaehren/ ";
WOMT_aThesenLinks[4][0][0][2] = "url";
WOMT_aThesenLinks[4][0][1] = new Array();
WOMT_aThesenLinks[4][0][1][0] =
  "Bernhard Osterburg: Klimaschutz und Landwirtschaft (Dossier: Klimawandel, bpb.de)";
WOMT_aThesenLinks[4][0][1][1] =
  "https://www.bpb.de/themen/klimawandel/dossier-klimawandel/515963/klimaschutz-und-landwirtschaft/";
WOMT_aThesenLinks[4][0][1][2] = "url";
WOMT_aThesenLinks[4][0][2] = new Array();
WOMT_aThesenLinks[4][0][2][0] = "Eva Hoffmann: Vom Acker (fluter.de)";
WOMT_aThesenLinks[4][0][2][1] =
  "https://www.fluter.de/nachhaltige-landwirtschaft";
WOMT_aThesenLinks[4][0][2][2] = "url";
WOMT_aThesen[4][0][0] = "Ökologische Landwirtschaft";
WOMT_aThesen[4][0][1] =
  "Die EU soll vorrangig ökologische Landwirtschaft fördern.";
WOMT_aThesenThema[4] = "0";
WOMT_aThesenParteien[4] = new Array();

WOMT_aThesen[5] = new Array();
WOMT_aThesenLinks[5] = new Array();
WOMT_aThesenVotematch[5] = "0";
WOMT_aThesenVotematchId[5] = "0";
WOMT_aThesen[5][0] = new Array();
WOMT_aThesenLinks[5][0] = new Array();
WOMT_aThesenLinks[5][0][0] = new Array();
WOMT_aThesenLinks[5][0][0][0] =
  "Debatte: 20 Jahre Euro - eine Erfolgsgeschichte? (bpb.de)";
WOMT_aThesenLinks[5][0][0][1] =
  "https://www.bpb.de/themen/wirtschaft/europa-wirtschaft/513998/20-jahre-euro-eine-erfolgsgeschichte/";
WOMT_aThesenLinks[5][0][0][2] = "url";
WOMT_aThesenLinks[5][0][1] = new Array();
WOMT_aThesenLinks[5][0][1][0] =
  "Stefan Schäfer: Eine kurze Geschichte der Europäischen Währungsunion (APuZ: Geldpolitik, bpb.de)";
WOMT_aThesenLinks[5][0][1][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/geldpolitik-2022/507734/eine-kurze-geschichte-der-europaeischen-waehrungsunion/";
WOMT_aThesenLinks[5][0][1][2] = "url";
WOMT_aThesenLinks[5][0][2] = new Array();
WOMT_aThesenLinks[5][0][2][0] =
  "Caspar Dohmen: Einführung von EWS und Euro (Dossier: Finanzwirtschaft, bpb.de)";
WOMT_aThesenLinks[5][0][2][1] =
  "https://www.bpb.de/themen/wirtschaft/523384/einfuehrung-von-ews-und-euro/";
WOMT_aThesenLinks[5][0][2][2] = "url";
WOMT_aThesen[5][0][0] = "Nationale Währung";
WOMT_aThesen[5][0][1] =
  "In Deutschland soll der Euro durch eine nationale Währung ersetzt werden.";
WOMT_aThesenThema[5] = "0";
WOMT_aThesenParteien[5] = new Array();

WOMT_aThesen[6] = new Array();
WOMT_aThesenLinks[6] = new Array();
WOMT_aThesenVotematch[6] = "1";
WOMT_aThesenVotematchId[6] = "20";
WOMT_aThesen[6][0] = new Array();
WOMT_aThesenLinks[6][0] = new Array();
WOMT_aThesenLinks[6][0][0] = new Array();
WOMT_aThesenLinks[6][0][0][0] =
  "Dossier: Geschlechtliche Vielfalt - trans* (bpb.de)";
WOMT_aThesenLinks[6][0][0][1] =
  "https://www.bpb.de/themen/gender-diversitaet/geschlechtliche-vielfalt-trans/";
WOMT_aThesenLinks[6][0][0][2] = "url";
WOMT_aThesenLinks[6][0][1] = new Array();
WOMT_aThesenLinks[6][0][1][0] = "Ich bin Charlotte (fluter.de)";
WOMT_aThesenLinks[6][0][1][1] = "https://www.fluter.de/charlotte";
WOMT_aThesenLinks[6][0][1][2] = "url";
WOMT_aThesenLinks[6][0][2] = new Array();
WOMT_aThesenLinks[6][0][2][0] = "„Pride Month ist jeden Tag“ (fluter.de)";
WOMT_aThesenLinks[6][0][2][1] =
  "https://www.fluter.de/queere-menschen-deutschland-video";
WOMT_aThesenLinks[6][0][2][2] = "url";
WOMT_aThesen[6][0][0] = "Geschlechtsidentität im Pass";
WOMT_aThesen[6][0][1] =
  "Die EU soll den Mitgliedstaaten empfehlen, außer „weiblich“ und „männlich“ auch die Eintragung einer anderen Geschlechtsidentität im Pass zu ermöglichen.";
WOMT_aThesenThema[6] = "0";
WOMT_aThesenParteien[6] = new Array();

WOMT_aThesen[7] = new Array();
WOMT_aThesenLinks[7] = new Array();
WOMT_aThesenVotematch[7] = "0";
WOMT_aThesenVotematchId[7] = "0";
WOMT_aThesen[7][0] = new Array();
WOMT_aThesenLinks[7][0] = new Array();
WOMT_aThesenLinks[7][0][0] = new Array();
WOMT_aThesenLinks[7][0][0][0] = "Michael Brake: Heul doch! (fluter.de)";
WOMT_aThesenLinks[7][0][0][1] =
  "https://fluter.de/wolf-gefahr-debatte-deutschland ";
WOMT_aThesenLinks[7][0][0][2] = "url";
WOMT_aThesenLinks[7][0][1] = new Array();
WOMT_aThesenLinks[7][0][1][0] = "APuZ: Mensch und Tier (bpb.de)";
WOMT_aThesenLinks[7][0][1][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/75802/mensch-und-tier/";
WOMT_aThesenLinks[7][0][1][2] = "url";
WOMT_aThesenLinks[7][0][2] = new Array();
WOMT_aThesenLinks[7][0][2][0] =
  "Filme zur Tierethik (Dossier: Bioethik, bpb.de)";
WOMT_aThesenLinks[7][0][2][1] =
  "https://www.bpb.de/themen/umwelt/bioethik/511977/filme-zur-tierethik/";
WOMT_aThesenLinks[7][0][2][2] = "url";
WOMT_aThesen[7][0][0] = "Jagd auf Wölfe";
WOMT_aThesen[7][0][1] =
  "Die Jagd auf Wölfe soll in Regionen erlaubt sein, in denen der Bestand dadurch nicht gefährdet ist.";
WOMT_aThesenThema[7] = "0";
WOMT_aThesenParteien[7] = new Array();

WOMT_aThesen[8] = new Array();
WOMT_aThesenLinks[8] = new Array();
WOMT_aThesenVotematch[8] = "0";
WOMT_aThesenVotematchId[8] = "0";
WOMT_aThesen[8][0] = new Array();
WOMT_aThesenLinks[8][0] = new Array();
WOMT_aThesenLinks[8][0][0] = new Array();
WOMT_aThesenLinks[8][0][0][0] =
  "Sonnenenergie (Das junge Politik-Lexikon, bpb.de)";
WOMT_aThesenLinks[8][0][0][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/321132/sonnenenergie/";
WOMT_aThesenLinks[8][0][0][2] = "url";
WOMT_aThesenLinks[8][0][1] = new Array();
WOMT_aThesenLinks[8][0][1][0] =
  "Anja Bierwirth: Klimaneutrale Gebäude (Dossier: Klimawandel, bpb.de)";
WOMT_aThesenLinks[8][0][1][1] =
  "https://www.bpb.de/themen/klimawandel/dossier-klimawandel/515959/klimaneutrale-gebaeude/";
WOMT_aThesenLinks[8][0][1][2] = "url";
WOMT_aThesenLinks[8][0][2] = new Array();
WOMT_aThesenLinks[8][0][2][0] =
  "Christiane Beuermann: Vorreiter EU? Die europäische Klimapolitik (Dossier: Klimawandel, bpb.de)";
WOMT_aThesenLinks[8][0][2][1] =
  "https://www.bpb.de/themen/klimawandel/dossier-klimawandel/509723/vorreiter-eu-die-europaeische-klimapolitik/";
WOMT_aThesenLinks[8][0][2][2] = "url";
WOMT_aThesen[8][0][0] = "Photovoltaik für Wohngebäude";
WOMT_aThesen[8][0][1] =
  "Beim Bau neuer Wohngebäude in der EU soll die Errichtung von Photovoltaikanlagen verpflichtend sein.";
WOMT_aThesenThema[8] = "0";
WOMT_aThesenParteien[8] = new Array();

WOMT_aThesen[9] = new Array();
WOMT_aThesenLinks[9] = new Array();
WOMT_aThesenVotematch[9] = "0";
WOMT_aThesenVotematchId[9] = "0";
WOMT_aThesen[9][0] = new Array();
WOMT_aThesenLinks[9][0] = new Array();
WOMT_aThesenLinks[9][0][0] = new Array();
WOMT_aThesenLinks[9][0][0][0] =
  "Debatte: EU - Schluss mit Einstimmigkeitsprinzip? (eurotopics.net)";
WOMT_aThesenLinks[9][0][0][1] =
  "https://www.eurotopics.net/de/301745/eu-schluss-mit-dem-einstimmigkeitsprinzip";
WOMT_aThesenLinks[9][0][0][2] = "url";
WOMT_aThesenLinks[9][0][1] = new Array();
WOMT_aThesenLinks[9][0][1][0] =
  "Europäische Union (KOSMOS Welt-Almanach, bpb.de)";
WOMT_aThesenLinks[9][0][1][1] =
  "https://www.bpb.de/kurz-knapp/lexika/kosmos-weltalmanach/244083/europaeische-union-eu/";
WOMT_aThesenLinks[9][0][1][2] = "url";
WOMT_aThesen[9][0][0] = "Außenpolitische Entscheidungen";
WOMT_aThesen[9][0][1] =
  "Mehr außenpolitische Entscheidungen der EU sollen mit Mehrheit statt einstimmig getroffen werden.";
WOMT_aThesenThema[9] = "0";
WOMT_aThesenParteien[9] = new Array();

WOMT_aThesen[10] = new Array();
WOMT_aThesenLinks[10] = new Array();
WOMT_aThesenVotematch[10] = "0";
WOMT_aThesenVotematchId[10] = "0";
WOMT_aThesen[10][0] = new Array();
WOMT_aThesenLinks[10][0] = new Array();
WOMT_aThesenLinks[10][0][0] = new Array();
WOMT_aThesenLinks[10][0][0][0] =
  "Debatte: Muss Fliegen zum Schutz des Klimas teurer werden? (eurotopics.net)";
WOMT_aThesenLinks[10][0][0][1] =
  "https://www.eurotopics.net/de/223128/muss-fliegen-zum-schutz-des-klimas-teurer-werden";
WOMT_aThesenLinks[10][0][0][2] = "url";
WOMT_aThesenLinks[10][0][1] = new Array();
WOMT_aThesenLinks[10][0][1][0] =
  "Ralf Pauli/Katharina Wojczenko: Sollten Kurzstreckenflüge verboten werden? (fluter.de)";
WOMT_aThesenLinks[10][0][1][1] =
  "https://fluter.de/streit-sollten-kurzstreckenfluege-verboten-werden ";
WOMT_aThesenLinks[10][0][1][2] = "url";
WOMT_aThesen[10][0][0] = "Flugzeugtreibstoff";
WOMT_aThesen[10][0][1] =
  "Der Flugzeugtreibstoff Kerosin soll für Flüge in der EU steuerfrei sein.";
WOMT_aThesenThema[10] = "0";
WOMT_aThesenParteien[10] = new Array();

WOMT_aThesen[11] = new Array();
WOMT_aThesenLinks[11] = new Array();
WOMT_aThesenVotematch[11] = "0";
WOMT_aThesenVotematchId[11] = "0";
WOMT_aThesen[11][0] = new Array();
WOMT_aThesenLinks[11][0] = new Array();
WOMT_aThesenLinks[11][0][0] = new Array();
WOMT_aThesenLinks[11][0][0][0] = "Europol (Das junge Politik-Lexikon, bpb.de)";
WOMT_aThesenLinks[11][0][0][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/320147/eu-europol/";
WOMT_aThesenLinks[11][0][0][2] = "url";
WOMT_aThesen[11][0][0] = "Europol";
WOMT_aThesen[11][0][1] =
  "Die gemeinsame europäische Polizeibehörde Europol soll weitere Befugnisse erhalten.";
WOMT_aThesenThema[11] = "0";
WOMT_aThesenParteien[11] = new Array();

WOMT_aThesen[12] = new Array();
WOMT_aThesenLinks[12] = new Array();
WOMT_aThesenVotematch[12] = "0";
WOMT_aThesenVotematchId[12] = "0";
WOMT_aThesen[12][0] = new Array();
WOMT_aThesenLinks[12][0] = new Array();
WOMT_aThesenLinks[12][0][0] = new Array();
WOMT_aThesenLinks[12][0][0][0] =
  "Javier Ruiz-Soler: Gibt es eine europäische Öffentlichkeit? (APuZ: Europa, bpb.de)";
WOMT_aThesenLinks[12][0][0][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/255613/gibt-es-eine-europaeische-oeffentlichkeit/";
WOMT_aThesenLinks[12][0][0][2] = "url";
WOMT_aThesenLinks[12][0][1] = new Array();
WOMT_aThesenLinks[12][0][1][0] =
  "Christina Holtz-Bacha. Europäische Medienpolitik (Dossier: Medienpolitik, bpb.de)";
WOMT_aThesenLinks[12][0][1][1] =
  "https://www.bpb.de/themen/medien-journalismus/medienpolitik/171925/europaeische-medienpolitik/";
WOMT_aThesenLinks[12][0][1][2] = "url";
WOMT_aThesenLinks[12][0][2] = new Array();
WOMT_aThesenLinks[12][0][2][0] = "ARTE (Europalexikon, bpb.de)";
WOMT_aThesenLinks[12][0][2][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-europalexikon/176681/arte/";
WOMT_aThesenLinks[12][0][2][2] = "url";
WOMT_aThesen[12][0][0] = "Öffentlich-rechtlicher Rundfunk";
WOMT_aThesen[12][0][1] =
  "Die EU soll länderübergreifende, mehrsprachige Angebote des öffentlich-rechtlichen Rundfunks stärker finanziell fördern.";
WOMT_aThesenThema[12] = "0";
WOMT_aThesenParteien[12] = new Array();

WOMT_aThesen[13] = new Array();
WOMT_aThesenLinks[13] = new Array();
WOMT_aThesenVotematch[13] = "0";
WOMT_aThesenVotematchId[13] = "0";
WOMT_aThesen[13][0] = new Array();
WOMT_aThesenLinks[13][0] = new Array();
WOMT_aThesenLinks[13][0][0] = new Array();
WOMT_aThesenLinks[13][0][0][0] =
  "Tom Gebhardt: Klimapolitik- Was ist aus Europas Green Deal geworden? (Dossier: Europawahlen, bpb.de)";
WOMT_aThesenLinks[13][0][0][1] =
  "https://www.bpb.de/themen/europawahlen/dossier-europawahlen/546894/klimapolitik-was-ist-aus-europas-green-deal-geworden/";
WOMT_aThesenLinks[13][0][0][2] = "url";
WOMT_aThesenLinks[13][0][1] = new Array();
WOMT_aThesenLinks[13][0][1][0] =
  "Susanne Dröge: Der europäische Green Deal - Ziele, Hintergründe und globale Dimension (APuZ: Green New Deals, bpb.de)";
WOMT_aThesenLinks[13][0][1][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/green-new-deals-2022/345729/der-europaeische-green-deal/";
WOMT_aThesenLinks[13][0][1][2] = "url";
WOMT_aThesenLinks[13][0][2] = new Array();
WOMT_aThesenLinks[13][0][2][0] =
  "Christiane Beuermann: Vorreiter EU? Die europäische Klimapolitik (Dossier: Klimawandel, bpb.de)";
WOMT_aThesenLinks[13][0][2][1] =
  "https://www.bpb.de/themen/klimawandel/dossier-klimawandel/509723/vorreiter-eu-die-europaeische-klimapolitik/";
WOMT_aThesenLinks[13][0][2][2] = "url";
WOMT_aThesen[13][0][0] = "Verwerfen der Klimaziele";
WOMT_aThesen[13][0][1] =
  "Die EU soll das Ziel verwerfen, klimaneutral zu werden.";
WOMT_aThesenThema[13] = "0";
WOMT_aThesenParteien[13] = new Array();

WOMT_aThesen[14] = new Array();
WOMT_aThesenLinks[14] = new Array();
WOMT_aThesenVotematch[14] = "0";
WOMT_aThesenVotematchId[14] = "0";
WOMT_aThesen[14][0] = new Array();
WOMT_aThesenLinks[14][0] = new Array();
WOMT_aThesenLinks[14][0][0] = new Array();
WOMT_aThesenLinks[14][0][0][0] =
  "Ulrike Lembke: Neue Modelle - Die Idee eines Paritätsgesetzes in Deutschland (Dossier: Frauenwahlrecht, bpb.de)";
WOMT_aThesenLinks[14][0][0][1] =
  "https://www.bpb.de/themen/zeit-kulturgeschichte/frauenwahlrecht/279363/neue-modelle-die-idee-eines-paritaetsgesetzes-in-deutschland/";
WOMT_aThesenLinks[14][0][0][2] = "url";
WOMT_aThesenLinks[14][0][1] = new Array();
WOMT_aThesenLinks[14][0][1][0] =
  "Gabriele Abels/Petra Ahrens/Agnes Blome: Geschlechtergerechte Repräsentation in historischer und internationaler Perspektive (APuZ: Frauen wählen, bpb.de)";
WOMT_aThesenLinks[14][0][1][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/277335/geschlechtergerechte-repraesentation-in-historischer-und-internationaler-perspektive/";
WOMT_aThesenLinks[14][0][1][2] = "url";
WOMT_aThesen[14][0][0] = "Geschlechteranteil auf Wahllisten";
WOMT_aThesen[14][0][1] =
  "Bei den Wahlen zum Europäischen Parlament sollen die Parteien weiterhin frei entscheiden können, wie groß der Anteil der Geschlechter auf ihren Listen ist.";
WOMT_aThesenThema[14] = "0";
WOMT_aThesenParteien[14] = new Array();

WOMT_aThesen[15] = new Array();
WOMT_aThesenLinks[15] = new Array();
WOMT_aThesenVotematch[15] = "0";
WOMT_aThesenVotematchId[15] = "0";
WOMT_aThesen[15][0] = new Array();
WOMT_aThesenLinks[15][0] = new Array();
WOMT_aThesenLinks[15][0][0] = new Array();
WOMT_aThesenLinks[15][0][0][0] = "Nadja Schlüter: Alle für einen (fluter.de)";
WOMT_aThesenLinks[15][0][0][1] =
  "https://www.fluter.de/sozialversicherung-deutschland-erklaerung";
WOMT_aThesenLinks[15][0][0][2] = "url";
WOMT_aThesenLinks[15][0][1] = new Array();
WOMT_aThesenLinks[15][0][1][0] =
  "Eckart D. Stratenschulte: Sozialpolitik (Dossier: Europäische Union, bpb.de)";
WOMT_aThesenLinks[15][0][1][1] =
  "https://www.bpb.de/themen/europaeische-union/dossier-europaeische-union/42897/sozialpolitik/ ";
WOMT_aThesenLinks[15][0][1][2] = "url";
WOMT_aThesen[15][0][0] = "Soziale Grundsicherung";
WOMT_aThesen[15][0][1] =
  "Die EU soll Vorgaben für die Höhe der sozialen Grundsicherung in den Mitgliedstaaten machen.";
WOMT_aThesenThema[15] = "0";
WOMT_aThesenParteien[15] = new Array();

WOMT_aThesen[16] = new Array();
WOMT_aThesenLinks[16] = new Array();
WOMT_aThesenVotematch[16] = "1";
WOMT_aThesenVotematchId[16] = "1";
WOMT_aThesen[16][0] = new Array();
WOMT_aThesenLinks[16][0] = new Array();
WOMT_aThesenLinks[16][0][0] = new Array();
WOMT_aThesenLinks[16][0][0][0] = "Dossier: Digitale Desinformation (bpb.de)";
WOMT_aThesenLinks[16][0][0][1] =
  "https://www.bpb.de/themen/medien-journalismus/digitale-desinformation/";
WOMT_aThesenLinks[16][0][0][2] = "url";
WOMT_aThesenLinks[16][0][1] = new Array();
WOMT_aThesenLinks[16][0][1][0] = "Dossier: Soziale Medien (bpb.de)";
WOMT_aThesenLinks[16][0][1][1] =
  "https://www.bpb.de/themen/medien-journalismus/soziale-medien/";
WOMT_aThesenLinks[16][0][1][2] = "url";
WOMT_aThesenLinks[16][0][2] = new Array();
WOMT_aThesenLinks[16][0][2][0] = "Die regeln das (fluter.de)";
WOMT_aThesenLinks[16][0][2][1] =
  "https://www.fluter.de/Plattformregulierung-interview";
WOMT_aThesenLinks[16][0][2][2] = "url";
WOMT_aThesen[16][0][0] = "Desinformation in sozialen Netzwerken";
WOMT_aThesen[16][0][1] =
  "Betreiber sozialer Netzwerke sollen frei entscheiden dürfen, wie sie mit Desinformation auf ihren Plattformen umgehen.";
WOMT_aThesenThema[16] = "0";
WOMT_aThesenParteien[16] = new Array();

WOMT_aThesen[17] = new Array();
WOMT_aThesenLinks[17] = new Array();
WOMT_aThesenVotematch[17] = "0";
WOMT_aThesenVotematchId[17] = "0";
WOMT_aThesen[17][0] = new Array();
WOMT_aThesenLinks[17][0] = new Array();
WOMT_aThesenLinks[17][0][0] = new Array();
WOMT_aThesenLinks[17][0][0][0] = "Naturschutz (Europalexikon, bpb.de)";
WOMT_aThesenLinks[17][0][0][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-europalexikon/177151/naturschutz/";
WOMT_aThesenLinks[17][0][0][2] = "url";
WOMT_aThesenLinks[17][0][1] = new Array();
WOMT_aThesenLinks[17][0][1][0] = "Dossier: Naturschutzpolitik (bpb.de)";
WOMT_aThesenLinks[17][0][1][1] =
  "https://www.bpb.de/themen/umwelt/naturschutzpolitik/";
WOMT_aThesenLinks[17][0][1][2] = "url";
WOMT_aThesenLinks[17][0][2] = new Array();
WOMT_aThesenLinks[17][0][2][0] =
  "Debatte: EU-Renaturierungsgesetz - Ein Erfolg für die Umwelt? (eurotopics.net)";
WOMT_aThesenLinks[17][0][2][1] =
  "https://www.eurotopics.net/de/316074/eu-renaturierungsgesetz-ein-erfolg-fuer-die-umwelt";
WOMT_aThesenLinks[17][0][2][2] = "url";
WOMT_aThesen[17][0][0] = "Naturschutzgebiete";
WOMT_aThesen[17][0][1] =
  "In der EU sollen mehr Flächen als Naturschutzgebiete ausgewiesen werden.";
WOMT_aThesenThema[17] = "0";
WOMT_aThesenParteien[17] = new Array();

WOMT_aThesen[18] = new Array();
WOMT_aThesenLinks[18] = new Array();
WOMT_aThesenVotematch[18] = "1";
WOMT_aThesenVotematchId[18] = "10";
WOMT_aThesen[18][0] = new Array();
WOMT_aThesenLinks[18][0] = new Array();
WOMT_aThesenLinks[18][0][0] = new Array();
WOMT_aThesenLinks[18][0][0][0] =
  "Debatte: EuGH - Rechtsstaatsmechanismus ist rechtens (eurotopics.net)";
WOMT_aThesenLinks[18][0][0][1] =
  "https://www.eurotopics.net/de/276493/eugh-rechtsstaatsmechanismus-ist-rechtens";
WOMT_aThesenLinks[18][0][0][2] = "url";
WOMT_aThesenLinks[18][0][1] = new Array();
WOMT_aThesenLinks[18][0][1][0] =
  "Till Patrik Holterhus: Die Europäische Union als Rechtsstaat (Informationen zur politischen Bildung, bpb.de)";
WOMT_aThesenLinks[18][0][1][1] =
  "https://www.bpb.de/shop/zeitschriften/izpb/rechtsstaat-351/511414/die-europaeische-union-als-rechtsstaat/";
WOMT_aThesenLinks[18][0][1][2] = "url";
WOMT_aThesenLinks[18][0][2] = new Array();
WOMT_aThesenLinks[18][0][2][0] =
  "Langfristiger EU-Haushalt (Hintergrund Aktuell, bpb.de)";
WOMT_aThesenLinks[18][0][2][1] =
  "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/326427/langfristiger-eu-haushalt-mehr-geld-fuer-klimaschutz-und-digitales/";
WOMT_aThesenLinks[18][0][2][2] = "url";
WOMT_aThesen[18][0][0] = "Regeln und Werte der EU";
WOMT_aThesen[18][0][1] =
  "EU-Fördermittel für Mitgliedstaaten, die Regeln und Werte der EU verletzen, sollen weiterhin zurückgehalten werden.";
WOMT_aThesenThema[18] = "0";
WOMT_aThesenParteien[18] = new Array();

WOMT_aThesen[19] = new Array();
WOMT_aThesenLinks[19] = new Array();
WOMT_aThesenVotematch[19] = "1";
WOMT_aThesenVotematchId[19] = "14";
WOMT_aThesen[19][0] = new Array();
WOMT_aThesenLinks[19][0] = new Array();
WOMT_aThesenLinks[19][0][0] = new Array();
WOMT_aThesenLinks[19][0][0][0] =
  "Vor zwei Jahren - Beginn der russischen Invasion in die Ukraine (Hintergrund Aktuell, bpb.de)";
WOMT_aThesenLinks[19][0][0][1] =
  "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/545763/vor-zwei-jahren-beginn-der-russischen-invasion-in-die-ukraine/";
WOMT_aThesenLinks[19][0][0][2] = "url";
WOMT_aThesenLinks[19][0][1] = new Array();
WOMT_aThesenLinks[19][0][1][0] =
  "Russlands Krieg gegen die Ukraine (eurotopics.net)";
WOMT_aThesenLinks[19][0][1][1] =
  "https://www.eurotopics.net/de/277036/russlands-krieg-gegen-die-ukraine";
WOMT_aThesenLinks[19][0][1][2] = "url";
WOMT_aThesenLinks[19][0][2] = new Array();
WOMT_aThesenLinks[19][0][2][0] =
  "Björn Müller/Julia Lauter: Braucht es Aufrüstung, um Frieden zu sichern? (fluter.de)";
WOMT_aThesenLinks[19][0][2][1] =
  "https://fluter.de/aufruestung-ukraine-streit-pro-contra ";
WOMT_aThesenLinks[19][0][2][2] = "url";
WOMT_aThesen[19][0][0] = "Waffen für die Ukraine";
WOMT_aThesen[19][0][1] = "Die EU soll mehr Waffen für die Ukraine finanzieren.";
WOMT_aThesenThema[19] = "0";
WOMT_aThesenParteien[19] = new Array();

WOMT_aThesen[20] = new Array();
WOMT_aThesenLinks[20] = new Array();
WOMT_aThesenVotematch[20] = "0";
WOMT_aThesenVotematchId[20] = "0";
WOMT_aThesen[20][0] = new Array();
WOMT_aThesenLinks[20][0] = new Array();
WOMT_aThesenLinks[20][0][0] = new Array();
WOMT_aThesenLinks[20][0][0][0] =
  "Mit offenen Karten: Meere ohne Fische? (bpb.de)";
WOMT_aThesenLinks[20][0][0][1] =
  "https://www.bpb.de/mediathek/video/303114/meere-ohne-fische/";
WOMT_aThesenLinks[20][0][0][2] = "url";
WOMT_aThesenLinks[20][0][1] = new Array();
WOMT_aThesenLinks[20][0][1][0] =
  "Fischbestände auf offener See (Zahlen und Fakten: Globalisierung, bpb.de)";
WOMT_aThesenLinks[20][0][1][1] =
  "https://www.bpb.de/kurz-knapp/zahlen-und-fakten/globalisierung/52733/fischbestaende-auf-offener-see/";
WOMT_aThesenLinks[20][0][1][2] = "url";
WOMT_aThesen[20][0][0] = "Senkung der Fischfangquoten";
WOMT_aThesen[20][0][1] =
  "Die zulässige Menge an Fischen, die in EU-Gewässern gefangen werden dürfen, soll gesenkt werden.";
WOMT_aThesenThema[20] = "0";
WOMT_aThesenParteien[20] = new Array();

WOMT_aThesen[21] = new Array();
WOMT_aThesenLinks[21] = new Array();
WOMT_aThesenVotematch[21] = "1";
WOMT_aThesenVotematchId[21] = "23";
WOMT_aThesen[21][0] = new Array();
WOMT_aThesenLinks[21][0] = new Array();
WOMT_aThesenLinks[21][0][0] = new Array();
WOMT_aThesenLinks[21][0][0][0] =
  "Thorsten Koska: Nachhaltige Mobilität (Dossier: Klimawandel, bpb.de)";
WOMT_aThesenLinks[21][0][0][1] =
  "https://www.bpb.de/themen/klimawandel/dossier-klimawandel/516500/nachhaltige-mobilitaet/";
WOMT_aThesenLinks[21][0][0][2] = "url";
WOMT_aThesenLinks[21][0][1] = new Array();
WOMT_aThesenLinks[21][0][1][0] =
  "Maike Brzoska: Wie die Welt handelt (Dossier: Globaler Handel, bpb.de)";
WOMT_aThesenLinks[21][0][1][1] =
  "https://www.bpb.de/themen/wirtschaft/freihandel/geopolitik-und-welthandel/544566/wie-die-welt-handelt/ ";
WOMT_aThesenLinks[21][0][1][2] = "url";
WOMT_aThesenLinks[21][0][2] = new Array();
WOMT_aThesenLinks[21][0][2][0] =
  "Felix Lee: Ist Deutschland zu abhängig von China? (Dossier: Globaler Handel, bpb.de)";
WOMT_aThesenLinks[21][0][2][1] =
  "https://www.bpb.de/themen/wirtschaft/freihandel/geopolitik-und-welthandel/544434/ist-deutschland-zu-abhaengig-von-china/ ";
WOMT_aThesenLinks[21][0][2][2] = "url";
WOMT_aThesen[21][0][0] = "Einfuhrzölle auf Elektroautos";
WOMT_aThesen[21][0][1] =
  "Die Einfuhrzölle der EU auf chinesische Elektroautos sollen erhöht werden.";
WOMT_aThesenThema[21] = "0";
WOMT_aThesenParteien[21] = new Array();

WOMT_aThesen[22] = new Array();
WOMT_aThesenLinks[22] = new Array();
WOMT_aThesenVotematch[22] = "0";
WOMT_aThesenVotematchId[22] = "0";
WOMT_aThesen[22][0] = new Array();
WOMT_aThesenLinks[22][0] = new Array();
WOMT_aThesenLinks[22][0][0] = new Array();
WOMT_aThesenLinks[22][0][0][0] =
  "Aufhebung des §219a (Hintergrund Aktuell, bpb.de)";
WOMT_aThesenLinks[22][0][0][1] =
  "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/511299/aufhebung-des-ss219a/";
WOMT_aThesenLinks[22][0][0][2] = "url";
WOMT_aThesenLinks[22][0][1] = new Array();
WOMT_aThesenLinks[22][0][1][0] =
  "Vor 30 Jahren: Reform für Schwangerschaftsabbrüche gekippt (Hintergrund Aktuell, bpb.de)";
WOMT_aThesenLinks[22][0][1][1] =
  "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/521296/vor-30-jahren-reform-fuer-schwangerschaftsabbrueche-gekippt/";
WOMT_aThesenLinks[22][0][1][2] = "url";
WOMT_aThesenLinks[22][0][2] = new Array();
WOMT_aThesenLinks[22][0][2][0] = "Abtreibung (eurotopics.net)";
WOMT_aThesenLinks[22][0][2][1] =
  "https://www.eurotopics.net/de/308195/abtreibung";
WOMT_aThesenLinks[22][0][2][2] = "url";
WOMT_aThesen[22][0][0] = "Schwangerschaftsabbrüche";
WOMT_aThesen[22][0][1] =
  "Die EU soll sich dafür einsetzen, dass Schwangerschaftsabbrüche in allen Mitgliedstaaten straffrei möglich sind.";
WOMT_aThesenThema[22] = "0";
WOMT_aThesenParteien[22] = new Array();

WOMT_aThesen[23] = new Array();
WOMT_aThesenLinks[23] = new Array();
WOMT_aThesenVotematch[23] = "1";
WOMT_aThesenVotematchId[23] = "19";
WOMT_aThesen[23][0] = new Array();
WOMT_aThesenLinks[23][0] = new Array();
WOMT_aThesenLinks[23][0][0] = new Array();
WOMT_aThesenLinks[23][0][0][0] =
  "Flüchtlingspolitik in Europa (eurotopics.net)";
WOMT_aThesenLinks[23][0][0][1] =
  "https://www.eurotopics.net/de/173755/fluechtlingspolitik-in-europa";
WOMT_aThesenLinks[23][0][0][2] = "url";
WOMT_aThesenLinks[23][0][1] = new Array();
WOMT_aThesenLinks[23][0][1][0] =
  "Kurzdossier: EU-Migrations- und Asylpolitik (bpb.de)";
WOMT_aThesenLinks[23][0][1][1] =
  "https://www.bpb.de/themen/migration-integration/kurzdossiers/517146/eu-migrations-und-asylpolitik/";
WOMT_aThesenLinks[23][0][1][2] = "url";
WOMT_aThesen[23][0][0] = "Dauerhafte Grenzkontrollen";
WOMT_aThesen[23][0][1] =
  "Es sollen wieder dauerhafte Grenzkontrollen zwischen den Mitgliedstaaten der EU stattfinden.";
WOMT_aThesenThema[23] = "0";
WOMT_aThesenParteien[23] = new Array();

WOMT_aThesen[24] = new Array();
WOMT_aThesenLinks[24] = new Array();
WOMT_aThesenVotematch[24] = "0";
WOMT_aThesenVotematchId[24] = "0";
WOMT_aThesen[24][0] = new Array();
WOMT_aThesenLinks[24][0] = new Array();
WOMT_aThesenLinks[24][0][0] = new Array();
WOMT_aThesenLinks[24][0][0][0] =
  "Julia Lauter: Wie wird ein Land Mitglied der Europäischen Union? (fluter.de)";
WOMT_aThesenLinks[24][0][0][1] =
  "https://fluter.de/eu-beitritt-prozess-einfach-erklaert-faq";
WOMT_aThesenLinks[24][0][0][2] = "url";
WOMT_aThesenLinks[24][0][1] = new Array();
WOMT_aThesenLinks[24][0][1][0] =
  "Michael Kaeding: Wie soll die Union wachsen? (APuZ: Europa, bpb.de)";
WOMT_aThesenLinks[24][0][1][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/europa-2024/546717/wie-soll-die-union-wachsen/";
WOMT_aThesenLinks[24][0][1][2] = "url";
WOMT_aThesenLinks[24][0][2] = new Array();
WOMT_aThesenLinks[24][0][2][0] = "Beitrittsverfahren (Europalexikon, bpb.de)";
WOMT_aThesenLinks[24][0][2][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-europalexikon/176708/beitrittsverfahren/";
WOMT_aThesenLinks[24][0][2][2] = "url";
WOMT_aThesen[24][0][0] = "Volksabstimmung bei neuen Mitgliedern";
WOMT_aThesen[24][0][1] =
  "Die Aufnahme neuer Staaten in die EU soll in allen Mitgliedstaaten durch Volksabstimmungen bestätigt werden müssen.";
WOMT_aThesenThema[24] = "0";
WOMT_aThesenParteien[24] = new Array();

WOMT_aThesen[25] = new Array();
WOMT_aThesenLinks[25] = new Array();
WOMT_aThesenVotematch[25] = "1";
WOMT_aThesenVotematchId[25] = "11";
WOMT_aThesen[25][0] = new Array();
WOMT_aThesenLinks[25][0] = new Array();
WOMT_aThesenLinks[25][0][0] = new Array();
WOMT_aThesenLinks[25][0][0][0] = "Gentechnologie (Dossier: Bioethik, bpb.de)";
WOMT_aThesenLinks[25][0][0][1] =
  "https://www.bpb.de/themen/umwelt/bioethik/271225/gentechnologie/";
WOMT_aThesenLinks[25][0][0][2] = "url";
WOMT_aThesenLinks[25][0][1] = new Array();
WOMT_aThesenLinks[25][0][1][0] =
  "Bernd Eberhart: Geht‘s nicht ein bisschen kleiner? (fluter.de)";
WOMT_aThesenLinks[25][0][1][1] =
  "https://fluter.de/gr%C3%BCne-gentechnik-vorteile-nachteile";
WOMT_aThesenLinks[25][0][1][2] = "url";
WOMT_aThesen[25][0][0] = "Gentechnisch veränderte Pflanzen";
WOMT_aThesen[25][0][1] =
  "Die EU soll den Anbau von weiteren gentechnisch veränderten Pflanzensorten erlauben.";
WOMT_aThesenThema[25] = "0";
WOMT_aThesenParteien[25] = new Array();

WOMT_aThesen[26] = new Array();
WOMT_aThesenLinks[26] = new Array();
WOMT_aThesenVotematch[26] = "0";
WOMT_aThesenVotematchId[26] = "0";
WOMT_aThesen[26][0] = new Array();
WOMT_aThesenLinks[26][0] = new Array();
WOMT_aThesenLinks[26][0][0] = new Array();
WOMT_aThesenLinks[26][0][0][0] =
  "Dossier: Femizide und Gewalt gegen Frauen (bpb.de)";
WOMT_aThesenLinks[26][0][0][1] =
  "https://www.bpb.de/themen/gender-diversitaet/femizide-und-gewalt-gegen-frauen/";
WOMT_aThesenLinks[26][0][0][2] = "url";
WOMT_aThesenLinks[26][0][1] = new Array();
WOMT_aThesenLinks[26][0][1][0] =
  "„Partnerschaftsgewalt betrifft uns alle“ (fluter.de)";
WOMT_aThesenLinks[26][0][1][1] =
  "https://www.fluter.de/partnerschaft-gewalt-interview";
WOMT_aThesenLinks[26][0][1][2] = "url";
WOMT_aThesenLinks[26][0][2] = new Array();
WOMT_aThesenLinks[26][0][2][0] = "Michael Brake: Vom Sich-Wehren (fluter.de)";
WOMT_aThesenLinks[26][0][2][1] =
  "https://www.fluter.de/gleichberechtigung-frauen-deutschland-geschichte";
WOMT_aThesenLinks[26][0][2][2] = "url";
WOMT_aThesen[26][0][0] = "Gewalt gegen Frauen";
WOMT_aThesen[26][0][1] =
  "Geschlechtsspezifische Gewalt gegen Frauen soll europaweit als Asylgrund anerkannt werden.";
WOMT_aThesenThema[26] = "0";
WOMT_aThesenParteien[26] = new Array();

WOMT_aThesen[27] = new Array();
WOMT_aThesenLinks[27] = new Array();
WOMT_aThesenVotematch[27] = "0";
WOMT_aThesenVotematchId[27] = "0";
WOMT_aThesen[27][0] = new Array();
WOMT_aThesenLinks[27][0] = new Array();
WOMT_aThesenLinks[27][0][0] = new Array();
WOMT_aThesenLinks[27][0][0][0] =
  "Urheberrecht (Das junge Politik-Lexikon, bpb.de)";
WOMT_aThesenLinks[27][0][0][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/321283/urheberrecht/";
WOMT_aThesenLinks[27][0][0][2] = "url";
WOMT_aThesenLinks[27][0][1] = new Array();
WOMT_aThesenLinks[27][0][1][0] =
  "EU-Urheberrechtsreform - Mehr Gerechtigkeit oder Zensur? (Hintergrund Aktuell, bpb.de)";
WOMT_aThesenLinks[27][0][1][1] =
  "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/287108/eu-urheberrechtsreform-mehr-gerechtigkeit-oder-zensur/";
WOMT_aThesenLinks[27][0][1][2] = "url";
WOMT_aThesen[27][0][0] = "Urheberschutz";
WOMT_aThesen[27][0][1] =
  "Urheberrechtlich geschützte Werke (z.B. Fotos, Musik, Literatur) sollen in der EU für nicht-kommerzielle Zwecke kostenlos verwendet werden dürfen.";
WOMT_aThesenThema[27] = "0";
WOMT_aThesenParteien[27] = new Array();

WOMT_aThesen[28] = new Array();
WOMT_aThesenLinks[28] = new Array();
WOMT_aThesenVotematch[28] = "0";
WOMT_aThesenVotematchId[28] = "0";
WOMT_aThesen[28][0] = new Array();
WOMT_aThesenLinks[28][0] = new Array();
WOMT_aThesenLinks[28][0][0] = new Array();
WOMT_aThesenLinks[28][0][0][0] =
  "Christian von Soest: Russland - Was können die EU-Sanktionen bewirken? (Dossier: Russland, bpb.de)";
WOMT_aThesenLinks[28][0][0][1] =
  "https://www.bpb.de/themen/europa/russland/514169/russland-was-koennen-die-eu-sanktionen-bewirken/";
WOMT_aThesenLinks[28][0][0][2] = "url";
WOMT_aThesenLinks[28][0][1] = new Array();
WOMT_aThesenLinks[28][0][1][0] =
  "Janis Kluge: Russland auf dem Weg in die Kriegswirtschaft (Dossier: Europäische Wirtschaftspolitik, bpb.de)";
WOMT_aThesenLinks[28][0][1][1] =
  "https://www.bpb.de/themen/wirtschaft/europa-wirtschaft/542999/russland-auf-dem-weg-in-die-kriegswirtschaft/";
WOMT_aThesenLinks[28][0][1][2] = "url";
WOMT_aThesenLinks[28][0][2] = new Array();
WOMT_aThesenLinks[28][0][2][0] =
  "Debatte: Wie geht Russland mit den Sanktionen um? (eurotopics.net)";
WOMT_aThesenLinks[28][0][2][1] =
  "https://www.eurotopics.net/de/305405/wie-geht-russland-mit-den-sanktionen-um";
WOMT_aThesenLinks[28][0][2][2] = "url";
WOMT_aThesen[28][0][0] = "Abbau der Sanktionen gegen Russland";
WOMT_aThesen[28][0][1] =
  "Die Sanktionen der EU gegen Russland sollen abgebaut werden.";
WOMT_aThesenThema[28] = "0";
WOMT_aThesenParteien[28] = new Array();

WOMT_aThesen[29] = new Array();
WOMT_aThesenLinks[29] = new Array();
WOMT_aThesenVotematch[29] = "1";
WOMT_aThesenVotematchId[29] = "25";
WOMT_aThesen[29][0] = new Array();
WOMT_aThesenLinks[29][0] = new Array();
WOMT_aThesenLinks[29][0][0] = new Array();
WOMT_aThesenLinks[29][0][0][0] = "ERASMUS (Europalexikon, bpb.de)";
WOMT_aThesenLinks[29][0][0][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-europalexikon/176821/erasmus/ ";
WOMT_aThesenLinks[29][0][0][2] = "url";
WOMT_aThesenLinks[29][0][1] = new Array();
WOMT_aThesenLinks[29][0][1][0] =
  "Bildungspolitik der EU (Europalexikon, bpb.de)";
WOMT_aThesenLinks[29][0][1][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-europalexikon/176715/bildungspolitik-der-eu/";
WOMT_aThesenLinks[29][0][1][2] = "url";
WOMT_aThesen[29][0][0] = "Erasmus+ Stipendium";
WOMT_aThesen[29][0][1] =
  "Das Erasmus+ Stipendium für Auslandsaufenthalte soll für Studierende, die über weniger finanzielle Mittel verfügen, höher sein.";
WOMT_aThesenThema[29] = "0";
WOMT_aThesenParteien[29] = new Array();

WOMT_aThesen[30] = new Array();
WOMT_aThesenLinks[30] = new Array();
WOMT_aThesenVotematch[30] = "1";
WOMT_aThesenVotematchId[30] = "6";
WOMT_aThesen[30][0] = new Array();
WOMT_aThesenLinks[30][0] = new Array();
WOMT_aThesenLinks[30][0][0] = new Array();
WOMT_aThesenLinks[30][0][0][0] =
  "Kernenergie / Atomenergie (Das junge Politik-Lexikon, bpb.de)";
WOMT_aThesenLinks[30][0][0][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/320607/kernenergie-atomenergie/";
WOMT_aThesenLinks[30][0][0][2] = "url";
WOMT_aThesenLinks[30][0][1] = new Array();
WOMT_aThesenLinks[30][0][1][0] =
  "Debatte: EU - Erdgas und Atomkraft gelten jetzt als grün (eurotopics.net)";
WOMT_aThesenLinks[30][0][1][1] =
  "https://www.eurotopics.net/de/275690/eu-erdgas-und-atomkraft-gelten-jetzt-als-gruen";
WOMT_aThesenLinks[30][0][1][2] = "url";
WOMT_aThesenLinks[30][0][2] = new Array();
WOMT_aThesenLinks[30][0][2][0] =
  "Jan-Henrik Meyer: Kleine Geschichte der Atomkraft-Kontroverse in Deutschland (APuZ: Endlagersuche, bpb.de)";
WOMT_aThesenLinks[30][0][2][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/333362/kleine-geschichte-der-atomkraft-kontroverse-in-deutschland/";
WOMT_aThesenLinks[30][0][2][2] = "url";
WOMT_aThesen[30][0][0] = "Atomkraft";
WOMT_aThesen[30][0][1] =
  "Die EU soll Atomkraft weiterhin als nachhaltige Energiequelle einstufen.";
WOMT_aThesenThema[30] = "0";
WOMT_aThesenParteien[30] = new Array();

WOMT_aThesen[31] = new Array();
WOMT_aThesenLinks[31] = new Array();
WOMT_aThesenVotematch[31] = "1";
WOMT_aThesenVotematchId[31] = "17";
WOMT_aThesen[31][0] = new Array();
WOMT_aThesenLinks[31][0] = new Array();
WOMT_aThesenLinks[31][0][0] = new Array();
WOMT_aThesenLinks[31][0][0][0] =
  "Petrik Runst: Migration und Handwerk: Fachkräftemangel und integratives Potenzial (Kurzdossier: Migration und Wirtschaft, bpb.de)";
WOMT_aThesenLinks[31][0][0][1] =
  "https://www.bpb.de/themen/migration-integration/kurzdossiers/515507/migration-und-handwerk-fachkraeftemangel-und-integratives-potenzial/";
WOMT_aThesenLinks[31][0][0][2] = "";
WOMT_aThesenLinks[31][0][1] = new Array();
WOMT_aThesenLinks[31][0][1][0] =
  "Alexandra Mergener: Fachkräfteengpässe und Arbeitsmigration nach Deutschland (Kurzdossier: Migration und Wirtschaft, bpb.de)";
WOMT_aThesenLinks[31][0][1][1] =
  "https://www.bpb.de/themen/migration-integration/kurzdossiers/344353/fachkraefteengpaesse-und-arbeitsmigration-nach-deutschland/";
WOMT_aThesenLinks[31][0][1][2] = "url";
WOMT_aThesenLinks[31][0][2] = new Array();
WOMT_aThesenLinks[31][0][2][0] =
  "Holger Kolb: #apos#Make it in Germany#apos# – das Fachkräfteeinwanderungsgesetz (Dossier: Migration weltweit, bpb.de)";
WOMT_aThesenLinks[31][0][2][1] =
  "https://www.bpb.de/themen/migration-integration/laenderprofile/deutschland/322153/make-it-in-germany-das-fachkraefteeinwanderungsgesetz/";
WOMT_aThesenLinks[31][0][2][2] = "url";
WOMT_aThesen[31][0][0] = "Einwanderung von Fachkräften";
WOMT_aThesen[31][0][1] =
  "Die Einwanderung von Fachkräften in die EU soll vereinfacht werden.";
WOMT_aThesenThema[31] = "0";
WOMT_aThesenParteien[31] = new Array();

WOMT_aThesen[32] = new Array();
WOMT_aThesenLinks[32] = new Array();
WOMT_aThesenVotematch[32] = "1";
WOMT_aThesenVotematchId[32] = "5";
WOMT_aThesen[32][0] = new Array();
WOMT_aThesenLinks[32][0] = new Array();
WOMT_aThesenLinks[32][0][0] = new Array();
WOMT_aThesenLinks[32][0][0][0] =
  '7. September 2013: China verkündet die Pläne zur "Neuen Seidenstraße" (Hintergrund Aktuell, bpb.de)';
WOMT_aThesenLinks[32][0][0][1] =
  "https://www.bpb.de/kurz-knapp/hintergrund-aktuell/539650/7-september-2013-china-verkuendet-die-plaene-zur-neuen-seidenstrasse/";
WOMT_aThesenLinks[32][0][0][2] = "url";
WOMT_aThesenLinks[32][0][1] = new Array();
WOMT_aThesenLinks[32][0][1][0] = "Jan Rübel: Ganz geschmeidig (fluter.de)";
WOMT_aThesenLinks[32][0][1][1] =
  "https://www.fluter.de/neue-seidenstrasse-china";
WOMT_aThesenLinks[32][0][1][2] = "url";
WOMT_aThesenLinks[32][0][2] = new Array();
WOMT_aThesenLinks[32][0][2][0] =
  "Andrea Jeska: Ein Angebot, das du nicht ablehnen kannst (fluter.de)";
WOMT_aThesenLinks[32][0][2][1] =
  "https://www.fluter.de/chinesische-autobahn-montenegro";
WOMT_aThesenLinks[32][0][2][2] = "url";
WOMT_aThesen[32][0][0] = "Kritische Infrastruktur";
WOMT_aThesen[32][0][1] =
  "Die Beteiligung außereuropäischer Investoren an Unternehmen im Bereich kritischer Infrastruktur soll in der EU stärker beschränkt werden.";
WOMT_aThesenThema[32] = "0";
WOMT_aThesenParteien[32] = new Array();

WOMT_aThesen[33] = new Array();
WOMT_aThesenLinks[33] = new Array();
WOMT_aThesenVotematch[33] = "1";
WOMT_aThesenVotematchId[33] = "18";
WOMT_aThesen[33][0] = new Array();
WOMT_aThesenLinks[33][0] = new Array();
WOMT_aThesenLinks[33][0][0] = new Array();
WOMT_aThesenLinks[33][0][0][0] =
  "Europäische Kommission (Das junge Politik-Lexikon, bpb.de)";
WOMT_aThesenLinks[33][0][0][1] =
  "https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/320149/eu-europaeische-kommission/";
WOMT_aThesenLinks[33][0][0][2] = "url";
WOMT_aThesenLinks[33][0][1] = new Array();
WOMT_aThesenLinks[33][0][1][0] =
  "Die Einrichtungen der EU im Überblick (einfach POLITIK: Europa, bpb.de)";
WOMT_aThesenLinks[33][0][1][1] =
  "https://www.bpb.de/themen/politisches-system/politik-einfach-fuer-alle/279791/die-einrichtungen-der-eu-im-ueberblick/";
WOMT_aThesenLinks[33][0][1][2] = "url";
WOMT_aThesenLinks[33][0][2] = new Array();
WOMT_aThesenLinks[33][0][2][0] =
  "Institutionen der EU (Spicker Politik, bpb.de)";
WOMT_aThesenLinks[33][0][2][1] =
  "https://www.bpb.de/shop/materialien/spicker-politik/312163/institutionen-der-eu/";
WOMT_aThesenLinks[33][0][2][2] = "url";
WOMT_aThesen[33][0][0] = "Direktwahl";
WOMT_aThesen[33][0][1] =
  "Der Präsident bzw. die Präsidentin der Europäischen Kommission soll von den Bürgerinnen und Bürgern direkt gewählt werden.";
WOMT_aThesenThema[33] = "0";
WOMT_aThesenParteien[33] = new Array();

WOMT_aThesen[34] = new Array();
WOMT_aThesenLinks[34] = new Array();
WOMT_aThesenVotematch[34] = "1";
WOMT_aThesenVotematchId[34] = "8";
WOMT_aThesen[34][0] = new Array();
WOMT_aThesenLinks[34][0] = new Array();
WOMT_aThesenLinks[34][0][0] = new Array();
WOMT_aThesenLinks[34][0][0][0] =
  "Christiane Beuermann: Vorreiter EU? Die europäische Klimapolitik (Dossier: Klimawandel, bpb.de)";
WOMT_aThesenLinks[34][0][0][1] =
  "https://www.bpb.de/themen/klimawandel/dossier-klimawandel/509723/vorreiter-eu-die-europaeische-klimapolitik/";
WOMT_aThesenLinks[34][0][0][2] = "url";
WOMT_aThesenLinks[34][0][1] = new Array();
WOMT_aThesenLinks[34][0][1][0] =
  "Emissionshandel (Das Lexikon der Wirtschaft, bpb.de)";
WOMT_aThesenLinks[34][0][1][1] =
  "https://www.bpb.de/kurz-knapp/lexika/lexikon-der-wirtschaft/19127/emissionshandel/";
WOMT_aThesenLinks[34][0][1][2] = "url";
WOMT_aThesenLinks[34][0][2] = new Array();
WOMT_aThesenLinks[34][0][2][0] =
  "Reform des EU-Emissionshandels (Deine tägliche Dosis Politik, bpb.de)";
WOMT_aThesenLinks[34][0][2][1] =
  "https://www.bpb.de/kurz-knapp/taegliche-dosis-politik/520224/reform-des-eu-emissionshandels/";
WOMT_aThesenLinks[34][0][2][2] = "url";
WOMT_aThesen[34][0][0] = "Preis für den Ausstoß von CO₂";
WOMT_aThesen[34][0][1] =
  "In der EU sollen Unternehmen mehr für den Ausstoß von CO₂ zahlen müssen.";
WOMT_aThesenThema[34] = "0";
WOMT_aThesenParteien[34] = new Array();

WOMT_aThesen[35] = new Array();
WOMT_aThesenLinks[35] = new Array();
WOMT_aThesenVotematch[35] = "1";
WOMT_aThesenVotematchId[35] = "16";
WOMT_aThesen[35][0] = new Array();
WOMT_aThesenLinks[35][0] = new Array();
WOMT_aThesenLinks[35][0][0] = new Array();
WOMT_aThesenLinks[35][0][0][0] =
  "Kurzdossier: EU-Migrations- und Asylpolitik (bpb.de)";
WOMT_aThesenLinks[35][0][0][1] =
  "https://www.bpb.de/themen/migration-integration/kurzdossiers/517146/eu-migrations-und-asylpolitik/";
WOMT_aThesenLinks[35][0][0][2] = "url";
WOMT_aThesenLinks[35][0][1] = new Array();
WOMT_aThesenLinks[35][0][1][0] =
  "Debatte: Asyl in der EU - Was bedeutet die geplante Reform? (eurotopics.net)";
WOMT_aThesenLinks[35][0][1][1] =
  "https://www.eurotopics.net/de/312698/asyl-in-der-eu-was-bedeutet-die-geplante-reform";
WOMT_aThesenLinks[35][0][1][2] = "url";
WOMT_aThesenLinks[35][0][2] = new Array();
WOMT_aThesenLinks[35][0][2][0] = "APuZ: Festung Europa? (bpb.de)";
WOMT_aThesenLinks[35][0][2][1] =
  "https://www.bpb.de/shop/zeitschriften/apuz/festung-europa-2022/ ";
WOMT_aThesenLinks[35][0][2][2] = "url";
WOMT_aThesen[35][0][0] = "Asylanträge an der EU-Außengrenze";
WOMT_aThesen[35][0][1] =
  "Asylbewerberinnen und -bewerber sollen ihren Antrag vor Überschreiten der EU-Außengrenze stellen müssen und dort auf das Ergebnis warten.";
WOMT_aThesenThema[35] = "0";
WOMT_aThesenParteien[35] = new Array();

WOMT_aThesen[36] = new Array();
WOMT_aThesenLinks[36] = new Array();
WOMT_aThesenVotematch[36] = "0";
WOMT_aThesenVotematchId[36] = "0";
WOMT_aThesen[36][0] = new Array();
WOMT_aThesenLinks[36][0] = new Array();
WOMT_aThesenLinks[36][0][0] = new Array();
WOMT_aThesenLinks[36][0][0][0] =
  "Annegret Bendiek: Europäische Verteidigungspolitik (Dossier: Deutsche Verteidigungspolitik, bpb.de)";
WOMT_aThesenLinks[36][0][0][1] =
  "https://www.bpb.de/themen/militaer/deutsche-verteidigungspolitik/275518/europaeische-verteidigungspolitik/";
WOMT_aThesenLinks[36][0][0][2] = "url";
WOMT_aThesenLinks[36][0][1] = new Array();
WOMT_aThesenLinks[36][0][1][0] =
  "Europäische Verteidigungspolitik (eurotopics.net)";
WOMT_aThesenLinks[36][0][1][1] =
  "https://www.eurotopics.net/de/271948/europaeische-verteidigungspolitik";
WOMT_aThesenLinks[36][0][1][2] = "url";
WOMT_aThesenLinks[36][0][2] = new Array();
WOMT_aThesenLinks[36][0][2][0] =
  "Ulrike Schuler: Wie kann Europa Frieden schaffen und sichern? (Dossier: Europawahlen, bpb.de)";
WOMT_aThesenLinks[36][0][2][1] =
  "https://www.bpb.de/themen/europawahlen/dossier-europawahlen/546239/wie-kann-europa-frieden-schaffen-und-sichern/";
WOMT_aThesenLinks[36][0][2][2] = "url";
WOMT_aThesen[36][0][0] = "EU-Rüstungsprojekte";
WOMT_aThesen[36][0][1] =
  "Die EU soll weiterhin in gemeinsame europäische Rüstungsprojekte investieren.";
WOMT_aThesenThema[36] = "0";
WOMT_aThesenParteien[36] = new Array();

WOMT_aThesen[37] = new Array();
WOMT_aThesenLinks[37] = new Array();
WOMT_aThesenVotematch[37] = "0";
WOMT_aThesenVotematchId[37] = "0";
WOMT_aThesen[37][0] = new Array();
WOMT_aThesenLinks[37][0] = new Array();
WOMT_aThesen[37][0][0] = "Rolle des EU-Parlaments";
WOMT_aThesen[37][0][1] =
  "Das Europäische Parlament soll weiterhin eine zentrale Rolle in der EU spielen.";
WOMT_aThesenThema[37] = "0";
WOMT_aThesenParteien[37] = new Array();

WOMT_aThesenParteien[0][0] = "-1";
WOMT_aThesenParteien[0][1] = "1";
WOMT_aThesenParteien[0][2] = "-1";
WOMT_aThesenParteien[0][3] = "-1";
WOMT_aThesenParteien[0][4] = "1";
WOMT_aThesenParteien[0][5] = "-1";
WOMT_aThesenParteien[0][6] = "-1";
WOMT_aThesenParteien[0][7] = "1";
WOMT_aThesenParteien[0][8] = "1";
WOMT_aThesenParteien[0][9] = "1";
WOMT_aThesenParteien[0][10] = "1";
WOMT_aThesenParteien[0][11] = "1";
WOMT_aThesenParteien[0][12] = "-1";
WOMT_aThesenParteien[0][13] = "1";
WOMT_aThesenParteien[0][14] = "-1";
WOMT_aThesenParteien[0][15] = "-1";
WOMT_aThesenParteien[0][16] = "0";
WOMT_aThesenParteien[0][17] = "-1";
WOMT_aThesenParteien[0][18] = "-1";
WOMT_aThesenParteien[0][19] = "1";
WOMT_aThesenParteien[0][20] = "-1";
WOMT_aThesenParteien[0][21] = "-1";
WOMT_aThesenParteien[0][22] = "-1";
WOMT_aThesenParteien[0][23] = "-1";
WOMT_aThesenParteien[0][24] = "-1";
WOMT_aThesenParteien[0][25] = "-1";
WOMT_aThesenParteien[0][26] = "-1";
WOMT_aThesenParteien[0][27] = "-1";
WOMT_aThesenParteien[0][28] = "-1";
WOMT_aThesenParteien[0][29] = "1";
WOMT_aThesenParteien[0][30] = "0";
WOMT_aThesenParteien[0][31] = "-1";
WOMT_aThesenParteien[0][32] = "-1";
WOMT_aThesenParteien[0][33] = "-1";
WOMT_aThesenParteien[1][0] = "1";
WOMT_aThesenParteien[1][1] = "-1";
WOMT_aThesenParteien[1][2] = "-1";
WOMT_aThesenParteien[1][3] = "1";
WOMT_aThesenParteien[1][4] = "-1";
WOMT_aThesenParteien[1][5] = "1";
WOMT_aThesenParteien[1][6] = "-1";
WOMT_aThesenParteien[1][7] = "1";
WOMT_aThesenParteien[1][8] = "-1";
WOMT_aThesenParteien[1][9] = "-1";
WOMT_aThesenParteien[1][10] = "1";
WOMT_aThesenParteien[1][11] = "-1";
WOMT_aThesenParteien[1][12] = "-1";
WOMT_aThesenParteien[1][13] = "-1";
WOMT_aThesenParteien[1][14] = "1";
WOMT_aThesenParteien[1][15] = "1";
WOMT_aThesenParteien[1][16] = "0";
WOMT_aThesenParteien[1][17] = "-1";
WOMT_aThesenParteien[1][18] = "1";
WOMT_aThesenParteien[1][19] = "1";
WOMT_aThesenParteien[1][20] = "1";
WOMT_aThesenParteien[1][21] = "-1";
WOMT_aThesenParteien[1][22] = "-1";
WOMT_aThesenParteien[1][23] = "1";
WOMT_aThesenParteien[1][24] = "1";
WOMT_aThesenParteien[1][25] = "1";
WOMT_aThesenParteien[1][26] = "1";
WOMT_aThesenParteien[1][27] = "1";
WOMT_aThesenParteien[1][28] = "1";
WOMT_aThesenParteien[1][29] = "-1";
WOMT_aThesenParteien[1][30] = "-1";
WOMT_aThesenParteien[1][31] = "1";
WOMT_aThesenParteien[1][32] = "1";
WOMT_aThesenParteien[1][33] = "-1";
WOMT_aThesenParteien[2][0] = "-1";
WOMT_aThesenParteien[2][1] = "1";
WOMT_aThesenParteien[2][2] = "1";
WOMT_aThesenParteien[2][3] = "-1";
WOMT_aThesenParteien[2][4] = "1";
WOMT_aThesenParteien[2][5] = "1";
WOMT_aThesenParteien[2][6] = "1";
WOMT_aThesenParteien[2][7] = "1";
WOMT_aThesenParteien[2][8] = "1";
WOMT_aThesenParteien[2][9] = "1";
WOMT_aThesenParteien[2][10] = "1";
WOMT_aThesenParteien[2][11] = "1";
WOMT_aThesenParteien[2][12] = "-1";
WOMT_aThesenParteien[2][13] = "1";
WOMT_aThesenParteien[2][14] = "-1";
WOMT_aThesenParteien[2][15] = "1";
WOMT_aThesenParteien[2][16] = "0";
WOMT_aThesenParteien[2][17] = "1";
WOMT_aThesenParteien[2][18] = "-1";
WOMT_aThesenParteien[2][19] = "1";
WOMT_aThesenParteien[2][20] = "1";
WOMT_aThesenParteien[2][21] = "1";
WOMT_aThesenParteien[2][22] = "1";
WOMT_aThesenParteien[2][23] = "1";
WOMT_aThesenParteien[2][24] = "-1";
WOMT_aThesenParteien[2][25] = "-1";
WOMT_aThesenParteien[2][26] = "-1";
WOMT_aThesenParteien[2][27] = "-1";
WOMT_aThesenParteien[2][28] = "1";
WOMT_aThesenParteien[2][29] = "1";
WOMT_aThesenParteien[2][30] = "1";
WOMT_aThesenParteien[2][31] = "-1";
WOMT_aThesenParteien[2][32] = "1";
WOMT_aThesenParteien[2][33] = "1";
WOMT_aThesenParteien[3][0] = "1";
WOMT_aThesenParteien[3][1] = "1";
WOMT_aThesenParteien[3][2] = "1";
WOMT_aThesenParteien[3][3] = "-1";
WOMT_aThesenParteien[3][4] = "-1";
WOMT_aThesenParteien[3][5] = "1";
WOMT_aThesenParteien[3][6] = "0";
WOMT_aThesenParteien[3][7] = "1";
WOMT_aThesenParteien[3][8] = "1";
WOMT_aThesenParteien[3][9] = "0";
WOMT_aThesenParteien[3][10] = "1";
WOMT_aThesenParteien[3][11] = "1";
WOMT_aThesenParteien[3][12] = "1";
WOMT_aThesenParteien[3][13] = "0";
WOMT_aThesenParteien[3][14] = "-1";
WOMT_aThesenParteien[3][15] = "-1";
WOMT_aThesenParteien[3][16] = "0";
WOMT_aThesenParteien[3][17] = "-1";
WOMT_aThesenParteien[3][18] = "1";
WOMT_aThesenParteien[3][19] = "0";
WOMT_aThesenParteien[3][20] = "-1";
WOMT_aThesenParteien[3][21] = "-1";
WOMT_aThesenParteien[3][22] = "-1";
WOMT_aThesenParteien[3][23] = "-1";
WOMT_aThesenParteien[3][24] = "-1";
WOMT_aThesenParteien[3][25] = "-1";
WOMT_aThesenParteien[3][26] = "-1";
WOMT_aThesenParteien[3][27] = "-1";
WOMT_aThesenParteien[3][28] = "-1";
WOMT_aThesenParteien[3][29] = "0";
WOMT_aThesenParteien[3][30] = "0";
WOMT_aThesenParteien[3][31] = "-1";
WOMT_aThesenParteien[3][32] = "1";
WOMT_aThesenParteien[3][33] = "0";
WOMT_aThesenParteien[4][0] = "-1";
WOMT_aThesenParteien[4][1] = "1";
WOMT_aThesenParteien[4][2] = "-1";
WOMT_aThesenParteien[4][3] = "-1";
WOMT_aThesenParteien[4][4] = "1";
WOMT_aThesenParteien[4][5] = "-1";
WOMT_aThesenParteien[4][6] = "1";
WOMT_aThesenParteien[4][7] = "0";
WOMT_aThesenParteien[4][8] = "1";
WOMT_aThesenParteien[4][9] = "1";
WOMT_aThesenParteien[4][10] = "-1";
WOMT_aThesenParteien[4][11] = "1";
WOMT_aThesenParteien[4][12] = "1";
WOMT_aThesenParteien[4][13] = "1";
WOMT_aThesenParteien[4][14] = "1";
WOMT_aThesenParteien[4][15] = "1";
WOMT_aThesenParteien[4][16] = "0";
WOMT_aThesenParteien[4][17] = "1";
WOMT_aThesenParteien[4][18] = "-1";
WOMT_aThesenParteien[4][19] = "-1";
WOMT_aThesenParteien[4][20] = "1";
WOMT_aThesenParteien[4][21] = "1";
WOMT_aThesenParteien[4][22] = "1";
WOMT_aThesenParteien[4][23] = "1";
WOMT_aThesenParteien[4][24] = "1";
WOMT_aThesenParteien[4][25] = "1";
WOMT_aThesenParteien[4][26] = "-1";
WOMT_aThesenParteien[4][27] = "-1";
WOMT_aThesenParteien[4][28] = "1";
WOMT_aThesenParteien[4][29] = "1";
WOMT_aThesenParteien[4][30] = "1";
WOMT_aThesenParteien[4][31] = "-1";
WOMT_aThesenParteien[4][32] = "1";
WOMT_aThesenParteien[4][33] = "1";
WOMT_aThesenParteien[5][0] = "-1";
WOMT_aThesenParteien[5][1] = "-1";
WOMT_aThesenParteien[5][2] = "-1";
WOMT_aThesenParteien[5][3] = "1";
WOMT_aThesenParteien[5][4] = "-1";
WOMT_aThesenParteien[5][5] = "-1";
WOMT_aThesenParteien[5][6] = "-1";
WOMT_aThesenParteien[5][7] = "-1";
WOMT_aThesenParteien[5][8] = "-1";
WOMT_aThesenParteien[5][9] = "-1";
WOMT_aThesenParteien[5][10] = "-1";
WOMT_aThesenParteien[5][11] = "-1";
WOMT_aThesenParteien[5][12] = "-1";
WOMT_aThesenParteien[5][13] = "-1";
WOMT_aThesenParteien[5][14] = "1";
WOMT_aThesenParteien[5][15] = "-1";
WOMT_aThesenParteien[5][16] = "0";
WOMT_aThesenParteien[5][17] = "-1";
WOMT_aThesenParteien[5][18] = "1";
WOMT_aThesenParteien[5][19] = "-1";
WOMT_aThesenParteien[5][20] = "-1";
WOMT_aThesenParteien[5][21] = "0";
WOMT_aThesenParteien[5][22] = "0";
WOMT_aThesenParteien[5][23] = "-1";
WOMT_aThesenParteien[5][24] = "1";
WOMT_aThesenParteien[5][25] = "1";
WOMT_aThesenParteien[5][26] = "-1";
WOMT_aThesenParteien[5][27] = "-1";
WOMT_aThesenParteien[5][28] = "-1";
WOMT_aThesenParteien[5][29] = "-1";
WOMT_aThesenParteien[5][30] = "-1";
WOMT_aThesenParteien[5][31] = "1";
WOMT_aThesenParteien[5][32] = "-1";
WOMT_aThesenParteien[5][33] = "-1";
WOMT_aThesenParteien[6][0] = "-1";
WOMT_aThesenParteien[6][1] = "1";
WOMT_aThesenParteien[6][2] = "1";
WOMT_aThesenParteien[6][3] = "-1";
WOMT_aThesenParteien[6][4] = "1";
WOMT_aThesenParteien[6][5] = "1";
WOMT_aThesenParteien[6][6] = "1";
WOMT_aThesenParteien[6][7] = "1";
WOMT_aThesenParteien[6][8] = "1";
WOMT_aThesenParteien[6][9] = "1";
WOMT_aThesenParteien[6][10] = "0";
WOMT_aThesenParteien[6][11] = "1";
WOMT_aThesenParteien[6][12] = "1";
WOMT_aThesenParteien[6][13] = "1";
WOMT_aThesenParteien[6][14] = "-1";
WOMT_aThesenParteien[6][15] = "-1";
WOMT_aThesenParteien[6][16] = "0";
WOMT_aThesenParteien[6][17] = "-1";
WOMT_aThesenParteien[6][18] = "-1";
WOMT_aThesenParteien[6][19] = "1";
WOMT_aThesenParteien[6][20] = "-1";
WOMT_aThesenParteien[6][21] = "1";
WOMT_aThesenParteien[6][22] = "1";
WOMT_aThesenParteien[6][23] = "1";
WOMT_aThesenParteien[6][24] = "-1";
WOMT_aThesenParteien[6][25] = "-1";
WOMT_aThesenParteien[6][26] = "-1";
WOMT_aThesenParteien[6][27] = "-1";
WOMT_aThesenParteien[6][28] = "-1";
WOMT_aThesenParteien[6][29] = "1";
WOMT_aThesenParteien[6][30] = "1";
WOMT_aThesenParteien[6][31] = "0";
WOMT_aThesenParteien[6][32] = "1";
WOMT_aThesenParteien[6][33] = "1";
WOMT_aThesenParteien[7][0] = "1";
WOMT_aThesenParteien[7][1] = "-1";
WOMT_aThesenParteien[7][2] = "0";
WOMT_aThesenParteien[7][3] = "1";
WOMT_aThesenParteien[7][4] = "-1";
WOMT_aThesenParteien[7][5] = "1";
WOMT_aThesenParteien[7][6] = "-1";
WOMT_aThesenParteien[7][7] = "1";
WOMT_aThesenParteien[7][8] = "-1";
WOMT_aThesenParteien[7][9] = "-1";
WOMT_aThesenParteien[7][10] = "1";
WOMT_aThesenParteien[7][11] = "-1";
WOMT_aThesenParteien[7][12] = "-1";
WOMT_aThesenParteien[7][13] = "-1";
WOMT_aThesenParteien[7][14] = "1";
WOMT_aThesenParteien[7][15] = "-1";
WOMT_aThesenParteien[7][16] = "0";
WOMT_aThesenParteien[7][17] = "1";
WOMT_aThesenParteien[7][18] = "1";
WOMT_aThesenParteien[7][19] = "0";
WOMT_aThesenParteien[7][20] = "-1";
WOMT_aThesenParteien[7][21] = "-1";
WOMT_aThesenParteien[7][22] = "-1";
WOMT_aThesenParteien[7][23] = "-1";
WOMT_aThesenParteien[7][24] = "-1";
WOMT_aThesenParteien[7][25] = "1";
WOMT_aThesenParteien[7][26] = "1";
WOMT_aThesenParteien[7][27] = "1";
WOMT_aThesenParteien[7][28] = "1";
WOMT_aThesenParteien[7][29] = "-1";
WOMT_aThesenParteien[7][30] = "0";
WOMT_aThesenParteien[7][31] = "1";
WOMT_aThesenParteien[7][32] = "0";
WOMT_aThesenParteien[7][33] = "-1";
WOMT_aThesenParteien[8][0] = "-1";
WOMT_aThesenParteien[8][1] = "1";
WOMT_aThesenParteien[8][2] = "-1";
WOMT_aThesenParteien[8][3] = "-1";
WOMT_aThesenParteien[8][4] = "1";
WOMT_aThesenParteien[8][5] = "-1";
WOMT_aThesenParteien[8][6] = "1";
WOMT_aThesenParteien[8][7] = "-1";
WOMT_aThesenParteien[8][8] = "1";
WOMT_aThesenParteien[8][9] = "1";
WOMT_aThesenParteien[8][10] = "-1";
WOMT_aThesenParteien[8][11] = "1";
WOMT_aThesenParteien[8][12] = "1";
WOMT_aThesenParteien[8][13] = "1";
WOMT_aThesenParteien[8][14] = "-1";
WOMT_aThesenParteien[8][15] = "-1";
WOMT_aThesenParteien[8][16] = "0";
WOMT_aThesenParteien[8][17] = "1";
WOMT_aThesenParteien[8][18] = "-1";
WOMT_aThesenParteien[8][19] = "-1";
WOMT_aThesenParteien[8][20] = "-1";
WOMT_aThesenParteien[8][21] = "1";
WOMT_aThesenParteien[8][22] = "1";
WOMT_aThesenParteien[8][23] = "-1";
WOMT_aThesenParteien[8][24] = "-1";
WOMT_aThesenParteien[8][25] = "-1";
WOMT_aThesenParteien[8][26] = "-1";
WOMT_aThesenParteien[8][27] = "-1";
WOMT_aThesenParteien[8][28] = "-1";
WOMT_aThesenParteien[8][29] = "1";
WOMT_aThesenParteien[8][30] = "1";
WOMT_aThesenParteien[8][31] = "-1";
WOMT_aThesenParteien[8][32] = "-1";
WOMT_aThesenParteien[8][33] = "1";
WOMT_aThesenParteien[9][0] = "1";
WOMT_aThesenParteien[9][1] = "1";
WOMT_aThesenParteien[9][2] = "1";
WOMT_aThesenParteien[9][3] = "-1";
WOMT_aThesenParteien[9][4] = "-1";
WOMT_aThesenParteien[9][5] = "1";
WOMT_aThesenParteien[9][6] = "1";
WOMT_aThesenParteien[9][7] = "1";
WOMT_aThesenParteien[9][8] = "1";
WOMT_aThesenParteien[9][9] = "1";
WOMT_aThesenParteien[9][10] = "1";
WOMT_aThesenParteien[9][11] = "1";
WOMT_aThesenParteien[9][12] = "1";
WOMT_aThesenParteien[9][13] = "0";
WOMT_aThesenParteien[9][14] = "-1";
WOMT_aThesenParteien[9][15] = "-1";
WOMT_aThesenParteien[9][16] = "0";
WOMT_aThesenParteien[9][17] = "1";
WOMT_aThesenParteien[9][18] = "-1";
WOMT_aThesenParteien[9][19] = "1";
WOMT_aThesenParteien[9][20] = "0";
WOMT_aThesenParteien[9][21] = "-1";
WOMT_aThesenParteien[9][22] = "-1";
WOMT_aThesenParteien[9][23] = "-1";
WOMT_aThesenParteien[9][24] = "-1";
WOMT_aThesenParteien[9][25] = "-1";
WOMT_aThesenParteien[9][26] = "-1";
WOMT_aThesenParteien[9][27] = "-1";
WOMT_aThesenParteien[9][28] = "1";
WOMT_aThesenParteien[9][29] = "1";
WOMT_aThesenParteien[9][30] = "1";
WOMT_aThesenParteien[9][31] = "-1";
WOMT_aThesenParteien[9][32] = "1";
WOMT_aThesenParteien[9][33] = "1";
WOMT_aThesenParteien[10][0] = "1";
WOMT_aThesenParteien[10][1] = "-1";
WOMT_aThesenParteien[10][2] = "-1";
WOMT_aThesenParteien[10][3] = "1";
WOMT_aThesenParteien[10][4] = "-1";
WOMT_aThesenParteien[10][5] = "1";
WOMT_aThesenParteien[10][6] = "-1";
WOMT_aThesenParteien[10][7] = "-1";
WOMT_aThesenParteien[10][8] = "-1";
WOMT_aThesenParteien[10][9] = "-1";
WOMT_aThesenParteien[10][10] = "0";
WOMT_aThesenParteien[10][11] = "-1";
WOMT_aThesenParteien[10][12] = "-1";
WOMT_aThesenParteien[10][13] = "-1";
WOMT_aThesenParteien[10][14] = "-1";
WOMT_aThesenParteien[10][15] = "0";
WOMT_aThesenParteien[10][16] = "0";
WOMT_aThesenParteien[10][17] = "0";
WOMT_aThesenParteien[10][18] = "-1";
WOMT_aThesenParteien[10][19] = "-1";
WOMT_aThesenParteien[10][20] = "1";
WOMT_aThesenParteien[10][21] = "-1";
WOMT_aThesenParteien[10][22] = "-1";
WOMT_aThesenParteien[10][23] = "-1";
WOMT_aThesenParteien[10][24] = "-1";
WOMT_aThesenParteien[10][25] = "-1";
WOMT_aThesenParteien[10][26] = "1";
WOMT_aThesenParteien[10][27] = "-1";
WOMT_aThesenParteien[10][28] = "-1";
WOMT_aThesenParteien[10][29] = "-1";
WOMT_aThesenParteien[10][30] = "-1";
WOMT_aThesenParteien[10][31] = "1";
WOMT_aThesenParteien[10][32] = "-1";
WOMT_aThesenParteien[10][33] = "-1";
WOMT_aThesenParteien[11][0] = "1";
WOMT_aThesenParteien[11][1] = "1";
WOMT_aThesenParteien[11][2] = "1";
WOMT_aThesenParteien[11][3] = "-1";
WOMT_aThesenParteien[11][4] = "-1";
WOMT_aThesenParteien[11][5] = "1";
WOMT_aThesenParteien[11][6] = "-1";
WOMT_aThesenParteien[11][7] = "1";
WOMT_aThesenParteien[11][8] = "0";
WOMT_aThesenParteien[11][9] = "1";
WOMT_aThesenParteien[11][10] = "1";
WOMT_aThesenParteien[11][11] = "1";
WOMT_aThesenParteien[11][12] = "-1";
WOMT_aThesenParteien[11][13] = "-1";
WOMT_aThesenParteien[11][14] = "-1";
WOMT_aThesenParteien[11][15] = "-1";
WOMT_aThesenParteien[11][16] = "0";
WOMT_aThesenParteien[11][17] = "1";
WOMT_aThesenParteien[11][18] = "-1";
WOMT_aThesenParteien[11][19] = "1";
WOMT_aThesenParteien[11][20] = "-1";
WOMT_aThesenParteien[11][21] = "-1";
WOMT_aThesenParteien[11][22] = "-1";
WOMT_aThesenParteien[11][23] = "-1";
WOMT_aThesenParteien[11][24] = "-1";
WOMT_aThesenParteien[11][25] = "-1";
WOMT_aThesenParteien[11][26] = "1";
WOMT_aThesenParteien[11][27] = "0";
WOMT_aThesenParteien[11][28] = "1";
WOMT_aThesenParteien[11][29] = "1";
WOMT_aThesenParteien[11][30] = "-1";
WOMT_aThesenParteien[11][31] = "-1";
WOMT_aThesenParteien[11][32] = "1";
WOMT_aThesenParteien[11][33] = "1";
WOMT_aThesenParteien[12][0] = "-1";
WOMT_aThesenParteien[12][1] = "1";
WOMT_aThesenParteien[12][2] = "-1";
WOMT_aThesenParteien[12][3] = "-1";
WOMT_aThesenParteien[12][4] = "1";
WOMT_aThesenParteien[12][5] = "-1";
WOMT_aThesenParteien[12][6] = "1";
WOMT_aThesenParteien[12][7] = "1";
WOMT_aThesenParteien[12][8] = "1";
WOMT_aThesenParteien[12][9] = "1";
WOMT_aThesenParteien[12][10] = "-1";
WOMT_aThesenParteien[12][11] = "1";
WOMT_aThesenParteien[12][12] = "1";
WOMT_aThesenParteien[12][13] = "1";
WOMT_aThesenParteien[12][14] = "-1";
WOMT_aThesenParteien[12][15] = "-1";
WOMT_aThesenParteien[12][16] = "0";
WOMT_aThesenParteien[12][17] = "1";
WOMT_aThesenParteien[12][18] = "-1";
WOMT_aThesenParteien[12][19] = "1";
WOMT_aThesenParteien[12][20] = "0";
WOMT_aThesenParteien[12][21] = "1";
WOMT_aThesenParteien[12][22] = "1";
WOMT_aThesenParteien[12][23] = "1";
WOMT_aThesenParteien[12][24] = "-1";
WOMT_aThesenParteien[12][25] = "-1";
WOMT_aThesenParteien[12][26] = "-1";
WOMT_aThesenParteien[12][27] = "1";
WOMT_aThesenParteien[12][28] = "0";
WOMT_aThesenParteien[12][29] = "1";
WOMT_aThesenParteien[12][30] = "1";
WOMT_aThesenParteien[12][31] = "-1";
WOMT_aThesenParteien[12][32] = "0";
WOMT_aThesenParteien[12][33] = "1";
WOMT_aThesenParteien[13][0] = "-1";
WOMT_aThesenParteien[13][1] = "-1";
WOMT_aThesenParteien[13][2] = "-1";
WOMT_aThesenParteien[13][3] = "1";
WOMT_aThesenParteien[13][4] = "-1";
WOMT_aThesenParteien[13][5] = "-1";
WOMT_aThesenParteien[13][6] = "-1";
WOMT_aThesenParteien[13][7] = "-1";
WOMT_aThesenParteien[13][8] = "-1";
WOMT_aThesenParteien[13][9] = "-1";
WOMT_aThesenParteien[13][10] = "0";
WOMT_aThesenParteien[13][11] = "-1";
WOMT_aThesenParteien[13][12] = "-1";
WOMT_aThesenParteien[13][13] = "-1";
WOMT_aThesenParteien[13][14] = "1";
WOMT_aThesenParteien[13][15] = "1";
WOMT_aThesenParteien[13][16] = "0";
WOMT_aThesenParteien[13][17] = "-1";
WOMT_aThesenParteien[13][18] = "1";
WOMT_aThesenParteien[13][19] = "-1";
WOMT_aThesenParteien[13][20] = "1";
WOMT_aThesenParteien[13][21] = "-1";
WOMT_aThesenParteien[13][22] = "-1";
WOMT_aThesenParteien[13][23] = "-1";
WOMT_aThesenParteien[13][24] = "1";
WOMT_aThesenParteien[13][25] = "1";
WOMT_aThesenParteien[13][26] = "0";
WOMT_aThesenParteien[13][27] = "-1";
WOMT_aThesenParteien[13][28] = "-1";
WOMT_aThesenParteien[13][29] = "-1";
WOMT_aThesenParteien[13][30] = "-1";
WOMT_aThesenParteien[13][31] = "1";
WOMT_aThesenParteien[13][32] = "-1";
WOMT_aThesenParteien[13][33] = "-1";
WOMT_aThesenParteien[14][0] = "1";
WOMT_aThesenParteien[14][1] = "-1";
WOMT_aThesenParteien[14][2] = "-1";
WOMT_aThesenParteien[14][3] = "1";
WOMT_aThesenParteien[14][4] = "-1";
WOMT_aThesenParteien[14][5] = "1";
WOMT_aThesenParteien[14][6] = "1";
WOMT_aThesenParteien[14][7] = "1";
WOMT_aThesenParteien[14][8] = "-1";
WOMT_aThesenParteien[14][9] = "1";
WOMT_aThesenParteien[14][10] = "1";
WOMT_aThesenParteien[14][11] = "-1";
WOMT_aThesenParteien[14][12] = "1";
WOMT_aThesenParteien[14][13] = "-1";
WOMT_aThesenParteien[14][14] = "1";
WOMT_aThesenParteien[14][15] = "1";
WOMT_aThesenParteien[14][16] = "0";
WOMT_aThesenParteien[14][17] = "1";
WOMT_aThesenParteien[14][18] = "1";
WOMT_aThesenParteien[14][19] = "1";
WOMT_aThesenParteien[14][20] = "1";
WOMT_aThesenParteien[14][21] = "1";
WOMT_aThesenParteien[14][22] = "0";
WOMT_aThesenParteien[14][23] = "1";
WOMT_aThesenParteien[14][24] = "1";
WOMT_aThesenParteien[14][25] = "1";
WOMT_aThesenParteien[14][26] = "1";
WOMT_aThesenParteien[14][27] = "1";
WOMT_aThesenParteien[14][28] = "1";
WOMT_aThesenParteien[14][29] = "1";
WOMT_aThesenParteien[14][30] = "-1";
WOMT_aThesenParteien[14][31] = "1";
WOMT_aThesenParteien[14][32] = "1";
WOMT_aThesenParteien[14][33] = "1";
WOMT_aThesenParteien[15][0] = "-1";
WOMT_aThesenParteien[15][1] = "1";
WOMT_aThesenParteien[15][2] = "1";
WOMT_aThesenParteien[15][3] = "-1";
WOMT_aThesenParteien[15][4] = "1";
WOMT_aThesenParteien[15][5] = "-1";
WOMT_aThesenParteien[15][6] = "1";
WOMT_aThesenParteien[15][7] = "-1";
WOMT_aThesenParteien[15][8] = "1";
WOMT_aThesenParteien[15][9] = "1";
WOMT_aThesenParteien[15][10] = "1";
WOMT_aThesenParteien[15][11] = "1";
WOMT_aThesenParteien[15][12] = "1";
WOMT_aThesenParteien[15][13] = "1";
WOMT_aThesenParteien[15][14] = "-1";
WOMT_aThesenParteien[15][15] = "-1";
WOMT_aThesenParteien[15][16] = "0";
WOMT_aThesenParteien[15][17] = "1";
WOMT_aThesenParteien[15][18] = "-1";
WOMT_aThesenParteien[15][19] = "1";
WOMT_aThesenParteien[15][20] = "1";
WOMT_aThesenParteien[15][21] = "-1";
WOMT_aThesenParteien[15][22] = "1";
WOMT_aThesenParteien[15][23] = "1";
WOMT_aThesenParteien[15][24] = "-1";
WOMT_aThesenParteien[15][25] = "-1";
WOMT_aThesenParteien[15][26] = "-1";
WOMT_aThesenParteien[15][27] = "1";
WOMT_aThesenParteien[15][28] = "-1";
WOMT_aThesenParteien[15][29] = "1";
WOMT_aThesenParteien[15][30] = "1";
WOMT_aThesenParteien[15][31] = "-1";
WOMT_aThesenParteien[15][32] = "1";
WOMT_aThesenParteien[15][33] = "1";
WOMT_aThesenParteien[16][0] = "-1";
WOMT_aThesenParteien[16][1] = "-1";
WOMT_aThesenParteien[16][2] = "-1";
WOMT_aThesenParteien[16][3] = "1";
WOMT_aThesenParteien[16][4] = "-1";
WOMT_aThesenParteien[16][5] = "-1";
WOMT_aThesenParteien[16][6] = "1";
WOMT_aThesenParteien[16][7] = "-1";
WOMT_aThesenParteien[16][8] = "-1";
WOMT_aThesenParteien[16][9] = "-1";
WOMT_aThesenParteien[16][10] = "-1";
WOMT_aThesenParteien[16][11] = "-1";
WOMT_aThesenParteien[16][12] = "-1";
WOMT_aThesenParteien[16][13] = "-1";
WOMT_aThesenParteien[16][14] = "1";
WOMT_aThesenParteien[16][15] = "0";
WOMT_aThesenParteien[16][16] = "0";
WOMT_aThesenParteien[16][17] = "-1";
WOMT_aThesenParteien[16][18] = "1";
WOMT_aThesenParteien[16][19] = "-1";
WOMT_aThesenParteien[16][20] = "1";
WOMT_aThesenParteien[16][21] = "-1";
WOMT_aThesenParteien[16][22] = "-1";
WOMT_aThesenParteien[16][23] = "-1";
WOMT_aThesenParteien[16][24] = "-1";
WOMT_aThesenParteien[16][25] = "1";
WOMT_aThesenParteien[16][26] = "1";
WOMT_aThesenParteien[16][27] = "1";
WOMT_aThesenParteien[16][28] = "-1";
WOMT_aThesenParteien[16][29] = "-1";
WOMT_aThesenParteien[16][30] = "-1";
WOMT_aThesenParteien[16][31] = "1";
WOMT_aThesenParteien[16][32] = "-1";
WOMT_aThesenParteien[16][33] = "-1";
WOMT_aThesenParteien[17][0] = "0";
WOMT_aThesenParteien[17][1] = "1";
WOMT_aThesenParteien[17][2] = "1";
WOMT_aThesenParteien[17][3] = "-1";
WOMT_aThesenParteien[17][4] = "1";
WOMT_aThesenParteien[17][5] = "-1";
WOMT_aThesenParteien[17][6] = "1";
WOMT_aThesenParteien[17][7] = "1";
WOMT_aThesenParteien[17][8] = "1";
WOMT_aThesenParteien[17][9] = "1";
WOMT_aThesenParteien[17][10] = "0";
WOMT_aThesenParteien[17][11] = "1";
WOMT_aThesenParteien[17][12] = "1";
WOMT_aThesenParteien[17][13] = "1";
WOMT_aThesenParteien[17][14] = "1";
WOMT_aThesenParteien[17][15] = "1";
WOMT_aThesenParteien[17][16] = "0";
WOMT_aThesenParteien[17][17] = "1";
WOMT_aThesenParteien[17][18] = "-1";
WOMT_aThesenParteien[17][19] = "1";
WOMT_aThesenParteien[17][20] = "1";
WOMT_aThesenParteien[17][21] = "1";
WOMT_aThesenParteien[17][22] = "1";
WOMT_aThesenParteien[17][23] = "1";
WOMT_aThesenParteien[17][24] = "-1";
WOMT_aThesenParteien[17][25] = "1";
WOMT_aThesenParteien[17][26] = "1";
WOMT_aThesenParteien[17][27] = "0";
WOMT_aThesenParteien[17][28] = "0";
WOMT_aThesenParteien[17][29] = "1";
WOMT_aThesenParteien[17][30] = "1";
WOMT_aThesenParteien[17][31] = "-1";
WOMT_aThesenParteien[17][32] = "1";
WOMT_aThesenParteien[17][33] = "1";
WOMT_aThesenParteien[18][0] = "1";
WOMT_aThesenParteien[18][1] = "1";
WOMT_aThesenParteien[18][2] = "1";
WOMT_aThesenParteien[18][3] = "-1";
WOMT_aThesenParteien[18][4] = "1";
WOMT_aThesenParteien[18][5] = "1";
WOMT_aThesenParteien[18][6] = "1";
WOMT_aThesenParteien[18][7] = "1";
WOMT_aThesenParteien[18][8] = "1";
WOMT_aThesenParteien[18][9] = "1";
WOMT_aThesenParteien[18][10] = "1";
WOMT_aThesenParteien[18][11] = "1";
WOMT_aThesenParteien[18][12] = "1";
WOMT_aThesenParteien[18][13] = "1";
WOMT_aThesenParteien[18][14] = "-1";
WOMT_aThesenParteien[18][15] = "-1";
WOMT_aThesenParteien[18][16] = "0";
WOMT_aThesenParteien[18][17] = "1";
WOMT_aThesenParteien[18][18] = "-1";
WOMT_aThesenParteien[18][19] = "1";
WOMT_aThesenParteien[18][20] = "1";
WOMT_aThesenParteien[18][21] = "-1";
WOMT_aThesenParteien[18][22] = "0";
WOMT_aThesenParteien[18][23] = "-1";
WOMT_aThesenParteien[18][24] = "1";
WOMT_aThesenParteien[18][25] = "1";
WOMT_aThesenParteien[18][26] = "1";
WOMT_aThesenParteien[18][27] = "1";
WOMT_aThesenParteien[18][28] = "1";
WOMT_aThesenParteien[18][29] = "1";
WOMT_aThesenParteien[18][30] = "0";
WOMT_aThesenParteien[18][31] = "0";
WOMT_aThesenParteien[18][32] = "1";
WOMT_aThesenParteien[18][33] = "1";
WOMT_aThesenParteien[19][0] = "1";
WOMT_aThesenParteien[19][1] = "1";
WOMT_aThesenParteien[19][2] = "1";
WOMT_aThesenParteien[19][3] = "-1";
WOMT_aThesenParteien[19][4] = "-1";
WOMT_aThesenParteien[19][5] = "1";
WOMT_aThesenParteien[19][6] = "0";
WOMT_aThesenParteien[19][7] = "1";
WOMT_aThesenParteien[19][8] = "0";
WOMT_aThesenParteien[19][9] = "1";
WOMT_aThesenParteien[19][10] = "0";
WOMT_aThesenParteien[19][11] = "1";
WOMT_aThesenParteien[19][12] = "1";
WOMT_aThesenParteien[19][13] = "-1";
WOMT_aThesenParteien[19][14] = "-1";
WOMT_aThesenParteien[19][15] = "-1";
WOMT_aThesenParteien[19][16] = "0";
WOMT_aThesenParteien[19][17] = "-1";
WOMT_aThesenParteien[19][18] = "0";
WOMT_aThesenParteien[19][19] = "1";
WOMT_aThesenParteien[19][20] = "-1";
WOMT_aThesenParteien[19][21] = "-1";
WOMT_aThesenParteien[19][22] = "-1";
WOMT_aThesenParteien[19][23] = "-1";
WOMT_aThesenParteien[19][24] = "-1";
WOMT_aThesenParteien[19][25] = "-1";
WOMT_aThesenParteien[19][26] = "0";
WOMT_aThesenParteien[19][27] = "-1";
WOMT_aThesenParteien[19][28] = "-1";
WOMT_aThesenParteien[19][29] = "0";
WOMT_aThesenParteien[19][30] = "0";
WOMT_aThesenParteien[19][31] = "-1";
WOMT_aThesenParteien[19][32] = "1";
WOMT_aThesenParteien[19][33] = "-1";
WOMT_aThesenParteien[20][0] = "-1";
WOMT_aThesenParteien[20][1] = "1";
WOMT_aThesenParteien[20][2] = "1";
WOMT_aThesenParteien[20][3] = "-1";
WOMT_aThesenParteien[20][4] = "1";
WOMT_aThesenParteien[20][5] = "-1";
WOMT_aThesenParteien[20][6] = "1";
WOMT_aThesenParteien[20][7] = "-1";
WOMT_aThesenParteien[20][8] = "1";
WOMT_aThesenParteien[20][9] = "1";
WOMT_aThesenParteien[20][10] = "1";
WOMT_aThesenParteien[20][11] = "1";
WOMT_aThesenParteien[20][12] = "1";
WOMT_aThesenParteien[20][13] = "1";
WOMT_aThesenParteien[20][14] = "0";
WOMT_aThesenParteien[20][15] = "1";
WOMT_aThesenParteien[20][16] = "0";
WOMT_aThesenParteien[20][17] = "1";
WOMT_aThesenParteien[20][18] = "-1";
WOMT_aThesenParteien[20][19] = "1";
WOMT_aThesenParteien[20][20] = "1";
WOMT_aThesenParteien[20][21] = "1";
WOMT_aThesenParteien[20][22] = "1";
WOMT_aThesenParteien[20][23] = "1";
WOMT_aThesenParteien[20][24] = "1";
WOMT_aThesenParteien[20][25] = "1";
WOMT_aThesenParteien[20][26] = "1";
WOMT_aThesenParteien[20][27] = "0";
WOMT_aThesenParteien[20][28] = "1";
WOMT_aThesenParteien[20][29] = "1";
WOMT_aThesenParteien[20][30] = "1";
WOMT_aThesenParteien[20][31] = "-1";
WOMT_aThesenParteien[20][32] = "1";
WOMT_aThesenParteien[20][33] = "1";
WOMT_aThesenParteien[21][0] = "1";
WOMT_aThesenParteien[21][1] = "-1";
WOMT_aThesenParteien[21][2] = "1";
WOMT_aThesenParteien[21][3] = "-1";
WOMT_aThesenParteien[21][4] = "-1";
WOMT_aThesenParteien[21][5] = "-1";
WOMT_aThesenParteien[21][6] = "1";
WOMT_aThesenParteien[21][7] = "1";
WOMT_aThesenParteien[21][8] = "1";
WOMT_aThesenParteien[21][9] = "1";
WOMT_aThesenParteien[21][10] = "0";
WOMT_aThesenParteien[21][11] = "1";
WOMT_aThesenParteien[21][12] = "1";
WOMT_aThesenParteien[21][13] = "-1";
WOMT_aThesenParteien[21][14] = "1";
WOMT_aThesenParteien[21][15] = "1";
WOMT_aThesenParteien[21][16] = "0";
WOMT_aThesenParteien[21][17] = "1";
WOMT_aThesenParteien[21][18] = "1";
WOMT_aThesenParteien[21][19] = "0";
WOMT_aThesenParteien[21][20] = "-1";
WOMT_aThesenParteien[21][21] = "-1";
WOMT_aThesenParteien[21][22] = "-1";
WOMT_aThesenParteien[21][23] = "-1";
WOMT_aThesenParteien[21][24] = "1";
WOMT_aThesenParteien[21][25] = "1";
WOMT_aThesenParteien[21][26] = "1";
WOMT_aThesenParteien[21][27] = "0";
WOMT_aThesenParteien[21][28] = "1";
WOMT_aThesenParteien[21][29] = "-1";
WOMT_aThesenParteien[21][30] = "0";
WOMT_aThesenParteien[21][31] = "-1";
WOMT_aThesenParteien[21][32] = "1";
WOMT_aThesenParteien[21][33] = "1";
WOMT_aThesenParteien[22][0] = "-1";
WOMT_aThesenParteien[22][1] = "1";
WOMT_aThesenParteien[22][2] = "1";
WOMT_aThesenParteien[22][3] = "-1";
WOMT_aThesenParteien[22][4] = "1";
WOMT_aThesenParteien[22][5] = "1";
WOMT_aThesenParteien[22][6] = "1";
WOMT_aThesenParteien[22][7] = "1";
WOMT_aThesenParteien[22][8] = "1";
WOMT_aThesenParteien[22][9] = "0";
WOMT_aThesenParteien[22][10] = "0";
WOMT_aThesenParteien[22][11] = "1";
WOMT_aThesenParteien[22][12] = "1";
WOMT_aThesenParteien[22][13] = "1";
WOMT_aThesenParteien[22][14] = "-1";
WOMT_aThesenParteien[22][15] = "-1";
WOMT_aThesenParteien[22][16] = "0";
WOMT_aThesenParteien[22][17] = "0";
WOMT_aThesenParteien[22][18] = "-1";
WOMT_aThesenParteien[22][19] = "1";
WOMT_aThesenParteien[22][20] = "0";
WOMT_aThesenParteien[22][21] = "1";
WOMT_aThesenParteien[22][22] = "1";
WOMT_aThesenParteien[22][23] = "1";
WOMT_aThesenParteien[22][24] = "-1";
WOMT_aThesenParteien[22][25] = "1";
WOMT_aThesenParteien[22][26] = "-1";
WOMT_aThesenParteien[22][27] = "1";
WOMT_aThesenParteien[22][28] = "1";
WOMT_aThesenParteien[22][29] = "1";
WOMT_aThesenParteien[22][30] = "1";
WOMT_aThesenParteien[22][31] = "0";
WOMT_aThesenParteien[22][32] = "1";
WOMT_aThesenParteien[22][33] = "1";
WOMT_aThesenParteien[23][0] = "1";
WOMT_aThesenParteien[23][1] = "-1";
WOMT_aThesenParteien[23][2] = "-1";
WOMT_aThesenParteien[23][3] = "1";
WOMT_aThesenParteien[23][4] = "-1";
WOMT_aThesenParteien[23][5] = "-1";
WOMT_aThesenParteien[23][6] = "-1";
WOMT_aThesenParteien[23][7] = "-1";
WOMT_aThesenParteien[23][8] = "-1";
WOMT_aThesenParteien[23][9] = "-1";
WOMT_aThesenParteien[23][10] = "-1";
WOMT_aThesenParteien[23][11] = "-1";
WOMT_aThesenParteien[23][12] = "-1";
WOMT_aThesenParteien[23][13] = "-1";
WOMT_aThesenParteien[23][14] = "1";
WOMT_aThesenParteien[23][15] = "0";
WOMT_aThesenParteien[23][16] = "0";
WOMT_aThesenParteien[23][17] = "-1";
WOMT_aThesenParteien[23][18] = "-1";
WOMT_aThesenParteien[23][19] = "-1";
WOMT_aThesenParteien[23][20] = "-1";
WOMT_aThesenParteien[23][21] = "-1";
WOMT_aThesenParteien[23][22] = "-1";
WOMT_aThesenParteien[23][23] = "-1";
WOMT_aThesenParteien[23][24] = "1";
WOMT_aThesenParteien[23][25] = "-1";
WOMT_aThesenParteien[23][26] = "-1";
WOMT_aThesenParteien[23][27] = "-1";
WOMT_aThesenParteien[23][28] = "-1";
WOMT_aThesenParteien[23][29] = "-1";
WOMT_aThesenParteien[23][30] = "-1";
WOMT_aThesenParteien[23][31] = "-1";
WOMT_aThesenParteien[23][32] = "-1";
WOMT_aThesenParteien[23][33] = "-1";
WOMT_aThesenParteien[24][0] = "-1";
WOMT_aThesenParteien[24][1] = "-1";
WOMT_aThesenParteien[24][2] = "-1";
WOMT_aThesenParteien[24][3] = "1";
WOMT_aThesenParteien[24][4] = "1";
WOMT_aThesenParteien[24][5] = "-1";
WOMT_aThesenParteien[24][6] = "1";
WOMT_aThesenParteien[24][7] = "1";
WOMT_aThesenParteien[24][8] = "-1";
WOMT_aThesenParteien[24][9] = "1";
WOMT_aThesenParteien[24][10] = "-1";
WOMT_aThesenParteien[24][11] = "-1";
WOMT_aThesenParteien[24][12] = "-1";
WOMT_aThesenParteien[24][13] = "-1";
WOMT_aThesenParteien[24][14] = "1";
WOMT_aThesenParteien[24][15] = "-1";
WOMT_aThesenParteien[24][16] = "0";
WOMT_aThesenParteien[24][17] = "-1";
WOMT_aThesenParteien[24][18] = "-1";
WOMT_aThesenParteien[24][19] = "-1";
WOMT_aThesenParteien[24][20] = "0";
WOMT_aThesenParteien[24][21] = "-1";
WOMT_aThesenParteien[24][22] = "1";
WOMT_aThesenParteien[24][23] = "1";
WOMT_aThesenParteien[24][24] = "1";
WOMT_aThesenParteien[24][25] = "1";
WOMT_aThesenParteien[24][26] = "1";
WOMT_aThesenParteien[24][27] = "1";
WOMT_aThesenParteien[24][28] = "-1";
WOMT_aThesenParteien[24][29] = "-1";
WOMT_aThesenParteien[24][30] = "0";
WOMT_aThesenParteien[24][31] = "1";
WOMT_aThesenParteien[24][32] = "1";
WOMT_aThesenParteien[24][33] = "-1";
WOMT_aThesenParteien[25][0] = "0";
WOMT_aThesenParteien[25][1] = "-1";
WOMT_aThesenParteien[25][2] = "1";
WOMT_aThesenParteien[25][3] = "-1";
WOMT_aThesenParteien[25][4] = "-1";
WOMT_aThesenParteien[25][5] = "1";
WOMT_aThesenParteien[25][6] = "-1";
WOMT_aThesenParteien[25][7] = "1";
WOMT_aThesenParteien[25][8] = "-1";
WOMT_aThesenParteien[25][9] = "-1";
WOMT_aThesenParteien[25][10] = "0";
WOMT_aThesenParteien[25][11] = "1";
WOMT_aThesenParteien[25][12] = "-1";
WOMT_aThesenParteien[25][13] = "-1";
WOMT_aThesenParteien[25][14] = "-1";
WOMT_aThesenParteien[25][15] = "1";
WOMT_aThesenParteien[25][16] = "0";
WOMT_aThesenParteien[25][17] = "-1";
WOMT_aThesenParteien[25][18] = "-1";
WOMT_aThesenParteien[25][19] = "1";
WOMT_aThesenParteien[25][20] = "0";
WOMT_aThesenParteien[25][21] = "-1";
WOMT_aThesenParteien[25][22] = "-1";
WOMT_aThesenParteien[25][23] = "1";
WOMT_aThesenParteien[25][24] = "-1";
WOMT_aThesenParteien[25][25] = "-1";
WOMT_aThesenParteien[25][26] = "0";
WOMT_aThesenParteien[25][27] = "-1";
WOMT_aThesenParteien[25][28] = "0";
WOMT_aThesenParteien[25][29] = "-1";
WOMT_aThesenParteien[25][30] = "0";
WOMT_aThesenParteien[25][31] = "1";
WOMT_aThesenParteien[25][32] = "-1";
WOMT_aThesenParteien[25][33] = "-1";
WOMT_aThesenParteien[26][0] = "1";
WOMT_aThesenParteien[26][1] = "1";
WOMT_aThesenParteien[26][2] = "1";
WOMT_aThesenParteien[26][3] = "-1";
WOMT_aThesenParteien[26][4] = "1";
WOMT_aThesenParteien[26][5] = "1";
WOMT_aThesenParteien[26][6] = "1";
WOMT_aThesenParteien[26][7] = "0";
WOMT_aThesenParteien[26][8] = "1";
WOMT_aThesenParteien[26][9] = "1";
WOMT_aThesenParteien[26][10] = "0";
WOMT_aThesenParteien[26][11] = "1";
WOMT_aThesenParteien[26][12] = "1";
WOMT_aThesenParteien[26][13] = "1";
WOMT_aThesenParteien[26][14] = "-1";
WOMT_aThesenParteien[26][15] = "0";
WOMT_aThesenParteien[26][16] = "0";
WOMT_aThesenParteien[26][17] = "1";
WOMT_aThesenParteien[26][18] = "0";
WOMT_aThesenParteien[26][19] = "1";
WOMT_aThesenParteien[26][20] = "0";
WOMT_aThesenParteien[26][21] = "1";
WOMT_aThesenParteien[26][22] = "1";
WOMT_aThesenParteien[26][23] = "1";
WOMT_aThesenParteien[26][24] = "-1";
WOMT_aThesenParteien[26][25] = "1";
WOMT_aThesenParteien[26][26] = "-1";
WOMT_aThesenParteien[26][27] = "1";
WOMT_aThesenParteien[26][28] = "1";
WOMT_aThesenParteien[26][29] = "1";
WOMT_aThesenParteien[26][30] = "1";
WOMT_aThesenParteien[26][31] = "-1";
WOMT_aThesenParteien[26][32] = "1";
WOMT_aThesenParteien[26][33] = "1";
WOMT_aThesenParteien[27][0] = "-1";
WOMT_aThesenParteien[27][1] = "0";
WOMT_aThesenParteien[27][2] = "1";
WOMT_aThesenParteien[27][3] = "0";
WOMT_aThesenParteien[27][4] = "1";
WOMT_aThesenParteien[27][5] = "0";
WOMT_aThesenParteien[27][6] = "1";
WOMT_aThesenParteien[27][7] = "-1";
WOMT_aThesenParteien[27][8] = "1";
WOMT_aThesenParteien[27][9] = "1";
WOMT_aThesenParteien[27][10] = "-1";
WOMT_aThesenParteien[27][11] = "1";
WOMT_aThesenParteien[27][12] = "1";
WOMT_aThesenParteien[27][13] = "1";
WOMT_aThesenParteien[27][14] = "-1";
WOMT_aThesenParteien[27][15] = "1";
WOMT_aThesenParteien[27][16] = "0";
WOMT_aThesenParteien[27][17] = "1";
WOMT_aThesenParteien[27][18] = "-1";
WOMT_aThesenParteien[27][19] = "0";
WOMT_aThesenParteien[27][20] = "-1";
WOMT_aThesenParteien[27][21] = "1";
WOMT_aThesenParteien[27][22] = "0";
WOMT_aThesenParteien[27][23] = "1";
WOMT_aThesenParteien[27][24] = "-1";
WOMT_aThesenParteien[27][25] = "1";
WOMT_aThesenParteien[27][26] = "0";
WOMT_aThesenParteien[27][27] = "0";
WOMT_aThesenParteien[27][28] = "-1";
WOMT_aThesenParteien[27][29] = "0";
WOMT_aThesenParteien[27][30] = "0";
WOMT_aThesenParteien[27][31] = "-1";
WOMT_aThesenParteien[27][32] = "0";
WOMT_aThesenParteien[27][33] = "-1";
WOMT_aThesenParteien[28][0] = "-1";
WOMT_aThesenParteien[28][1] = "-1";
WOMT_aThesenParteien[28][2] = "-1";
WOMT_aThesenParteien[28][3] = "1";
WOMT_aThesenParteien[28][4] = "-1";
WOMT_aThesenParteien[28][5] = "-1";
WOMT_aThesenParteien[28][6] = "-1";
WOMT_aThesenParteien[28][7] = "-1";
WOMT_aThesenParteien[28][8] = "-1";
WOMT_aThesenParteien[28][9] = "-1";
WOMT_aThesenParteien[28][10] = "0";
WOMT_aThesenParteien[28][11] = "-1";
WOMT_aThesenParteien[28][12] = "-1";
WOMT_aThesenParteien[28][13] = "0";
WOMT_aThesenParteien[28][14] = "1";
WOMT_aThesenParteien[28][15] = "1";
WOMT_aThesenParteien[28][16] = "0";
WOMT_aThesenParteien[28][17] = "1";
WOMT_aThesenParteien[28][18] = "-1";
WOMT_aThesenParteien[28][19] = "-1";
WOMT_aThesenParteien[28][20] = "1";
WOMT_aThesenParteien[28][21] = "1";
WOMT_aThesenParteien[28][22] = "1";
WOMT_aThesenParteien[28][23] = "1";
WOMT_aThesenParteien[28][24] = "1";
WOMT_aThesenParteien[28][25] = "1";
WOMT_aThesenParteien[28][26] = "0";
WOMT_aThesenParteien[28][27] = "1";
WOMT_aThesenParteien[28][28] = "1";
WOMT_aThesenParteien[28][29] = "-1";
WOMT_aThesenParteien[28][30] = "-1";
WOMT_aThesenParteien[28][31] = "1";
WOMT_aThesenParteien[28][32] = "-1";
WOMT_aThesenParteien[28][33] = "-1";
WOMT_aThesenParteien[29][0] = "1";
WOMT_aThesenParteien[29][1] = "1";
WOMT_aThesenParteien[29][2] = "1";
WOMT_aThesenParteien[29][3] = "0";
WOMT_aThesenParteien[29][4] = "1";
WOMT_aThesenParteien[29][5] = "1";
WOMT_aThesenParteien[29][6] = "1";
WOMT_aThesenParteien[29][7] = "1";
WOMT_aThesenParteien[29][8] = "1";
WOMT_aThesenParteien[29][9] = "1";
WOMT_aThesenParteien[29][10] = "1";
WOMT_aThesenParteien[29][11] = "1";
WOMT_aThesenParteien[29][12] = "1";
WOMT_aThesenParteien[29][13] = "1";
WOMT_aThesenParteien[29][14] = "0";
WOMT_aThesenParteien[29][15] = "-1";
WOMT_aThesenParteien[29][16] = "0";
WOMT_aThesenParteien[29][17] = "1";
WOMT_aThesenParteien[29][18] = "-1";
WOMT_aThesenParteien[29][19] = "1";
WOMT_aThesenParteien[29][20] = "1";
WOMT_aThesenParteien[29][21] = "1";
WOMT_aThesenParteien[29][22] = "1";
WOMT_aThesenParteien[29][23] = "1";
WOMT_aThesenParteien[29][24] = "1";
WOMT_aThesenParteien[29][25] = "1";
WOMT_aThesenParteien[29][26] = "1";
WOMT_aThesenParteien[29][27] = "1";
WOMT_aThesenParteien[29][28] = "1";
WOMT_aThesenParteien[29][29] = "1";
WOMT_aThesenParteien[29][30] = "1";
WOMT_aThesenParteien[29][31] = "-1";
WOMT_aThesenParteien[29][32] = "1";
WOMT_aThesenParteien[29][33] = "1";
WOMT_aThesenParteien[30][0] = "1";
WOMT_aThesenParteien[30][1] = "-1";
WOMT_aThesenParteien[30][2] = "-1";
WOMT_aThesenParteien[30][3] = "1";
WOMT_aThesenParteien[30][4] = "-1";
WOMT_aThesenParteien[30][5] = "1";
WOMT_aThesenParteien[30][6] = "-1";
WOMT_aThesenParteien[30][7] = "-1";
WOMT_aThesenParteien[30][8] = "-1";
WOMT_aThesenParteien[30][9] = "-1";
WOMT_aThesenParteien[30][10] = "0";
WOMT_aThesenParteien[30][11] = "-1";
WOMT_aThesenParteien[30][12] = "-1";
WOMT_aThesenParteien[30][13] = "-1";
WOMT_aThesenParteien[30][14] = "1";
WOMT_aThesenParteien[30][15] = "1";
WOMT_aThesenParteien[30][16] = "0";
WOMT_aThesenParteien[30][17] = "-1";
WOMT_aThesenParteien[30][18] = "1";
WOMT_aThesenParteien[30][19] = "1";
WOMT_aThesenParteien[30][20] = "0";
WOMT_aThesenParteien[30][21] = "-1";
WOMT_aThesenParteien[30][22] = "-1";
WOMT_aThesenParteien[30][23] = "-1";
WOMT_aThesenParteien[30][24] = "1";
WOMT_aThesenParteien[30][25] = "1";
WOMT_aThesenParteien[30][26] = "1";
WOMT_aThesenParteien[30][27] = "0";
WOMT_aThesenParteien[30][28] = "1";
WOMT_aThesenParteien[30][29] = "-1";
WOMT_aThesenParteien[30][30] = "-1";
WOMT_aThesenParteien[30][31] = "1";
WOMT_aThesenParteien[30][32] = "-1";
WOMT_aThesenParteien[30][33] = "-1";
WOMT_aThesenParteien[31][0] = "1";
WOMT_aThesenParteien[31][1] = "1";
WOMT_aThesenParteien[31][2] = "1";
WOMT_aThesenParteien[31][3] = "-1";
WOMT_aThesenParteien[31][4] = "1";
WOMT_aThesenParteien[31][5] = "1";
WOMT_aThesenParteien[31][6] = "1";
WOMT_aThesenParteien[31][7] = "1";
WOMT_aThesenParteien[31][8] = "1";
WOMT_aThesenParteien[31][9] = "0";
WOMT_aThesenParteien[31][10] = "0";
WOMT_aThesenParteien[31][11] = "1";
WOMT_aThesenParteien[31][12] = "1";
WOMT_aThesenParteien[31][13] = "1";
WOMT_aThesenParteien[31][14] = "-1";
WOMT_aThesenParteien[31][15] = "1";
WOMT_aThesenParteien[31][16] = "0";
WOMT_aThesenParteien[31][17] = "1";
WOMT_aThesenParteien[31][18] = "-1";
WOMT_aThesenParteien[31][19] = "1";
WOMT_aThesenParteien[31][20] = "0";
WOMT_aThesenParteien[31][21] = "1";
WOMT_aThesenParteien[31][22] = "1";
WOMT_aThesenParteien[31][23] = "-1";
WOMT_aThesenParteien[31][24] = "-1";
WOMT_aThesenParteien[31][25] = "1";
WOMT_aThesenParteien[31][26] = "1";
WOMT_aThesenParteien[31][27] = "0";
WOMT_aThesenParteien[31][28] = "1";
WOMT_aThesenParteien[31][29] = "1";
WOMT_aThesenParteien[31][30] = "1";
WOMT_aThesenParteien[31][31] = "1";
WOMT_aThesenParteien[31][32] = "1";
WOMT_aThesenParteien[31][33] = "1";
WOMT_aThesenParteien[32][0] = "1";
WOMT_aThesenParteien[32][1] = "1";
WOMT_aThesenParteien[32][2] = "1";
WOMT_aThesenParteien[32][3] = "1";
WOMT_aThesenParteien[32][4] = "1";
WOMT_aThesenParteien[32][5] = "1";
WOMT_aThesenParteien[32][6] = "1";
WOMT_aThesenParteien[32][7] = "1";
WOMT_aThesenParteien[32][8] = "1";
WOMT_aThesenParteien[32][9] = "1";
WOMT_aThesenParteien[32][10] = "1";
WOMT_aThesenParteien[32][11] = "1";
WOMT_aThesenParteien[32][12] = "1";
WOMT_aThesenParteien[32][13] = "1";
WOMT_aThesenParteien[32][14] = "1";
WOMT_aThesenParteien[32][15] = "1";
WOMT_aThesenParteien[32][16] = "0";
WOMT_aThesenParteien[32][17] = "1";
WOMT_aThesenParteien[32][18] = "1";
WOMT_aThesenParteien[32][19] = "1";
WOMT_aThesenParteien[32][20] = "1";
WOMT_aThesenParteien[32][21] = "-1";
WOMT_aThesenParteien[32][22] = "-1";
WOMT_aThesenParteien[32][23] = "-1";
WOMT_aThesenParteien[32][24] = "1";
WOMT_aThesenParteien[32][25] = "1";
WOMT_aThesenParteien[32][26] = "1";
WOMT_aThesenParteien[32][27] = "1";
WOMT_aThesenParteien[32][28] = "1";
WOMT_aThesenParteien[32][29] = "1";
WOMT_aThesenParteien[32][30] = "1";
WOMT_aThesenParteien[32][31] = "-1";
WOMT_aThesenParteien[32][32] = "1";
WOMT_aThesenParteien[32][33] = "1";
WOMT_aThesenParteien[33][0] = "-1";
WOMT_aThesenParteien[33][1] = "-1";
WOMT_aThesenParteien[33][2] = "-1";
WOMT_aThesenParteien[33][3] = "1";
WOMT_aThesenParteien[33][4] = "1";
WOMT_aThesenParteien[33][5] = "-1";
WOMT_aThesenParteien[33][6] = "1";
WOMT_aThesenParteien[33][7] = "-1";
WOMT_aThesenParteien[33][8] = "1";
WOMT_aThesenParteien[33][9] = "1";
WOMT_aThesenParteien[33][10] = "1";
WOMT_aThesenParteien[33][11] = "1";
WOMT_aThesenParteien[33][12] = "1";
WOMT_aThesenParteien[33][13] = "1";
WOMT_aThesenParteien[33][14] = "1";
WOMT_aThesenParteien[33][15] = "1";
WOMT_aThesenParteien[33][16] = "0";
WOMT_aThesenParteien[33][17] = "1";
WOMT_aThesenParteien[33][18] = "-1";
WOMT_aThesenParteien[33][19] = "0";
WOMT_aThesenParteien[33][20] = "1";
WOMT_aThesenParteien[33][21] = "-1";
WOMT_aThesenParteien[33][22] = "0";
WOMT_aThesenParteien[33][23] = "1";
WOMT_aThesenParteien[33][24] = "1";
WOMT_aThesenParteien[33][25] = "1";
WOMT_aThesenParteien[33][26] = "1";
WOMT_aThesenParteien[33][27] = "0";
WOMT_aThesenParteien[33][28] = "-1";
WOMT_aThesenParteien[33][29] = "-1";
WOMT_aThesenParteien[33][30] = "0";
WOMT_aThesenParteien[33][31] = "1";
WOMT_aThesenParteien[33][32] = "1";
WOMT_aThesenParteien[33][33] = "-1";
WOMT_aThesenParteien[34][0] = "1";
WOMT_aThesenParteien[34][1] = "1";
WOMT_aThesenParteien[34][2] = "1";
WOMT_aThesenParteien[34][3] = "-1";
WOMT_aThesenParteien[34][4] = "1";
WOMT_aThesenParteien[34][5] = "0";
WOMT_aThesenParteien[34][6] = "1";
WOMT_aThesenParteien[34][7] = "1";
WOMT_aThesenParteien[34][8] = "1";
WOMT_aThesenParteien[34][9] = "1";
WOMT_aThesenParteien[34][10] = "-1";
WOMT_aThesenParteien[34][11] = "1";
WOMT_aThesenParteien[34][12] = "1";
WOMT_aThesenParteien[34][13] = "1";
WOMT_aThesenParteien[34][14] = "-1";
WOMT_aThesenParteien[34][15] = "-1";
WOMT_aThesenParteien[34][16] = "0";
WOMT_aThesenParteien[34][17] = "1";
WOMT_aThesenParteien[34][18] = "-1";
WOMT_aThesenParteien[34][19] = "1";
WOMT_aThesenParteien[34][20] = "-1";
WOMT_aThesenParteien[34][21] = "1";
WOMT_aThesenParteien[34][22] = "1";
WOMT_aThesenParteien[34][23] = "1";
WOMT_aThesenParteien[34][24] = "-1";
WOMT_aThesenParteien[34][25] = "-1";
WOMT_aThesenParteien[34][26] = "-1";
WOMT_aThesenParteien[34][27] = "-1";
WOMT_aThesenParteien[34][28] = "-1";
WOMT_aThesenParteien[34][29] = "1";
WOMT_aThesenParteien[34][30] = "1";
WOMT_aThesenParteien[34][31] = "-1";
WOMT_aThesenParteien[34][32] = "1";
WOMT_aThesenParteien[34][33] = "1";
WOMT_aThesenParteien[35][0] = "1";
WOMT_aThesenParteien[35][1] = "-1";
WOMT_aThesenParteien[35][2] = "1";
WOMT_aThesenParteien[35][3] = "1";
WOMT_aThesenParteien[35][4] = "-1";
WOMT_aThesenParteien[35][5] = "1";
WOMT_aThesenParteien[35][6] = "-1";
WOMT_aThesenParteien[35][7] = "1";
WOMT_aThesenParteien[35][8] = "-1";
WOMT_aThesenParteien[35][9] = "0";
WOMT_aThesenParteien[35][10] = "1";
WOMT_aThesenParteien[35][11] = "-1";
WOMT_aThesenParteien[35][12] = "-1";
WOMT_aThesenParteien[35][13] = "-1";
WOMT_aThesenParteien[35][14] = "1";
WOMT_aThesenParteien[35][15] = "1";
WOMT_aThesenParteien[35][16] = "0";
WOMT_aThesenParteien[35][17] = "-1";
WOMT_aThesenParteien[35][18] = "1";
WOMT_aThesenParteien[35][19] = "-1";
WOMT_aThesenParteien[35][20] = "1";
WOMT_aThesenParteien[35][21] = "-1";
WOMT_aThesenParteien[35][22] = "-1";
WOMT_aThesenParteien[35][23] = "-1";
WOMT_aThesenParteien[35][24] = "1";
WOMT_aThesenParteien[35][25] = "1";
WOMT_aThesenParteien[35][26] = "1";
WOMT_aThesenParteien[35][27] = "1";
WOMT_aThesenParteien[35][28] = "-1";
WOMT_aThesenParteien[35][29] = "-1";
WOMT_aThesenParteien[35][30] = "-1";
WOMT_aThesenParteien[35][31] = "0";
WOMT_aThesenParteien[35][32] = "1";
WOMT_aThesenParteien[35][33] = "-1";
WOMT_aThesenParteien[36][0] = "1";
WOMT_aThesenParteien[36][1] = "1";
WOMT_aThesenParteien[36][2] = "1";
WOMT_aThesenParteien[36][3] = "-1";
WOMT_aThesenParteien[36][4] = "-1";
WOMT_aThesenParteien[36][5] = "1";
WOMT_aThesenParteien[36][6] = "-1";
WOMT_aThesenParteien[36][7] = "1";
WOMT_aThesenParteien[36][8] = "1";
WOMT_aThesenParteien[36][9] = "1";
WOMT_aThesenParteien[36][10] = "1";
WOMT_aThesenParteien[36][11] = "1";
WOMT_aThesenParteien[36][12] = "1";
WOMT_aThesenParteien[36][13] = "-1";
WOMT_aThesenParteien[36][14] = "1";
WOMT_aThesenParteien[36][15] = "-1";
WOMT_aThesenParteien[36][16] = "0";
WOMT_aThesenParteien[36][17] = "-1";
WOMT_aThesenParteien[36][18] = "1";
WOMT_aThesenParteien[36][19] = "1";
WOMT_aThesenParteien[36][20] = "-1";
WOMT_aThesenParteien[36][21] = "-1";
WOMT_aThesenParteien[36][22] = "-1";
WOMT_aThesenParteien[36][23] = "-1";
WOMT_aThesenParteien[36][24] = "-1";
WOMT_aThesenParteien[36][25] = "-1";
WOMT_aThesenParteien[36][26] = "1";
WOMT_aThesenParteien[36][27] = "-1";
WOMT_aThesenParteien[36][28] = "1";
WOMT_aThesenParteien[36][29] = "-1";
WOMT_aThesenParteien[36][30] = "0";
WOMT_aThesenParteien[36][31] = "-1";
WOMT_aThesenParteien[36][32] = "1";
WOMT_aThesenParteien[36][33] = "1";
WOMT_aThesenParteien[37][0] = "1";
WOMT_aThesenParteien[37][1] = "1";
WOMT_aThesenParteien[37][2] = "1";
WOMT_aThesenParteien[37][3] = "-1";
WOMT_aThesenParteien[37][4] = "1";
WOMT_aThesenParteien[37][5] = "1";
WOMT_aThesenParteien[37][6] = "1";
WOMT_aThesenParteien[37][7] = "1";
WOMT_aThesenParteien[37][8] = "1";
WOMT_aThesenParteien[37][9] = "1";
WOMT_aThesenParteien[37][10] = "1";
WOMT_aThesenParteien[37][11] = "1";
WOMT_aThesenParteien[37][12] = "1";
WOMT_aThesenParteien[37][13] = "1";
WOMT_aThesenParteien[37][14] = "1";
WOMT_aThesenParteien[37][15] = "0";
WOMT_aThesenParteien[37][16] = "0";
WOMT_aThesenParteien[37][17] = "1";
WOMT_aThesenParteien[37][18] = "1";
WOMT_aThesenParteien[37][19] = "1";
WOMT_aThesenParteien[37][20] = "0";
WOMT_aThesenParteien[37][21] = "0";
WOMT_aThesenParteien[37][22] = "0";
WOMT_aThesenParteien[37][23] = "1";
WOMT_aThesenParteien[37][24] = "1";
WOMT_aThesenParteien[37][25] = "-1";
WOMT_aThesenParteien[37][26] = "1";
WOMT_aThesenParteien[37][27] = "1";
WOMT_aThesenParteien[37][28] = "1";
WOMT_aThesenParteien[37][29] = "1";
WOMT_aThesenParteien[37][30] = "1";
WOMT_aThesenParteien[37][31] = "1";
WOMT_aThesenParteien[37][32] = "1";
WOMT_aThesenParteien[37][33] = "1";
WOMT_aParteienURL[0] = "";
WOMT_aParteiFix[0] = 1;
WOMT_aParteienLogos[0] = new Array();
WOMT_aParteienLogos[0][0] = "images/parteien_logo_39509.png";
WOMT_aParteienLogos[0][1] = "140";
WOMT_aParteienLogos[0][2] = "140";
WOMT_aParteienChecksum[0] = new Array();
WOMT_aParteienChecksum[0][0] =
  "038-020-002-016#fc82f8e4845e0a17ed6844fbfbd8825c#-1+1-1+1-1-1-1+1-1+1+1+1-1-1+1-1-1+0+1+1-1+1-1+1-1+0+1-1-1+1+1+1+1-1+1+1+1+1";
WOMT_aParteienChecksum[0][1] =
  "038-020-002-016#fc82f8e4845e0a17ed6844fbfbd8825c#-1+1-1+1-1-1-1+1-1+1+1+1-1-1+1-1-1+0+1+1-1+1-1+1-1+0+1-1-1+1+1+1+1-1+1+1+1+1";
WOMT_aParteien[0] = new Array();
WOMT_aParteien[0][0] = new Array();
WOMT_aParteien[0][0][0] =
  "Christlich Demokratische Union Deutschlands / Christlich-Soziale Union in Bayern e.V.";
WOMT_aParteien[0][0][1] = "CDU / CSU";
WOMT_aParteienURL[1] = "";
WOMT_aParteiFix[1] = 1;
WOMT_aParteienLogos[1] = new Array();
WOMT_aParteienLogos[1][0] = "images/parteien_logo_39513.png";
WOMT_aParteienLogos[1][1] = "140";
WOMT_aParteienLogos[1][2] = "140";
WOMT_aParteienChecksum[1] = new Array();
WOMT_aParteienChecksum[1][0] =
  "038-022-001-015#c01cedadffdfdb939e58171ae8e92533#+1-1+1+1+1-1+1-1+1+1-1+1+1-1-1+1-1+1+1+1+1-1+1-1-1-1+1+0-1+1-1+1+1-1+1-1+1+1";
WOMT_aParteienChecksum[1][1] =
  "038-022-001-015#c01cedadffdfdb939e58171ae8e92533#+1-1+1+1+1-1+1-1+1+1-1+1+1-1-1+1-1+1+1+1+1-1+1-1-1-1+1+0-1+1-1+1+1-1+1-1+1+1";
WOMT_aParteien[1] = new Array();
WOMT_aParteien[1][0] = new Array();
WOMT_aParteien[1][0][0] = "BÜNDNIS 90/DIE GRÜNEN";
WOMT_aParteien[1][0][1] = "GRÜNE";
WOMT_aParteienURL[2] = "";
WOMT_aParteiFix[2] = 1;
WOMT_aParteienLogos[2] = new Array();
WOMT_aParteienLogos[2][0] = "images/parteien_logo_39515.png";
WOMT_aParteienLogos[2][1] = "140";
WOMT_aParteienLogos[2][2] = "140";
WOMT_aParteienChecksum[2] = new Array();
WOMT_aParteienChecksum[2][0] =
  "038-022-001-015#c3b659b44c5da60cf826727167f5e96a#-1-1+1+1-1-1+1+0-1+1-1+1-1-1-1+1-1+1+1+1+1+1+1-1-1+1+1+1-1+1-1+1+1-1+1+1+1+1";
WOMT_aParteienChecksum[2][1] =
  "038-022-001-015#c3b659b44c5da60cf826727167f5e96a#-1-1+1+1-1-1+1+0-1+1-1+1-1-1-1+1-1+1+1+1+1+1+1-1-1+1+1+1-1+1-1+1+1-1+1+1+1+1";
WOMT_aParteien[2] = new Array();
WOMT_aParteien[2][0] = new Array();
WOMT_aParteien[2][0][0] = "Sozialdemokratische Partei Deutschlands";
WOMT_aParteien[2][0][1] = "SPD";
WOMT_aParteienURL[3] = "";
WOMT_aParteiFix[3] = 1;
WOMT_aParteienLogos[3] = new Array();
WOMT_aParteienLogos[3][0] = "images/parteien_logo_39517.png";
WOMT_aParteienLogos[3][1] = "140";
WOMT_aParteienLogos[3][2] = "140";
WOMT_aParteienChecksum[3] = new Array();
WOMT_aParteienChecksum[3][0] =
  "038-014-002-022#ef70abee21c726fd1df2109df642c8c7#-1+1-1-1-1+1-1+1-1-1+1-1-1+1+1-1+1-1-1-1-1-1-1+1+1-1-1+0+1+0+1-1+1+1-1+1-1-1";
WOMT_aParteienChecksum[3][1] =
  "038-014-002-022#ef70abee21c726fd1df2109df642c8c7#-1+1-1-1-1+1-1+1-1-1+1-1-1+1+1-1+1-1-1-1-1-1-1+1+1-1-1+0+1+0+1-1+1+1-1+1-1-1";
WOMT_aParteien[3] = new Array();
WOMT_aParteien[3][0] = new Array();
WOMT_aParteien[3][0][0] = "Alternative für Deutschland";
WOMT_aParteien[3][0][1] = "AfD";
WOMT_aParteienURL[4] = "";
WOMT_aParteiFix[4] = 1;
WOMT_aParteienLogos[4] = new Array();
WOMT_aParteienLogos[4][0] = "images/parteien_logo_39519.png";
WOMT_aParteienLogos[4][1] = "140";
WOMT_aParteienLogos[4][2] = "140";
WOMT_aParteienChecksum[4] = new Array();
WOMT_aParteienChecksum[4][0] =
  "038-020-000-018#2157fa320dcb6832bfb39b80d4286713#+1-1+1-1+1-1+1-1+1-1-1-1+1-1-1+1-1+1+1-1+1-1+1-1+1-1+1+1-1+1-1+1+1+1+1-1-1+1";
WOMT_aParteienChecksum[4][1] =
  "038-020-000-018#2157fa320dcb6832bfb39b80d4286713#+1-1+1-1+1-1+1-1+1-1-1-1+1-1-1+1-1+1+1-1+1-1+1-1+1-1+1+1-1+1-1+1+1+1+1-1-1+1";
WOMT_aParteien[4] = new Array();
WOMT_aParteien[4][0] = new Array();
WOMT_aParteien[4][0][0] = "DIE LINKE";
WOMT_aParteien[4][0][1] = "DIE LINKE";
WOMT_aParteienURL[5] = "";
WOMT_aParteiFix[5] = 1;
WOMT_aParteienLogos[5] = new Array();
WOMT_aParteienLogos[5][0] = "images/parteien_logo_39521.png";
WOMT_aParteienLogos[5][1] = "140";
WOMT_aParteienLogos[5][2] = "140";
WOMT_aParteienChecksum[5] = new Array();
WOMT_aParteienChecksum[5][0] =
  "038-021-002-015#7ea378e3b354e4a342355fd30be743b0#-1+1+1+1-1-1+1+1-1+1+1+1-1-1+1-1-1-1+1+1-1-1+1-1-1+1+1+0-1+1+1+1+1-1+0+1+1+1";
WOMT_aParteienChecksum[5][1] =
  "038-021-002-015#7ea378e3b354e4a342355fd30be743b0#-1+1+1+1-1-1+1+1-1+1+1+1-1-1+1-1-1-1+1+1-1-1+1-1-1+1+1+0-1+1+1+1+1-1+0+1+1+1";
WOMT_aParteien[5] = new Array();
WOMT_aParteien[5][0] = new Array();
WOMT_aParteien[5][0][0] = "Freie Demokratische Partei";
WOMT_aParteien[5][0][1] = "FDP";
WOMT_aParteienURL[6] = "";
WOMT_aParteiFix[6] = 1;
WOMT_aParteienLogos[6] = new Array();
WOMT_aParteienLogos[6][0] = "images/parteien_logo_39523.png";
WOMT_aParteienLogos[6][1] = "140";
WOMT_aParteienLogos[6][2] = "140";
WOMT_aParteienChecksum[6] = new Array();
WOMT_aParteienChecksum[6][0] =
  "038-023-002-013#6f705ab389208b06b3f13edc71a93378#-1-1+1+0+1-1+1-1+1+1-1-1+1-1+1+1+1+1+1+0+1+1+1-1+1-1+1+1-1+1-1+1+1+1+1-1-1+1";
WOMT_aParteienChecksum[6][1] =
  "038-023-002-013#6f705ab389208b06b3f13edc71a93378#-1-1+1+0+1-1+1-1+1+1-1-1+1-1+1+1+1+1+1+0+1+1+1-1+1-1+1+1-1+1-1+1+1+1+1-1-1+1";
WOMT_aParteien[6] = new Array();
WOMT_aParteien[6][0] = new Array();
WOMT_aParteien[6][0][0] =
  "Partei für Arbeit, Rechtsstaat, Tierschutz, Elitenförderung und basisdemokratische Initiative";
WOMT_aParteien[6][0][1] = "Die PARTEI";
WOMT_aParteienURL[7] = "";
WOMT_aParteiFix[7] = 1;
WOMT_aParteienLogos[7] = new Array();
WOMT_aParteienLogos[7][0] = "images/parteien_logo_39525.png";
WOMT_aParteienLogos[7][1] = "140";
WOMT_aParteienLogos[7][2] = "140";
WOMT_aParteienChecksum[7] = new Array();
WOMT_aParteienChecksum[7][0] =
  "038-024-002-012#85f28d1cc5f5e19b89422b5220a4cb43#+1+1+1+1+0-1+1+1-1+1-1+1+1-1+1-1-1+1+1+1-1+1+1-1+1+1+0-1-1+1-1+1+1-1+1+1+1+1";
WOMT_aParteienChecksum[7][1] =
  "038-024-002-012#85f28d1cc5f5e19b89422b5220a4cb43#+1+1+1+1+0-1+1+1-1+1-1+1+1-1+1-1-1+1+1+1-1+1+1-1+1+1+0-1-1+1-1+1+1-1+1+1+1+1";
WOMT_aParteien[7] = new Array();
WOMT_aParteien[7][0] = new Array();
WOMT_aParteien[7][0][0] = "FREIE WÄHLER";
WOMT_aParteien[7][0][1] = "FREIE WÄHLER";
WOMT_aParteienURL[8] = "";
WOMT_aParteiFix[8] = 1;
WOMT_aParteienLogos[8] = new Array();
WOMT_aParteienLogos[8][0] = "images/parteien_logo_39527.png";
WOMT_aParteienLogos[8][1] = "140";
WOMT_aParteienLogos[8][2] = "140";
WOMT_aParteienChecksum[8] = new Array();
WOMT_aParteienChecksum[8][0] =
  "038-023-002-013#6d944f512b3d8649e4f4e2cbaf323c17#+1-1+1+1+1-1+1-1+1+1-1+0+1-1-1+1-1+1+1+0+1+1+1-1-1-1+1+1-1+1-1+1+1+1+1-1+1+1";
WOMT_aParteienChecksum[8][1] =
  "038-023-002-013#6d944f512b3d8649e4f4e2cbaf323c17#+1-1+1+1+1-1+1-1+1+1-1+0+1-1-1+1-1+1+1+0+1+1+1-1-1-1+1+1-1+1-1+1+1+1+1-1+1+1";
WOMT_aParteien[8] = new Array();
WOMT_aParteien[8][0] = new Array();
WOMT_aParteien[8][0][0] = "PARTEI MENSCH UMWELT TIERSCHUTZ";
WOMT_aParteien[8][0][1] = "Tierschutzpartei";
WOMT_aParteienURL[9] = "";
WOMT_aParteiFix[9] = 1;
WOMT_aParteienLogos[9] = new Array();
WOMT_aParteienLogos[9][0] = "images/parteien_logo_39529.png";
WOMT_aParteienLogos[9][1] = "140";
WOMT_aParteienLogos[9][2] = "140";
WOMT_aParteienChecksum[9] = new Array();
WOMT_aParteienChecksum[9][0] =
  "038-024-004-010#6ef80f19e126105338cac05174ebc93d#+1-1+1+0+1-1+1-1+1+1-1+1+1-1+1+1-1+1+1+1+1+1+0-1+1-1+1+1-1+1-1+0+1+1+1+0+1+1";
WOMT_aParteienChecksum[9][1] =
  "038-024-004-010#6ef80f19e126105338cac05174ebc93d#+1-1+1+0+1-1+1-1+1+1-1+1+1-1+1+1-1+1+1+1+1+1+0-1+1-1+1+1-1+1-1+0+1+1+1+0+1+1";
WOMT_aParteien[9] = new Array();
WOMT_aParteien[9][0] = new Array();
WOMT_aParteien[9][0][0] =
  "Ökologisch-Demokratische Partei - Die Naturschutzpartei";
WOMT_aParteien[9][0][1] = "ÖDP";
WOMT_aParteienURL[10] = "";
WOMT_aParteiFix[10] = 1;
WOMT_aParteienLogos[10] = new Array();
WOMT_aParteienLogos[10][0] = "images/parteien_logo_39531.png";
WOMT_aParteienLogos[10][1] = "140";
WOMT_aParteienLogos[10][2] = "140";
WOMT_aParteienChecksum[10] = new Array();
WOMT_aParteienChecksum[10][0] =
  "038-017-012-009#23cc7ee18c23f923ffe1caae1efe7300#+1+1+1+1-1-1+0+1-1+1+0+1-1+0+1+1-1+0+1+0+1+0+0-1-1+0+0-1+0+1+0+0+1+1-1+1+1+1";
WOMT_aParteienChecksum[10][1] =
  "038-017-012-009#23cc7ee18c23f923ffe1caae1efe7300#+1+1+1+1-1-1+0+1-1+1+0+1-1+0+1+1-1+0+1+0+1+0+0-1-1+0+0-1+0+1+0+0+1+1-1+1+1+1";
WOMT_aParteien[10] = new Array();
WOMT_aParteien[10][0] = new Array();
WOMT_aParteien[10][0][0] = "Familien-Partei Deutschlands";
WOMT_aParteien[10][0][1] = "FAMILIE";
WOMT_aParteienURL[11] = "";
WOMT_aParteiFix[11] = 1;
WOMT_aParteienLogos[11] = new Array();
WOMT_aParteienLogos[11][0] = "images/parteien_logo_39533.png";
WOMT_aParteienLogos[11][1] = "140";
WOMT_aParteienLogos[11][2] = "140";
WOMT_aParteienChecksum[11] = new Array();
WOMT_aParteienChecksum[11][0] =
  "038-026-000-012#0799fbf42ba8c2e93c4a2ce1161a4b85#+1-1+1+1+1-1+1-1+1+1-1+1+1-1-1+1-1+1+1+1+1+1+1-1-1+1+1+1-1+1-1+1+1+1+1-1+1+1";
WOMT_aParteienChecksum[11][1] =
  "038-026-000-012#0799fbf42ba8c2e93c4a2ce1161a4b85#+1-1+1+1+1-1+1-1+1+1-1+1+1-1-1+1-1+1+1+1+1+1+1-1-1+1+1+1-1+1-1+1+1+1+1-1+1+1";
WOMT_aParteien[11] = new Array();
WOMT_aParteien[11][0] = new Array();
WOMT_aParteien[11][0][0] = "Volt Deutschland";
WOMT_aParteien[11][0][1] = "Volt";
WOMT_aParteienURL[12] = "";
WOMT_aParteiFix[12] = 1;
WOMT_aParteienLogos[12] = new Array();
WOMT_aParteienLogos[12][0] = "images/parteien_logo_39535.png";
WOMT_aParteienLogos[12][1] = "140";
WOMT_aParteienLogos[12][2] = "140";
WOMT_aParteienChecksum[12] = new Array();
WOMT_aParteienChecksum[12][0] =
  "038-023-000-015#80417cca93da529e9390172ffd856b55#-1-1-1+1+1-1+1-1+1+1-1-1+1-1+1+1-1+1+1+1+1+1+1-1-1-1+1+1-1+1-1+1+1+1+1-1+1+1";
WOMT_aParteienChecksum[12][1] =
  "038-023-000-015#80417cca93da529e9390172ffd856b55#-1-1-1+1+1-1+1-1+1+1-1-1+1-1+1+1-1+1+1+1+1+1+1-1-1-1+1+1-1+1-1+1+1+1+1-1+1+1";
WOMT_aParteien[12] = new Array();
WOMT_aParteien[12][0] = new Array();
WOMT_aParteien[12][0][0] = "Piratenpartei Deutschland";
WOMT_aParteien[12][0][1] = "PIRATEN";
WOMT_aParteienURL[13] = "";
WOMT_aParteiFix[13] = 0;
WOMT_aParteienLogos[13] = new Array();
WOMT_aParteienLogos[13][0] = "images/parteien_logo_39537.png";
WOMT_aParteienLogos[13][1] = "140";
WOMT_aParteienLogos[13][2] = "140";
WOMT_aParteienChecksum[13] = new Array();
WOMT_aParteienChecksum[13][0] =
  "038-019-003-016#bc3ecbdd725d64bed5f275f20896b5ba#+1-1+1+0+1-1+1-1+1+0-1-1+1-1-1+1-1+1+1-1+1-1+1-1-1-1+1+1+0+1-1+1+1+1+1-1-1+1";
WOMT_aParteienChecksum[13][1] =
  "038-019-003-016#bc3ecbdd725d64bed5f275f20896b5ba#+1-1+1+0+1-1+1-1+1+0-1-1+1-1-1+1-1+1+1-1+1-1+1-1-1-1+1+1+0+1-1+1+1+1+1-1-1+1";
WOMT_aParteien[13] = new Array();
WOMT_aParteien[13][0] = new Array();
WOMT_aParteien[13][0][0] = "MERA25 - Gemeinsam für Europäische Unabhängigkeit";
WOMT_aParteien[13][0][1] = "MERA25";
WOMT_aParteienURL[14] = "";
WOMT_aParteiFix[14] = 0;
WOMT_aParteienLogos[14] = new Array();
WOMT_aParteienLogos[14][0] = "images/parteien_logo_39539.png";
WOMT_aParteienLogos[14][1] = "140";
WOMT_aParteienLogos[14][2] = "140";
WOMT_aParteienChecksum[14] = new Array();
WOMT_aParteienChecksum[14][0] =
  "038-018-002-018#97595921de0fdeaf08ed726240383037#-1+1-1-1+1+1-1+1-1-1-1-1-1+1+1-1+1+1-1-1+0+1-1+1+1-1-1-1+1+0+1-1+1+1-1+1+1+1";
WOMT_aParteienChecksum[14][1] =
  "038-018-002-018#97595921de0fdeaf08ed726240383037#-1+1-1-1+1+1-1+1-1-1-1-1-1+1+1-1+1+1-1-1+0+1-1+1+1-1-1-1+1+0+1-1+1+1-1+1+1+1";
WOMT_aParteien[14] = new Array();
WOMT_aParteien[14][0] = new Array();
WOMT_aParteien[14][0][0] = "Die Heimat";
WOMT_aParteien[14][0][1] = "HEIMAT";
WOMT_aParteienURL[15] = "";
WOMT_aParteiFix[15] = 0;
WOMT_aParteienLogos[15] = new Array();
WOMT_aParteienLogos[15][0] = "images/parteien_logo_40112.png";
WOMT_aParteienLogos[15][1] = "140";
WOMT_aParteienLogos[15][2] = "140";
WOMT_aParteienChecksum[15] = new Array();
WOMT_aParteienChecksum[15][0] =
  "038-016-005-017#f44faa54f1daaabd967f27bc51ef19fd#-1+1+1-1+1-1-1-1-1-1+0-1-1+1+1-1+0+1-1-1+1+1-1+0-1+1+0+1+1-1+1+1+1+1-1+1-1+0";
WOMT_aParteienChecksum[15][1] =
  "038-016-005-017#f44faa54f1daaabd967f27bc51ef19fd#-1+1+1-1+1-1-1-1-1-1+0-1-1+1+1-1+0+1-1-1+1+1-1+0-1+1+0+1+1-1+1+1+1+1-1+1-1+0";
WOMT_aParteien[15] = new Array();
WOMT_aParteien[15][0] = new Array();
WOMT_aParteien[15][0][0] = "Aktion Partei für Tierschutz";
WOMT_aParteien[15][0][1] = "TIERSCHUTZ hier!";
WOMT_aParteienURL[16] = "";
WOMT_aParteiFix[16] = 0;
WOMT_aParteienLogos[16] = new Array();
WOMT_aParteienLogos[16][0] = "images/parteien_logo_39543.png";
WOMT_aParteienLogos[16][1] = "140";
WOMT_aParteienLogos[16][2] = "140";
WOMT_aParteienChecksum[16] = new Array();
WOMT_aParteienChecksum[16][0] =
  "038-000-038-000#e6c3cdc31f54e09269275917d76cd471#+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0";
WOMT_aParteienChecksum[16][1] =
  "038-000-038-000#e6c3cdc31f54e09269275917d76cd471#+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0+0";
WOMT_aParteien[16] = new Array();
WOMT_aParteien[16][0] = new Array();
WOMT_aParteien[16][0][0] = "Partei für schulmedizinische Verjüngungsforschung";
WOMT_aParteien[16][0][1] = "Partei für schulmedizinische Verjüngungsforschung";
WOMT_aParteienURL[17] = "";
WOMT_aParteiFix[17] = 0;
WOMT_aParteienLogos[17] = new Array();
WOMT_aParteienLogos[17][0] = "images/parteien_logo_39545.png";
WOMT_aParteienLogos[17][1] = "140";
WOMT_aParteienLogos[17][2] = "140";
WOMT_aParteienChecksum[17] = new Array();
WOMT_aParteienChecksum[17][0] =
  "038-022-002-014#8f8cec5656a4becbcdb6bb1bb28017f7#-1-1+1-1+1-1-1+1+1+1+0+1+1-1+1+1-1+1+1-1+1+1+0-1-1-1+1+1+1+1-1+1+1+1+1-1-1+1";
WOMT_aParteienChecksum[17][1] =
  "038-022-002-014#8f8cec5656a4becbcdb6bb1bb28017f7#-1-1+1-1+1-1-1+1+1+1+0+1+1-1+1+1-1+1+1-1+1+1+0-1-1-1+1+1+1+1-1+1+1+1+1-1-1+1";
WOMT_aParteien[17] = new Array();
WOMT_aParteien[17][0] = new Array();
WOMT_aParteien[17][0][0] = "Bündnis für Innovation & Gerechtigkeit";
WOMT_aParteien[17][0][1] = "BIG";
WOMT_aParteienURL[18] = "";
WOMT_aParteiFix[18] = 0;
WOMT_aParteienLogos[18] = new Array();
WOMT_aParteienLogos[18][0] = "images/parteien_logo_39549.png";
WOMT_aParteienLogos[18][1] = "140";
WOMT_aParteienLogos[18][2] = "140";
WOMT_aParteienChecksum[18] = new Array();
WOMT_aParteienChecksum[18][0] =
  "038-013-002-023#c9ad1a37b6281b75f4d63206174b1a7f#-1+1-1+1-1+1-1+1-1-1-1-1-1+1+1-1+1-1-1+0-1+1-1-1-1-1+0-1-1-1+1-1+1-1-1+1+1+1";
WOMT_aParteienChecksum[18][1] =
  "038-013-002-023#c9ad1a37b6281b75f4d63206174b1a7f#-1+1-1+1-1+1-1+1-1-1-1-1-1+1+1-1+1-1-1+0-1+1-1-1-1-1+0-1-1-1+1-1+1-1-1+1+1+1";
WOMT_aParteien[18] = new Array();
WOMT_aParteien[18][0] = new Array();
WOMT_aParteien[18][0][0] = "Bündnis C - Christen für Deutschland";
WOMT_aParteien[18][0][1] = "Bündnis C";
WOMT_aParteienURL[19] = "";
WOMT_aParteiFix[19] = 0;
WOMT_aParteienLogos[19] = new Array();
WOMT_aParteienLogos[19][0] = "images/parteien_logo_39551.png";
WOMT_aParteienLogos[19][1] = "140";
WOMT_aParteienLogos[19][2] = "140";
WOMT_aParteienChecksum[19] = new Array();
WOMT_aParteienChecksum[19][0] =
  "038-023-005-010#643f3bf1c750f26b8f6a19abb541e811#+1+1+1+0-1-1+1+0-1+1-1+1+1-1+1+1-1+1+1+1+1+0+1-1-1+1+1+0-1+1+1+1+1+0+1-1+1+1";
WOMT_aParteienChecksum[19][1] =
  "038-023-005-010#643f3bf1c750f26b8f6a19abb541e811#+1+1+1+0-1-1+1+0-1+1-1+1+1-1+1+1-1+1+1+1+1+0+1-1-1+1+1+0-1+1+1+1+1+0+1-1+1+1";
WOMT_aParteien[19] = new Array();
WOMT_aParteien[19][0] = new Array();
WOMT_aParteien[19][0][0] = "Partei der Humanisten";
WOMT_aParteien[19][0][1] = "PdH";
WOMT_aParteienURL[20] = "";
WOMT_aParteiFix[20] = 0;
WOMT_aParteienLogos[20] = new Array();
WOMT_aParteienLogos[20][0] = "images/parteien_logo_39561.png";
WOMT_aParteienLogos[20][1] = "140";
WOMT_aParteienLogos[20][2] = "140";
WOMT_aParteienChecksum[20] = new Array();
WOMT_aParteienChecksum[20][0] =
  "038-016-009-013#50c6d948c233fb81668ef1d9a9e7d6b0#-1+1+1-1+1-1-1-1-1+0+1-1+0+1+1+1+1+1+1-1+1-1+0-1+0+0+0-1+1+1+0+0+1+1-1+1-1+0";
WOMT_aParteienChecksum[20][1] =
  "038-016-009-013#50c6d948c233fb81668ef1d9a9e7d6b0#-1+1+1-1+1-1-1-1-1+0+1-1+0+1+1+1+1+1+1-1+1-1+0-1+0+0+0-1+1+1+0+0+1+1-1+1-1+0";
WOMT_aParteien[20] = new Array();
WOMT_aParteien[20][0] = new Array();
WOMT_aParteien[20][0][0] =
  "Menschliche Welt - für das Wohl und Glücklichsein aller";
WOMT_aParteien[20][0][1] = "MENSCHLICHE WELT";
WOMT_aParteienURL[21] = "";
WOMT_aParteiFix[21] = 0;
WOMT_aParteienLogos[21] = new Array();
WOMT_aParteienLogos[21][0] = "images/parteien_logo_39563.png";
WOMT_aParteienLogos[21][1] = "140";
WOMT_aParteienLogos[21][2] = "140";
WOMT_aParteienChecksum[21] = new Array();
WOMT_aParteienChecksum[21][0] =
  "038-015-002-021#7f666b191c91d7465a3d163f2802908c#-1-1+1-1+1+0+1-1+1-1-1-1+1-1+1-1-1+1-1-1+1-1+1-1-1-1+1+1+1+1-1+1-1-1+1-1-1+0";
WOMT_aParteienChecksum[21][1] =
  "038-015-002-021#7f666b191c91d7465a3d163f2802908c#-1-1+1-1+1+0+1-1+1-1-1-1+1-1+1-1-1+1-1-1+1-1+1-1-1-1+1+1+1+1-1+1-1-1+1-1-1+0";
WOMT_aParteien[21] = new Array();
WOMT_aParteien[21][0] = new Array();
WOMT_aParteien[21][0][0] = "Deutsche Kommunistische Partei";
WOMT_aParteien[21][0][1] = "DKP";
WOMT_aParteienURL[22] = "";
WOMT_aParteiFix[22] = 0;
WOMT_aParteienLogos[22] = new Array();
WOMT_aParteienLogos[22][0] = "images/parteien_logo_39565.png";
WOMT_aParteienLogos[22][1] = "140";
WOMT_aParteienLogos[22][2] = "140";
WOMT_aParteienChecksum[22] = new Array();
WOMT_aParteienChecksum[22][0] =
  "038-015-006-017#37da19510f4584e0b1f097537d7adb8f#-1-1+1-1+1+0+1-1+1-1-1-1+1-1+0+1-1+1+0-1+1-1+1-1+1-1+1+0+1+1-1+1-1+0+1-1-1+0";
WOMT_aParteienChecksum[22][1] =
  "038-015-006-017#37da19510f4584e0b1f097537d7adb8f#-1-1+1-1+1+0+1-1+1-1-1-1+1-1+0+1-1+1+0-1+1-1+1-1+1-1+1+0+1+1-1+1-1+0+1-1-1+0";
WOMT_aParteien[22] = new Array();
WOMT_aParteien[22][0] = new Array();
WOMT_aParteien[22][0][0] = "Marxistisch-Leninistische Partei Deutschlands";
WOMT_aParteien[22][0][1] = "MLPD";
WOMT_aParteienURL[23] = "";
WOMT_aParteiFix[23] = 0;
WOMT_aParteienLogos[23] = new Array();
WOMT_aParteienLogos[23][0] = "images/parteien_logo_39568.png";
WOMT_aParteienLogos[23][1] = "140";
WOMT_aParteienLogos[23][2] = "140";
WOMT_aParteienChecksum[23] = new Array();
WOMT_aParteienChecksum[23][0] =
  "038-019-000-019#ac2321f41b9edcb829d4c4c9a118e39f#-1+1+1-1+1-1+1-1-1-1-1-1+1-1+1+1-1+1-1-1+1-1+1-1+1+1+1+1+1+1-1-1-1+1+1-1-1+1";
WOMT_aParteienChecksum[23][1] =
  "038-019-000-019#ac2321f41b9edcb829d4c4c9a118e39f#-1+1+1-1+1-1+1-1-1-1-1-1+1-1+1+1-1+1-1-1+1-1+1-1+1+1+1+1+1+1-1-1-1+1+1-1-1+1";
WOMT_aParteien[23] = new Array();
WOMT_aParteien[23][0] = new Array();
WOMT_aParteien[23][0][0] =
  "Sozialistische Gleichheitspartei, Vierte Internationale";
WOMT_aParteien[23][0][1] = "SGP";
WOMT_aParteienURL[24] = "";
WOMT_aParteiFix[24] = 0;
WOMT_aParteienLogos[24] = new Array();
WOMT_aParteienLogos[24][0] = "images/parteien_logo_39570.png";
WOMT_aParteienLogos[24][1] = "140";
WOMT_aParteienLogos[24][2] = "140";
WOMT_aParteienChecksum[24] = new Array();
WOMT_aParteienChecksum[24][0] =
  "038-017-000-021#f4c049fc6c7560485e8c4a33f400df68#-1+1-1-1+1+1-1-1-1-1-1-1-1+1+1-1-1-1+1-1+1+1-1+1+1-1-1-1+1+1+1-1+1+1-1+1-1+1";
WOMT_aParteienChecksum[24][1] =
  "038-017-000-021#f4c049fc6c7560485e8c4a33f400df68#-1+1-1-1+1+1-1-1-1-1-1-1-1+1+1-1-1-1+1-1+1+1-1+1+1-1-1-1+1+1+1-1+1+1-1+1-1+1";
WOMT_aParteien[24] = new Array();
WOMT_aParteien[24][0] = new Array();
WOMT_aParteien[24][0][0] = "Aktion Bürger für Gerechtigkeit";
WOMT_aParteien[24][0][1] = "ABG";
WOMT_aParteienURL[25] = "";
WOMT_aParteiFix[25] = 0;
WOMT_aParteienLogos[25] = new Array();
WOMT_aParteienLogos[25][0] = "images/parteien_logo_39574.png";
WOMT_aParteienLogos[25][1] = "140";
WOMT_aParteienLogos[25][2] = "140";
WOMT_aParteienChecksum[25] = new Array();
WOMT_aParteienChecksum[25][0] =
  "038-022-000-016#e7714fdfce7c70c02296b69afa32e27f#-1+1-1-1+1+1-1+1-1-1-1-1-1+1+1-1+1+1+1-1+1+1+1-1+1-1+1+1+1+1+1+1+1+1-1+1-1-1";
WOMT_aParteienChecksum[25][1] =
  "038-022-000-016#e7714fdfce7c70c02296b69afa32e27f#-1+1-1-1+1+1-1+1-1-1-1-1-1+1+1-1+1+1+1-1+1+1+1-1+1-1+1+1+1+1+1+1+1+1-1+1-1-1";
WOMT_aParteien[25] = new Array();
WOMT_aParteien[25][0] = new Array();
WOMT_aParteien[25][0][0] = "Basisdemokratische Partei Deutschland";
WOMT_aParteien[25][0][1] = "dieBasis";
WOMT_aParteienURL[26] = "";
WOMT_aParteiFix[26] = 0;
WOMT_aParteienLogos[26] = new Array();
WOMT_aParteienLogos[26][0] = "images/parteien_logo_39578.png";
WOMT_aParteienLogos[26][1] = "140";
WOMT_aParteienLogos[26][2] = "140";
WOMT_aParteienChecksum[26] = new Array();
WOMT_aParteienChecksum[26][0] =
  "038-019-005-014#320445e64654446bdb5b6ee8fe679be0#-1+1-1-1-1-1-1+1-1-1+1+1-1+0+1-1+1+1+1+0+1+1-1-1+1+0-1+0+0+1+1+1+1+1-1+1+1+1";
WOMT_aParteienChecksum[26][1] =
  "038-019-005-014#320445e64654446bdb5b6ee8fe679be0#-1+1-1-1-1-1-1+1-1-1+1+1-1+0+1-1+1+1+1+0+1+1-1-1+1+0-1+0+0+1+1+1+1+1-1+1+1+1";
WOMT_aParteien[26] = new Array();
WOMT_aParteien[26][0] = new Array();
WOMT_aParteien[26][0][0] = "BÜNDNIS DEUTSCHLAND";
WOMT_aParteien[26][0][1] = "BÜNDNIS DEUTSCHLAND";
WOMT_aParteienURL[27] = "";
WOMT_aParteiFix[27] = 0;
WOMT_aParteienLogos[27] = new Array();
WOMT_aParteienLogos[27][0] = "images/parteien_logo_39580.png";
WOMT_aParteienLogos[27][1] = "140";
WOMT_aParteienLogos[27][2] = "140";
WOMT_aParteienChecksum[27] = new Array();
WOMT_aParteienChecksum[27][0] =
  "038-015-008-015#219184fa1f91fc829af07a4f96e26af8#-1+1-1-1-1-1-1+1-1-1-1+0+1-1+1+1+1+0+1-1+0+0+1-1+1-1+1+0+1+1+0+0+1+0-1+1-1+1";
WOMT_aParteienChecksum[27][1] =
  "038-015-008-015#219184fa1f91fc829af07a4f96e26af8#-1+1-1-1-1-1-1+1-1-1-1+0+1-1+1+1+1+0+1-1+0+0+1-1+1-1+1+0+1+1+0+0+1+0-1+1-1+1";
WOMT_aParteien[27] = new Array();
WOMT_aParteien[27][0] = new Array();
WOMT_aParteien[27][0][0] =
  "Bündnis Sahra Wagenknecht - Vernunft und Gerechtigkeit";
WOMT_aParteien[27][0][1] = "BSW";
WOMT_aParteienURL[28] = "";
WOMT_aParteiFix[28] = 0;
WOMT_aParteienLogos[28] = new Array();
WOMT_aParteienLogos[28][0] = "images/parteien_logo_39584.png";
WOMT_aParteienLogos[28][1] = "140";
WOMT_aParteienLogos[28][2] = "140";
WOMT_aParteienChecksum[28] = new Array();
WOMT_aParteienChecksum[28][0] =
  "038-019-003-016#408cdf4a3406b5e5259fe80b71f8db44#-1+1+1-1+1-1-1+1-1+1-1+1+0-1+1-1-1+0+1-1+1+1+1-1-1+0+1-1+1+1+1+1+1-1-1-1+1+1";
WOMT_aParteienChecksum[28][1] =
  "038-019-003-016#408cdf4a3406b5e5259fe80b71f8db44#-1+1+1-1+1-1-1+1-1+1-1+1+0-1+1-1-1+0+1-1+1+1+1-1-1+0+1-1+1+1+1+1+1-1-1-1+1+1";
WOMT_aParteien[28] = new Array();
WOMT_aParteien[28][0] = new Array();
WOMT_aParteien[28][0][0] = "Demokratische Allianz für Vielfalt und Aufbruch";
WOMT_aParteien[28][0][1] = "DAVA";
WOMT_aParteienURL[29] = "";
WOMT_aParteiFix[29] = 0;
WOMT_aParteienLogos[29] = new Array();
WOMT_aParteienLogos[29][0] = "images/parteien_logo_39604.png";
WOMT_aParteienLogos[29][1] = "140";
WOMT_aParteienLogos[29][2] = "140";
WOMT_aParteienChecksum[29] = new Array();
WOMT_aParteienChecksum[29][0] =
  "038-020-003-015#58836ce9e15a7b813c7618b286e2718d#+1-1+1+0+1-1+1-1+1+1-1+1+1-1+1+1-1+1+1+0+1-1+1-1-1-1+1+0-1+1-1+1+1-1+1-1-1+1";
WOMT_aParteienChecksum[29][1] =
  "038-020-003-015#58836ce9e15a7b813c7618b286e2718d#+1-1+1+0+1-1+1-1+1+1-1+1+1-1+1+1-1+1+1+0+1-1+1-1-1-1+1+0-1+1-1+1+1-1+1-1-1+1";
WOMT_aParteien[29] = new Array();
WOMT_aParteien[29][0] = new Array();
WOMT_aParteien[29][0][0] = "Klimaliste Deutschland";
WOMT_aParteien[29][0][1] = "KLIMALISTE";
WOMT_aParteienURL[30] = "";
WOMT_aParteiFix[30] = 0;
WOMT_aParteienLogos[30] = new Array();
WOMT_aParteienLogos[30][0] = "images/parteien_logo_40207.png";
WOMT_aParteienLogos[30][1] = "140";
WOMT_aParteienLogos[30][2] = "140";
WOMT_aParteienChecksum[30] = new Array();
WOMT_aParteienChecksum[30][0] =
  "038-016-011-011#99a6e52e663224cdefef65d39c99a8a6#+0-1+1+0+1-1+1+0+1+1-1-1+1-1-1+1-1+1+0+0+1+0+1-1+0+0+1+0-1+1-1+1+1+0+1-1+0+1";
WOMT_aParteienChecksum[30][1] =
  "038-016-011-011#99a6e52e663224cdefef65d39c99a8a6#+0-1+1+0+1-1+1+0+1+1-1-1+1-1-1+1-1+1+0+0+1+0+1-1+0+0+1+0-1+1-1+1+1+0+1-1+0+1";
WOMT_aParteien[30] = new Array();
WOMT_aParteien[30][0] = new Array();
WOMT_aParteien[30][0][0] =
  "Parlament aufmischen – Stimme der Letzten Generation";
WOMT_aParteien[30][0][1] = "LETZTE GENERATION";
WOMT_aParteienURL[31] = "";
WOMT_aParteiFix[31] = 0;
WOMT_aParteienLogos[31] = new Array();
WOMT_aParteienLogos[31][0] = "images/parteien_logo_39608.png";
WOMT_aParteienLogos[31][1] = "140";
WOMT_aParteienLogos[31][2] = "140";
WOMT_aParteienChecksum[31] = new Array();
WOMT_aParteienChecksum[31][0] =
  "038-014-004-020#e2eb1fb3334677d5053bcece42c707d1#-1+1-1-1-1+1+0+1-1-1+1-1-1+1+1-1+1-1+0-1-1-1+0-1+1+1-1-1+1-1+1+1-1+1-1+0-1+1";
WOMT_aParteienChecksum[31][1] =
  "038-014-004-020#e2eb1fb3334677d5053bcece42c707d1#-1+1-1-1-1+1+0+1-1-1+1-1-1+1+1-1+1-1+0-1-1-1+0-1+1+1-1-1+1-1+1+1-1+1-1+0-1+1";
WOMT_aParteien[31] = new Array();
WOMT_aParteien[31][0] = new Array();
WOMT_aParteien[31][0][0] = "Partei der Vernunft";
WOMT_aParteien[31][0][1] = "PDV";
WOMT_aParteienURL[32] = "";
WOMT_aParteiFix[32] = 0;
WOMT_aParteienLogos[32] = new Array();
WOMT_aParteienLogos[32][0] = "images/parteien_logo_39611.png";
WOMT_aParteienLogos[32][1] = "140";
WOMT_aParteienLogos[32][2] = "140";
WOMT_aParteienChecksum[32] = new Array();
WOMT_aParteienChecksum[32][0] =
  "038-025-003-010#02390825349323b5bed40c830f53120a#-1+1+1+1+1-1+1+0-1+1-1+1+0-1+1+1-1+1+1+1+1+1+1-1+1-1+1+0-1+1-1+1+1+1+1+1+1+1";
WOMT_aParteienChecksum[32][1] =
  "038-025-003-010#02390825349323b5bed40c830f53120a#-1+1+1+1+1-1+1+0-1+1-1+1+0-1+1+1-1+1+1+1+1+1+1-1+1-1+1+0-1+1-1+1+1+1+1+1+1+1";
WOMT_aParteien[32] = new Array();
WOMT_aParteien[32][0] = new Array();
WOMT_aParteien[32][0][0] = "Partei des Fortschritts";
WOMT_aParteien[32][0][1] = "PdF";
WOMT_aParteienURL[33] = "";
WOMT_aParteiFix[33] = 0;
WOMT_aParteienLogos[33] = new Array();
WOMT_aParteienLogos[33][0] = "images/parteien_logo_39617.png";
WOMT_aParteienLogos[33][1] = "140";
WOMT_aParteienLogos[33][2] = "140";
WOMT_aParteienChecksum[33] = new Array();
WOMT_aParteienChecksum[33][0] =
  "038-021-001-016#121c482e2abc48bd338ed3288756734e#-1-1+1+0+1-1+1-1+1+1-1+1+1-1+1+1-1+1+1-1+1+1+1-1-1-1+1-1-1+1-1+1+1-1+1-1+1+1";
WOMT_aParteienChecksum[33][1] =
  "038-021-001-016#121c482e2abc48bd338ed3288756734e#-1-1+1+0+1-1+1-1+1+1-1+1+1-1+1+1-1+1+1-1+1+1+1-1-1-1+1-1-1+1-1+1+1-1+1-1+1+1";
WOMT_aParteien[33] = new Array();
WOMT_aParteien[33][0] = new Array();
WOMT_aParteien[33][0][0] =
  "V-Partei³ - Partei für Veränderung, Vegetarier und Veganer";
WOMT_aParteien[33][0][1] = "V-Partei³";
WOMT_sCheckSumImport = "d06ca0f2e87a0420d9c07436af8e6251";
WOMT_sCheckSumExport = "d06ca0f2e87a0420d9c07436af8e6251";
WOMT_sGenerationTime = "08.05.2024 15:04:29";
WOMT_sCheckSumDivText = "a746a9deb48b253748ecbc4163d59f19";
WOMT_sCheckThesenText = "d88f975b08d1ab6a271286e1b676863c";
WOMT_sCheckPN = "9352401f2e4d0abd249ff44a05c18083";
WOMT_aThemen[0] = new Array();
WOMT_aThemen[0][0] = "Dummy Thema";
