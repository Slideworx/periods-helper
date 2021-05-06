/**
 * @const {Object} types
 * @access public
 */
export const types = {
  Y: 'Y', /* Year */

  H: 'H', 
  HRY: 'HRY',
  HYTD: 'HYTD',

  Q: 'Q',
  QRY: 'QRY',
  QYTD: 'QYTD',

  BM: 'BM', /* Two-month period */
  BMRY: 'BMRY', /* 6 bi-months ending at the given BM */
  BMYTD: 'BMYTD', /* Cumulative bi-months from beginning of the year */

  M: 'M', /* Month */
  MRY: 'MRY', /* Rolling year (from months) */
  MYTD: 'MYTD', /* Year-to-date (from months) */

  W: 'W', /* Week */
  WYTD: 'WYTD' /* Year-to-date (from weeks) */
};